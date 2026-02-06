/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import React, {useState} from 'react';

import ClaySlider from '../src';

export default {
	argTypes: {
		tooltipPosition: {
			control: {type: 'select'},
			options: ['bottom', 'top'],
		},
	},
	component: ClaySlider,
	title: 'Design System/Components/Slider',
};
export function Default(args: any) {
	return (
		<div className="sheet">
			<div className="form-group">
				<label htmlFor="slider">With Tooltip</label>

				<ClaySlider
					disabled={args.disabled}
					id="slider"
					max={args.max}
					min={args.min}
					step={args.step}
					tooltipPosition={args.tooltipPosition}
				/>
			</div>
		</div>
	);
}

Default.args = {
	disabled: false,
	max: 100,
	min: 0,
	step: 1,
	tooltipPosition: 'top',
};
export function MultipleSliders() {
	const [value, setValue] = useState<number>(10);

	return (
		<div className="sheet">
			<div className="form-group">
				<label htmlFor={`sliderOne${value}`}>{`Value: ${value}`}</label>

				<ClaySlider
					id={`sliderOne${value}`}
					max={10}
					min={0}
					onChange={setValue}
					step={1}
					tooltipPosition="top"
					value={value}
				/>
			</div>

			<div className="form-group">
				<label htmlFor={`sliderTwo${value}`}>{`Value: ${
					100 - value
				}`}</label>

				<ClaySlider
					id={`sliderTwo${value}`}
					max={100}
					min={0}
					onChange={(n) => setValue(100 - n)}
					step={1}
					tooltipPosition="top"
					value={100 - value}
				/>
			</div>

			<div className="form-group">
				<ClayButton onClick={() => setValue(50)}>Reset</ClayButton>
			</div>
		</div>
	);
}
