/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';
import tinycolor from 'tinycolor2';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Flag that indicates whether the splotch is the active one selected
	 */
	active?: boolean;

	/**
	 * Pixel size of how big the splotch should be. 24 would be a height and width of 24px.
	 */
	size?: number;

	/**
	 * The hex value of the splotch color
	 */
	value: string;
}

/**
 * Renders component that displays a color
 */
const ClayColorPickerSplotch = React.forwardRef<HTMLButtonElement, IProps>(
	({active, className, size, value, ...otherProps}, ref) => {
		const color = tinycolor(value);

		const isHex = (color.getFormat() || '').match('hex');

		const requireBorder =
			!color.isValid() || tinycolor.readability('#FFF', value) < 1.1;

		return (
			<button
				{...otherProps}
				className={classNames('btn clay-color-btn', className, {
					active,
					'clay-color-btn-bordered': requireBorder,
				})}
				ref={ref}
				style={{
					background: `${isHex ? '#' : ''}${value}`,
					height: size,
					width: size,
				}}
				title={value}
				type="button"
			/>
		);
	}
);

ClayColorPickerSplotch.displayName = 'ClayColorPickerSplotch';

export default ClayColorPickerSplotch;
