/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClaySlider from '@clayui/slider';
import React from 'react';

const sliderImportsCode = `import ClaySlider from '@clayui/slider';`;

const SliderCode = `const Component = () => {
	return (
		<div className="form-group">
			<label htmlFor="slider">{'With Tooltip'}</label>
			<ClaySlider
				defaultValue={10}
				id="slider"
			/>
    </div>
	);
}

render(<Component />)`;

export const Slider = () => {
	const scope = {ClaySlider};

	return (
		<Editor code={SliderCode} imports={sliderImportsCode} scope={scope} />
	);
};

const DecadeSliderCode = `const Component = () => {
	return (
		<div className="form-group">
			<label htmlFor="decadeSlider">{'Decades'}</label>

			<ClaySlider
				defaultValue={10}
				id="decadeSlider"
				max={2020}
				step={10}
			/>
		</div>
	);
}

render(<Component />)`;

export const DecadeSlider = () => {
	const scope = {ClaySlider};

	return (
		<Editor
			code={DecadeSliderCode}
			imports={sliderImportsCode}
			scope={scope}
		/>
	);
};
