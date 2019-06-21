/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';
import {ClayButtonGroup} from './Group';

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

interface IClayButton extends React.FunctionComponent<IProps> {
	Group: typeof ClayButtonGroup;
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
}: IProps) => (
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

ClayButton.Group = ClayButtonGroup;

export default ClayButton;
