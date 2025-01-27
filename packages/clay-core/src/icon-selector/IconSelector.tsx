/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button, {ClayButtonWithIcon} from '@clayui/button';
import {Text} from '@clayui/core';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {useResource} from '@clayui/data-provider';
import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import {
	InternalDispatch,
	Overlay,
	sub,
	useControlledState,
	useId,
	useOverlayPosition,
} from '@clayui/shared';
import React, {useCallback, useMemo, useRef, useState} from 'react';

enum alignPosition {
	bottomLeft = 5,
	topLeft = 7,
}

export type IPropsTrigger = {
	/**
	 * Flag to indicate if menu is showing or not.
	 */
	active?: boolean;
	/**
	 * The initial value of the active state (uncontrolled).
	 */
	defaultActive?: boolean;
	/**
	 * Callback for when the active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<boolean>;

	[key: string]: any;
};

interface IProps {
	/**
	 * Direction the menu will render relative to the Autocomplete.
	 */
	direction?: 'bottom' | 'top';

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
}

const defaultMessages = {
	changeIcon: 'Change Icon',
	clearInput: 'Clear search input',
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

export function IconSelector({
	direction = 'bottom',
	messages,
}: IProps): JSX.Element {
	const [selectedIcon, setSelectedIcon] = useState<string>('');

	messages = {
		...defaultMessages,
		...(messages ?? {}),
	};

	function IconSelectTrigger({
		active: externalActive,
		children,
		containerElementRef,
		defaultActive,
		onActiveChange,
	}: IPropsTrigger) {
		const menuRef = useRef<HTMLDivElement>(null);
		const triggerRef = useRef<HTMLButtonElement | null>(null);

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

		const {resource} = useResource({
			fetch: fetchIcons,
			link: `${window.location.origin}/${spritemap}`,
		});

		const filteredIcons = useMemo(() => {
			if (!resource) {
				return [];
			}

			return resource.filter((icon: string) =>
				icon.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}, [resource, searchTerm]);

		const onClose = useCallback(() => setActive(false), []);

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
				triggerRef: containerElementRef ?? triggerRef,
			},
			[active, children]
		);

		return (
			<>
				<Button
					aria-controls={active ? overlayId : undefined}
					aria-expanded={active}
					aria-label={messages?.selectIconButton}
					displayType="secondary"
					onClick={() => setActive(true)}
					ref={triggerRef}
					role="button"
					title={
						selectedIcon
							? messages?.changeIcon
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
								{filteredIcons.map((item: string) => (
									<div className="p-2" key={item}>
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
										{messages?.notFound}
									</Text>
								</div>
							)}
						</div>
					</Overlay>
				)}
			</>
		);
	}

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

						<ClayInput.GroupItem shrink>
							<IconSelectTrigger
								aria-label={defaultMessages.changeIcon}
							/>
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
				<IconSelectTrigger />
			)}
		</>
	);
}
