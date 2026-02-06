/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

import {DropDown} from './DropDown';
import {Results} from './Results';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * The size of pagination element.
	 */
	size?: 'sm' | 'lg';
}

const PaginationBarComponent = React.forwardRef<HTMLDivElement, IProps>(
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

PaginationBarComponent.displayName = 'ClayPaginationBar';

export const PaginationBar = Object.assign(PaginationBarComponent, {
	DropDown,
	Results,
});
