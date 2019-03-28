/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React, {ButtonHTMLAttributes, FunctionComponent} from 'react';

import Icon from '@clayui/icon';

type ButtonVariant = 'link' | 'primary' | 'secondary' | 'unstyled';

type ButtonType = 'button' | 'reset' | 'submit';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	ariaLabel?: string;
	icon: string;
	monospaced?: boolean;
	size?: 'sm';
	spritemap: string;
	type?: ButtonType;
	variant: ButtonVariant;
}

const Button: FunctionComponent<Props> = ({
	ariaLabel,
	className,
	icon,
	monospaced = false,
	onClick,
	spritemap,
	style,
	type = 'button',
	variant = 'primary',
}) => {
	const classNames = classnames('btn', className, {
		'btn-monospaced': monospaced,
		[`btn-${variant}`]: variant,
		[`btn-${style}`]: style,
	});

	return (
		<button
			aria-label={ariaLabel}
			className={classNames}
			onClick={onClick}
			type={type}
		>
			<Icon spritemap={spritemap} symbol={icon} />
		</button>
	);
};

export default Button;
