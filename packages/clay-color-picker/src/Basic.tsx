/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import Splotch from './Splotch';

interface IProps {
	/**
	 * List of hex's that will display as a color splotch
	 */
	colors: Array<string>;

	/**
	 * Label describing the set of colors provided
	 */
	label?: string;

	/**
	 * Callback for when a color is clicked
	 */
	onChange: (val: string) => void;
}

/**
 * Renders basic color picker
 */
const ClayColorPickerBasic: React.FunctionComponent<IProps> = ({
	colors,
	label,
	onChange,
}) => (
	<>
		{label && (
			<div className="clay-color-header">
				<span className="component-title">{label}</span>
			</div>
		)}

		<div className="clay-color-swatch">
			{colors.map((hex, i) => (
				<div
					className={classNames('clay-color-swatch-item', {
						'clay-color-swatch-item-last-row': i >= 20,
					})}
					key={i}
				>
					<Splotch onClick={() => onChange(hex)} value={hex} />
				</div>
			))}
		</div>
	</>
);

export default ClayColorPickerBasic;
