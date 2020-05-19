/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayColorPicker from '@clayui/color-picker';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

const colorPickerCode = `const Component = () => {
	const [customColors, setCustoms] = useState(['008000', '00FFFF', '0000FF']);
	const [color, setColor] = useState(customColors[0]);

	return (
		<ClayColorPicker
			colors={customColors}
			label="Custom Colors"
			name="colorPicker2"
			onColorsChange={setCustoms}
			onValueChange={setColor}
			showHex={true}
			spritemap={spritemap}
			title="Custom Colors"
			value={color}
		/>
	);
}

render(<Component />)`;

const ColorPicker = () => {
	const scope = {ClayColorPicker, spritemap, useState};
	return <Editor code={colorPickerCode} scope={scope} />;
};

export {ColorPicker};
