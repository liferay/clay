/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import Ellipsis from './Ellipsis';
import Item from './Item';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * The size of pagination element.
	 */
	size?: 'lg' | 'sm';
}

const ClayPagination: React.ForwardRefExoticComponent<
	IProps & React.RefAttributes<HTMLUListElement>
> & {
	Ellipsis?: typeof Ellipsis;
	Item?: typeof Item;
} = React.forwardRef(
	({children, className, size, ...otherProps}: IProps, ref) => {
		return (
			<ul
				{...otherProps}
				className={classNames('pagination pagination-root', className, {
					[`pagination-${size}`]: size,
				})}
				ref={ref}
			>
				{children}
			</ul>
		);
	}
);

ClayPagination.Ellipsis = Ellipsis;
ClayPagination.Item = Item;

export default ClayPagination;
