/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

type DisplayType = null | 'primary' | 'secondary' | 'light';
type Shape = null | 'circle' | 'squares';
type Size = null | 'xs' | 'sm' | 'md' | 'lg';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Determines the color of the visual indicator.
	 */
	displayType?: DisplayType;

	/**
	 * Determines the style of the visual indicator.
	 */
	shape?: Shape;

	/**
	 * Determines the size of the visual indicator.
	 */
	size?: Size;

	/**
	 * Flag to indicate the 'light' variant
	 * @deprecated since v3.59.0 - use `displayType` instead.
	 */
	light?: boolean;

	/**
	 * Flag to indicate the small size
	 * @deprecated since v3.59.0 - use `size` instead.
	 */
	small?: boolean;
}

const ClayLoadingIndicator = React.forwardRef<HTMLSpanElement, IProps>(
	(
		{
			className,
			displayType,
			light,
			shape,
			size,
			small,
			...otherProps
		}: IProps,
		ref
	) => {
		return (
			<span
				aria-hidden="true"
				{...otherProps}
				className={classNames(className, {
					'loading-animation':
						[null, undefined, '', 'circle'].indexOf(shape) > -1,
					[`loading-animation-${shape}`]:
						shape && ['', 'circle'].indexOf(shape) === -1,
					'loading-animation-light': light,
					[`loading-animation-${displayType}`]: displayType && !light,
					'loading-animation-sm': small,
					[`loading-animation-${size}`]: size,
				})}
				ref={ref}
			/>
		);
	}
);

ClayLoadingIndicator.displayName = 'ClayLoadingIndicator';

export default ClayLoadingIndicator;
