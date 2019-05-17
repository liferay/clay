/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from '@clayui/drop-down';
import Context from './Context';
import React, {useContext} from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * HTML element that the menu should be aligned to
	 */
	alignElementRef?: React.RefObject<HTMLElement>;

	/**
	 * Flag to indicate if menu is showing or not.
	 */
	active?: boolean;
}

const DropDown: React.FunctionComponent<Props> = ({
	active = false,
	alignElementRef,
	children,
}) => {
	const {containerElementRef} = useContext(Context);

	if (!alignElementRef) {
		alignElementRef = containerElementRef;
	}

	const menuElementRef = React.useRef<HTMLDivElement>(null);
	const alignElementWidth =
		alignElementRef.current && alignElementRef.current.clientWidth;

	return (
		<ClayDropDown.Menu
			active={active}
			alignElementRef={alignElementRef}
			className="autocomplete-dropdown-menu"
			onSetActive={() => {}}
			ref={menuElementRef}
			style={{
				maxWidth: 'none',
				width: `${alignElementWidth}px`,
			}}
		>
			{children}
		</ClayDropDown.Menu>
	);
};

export default DropDown;
