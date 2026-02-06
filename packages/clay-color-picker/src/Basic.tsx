/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import Splotch from './Splotch';

type Props = {

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
};

/**
 * Renders basic color picker
 */
function ClayColorPickerBasic({colors, label, onChange}: Props) {
	return (
		<>
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
		</>
	);
}

export default ClayColorPickerBasic;
