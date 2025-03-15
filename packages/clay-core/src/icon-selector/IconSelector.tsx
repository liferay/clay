/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button, {ClayButtonWithIcon} from '@clayui/button';
import {useResource} from '@clayui/data-provider';
import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import {
	FOCUSABLE_ELEMENTS,
	InternalDispatch,
	Keys,
	Overlay,
	sub,
	useControlledState,
	useId,
	useInteractionFocus,
	useNavigation,
	useOverlayPosition,
} from '@clayui/shared';
import React, {useCallback, useMemo, useRef, useState} from 'react';

import {FocusMenu} from '../focus-trap';

enum alignPosition {
	bottomLeft = 5,
	topLeft = 7,
}

export type Props = {
	/**
	 * Flag to indicate if menu is showing or not (controlled).
	 */
	active?: boolean;

	/**
	 * The initial value of the active state (uncontrolled).
	 */
	defaultActive?: boolean;

	/**
	 * Direction the menu will render relative to the trigger.
	 */
	direction?: 'bottom' | 'top';

	/**
	 * Messages for icon selector.
	 */
	messages?: {
		changeIconButton: string;
		clearInput?: string;
		iconSelected: string;
		notFound: string;
		placeholder?: string;
		removeIcon: string;
		selectIcon: string;
		selectIconButton?: string;
	};

	/**
	 * Callback for when the active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<boolean>;

	/**
	 * URL of the SVG icons.
	 */
	spritemap: string;
};

const defaultMessages = {
	changeIconButton: 'Change Icon',
	clearInput: 'Clear search input',
	iconSelected: 'Icon selected',
	notFound: 'No items were found.',
	placeholder: 'Search',
	removeIcon: 'Remove icon selection',
	selectIcon: `Select {0} icon`,
	selectIconButton: 'Select an Icon',
};

const fetchIcons = async (spritemap: string): Promise<Response> => {
	const iconNames: Array<string> = [];

	const res = await fetch(spritemap);

	const text = await res.text();

	const parser = new DOMParser();

	const document = parser.parseFromString(text, 'image/svg+xml');

	const symbols = document.querySelectorAll('symbol');

	symbols.forEach((symbol) => {
		if (symbol.getAttribute('id')) {
			iconNames.push(symbol.getAttribute('id') as string);
		}
	});

	return new Response(JSON.stringify(iconNames), {
		headers: {'Content-Type': 'application/json'},
	});
};

export function IconSelector({
	active: externalActive,
	defaultActive,
	direction = 'bottom',
	messages = defaultMessages,
	onActiveChange,
	spritemap,
}: Props) {
	const [selectedIcon, setSelectedIcon] = useState<string>('');
	const [isInputFocused, setIsInputFocused] = useState(false);

	const menuRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement | null>(null);

	const {isFocusVisible} = useInteractionFocus();

	const inputId = useId();
	const overlayId = useId();

	const [searchTerm, setSearchTerm] = useState<string>('');

	const [active, setActive] = useControlledState({
		defaultName: 'defaultActive',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: externalActive,
	});

	const url = spritemap.includes('http')
		? spritemap
		: new URL(spritemap, window.location.origin).toString();

	const {resource} = useResource({
		fetch: fetchIcons,
		link: url,
	});

	const filteredIcons = useMemo(() => {
		if (!resource) {
			return [];
		}

		return resource.filter((icon: string) =>
			icon.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [resource, searchTerm]);

	const onClose = useCallback(() => {
		setActive(false);

		setSearchTerm('');
	}, []);

	useOverlayPosition(
		{
			alignmentByViewport: true,
			alignmentPosition:
				direction === 'bottom'
					? alignPosition.bottomLeft
					: alignPosition.topLeft,
			autoBestAlign: true,
			isOpen: active,
			ref: menuRef,
			triggerRef,
		},
		[active]
	);

	messages = {
		...defaultMessages,
		...(messages ?? {}),
	};

	const {navigationProps} = useNavigation({
		containerRef: menuRef,
		loop: true,
		orientation: 'vertical',
		typeahead: true,
		visible: active,
	});

	const content = (
		<>
			<Button
				aria-controls={active ? overlayId : undefined}
				aria-expanded={active}
				aria-label={messages?.selectIconButton}
				displayType="secondary"
				monospaced={!!selectedIcon}
				onClick={() => setActive(!active)}
				onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
					switch (event.key) {
						case Keys.Spacebar:
							event.preventDefault();
							setActive(!active);
							break;
						case Keys.Up:
						case Keys.Down: {
							event.preventDefault();
							event.stopPropagation();

							if (!active) {
								setActive(true);
							}

							navigationProps.onKeyDown(event);
							break;
						}
						default:
							break;
					}
				}}
				ref={triggerRef}
				role="button"
				title={
					selectedIcon
						? messages?.changeIconButton
						: messages?.selectIconButton
				}
			>
				{selectedIcon ? (
					<ClayIcon symbol="change" />
				) : (
					<>{messages?.selectIconButton}</>
				)}
			</Button>

			{active && (
				<Overlay
					isCloseOnInteractOutside
					isKeyboardDismiss
					isOpen
					menuRef={menuRef}
					onClose={onClose}
					portalRef={menuRef}
					suppress={[triggerRef, menuRef]}
					triggerRef={triggerRef}
				>
					<div
						className="dropdown-menu dropdown-menu-width-sm show"
						id={overlayId}
						ref={menuRef}
						role="presentation"
					>
						<FocusMenu menuRef={menuRef}>
							<div className="dropdown-section">
								<ClayInput.Group small>
									<ClayInput.GroupItem
										className={
											isInputFocused ? 'focus' : undefined
										}
									>
										<ClayInput.GroupInsetItem
											before
											tag="span"
										>
											{!searchTerm && !isInputFocused && (
												<div className="input-group-inset-icon">
													<ClayIcon symbol="search" />
												</div>
											)}
										</ClayInput.GroupInsetItem>

										<ClayInput
											aria-describedby={inputId}
											insetAfter
											insetBefore
											onBlur={() =>
												setIsInputFocused(false)
											}
											onChange={(event) =>
												setSearchTerm(
													event.target.value
												)
											}
											onFocus={() =>
												setIsInputFocused(true)
											}
											placeholder={
												defaultMessages.placeholder
											}
											type="text"
											value={searchTerm}
										/>

										<ClayInput.GroupInsetItem
											after
											tag="span"
										>
											<ClayButtonWithIcon
												aria-label={
													defaultMessages.clearInput
												}
												displayType="unstyled"
												monospaced
												onClick={() =>
													setSearchTerm('')
												}
												symbol="times"
												title={
													defaultMessages.clearInput
												}
											/>
										</ClayInput.GroupInsetItem>
									</ClayInput.GroupItem>
								</ClayInput.Group>
							</div>

							{filteredIcons.length > 0 && (
								<ul
									className="dropdown-section-grid list-unstyled"
									onKeyDown={(event) => {
										switch (event.key) {
											case Keys.Tab: {
												event.preventDefault();

												setActive(false);

												const list =
													Array.from<HTMLElement>(
														document.querySelectorAll(
															FOCUSABLE_ELEMENTS.join(
																','
															)
														)
													);

												const position = list.indexOf(
													triggerRef.current!
												);

												const nextElement =
													list[position + 1];

												if (nextElement) {
													nextElement.focus();
												}

												navigationProps.onKeyDown(
													event
												);
												break;
											}
											default:
												navigationProps.onKeyDown(
													event
												);
												break;
										}
									}}
								>
									{filteredIcons.map((item: string) => (
										<li key={item}>
											<ClayButtonWithIcon
												aria-label={
													messages
														? sub(
																messages?.selectIcon,
																[item]
														  )
														: ''
												}
												borderless
												displayType="secondary"
												onClick={() => {
													setSelectedIcon(item);
													onClose();

													if (isFocusVisible()) {
														if (selectedIcon) {
															triggerRef.current!.focus();
														} else {
															setTimeout(
																() =>
																	triggerRef.current!.focus(),
																10
															);
														}
													}
												}}
												spritemap={spritemap}
												symbol={item}
												title={item}
											/>
										</li>
									))}
								</ul>
							)}

							<div
								aria-live="assertive"
								className="dropdown-caption"
								id={inputId}
							>
								{filteredIcons.length === 0 &&
									messages?.notFound}
							</div>
						</FocusMenu>
					</div>
				</Overlay>
			)}
		</>
	);

	return (
		<>
			{selectedIcon ? (
				<div className="selected-icon-container">
					<ClayInput.Group>
						<ClayInput.GroupItem prepend shrink>
							<ClayInput.GroupText className="bg-transparent">
								<ClayIcon symbol={selectedIcon} />
							</ClayInput.GroupText>
						</ClayInput.GroupItem>
						<ClayInput.GroupItem append>
							<ClayInput readOnly value={selectedIcon} />
						</ClayInput.GroupItem>

						<div className="sr-only" role="status">
							{`${selectedIcon} ${defaultMessages.iconSelected}`}
						</div>

						<ClayInput.GroupItem shrink>
							{content}
						</ClayInput.GroupItem>
						<ClayInput.GroupItem shrink>
							<ClayButtonWithIcon
								aria-label={defaultMessages.removeIcon}
								displayType="secondary"
								onClick={() => setSelectedIcon('')}
								symbol="trash"
								title={defaultMessages.removeIcon}
							/>
						</ClayInput.GroupItem>
					</ClayInput.Group>
				</div>
			) : (
				content
			)}
		</>
	);
}
