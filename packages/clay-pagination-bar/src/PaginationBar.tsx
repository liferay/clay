/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import DropDown from './DropDown';
import Results from './Results';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The size of pagination element.
	 */
	size?: 'sm' | 'lg';
}

const ClayPaginationBar = React.forwardRef<HTMLDivElement, IProps>(
	({children, className, size, ...otherProps}: IProps, ref) => {
		return (
			<div
				className={classNames('pagination-bar', className, {
					[`pagination-${size}`]: size,
				})}
				{...otherProps}
				ref={ref}
			>
				{children}
			</div>
		);
	}
);

export default Object.assign(ClayPaginationBar, {DropDown, Results});
