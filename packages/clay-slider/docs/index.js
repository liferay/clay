/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClaySlider from '@clayui/slider';
import React from 'react';

const sliderImportsCode = `import ClaySlider from '@clayui/slider';`;

const SliderCode = `const Component = () => {
	const [value, setValue] = useState(10);

	return (
		<div className="form-group">
			<label htmlFor="slider">{'With Tooltip'}</label>
			<ClaySlider
				id="slider"
				onValueChange={setValue}
				value={value}
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
	const [decade, setDecade] = useState(10);

	return (
		<div className="form-group">
			<label htmlFor="decadeSlider">{'Decades'}</label>

			<ClaySlider
				id="decadeSlider"
				max={2020}
				onValueChange={setDecade}
				step={10}
				value={decade}
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
