/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClaySlider from '@clayui/slider';
import React, {useState} from 'react';

import Editor from '../Editor';

const sliderImportsCode = `import ClaySlider from '@clayui/slider';
import React, {useState} from 'react';`;

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
	const scope = {ClaySlider, useState};

	return (
		<Editor code={SliderCode} imports={sliderImportsCode} scope={scope} />
	);
};
