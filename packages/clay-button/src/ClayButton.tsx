/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

export const DISPLAY_TYPES = ['primary', 'secondary', 'link', 'unstyled'];

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	block?: boolean;
	displayType?: typeof DISPLAY_TYPES[number];
	id?: string;
	monospaced?: boolean;
	small?: boolean;
	title?: string;
}

interface IClayButton extends React.FunctionComponent<Props> {
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

const ClayButtonGroup: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({className, children, role = 'group', ...otherProps}) => (
	<div
		{...otherProps}
		className={classNames(className, 'btn-group')}
		role={role}
	>
		{children}
	</div>
);

ClayButton.Group = ClayButtonGroup;

export default ClayButton;
