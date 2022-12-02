/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import DropDown from '@clayui/drop-down';
import {InternalDispatch} from '@clayui/shared';
import React from 'react';

import Context from './Context';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * HTML element that the menu should be aligned to
	 */
	alignElementRef?: React.RefObject<HTMLElement>;

	/**
	 * Flag to align the DropDown menu within the viewport.
	 */
	alignmentByViewport?: boolean;

	/**
	 * Flag to indicate if menu is showing or not.
	 */
	active?: boolean;

	/**
	 * Flag to indicate if clicking outside of the menu should automatically close it.
	 */
	closeOnClickOutside?: React.ComponentProps<
		typeof DropDown.Menu
	>['closeOnClickOutside'];

	/**
	 * Callback for when the active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<boolean>;

	/**
	 * Callback function for when active state changes.
	 * @deprecated since v3.74.0 - use `onActiveChange` instead.
	 */
	onSetActive?: (val: boolean) => void;
}

const ClayAutocompleteDropDown = ({
	active = false,
	alignElementRef,
	alignmentByViewport,
	children,
	closeOnClickOutside,
	onActiveChange,
	onSetActive,
}: IProps) => {
	const {containerElementRef} = React.useContext(Context);
	const menuElementRef = React.useRef<HTMLDivElement>(null);

	if (!alignElementRef) {
		alignElementRef = containerElementRef;
	}

	const alignElementWidth =
		alignElementRef.current && alignElementRef.current.clientWidth;

	return (
		<DropDown.Menu
			active={active}
			alignElementRef={alignElementRef}
			alignmentByViewport={alignmentByViewport}
			autoBestAlign={!!alignmentByViewport}
			className="autocomplete-dropdown-menu"
			closeOnClickOutside={closeOnClickOutside}
			onActiveChange={onActiveChange ?? onSetActive}
			ref={menuElementRef}
			style={{
				maxWidth: 'none',
				width: `${alignElementWidth}px`,
			}}
			triggerRef={alignElementRef}
		>
			{children}
		</DropDown.Menu>
	);
};

ClayAutocompleteDropDown.displayName = 'ClayAutocompleteDropDown';

export default ClayAutocompleteDropDown;
