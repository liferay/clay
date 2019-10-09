/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
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

type TPaginationBar = React.ForwardRefExoticComponent<
	IProps & React.RefAttributes<HTMLDivElement>
> & {
	DropDown: typeof DropDown;
	Results: typeof Results;
};

const ClayPaginationBar = React.forwardRef(
	({children, className, size, ...otherProps}: IProps) => {
		return (
			<div
				className={classNames('pagination-bar', className, {
					[`pagination-${size}`]: size,
				})}
				{...otherProps}
			>
				{children}
			</div>
		);
	}
) as TPaginationBar;

ClayPaginationBar.DropDown = DropDown;
ClayPaginationBar.Results = Results;

export default ClayPaginationBar;
