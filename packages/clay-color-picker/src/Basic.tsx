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
 * @return {React.Component}
 */
const Basic: React.FunctionComponent<Props> = ({colors, label, onChange}) => {
	return (
		<div className="basic-color-picker">
			{label && (
				<div className="label-container">
					<label>{label}</label>
				</div>
			)}

			<div className="splotch-grid">
				{colors.map(hex => (
					<Splotch
						key={hex}
						onClick={() => onChange(hex)}
						value={hex}
					/>
				))}
			</div>
		</div>
	);
};

export default Basic;
