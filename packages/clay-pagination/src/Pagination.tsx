/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {Ellipsis} from './Ellipsis';
import {Item} from './Item';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * The size of pagination element.
	 * @deprecated since v3.146.0 with no replacement.
	 */
	size?: 'lg' | 'sm';
}

const PaginationComponent = React.forwardRef<HTMLUListElement, IProps>(
	({children, className, size, ...otherProps}: IProps, ref) => {
		return (
			<nav aria-label={otherProps['aria-label'] || 'Pagination'}>
				<ul
					{...otherProps}
					className={classNames(
						'pagination pagination-root',
						className,
						{
							[`pagination-${size}`]: size,
						}
					)}
					ref={ref}
				>
					{children}
				</ul>
			</nav>
		);
	}
);

PaginationComponent.displayName = 'ClayPagination';

export const Pagination = Object.assign(PaginationComponent, {
	Ellipsis,
	Item,
});
