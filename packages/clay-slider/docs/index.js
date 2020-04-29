/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClaySlider from '@clayui/slider';
import React from 'react';

const sliderImportsCode = `import ClaySlider from '@clayui/slider';
`;

const SliderCode = `const Component = () => {
	const [value, setValue] = useState(10);

	return (
		<div className="form-group">
			<label htmlFor="slider">{'With Tooltip'}</label>
			<ClaySlider
				id="slider"
				max={100}
				min={0}
				onValueChange={setValue}
				step={1}
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
