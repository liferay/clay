/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

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
	({active, className, size = 24, value, ...otherProps}, ref) => {
		const requireBorder = tinycolor.readability('#FFF', value) < 1.1;

		return (
			<button
				{...otherProps}
				className={`btn clay-color-btn ${className ? className : ''}`}
				ref={ref}
				style={{
					...(active ? {outline: 'auto 3px #55ADFF'} : {}),
					...(requireBorder
						? {border: '1px solid #E7E7ED'}
						: {borderWidth: 0}),
					background: `#${value}`,
					height: size,
					width: size,
				}}
				title={value}
				type="button"
			/>
		);
	}
);

export default ClayColorPickerSplotch;
