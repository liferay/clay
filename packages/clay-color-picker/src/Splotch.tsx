/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
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

	/**
	 * Adds class `clay-color-swatch-item-last-row`
	 */
	last?: boolean;
}

/**
 * Renders component that displays a color
 */
const ClayColorPickerSplotch = React.forwardRef<HTMLButtonElement, IProps>(
	({active, className, last, size, value, ...otherProps}, ref) => {
		const color = tinycolor(value);

		const isHex = (color.getFormat() || '').match('hex');

		const requireBorder =
			!color.isValid() || tinycolor.readability('#FFF', value) < 1.1;

		return (
			<ClayButton
				{...otherProps}
				className={classNames('clay-color-btn', className, {
					active,
					'clay-color-btn-bordered': requireBorder,
					'clay-color-swatch-item-last-row': last,
				})}
				displayType={null}
				ref={ref}
				style={{
					background: `${isHex ? '#' : ''}${value}`,
					height: size,
					width: size,
				}}
				title={value}
			/>
		);
	}
);

ClayColorPickerSplotch.displayName = 'ClayColorPickerSplotch';

export default ClayColorPickerSplotch;
