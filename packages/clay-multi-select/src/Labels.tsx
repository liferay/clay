/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import Icon from '@clayui/icon';
import Label from '@clayui/label';
import {InternalDispatch, Keys, sub, useId} from '@clayui/shared';
import React, {useCallback, useRef, useState} from 'react';

import type {Item, LastChangeLiveRegion, Locator} from './types';

interface IProps extends React.ComponentProps<typeof ClayInput> {
	allowsCustomLabel?: boolean;
	closeButtonAriaLabel: string;
	inputName?: string;
	labels: Array<Item>;
	locator: Locator;
	onLabelsChange: InternalDispatch<Array<Item>>;
	onFocusChange: (value: boolean) => void;
	spritemap?: string;
	ariaDescriptionId: string;
	lastChangesRef: React.MutableRefObject<LastChangeLiveRegion | null>;
	suggestionList: Array<Item>;
}

const DELIMITER_KEYS = ['Enter', ','];
const KeysNavigation = [Keys.Left, Keys.Right, Keys.Up, Keys.Down];
const KeysSides = [Keys.Left, Keys.Right];

let counterUid = 0;

export const Labels = React.forwardRef<HTMLInputElement, IProps>(
	function Labels(
		{
			allowsCustomLabel,
			'aria-activedescendant': activeDescendant,
			ariaDescriptionId,
			closeButtonAriaLabel,
			disabled,
			inputName,
			insetAfter: _,
			labels,
			lastChangesRef,
			locator,
			onChange,
			onFocusChange,
			onLabelsChange,
			placeholder,
			spritemap,
			suggestionList,
			value,
			...otherProps
		}: IProps,
		ref
	) {
		const inputRef = useRef<HTMLInputElement | null>(null);
		const labelsRef = useRef<HTMLDivElement | null>(null);
		const lastItemRef = useRef<HTMLSpanElement | null>(null);

		const [isLabelFocused, setIsLabelFocused] = useState<string | null>(
			null
		);
		const [lastFocusedItem, setLastFocusedItem] = useState<string | null>(
			null
		);

		const inputElementRef =
			(ref as React.RefObject<HTMLInputElement>) || inputRef;

		const labelId = useId();

		const getSourceItemByLabel = (label: string) => {
			return suggestionList.find((item) => item[locator.label] === label);
		};

		const getNewItem = (value: string): Item => {
			counterUid++;

			return (
				getSourceItemByLabel(value) || {
					[locator.label]: value,
					[locator.value]: value,
					key: `key_${counterUid}`,
				}
			);
		};

		const onRemove = useCallback(
			(label: string, index: number) => {
				if (labelsRef.current) {
					const focusableElements = Array.from<HTMLElement>(
						labelsRef.current.querySelectorAll('button')
					);

					const activeElement =
						document.activeElement!.tagName === 'SPAN'
							? document.activeElement!.querySelector('button')
							: document.activeElement;

					const position = focusableElements.indexOf(
						activeElement as HTMLElement
					);

					const closeElement =
						focusableElements[
							focusableElements.length - 1 > position
								? position + 1
								: position - 1
						];

					if (closeElement) {
						closeElement.focus();
						setLastFocusedItem(closeElement.getAttribute('id'));
					} else {
						inputElementRef.current?.focus();
						setLastFocusedItem(null);
					}
				}

				lastChangesRef.current = {
					action: 'removed',
					label,
				};

				onLabelsChange(
					labels.filter((_, itemIndex) => itemIndex !== index)
				);
			},
			[labels]
		);

		return (
			<ClayInput.GroupItem>
				<ClayInput.Group>
					<ClayInput.GroupItem
						aria-labelledby={otherProps['aria-labelledby']}
						className="d-contents"
						onFocus={(event) =>
							setLastFocusedItem(event.target.getAttribute('id')!)
						}
						onKeyDown={(event) => {
							if (KeysNavigation.includes(event.key)) {
								// Query labels and buttons to exclude the label that are
								// focusable the navigation order depends on which orientation
								// the navigation is happen.
								// - Left and Right. Query all elements.
								// - Up and Down. Query for elements of the same type as the
								//   last focused element.
								const focusableElements =
									Array.from<HTMLElement>(
										event.currentTarget.querySelectorAll(
											KeysSides.includes(event.key)
												? '[role=gridcell][tabindex], button'
												: lastFocusedItem?.includes(
														'span'
												  )
												? '[role=gridcell][tabindex]'
												: 'button'
										)
									);

								const position = focusableElements.indexOf(
									document.activeElement as HTMLElement
								);

								const key = KeysSides.includes(event.key)
									? Keys.Left
									: Keys.Up;

								const label =
									focusableElements[
										event.key === key
											? position - 1
											: position + 1
									];

								if (label) {
									setLastFocusedItem(
										label.getAttribute('id')!
									);
									label.focus();
								}
							}

							if (
								event.key === Keys.Home ||
								event.key === Keys.End
							) {
								const isLabel =
									lastFocusedItem!.includes('span');

								if (
									(isLabel && event.key === Keys.Home) ||
									(!isLabel && event.key === Keys.End)
								) {
									return;
								}

								const label =
									event.currentTarget.querySelector<HTMLElement>(
										`[id=${lastFocusedItem?.replace(
											isLabel ? 'span' : 'close',
											event.key === Keys.Home
												? 'span'
												: 'close'
										)}]`
									);

								if (label) {
									setLastFocusedItem(
										label.getAttribute('id')!
									);
									label.focus();
								}
							}
						}}
						prepend
						ref={(ref) => {
							labelsRef.current = ref;
						}}
						role="grid"
						shrink
					>
						{labels.map((item, i) => {
							const uid =
								item[locator.id!] ?? item[locator.value];
							const id = `${labelId}-label-${uid}-span`;
							const closeId = `${labelId}-label-${uid}-close`;

							return (
								<React.Fragment key={id}>
									<Label
										className={
											isLabelFocused === id
												? 'focus'
												: undefined
										}
										onKeyDown={({key}) => {
											if (key === Keys.Backspace) {
												onRemove(
													item[locator.label],
													i
												);
											}
										}}
										role="row"
										spritemap={spritemap}
										tabIndex={-1}
										withClose={false}
									>
										<Label.ItemExpand
											aria-describedby={ariaDescriptionId}
											id={id}
											onBlur={() =>
												setIsLabelFocused(null)
											}
											onFocus={() =>
												setIsLabelFocused(id)
											}
											role="gridcell"
											style={{outline: 'none'}}
											tabIndex={
												(lastFocusedItem === null &&
													i === 0) ||
												lastFocusedItem === id
													? 0
													: -1
											}
										>
											{item[locator.label]}
										</Label.ItemExpand>

										<Label.ItemAfter role="gridcell">
											<button
												aria-label={sub(
													closeButtonAriaLabel,
													[item[locator.label]]
												)}
												className="close"
												disabled={disabled}
												id={closeId}
												onClick={() =>
													onRemove(
														item[locator.label],
														i
													)
												}
												ref={(ref) => {
													if (
														i ===
														labels.length - 1
													) {
														lastItemRef.current =
															ref;
													}
												}}
												tabIndex={
													lastFocusedItem === closeId
														? 0
														: -1
												}
												type="button"
											>
												<Icon
													spritemap={spritemap}
													symbol="times-small"
												/>
											</button>
										</Label.ItemAfter>
									</Label>

									{inputName && (
										<input
											name={inputName}
											type="hidden"
											value={item[locator.value]}
										/>
									)}
								</React.Fragment>
							);
						})}
					</ClayInput.GroupItem>

					<ClayInput.GroupItem prepend>
						<input
							{...otherProps}
							aria-activedescendant={activeDescendant}
							className="form-control-inset"
							disabled={disabled}
							onBlur={(event) => {
								if (otherProps.onBlur) {
									otherProps.onBlur(event);
								}

								onFocusChange(false);
							}}
							onChange={(event) => {
								const {value} = event.target;

								event.target.value = allowsCustomLabel
									? value.replace(',', '')
									: value;

								onChange!(event);
							}}
							onFocus={(event) => {
								if (otherProps.onFocus) {
									otherProps.onFocus(event);
								}

								onFocusChange(true);
							}}
							onKeyDown={(event) => {
								if (otherProps.onKeyDown) {
									otherProps.onKeyDown(event);
								}

								const {key} = event;

								if (key === Keys.Backspace && !value) {
									event.preventDefault();
								}

								if (key === Keys.Enter && activeDescendant) {
									return;
								}

								if (
									allowsCustomLabel &&
									(value as string).trim() &&
									DELIMITER_KEYS.includes(key)
								) {
									event.preventDefault();

									lastChangesRef.current = {
										action: 'added',
										label: value as string,
									};

									onLabelsChange([
										...labels,
										getNewItem(value as string),
									]);

									// @ts-ignore
									onChange!({target: {value: ''}});
								} else if (
									!value &&
									key === Keys.Backspace &&
									inputElementRef.current &&
									lastItemRef.current
								) {
									inputElementRef.current.blur();
									lastItemRef.current.focus();
								}
							}}
							onPaste={(event) => {
								if (otherProps.onPaste) {
									otherProps.onPaste(event);
								}

								if (event.defaultPrevented) {
									return;
								}

								const pastedText =
									event.clipboardData.getData('Text');

								const pastedItems = pastedText
									.split(',')
									.map((itemLabel) =>
										getNewItem(itemLabel.trim())
									)
									.filter(Boolean);

								if (
									allowsCustomLabel &&
									pastedItems.length > 0
								) {
									event.preventDefault();

									onLabelsChange([...labels, ...pastedItems]);
								}
							}}
							placeholder={
								labels.length ? undefined : placeholder
							}
							ref={inputElementRef}
							type="text"
							value={value}
						/>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayInput.GroupItem>
		);
	}
);
