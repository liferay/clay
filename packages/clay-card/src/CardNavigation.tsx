/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink from '@clayui/link';
import {useProvider} from '@clayui/provider';
import classNames from 'classnames';
import React from 'react';

import Context, {IContext} from './Context';

interface IProps
	extends Omit<IContext, 'interactive'>,
		React.BaseHTMLAttributes<HTMLAnchorElement | HTMLDivElement> {}

export const ClayCardNavigation = ({
	children,
	className,
	horizontal,
	href,
	onClick,
	...otherProps
}: IProps) => {
	const {focusRing} = useProvider();

	const Container = href ? ClayLink : 'div';

	return (
		<Context.Provider value={{horizontal, interactive: true}}>
			<Container
				className={classNames(
					className,
					'card card-interactive card-interactive-primary card-type-template',
					{
						'template-card': !horizontal,
						'template-card-horizontal': horizontal,
					}
				)}
				href={href}
				onClick={onClick}
				role={onClick ? 'button' : undefined}
				{...otherProps}
			>
				{focusRing ? (
					<span className="c-inner" tabIndex={-1}>
						{children}
					</span>
				) : (
					children
				)}
			</Container>
		</Context.Provider>
	);
};
