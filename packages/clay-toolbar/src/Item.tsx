/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export interface IItemProps extends React.HTMLAttributes<HTMLLIElement> {
	/**
	 * Flag to indicate if Item should auto expand to fill the remaining width.
	 */
	expand?: boolean;
}

const Item: React.FunctionComponent<IItemProps> = ({
	children,
	className,
	expand,
	...otherProps
}: IItemProps) => {
	return (
		<li
			className={classNames(className, 'tbar-item', {
				'tbar-item-expand': expand,
			})}
			{...otherProps}
		>
			<div className="tbar-section">{children}</div>
		</li>
	);
};

Item.displayName = 'ClayToolbarItem';

export default Item;
