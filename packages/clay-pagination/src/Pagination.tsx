/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
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

const ClayPagination = React.forwardRef<HTMLUListElement, IProps>(
	({children, className, size, ...otherProps}: IProps, ref) => {
		const ariaLabel = otherProps['aria-label'] || 'Pagination';

		return (
			<nav aria-label={ariaLabel}>
				<ul
					{...otherProps}
					aria-label={undefined}
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

ClayPagination.displayName = 'ClayPagination';

export default Object.assign(ClayPagination, {Ellipsis, Item});
