/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button, {ClayButtonWithIcon} from '@clayui/button';
import {Text} from '@clayui/core';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import {
	Overlay,
	sub,
	useControlledState,
	useId,
	useOverlayPosition,
} from '@clayui/shared';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

export type IProps = {
	/**
	 * Flag to indicate if menu is showing or not.
	 */
	active?: boolean;

	/**
	 * Messages for icon selector.
	 */
	messages?: {
		changeIcon: string;
		clearInput?: string;
		notFound: string;
		placeholder?: string;
		removeIcon: string;
		selectIcon: string;
		selectIconButton?: string;
	};

	setSelectedIcon: (icon: string) => void;

	[key: string]: any;
};

const defaultMessages = {
	changeIcon: 'Change Icon',
	clearInput: 'Clear search input',
	notFound: 'No items were found.',
	placeholder: 'Search',
	removeIcon: 'Remove icon selection',
	selectIcon: `Select {0} icon`,
	selectIconButton: 'Select an Icon',
};

const fetchIcons = async (spritemap: string): Promise<Array<string>> => {
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

	return iconNames;
};

function SearchInput({
	'aria-describedby': ariaDescribedby,
	searchTerm,
	setSearchTerm,
}: any) {
	return (
		<ClayInput.Group>
			<ClayInput.GroupItem>
				<ClayInput
					aria-describedby={ariaDescribedby}
					insetAfter
					insetBefore
					onChange={(event) => setSearchTerm(event.target.value)}
					placeholder={defaultMessages.placeholder}
					type="text"
					value={searchTerm}
				/>
				<ClayInput.GroupInsetItem before className="pl-3" tag="span">
					<ClayIcon symbol="search" />
				</ClayInput.GroupInsetItem>
				<ClayInput.GroupInsetItem after tag="span">
					<ClayButtonWithIcon
						aria-label={defaultMessages.clearInput}
						displayType="unstyled"
						onClick={() => setSearchTerm('')}
						spritemap={spritemap}
						symbol="times"
						title={defaultMessages.clearInput}
					/>
				</ClayInput.GroupInsetItem>
			</ClayInput.GroupItem>
		</ClayInput.Group>
	);
}

function IconSelectTrigger({
	active: externalActive,
	children,
	containerElementRef,
	defaultActive,
	direction = 'bottom',
	messages,
	onActiveChange,
	selectedIcon,
	setSelectedIcon,
}: IProps) {
	const menuRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement | null>(null);

	const inputId = useId();
	const overlayId = useId();

	const [iconNames, setIconNames] = useState<Array<string>>([]);
	const [searchTerm, setSearchTerm] = useState<string>('');

	messages = {
		...defaultMessages,
		...(messages ?? {}),
	};

	const [active, setActive] = useControlledState({
		defaultName: 'defaultActive',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: externalActive,
	});

	const filteredIcons = useMemo(() => {
		return iconNames.filter((icon) =>
			icon.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [iconNames, searchTerm]);

	const onClose = useCallback(() => setActive(false), []);

	useOverlayPosition(
		{
			alignmentByViewport: true,
			alignmentPosition: direction === 'bottom' ? 5 : 7,
			autoBestAlign: true,
			isOpen: active,
			ref: menuRef,
			triggerRef: containerElementRef ?? triggerRef,
		},
		[active, children]
	);

	useEffect(() => {
		fetchIcons(spritemap).then((iconNames) => {
			setIconNames(iconNames);
		});
	}, [spritemap]);

	return (
		<>
			<Button
				aria-controls={active ? overlayId : undefined}
				aria-expanded={active}
				aria-label={messages.selectIconButton}
				displayType="secondary"
				onClick={() => setActive(true)}
				ref={triggerRef}
				role="button"
				title={
					selectedIcon
						? messages.changeIcon
						: messages.selectIconButton
				}
			>
				{selectedIcon ? (
					<ClayIcon symbol="change" />
				) : (
					<>{messages.selectIconButton}</>
				)}
			</Button>

			{active && (
				<Overlay
					isCloseOnInteractOutside
					isOpen
					menuRef={menuRef}
					onClose={onClose}
					portalRef={menuRef}
					suppress={[triggerRef, menuRef]}
					triggerRef={triggerRef}
				>
					<div
						className="dropdown-menu dropdown-menu-select p-2 show"
						id={overlayId}
						ref={menuRef}
						role="presentation"
						style={{
							maxWidth: 'none',
						}}
					>
						<SearchInput
							aria-describedby={inputId}
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>

						<div className="grid-container">
							{filteredIcons.map((item) => (
								<div className="p-2" key={item}>
									<ClayButtonWithIcon
										aria-label={sub(messages.selectIcon, [
											item,
										])}
										borderless
										displayType="secondary"
										onClick={() => {
											setSelectedIcon?.(item);

											onClose();
										}}
										symbol={item}
										title={item}
									/>
								</div>
							))}
						</div>

						{filteredIcons.length === 0 && (
							<div
								aria-live="polite"
								className="d-block my-2"
								id={inputId}
							>
								<Text as="span" color="muted">
									{messages.notFound}
								</Text>
							</div>
						)}
					</div>
				</Overlay>
			)}
		</>
	);
}

export function IconSelector() {
	const [selectedIcon, setSelectedIcon] = useState<string>('');

	return (
		<>
			{selectedIcon ? (
				<div className="selected-icon-container">
					<ClayInput.Group>
						<ClayInput.GroupItem prepend shrink>
							<ClayInput.GroupText>
								<ClayIcon symbol={selectedIcon} />
							</ClayInput.GroupText>
						</ClayInput.GroupItem>
						<ClayInput.GroupItem append>
							<ClayInput readOnly value={selectedIcon} />
						</ClayInput.GroupItem>

						<ClayInput.GroupItem shrink>
							<IconSelectTrigger
								aria-label={defaultMessages.changeIcon}
								selectedIcon={selectedIcon}
								setSelectedIcon={setSelectedIcon}
							/>
						</ClayInput.GroupItem>
						<ClayInput.GroupItem append>
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
				<IconSelectTrigger
					selectedIcon={selectedIcon}
					setSelectedIcon={setSelectedIcon}
				/>
			)}
		</>
	);
}
