/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import {boolean, number, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClaySlider from '../src';

storiesOf('Components|ClaySlider', module)
	.add('default', () => {
		const [value, setValue] = React.useState<number>(10);

		return (
			<div className="sheet">
				<div className="form-group">
					<label htmlFor="slider">{'With Tooltip'}</label>
					<ClaySlider
						disabled={boolean('Disabled', false)}
						id="slider"
						max={number('Max', 100)}
						min={number('Min', 0)}
						onValueChange={setValue}
						step={number('Step', 1)}
						tooltipPosition={
							select(
								'Tooltip position',
								['bottom', 'top'],
								'top'
							) as 'bottom' | 'top'
						}
						value={value}
					/>
				</div>
			</div>
		);
	})
	.add('/w multiple sliders', () => {
		const [value, setValue] = React.useState<number>(10);

		return (
			<div className="sheet">
				<div className="form-group">
					<label
						htmlFor={`sliderOne${value}`}
					>{`Value: ${value}`}</label>
					<ClaySlider
						disabled={boolean('Disabled', false)}
						id={`sliderOne${value}`}
						max={number('Max', 100)}
						min={number('Min', 0)}
						onValueChange={setValue}
						step={number('Step', 1)}
						tooltipPosition={
							select(
								'Tooltip position',
								['bottom', 'top'],
								'top'
							) as 'bottom' | 'top'
						}
						value={value}
					/>
				</div>
				<div className="form-group">
					<label htmlFor={`sliderTwo${value}`}>{`Value: ${
						100 - value
					}`}</label>
					<ClaySlider
						disabled={boolean('Disabled', false)}
						id={`sliderTwo${value}`}
						max={number('Max', 100)}
						min={number('Min', 0)}
						onValueChange={(n) => setValue(100 - n)}
						step={number('Step', 1)}
						tooltipPosition={
							select(
								'Tooltip position',
								['bottom', 'top'],
								'top'
							) as 'bottom' | 'top'
						}
						value={100 - value}
					/>
				</div>
				<div className="form-group">
					<ClayButton onClick={() => setValue(50)}>
						{'Reset'}
					</ClayButton>
				</div>
			</div>
		);
	});
