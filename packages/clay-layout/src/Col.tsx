/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

type TColSize = boolean | number | 'auto';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
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
	 * The number of columns to span on large devices
	 */
	lg?: TColSize;

	/**
	 * The number of columns to span on medium devices
	 */
	md?: TColSize;

	/**
	 * The number of columns to span on all devices
	 */
	size?: TColSize;

	/**
	 * The number of columns to span on small devices
	 */
	sm?: TColSize;

	/**
	 * The number of columns to span on extra-small devices
	 */
	xs?: TColSize;
}

const ClayCol = React.forwardRef<HTMLElement, IProps>(
	(
		{
			children,
			className,
			containerElement: ContainerElement = 'div',
			lg,
			md,
			size,
			sm,
			xs,
			...otherProps
		}: IProps,
		ref
	) => {
		const noBreakPoints = !lg && !md && !sm && !xs && !size;

		xs = xs || size;

		return (
			<ContainerElement
				{...otherProps}
				className={classNames(className, {
					col: noBreakPoints,
					'col-lg': lg === true,
					[`col-lg-${lg}`]: lg && typeof lg !== 'boolean',
					'col-md': md === true,
					[`col-md-${md}`]: md && typeof md !== 'boolean',
					'col-sm': sm === true,
					[`col-sm-${sm}`]: sm && typeof sm !== 'boolean',
					[`col-${xs}`]: xs && typeof xs !== 'boolean',
				})}
				ref={ref}
			>
				{children}
			</ContainerElement>
		);
	}
);

ClayCol.displayName = 'ClayCol';

export default ClayCol;
