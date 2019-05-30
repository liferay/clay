/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export type DisplayType = 'primary' | 'secondary' | 'link' | 'unstyled';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Renders the button as a block element.
	 */
	block?: boolean;

	/**
	 * Determines how to button is displayed.
	 */
	displayType?: DisplayType;

	/**
	 * Flag to indicate if button should be monospaced.
	 */
	monospaced?: boolean;

	/**
	 * Indicates button should be a small variant.
	 */
	small?: boolean;
}

interface IButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate the spacing between the buttons.
	 */
	spaced?: boolean;
}

interface IClayButton extends React.FunctionComponent<IProps> {
	Group: React.FunctionComponent<IButtonGroupProps>;
}

const ClayButton: IClayButton = ({
	block,
	children,
	className,
	displayType = 'primary',
	monospaced,
	small,
	type = 'button',
	...otherProps
}) => (
	<button
		{...otherProps}
		className={classNames(className, 'btn', `btn-${displayType}`, {
			'btn-block': block,
			'btn-monospaced': monospaced,
			'btn-sm': small,
		})}
		type={type}
	>
		{children}
	</button>
);

const ClayButtonGroup: React.FunctionComponent<IButtonGroupProps> = ({
	children,
	className,
	role = 'group',
	spaced,
	...otherProps
}) => (
	<div
		{...otherProps}
		className={classNames(className, 'btn-group')}
		role={role}
	>
		{spaced
			? React.Children.map(children, (child, i) =>
					React.cloneElement(
						<div className="btn-group-item">{child}</div>,
						{key: i}
					)
			  )
			: children}
	</div>
);

ClayButton.Group = ClayButtonGroup;

export default ClayButton;
