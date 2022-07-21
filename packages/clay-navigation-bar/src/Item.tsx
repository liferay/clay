/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export interface IItemProps extends React.HTMLAttributes<HTMLLIElement> {
	/**
	 * Determines the active state of an dropdown list item.
	 */
	active?: boolean;

	/**
	 * Children elements received from ClayNavigationBar.Item component.
	 */
	children: React.ReactElement;
}

const ClayNavigationBarIcon = ({
	active = false,
	children,
	className,
	...otherProps
}: IItemProps) => {
	return (
		<li {...otherProps} className={classNames('nav-item', className)}>
			{React.Children.map(
				children,
				(child: React.ReactElement<IItemProps>, index) => {
					if (
						// @ts-ignore
						child?.type.displayName === 'ClayLink' ||
						// @ts-ignore
						child?.type.displayName === 'ClayButton'
					) {
						return React.cloneElement(child, {
							...child.props,
							'aria-current': active ? 'page' : undefined,
							children: (
								<span className="navbar-text-truncate">
									{child.props.children}
								</span>
							),
							className: classNames(
								'nav-link',
								child.props.className?.replace('nav-link', ''),
								{
									active,
								}
							),
							// @ts-ignore
							displayType: 'unstyled',
							key: index,
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
};

export default ClayNavigationBarIcon;
