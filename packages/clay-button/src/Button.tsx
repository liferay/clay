/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import ButtonGroup from './Group';

export type DisplayType = 'primary' | 'secondary' | 'link' | 'unstyled';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Flag to indicate if button is used within an alert component.
	 */
	alert?: boolean;

	/**
	 * Flag to indicate if link should be borderless.
	 */
	borderless?: boolean;

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
	 * Flag to indicate if link need have an outline.
	 */
	outline?: boolean;

	/**
	 * Indicates button should be a small variant.
	 */
	small?: boolean;
}

const ClayButton = React.forwardRef<HTMLButtonElement, IProps>(
	(
		{
			alert,
			block,
			borderless,
			children,
			className,
			displayType = 'primary',
			monospaced,
			outline,
			small,
			type = 'button',
			...otherProps
		}: IProps,
		ref
	) => (
		<button
			className={classNames(className, 'btn', {
				'alert-btn': alert,
				'btn-block': block,
				'btn-monospaced': monospaced,
				'btn-outline-borderless': borderless,
				'btn-sm': small,
				[`btn-${displayType}`]: displayType && !outline && !borderless,
				[`btn-outline-${displayType}`]:
					displayType && (outline || borderless),
			})}
			ref={ref}
			type={type}
			{...otherProps}
		>
			{children}
		</button>
	)
);

export default Object.assign(ClayButton, {Group: ButtonGroup});
