/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
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
	<React.Fragment>
		{label && (
			<div className="clay-color-header">
				<span className="component-title">{label}</span>
			</div>
		)}

		<div className="clay-color-swatch">
			{colors.map((hex, i) => (
				<div className="clay-color-swatch-item" key={i}>
					<Splotch onClick={() => onChange(hex)} value={hex} />
				</div>
			))}
		</div>
	</React.Fragment>
);

export default ClayColorPickerBasic;
