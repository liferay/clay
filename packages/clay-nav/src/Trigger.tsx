/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.ComponentProps<typeof ClayButton> {
	/**
	 * Label of the button that appears on smaller resolutions to open the vertical navigation.
	 */
	label?: string;

	/**
	 * Callback function when the trigger is clicked.
	 */
	handleClick?: () => void;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

const Trigger: React.FunctionComponent<IProps> = ({
	children,
	className,
	handleClick,
	label = 'Menu',
	spritemap,
	...otherProps
}) => (
	<ClayButton
		className={classNames(className, 'menubar-toggler')}
		displayType="unstyled"
		onClick={handleClick}
		{...otherProps}
	>
		{children ? (
			children
		) : (
			<>
				<span className="inline-item inline-item-before">{label}</span>

				<ClayIcon
					focusable="false"
					role="presentation"
					spritemap={spritemap}
					symbol="caret-bottom"
				/>
			</>
		)}
	</ClayButton>
);

export default Trigger;
