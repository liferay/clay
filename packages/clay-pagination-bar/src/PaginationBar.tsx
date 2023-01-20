/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {forwardRef} from 'react';

import DropDown from './DropDown';
import Results from './Results';

interface IPaginationForwardRef<T, P>
	extends React.ForwardRefExoticComponent<
		React.PropsWithoutRef<P> & React.RefAttributes<T>
	> {
	/**
	 * @deprecated since v3.84.0 - use `Picker` component instead.
	 */
	DropDown: typeof DropDown;
	Results: typeof Results;
}

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The size of pagination element.
	 */
	size?: 'sm' | 'lg';
}

// eslint-disable-next-line react/display-name
const ClayPaginationBar = forwardRef<HTMLDivElement, IProps>(
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
) as unknown as IPaginationForwardRef<HTMLDivElement, IProps>;

ClayPaginationBar.DropDown = DropDown;
ClayPaginationBar.Results = Results;

ClayPaginationBar.displayName = 'ClayPaginationBar';

export default ClayPaginationBar;
