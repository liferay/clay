/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * Element or component to render for container
	 */
	containerElement?:
		| string
		| React.JSXElementConstructor<{
				className: string;
				[key: string]: any;
		  }>;

	/**
	 * This removes the negative margins from .row and the
	 * horizontal padding from all immediate children columns
	 */
	gutters?: boolean;

	/**
	 * Horizontal positioning of row contents
	 */
	justify?: 'start' | 'center' | 'end' | 'around' | 'between';
}

const Row = React.forwardRef<HTMLElement, IProps>(
	(
		{
			children,
			className,
			containerElement: ContainerElement = 'div',
			gutters = true,
			justify,
			...otherProps
		}: IProps,
		ref
	) => {
		return (
			<ContainerElement
				{...otherProps}
				className={classNames('row', className, {
					'no-gutters': !gutters,
					[`justify-content-${justify}`]: justify,
				})}
				ref={ref}
			>
				{children}
			</ContainerElement>
		);
	}
);

Row.displayName = 'ClayRow';

export default Row;
