/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import ButtonGroup from './Group';

export type DisplayType =
	| null
	| 'primary'
	| 'secondary'
	| 'link'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'unstyled';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Flag to indicate if button is used within an alert component.
	 */
	alert?: boolean;

	/**
	 * Flag to indicate if the button should be borderless.
	 */
	borderless?: boolean;

	/**
	 * Renders the button as a block element.
	 */
	block?: boolean;

	/**
	 * Determines the button variant to use.
	 */
	displayType?: DisplayType;

	/**
	 * Flag to indicate if button should be monospaced.
	 */
	monospaced?: boolean;

	/**
	 * Flag to indicate if the button should use the outline variant.
	 */
	outline?: boolean;

	/**
	 * Flag to indicate if the button should be shaped like a pill.
	 */
	rounded?: boolean;

	/**
	 * Determines the size of a button.
	 */
	size?: 'xs' | 'sm';

	/**
	 * Indicates button should be a small variant.
	 * @deprecated since v3.72.0 - use `size` instead.
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
			rounded,
			size,
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
				'btn-sm': small && !size,
				[`btn-${displayType}`]: displayType && !outline && !borderless,
				[`btn-outline-${displayType}`]:
					displayType && (outline || borderless),
				'rounded-pill': rounded,
				[`btn-${size}`]: size,
			})}
			ref={ref}
			type={type}
			{...otherProps}
		>
			{children}
		</button>
	)
);

ClayButton.displayName = 'ClayButton';

export default Object.assign(ClayButton, {Group: ButtonGroup});
