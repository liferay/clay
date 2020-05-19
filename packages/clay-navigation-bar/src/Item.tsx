/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';

interface IItemProps extends React.HTMLAttributes<HTMLLIElement> {
	/**
	 * Determines the active state of an dropdown list item.
	 */
	active?: boolean;

	/**
	 * Children elements received from ClayNavigationBar.Item component.
	 */
	children: React.ReactElement;
}

const ClayNavigationBarIcon: React.FunctionComponent<IItemProps> = ({
	active = false,
	children,
	className,
	...otherProps
}: IItemProps) => {
	return (
		<li {...otherProps} className={classNames('nav-item', className)}>
			{React.Children.map(
				children,
				(child: React.ReactElement<IItemProps>, index) =>
					React.cloneElement(child, {
						...child.props,
						className: classNames(child.props.className, {
							active,
						}),
						key: index,
					})
			)}
		</li>
	);
};

export default ClayNavigationBarIcon;
