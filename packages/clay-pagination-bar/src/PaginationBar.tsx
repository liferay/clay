/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {DropDown} from './DropDown';
import {Results} from './Results';

interface IForwardRef<T, P = {}>
	extends React.ForwardRefExoticComponent<P & React.RefAttributes<T>> {
	/**
	 * @deprecated since v3.84.0 - use `Picker` component instead.
	 */
	DropDown: typeof DropDown;
	Results: typeof Results;
}

function forwardRef<T, P = {}>(component: React.RefForwardingComponent<T, P>) {
	return React.forwardRef<T, P>(component) as IForwardRef<T, P>;
}

export const PaginationBar = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => {
	return (
		<div
			className={classNames('pagination-bar', className)}
			{...otherProps}
			ref={ref}
		>
			{children}
		</div>
	);
});

PaginationBar.DropDown = DropDown;
PaginationBar.Results = Results;

PaginationBar.displayName = 'ClayPaginationBar';
