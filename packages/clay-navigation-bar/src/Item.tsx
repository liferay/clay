/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React, {useContext} from 'react';

import {NavigationBarContext} from './context';

export interface IProps extends React.HTMLAttributes<HTMLLIElement> {

	/**
	 * Determines the active state of an dropdown list item.
	 */
	active?: boolean;

	/**
	 * Children elements received from ClayNavigationBar.Item component.
	 */
	children: React.ReactElement;
}

export function Item({
	active = false,
	children,
	className,
	...otherProps
}: IProps) {
	const {ariaCurrent} = useContext(NavigationBarContext);

	return (
		<li {...otherProps} className={classNames('nav-item', className)}>
			{React.Children.map(
				children,
				(child: React.ReactElement<IProps>, index) => {
					if (

						// @ts-ignore

						child?.type.displayName === 'ClayLink' ||

						// @ts-ignore

						child?.type.displayName === 'ClayButton'
					) {
						return React.cloneElement(child, {
							...child.props,
							'aria-current': active
								? ariaCurrent ?? undefined
								: undefined,
							'children': <span>{child.props.children}</span>,
							'className': classNames(
								'nav-link',
								child.props.className?.replace('nav-link', ''),
								{
									active,
								}
							),

							// @ts-ignore

							'displayType': null,
							'key': index,
						});
					}

					return React.cloneElement(child, {
						...child.props,
						className: classNames(child.props.className, {
							active,
						}),
						key: index,
					});
				}
			)}
		</li>
	);
}
