/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';
import Splotch from './Splotch';

interface Props {
	colors: string[];
	label?: string;
	onChange: (val: string) => void;
}

/**
 * Renders basic color picker
 */
const Basic: React.FunctionComponent<Props> = ({colors, label, onChange}) => (
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

export default Basic;
