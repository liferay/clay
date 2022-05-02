/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayColorPicker from '@clayui/color-picker';
import React from 'react';

const colorPickerImportsCode = `import ClayColorPicker from '@clayui/color-picker';
`;

const colorPickerCode = `const Component = () => {
	const [customColors, setCustoms] = useState(['008000', '00FFFF', '0000FF']);
	const [color, setColor] = useState(customColors[0]);

	return (
		<ClayColorPicker
			colors={customColors}
			label="Custom Colors"
			name="colorPicker2"
			onChange={setColor}
			onColorsChange={setCustoms}
			showHex={true}
			spritemap={spritemap}
			title="Custom Colors"
			value={color}
		/>
	);
}

render(<Component />)`;

const ColorPicker = () => {
	const scope = {ClayColorPicker};

	return (
		<Editor
			code={colorPickerCode}
			imports={colorPickerImportsCode}
			scope={scope}
		/>
	);
};

export {ColorPicker};
