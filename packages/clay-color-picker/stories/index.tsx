/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import '@clayui/css/lib/css/atlas.css';
import ClayColorPicker from '../src';
import React, {useState} from 'react';
import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayColorPickerWithState = (props: any) => {
	const [color, setColor] = useState('FFFFFF');

	return (
		<ClayColorPicker
			onValueChange={setColor}
			spritemap={spritemap}
			value={color}
			{...props}
		/>
	);
};

const ClayColorPickerWithCustomColors = (props: any) => {
	const [customColors, setCustoms] = useState(['008000', '00FFFF', '0000FF']);

	const [color, setColor] = useState(customColors[0]);

	return (
		<ClayColorPickerWithState
			{...props}
			colors={customColors}
			onColorsChange={setCustoms}
			onValueChange={setColor}
			value={color}
		/>
	);
};

storiesOf('Components|ClayColorPicker', module)
	.add('default', () => (
		<ClayColorPickerWithState
			label={text('Label', 'Default Colors')}
			name="colorPicker1"
			showHex={boolean('Show Hex', true)}
			title={text('Title', 'Default')}
		/>
	))
	.add('custom colors', () => (
		<ClayColorPickerWithCustomColors
			label={text('Label', 'Custom Colors')}
			name="colorPicker2"
			showHex={boolean('Show Hex', true)}
			title={text('Title', 'Default')}
		/>
	))
	.add('native', () => (
		<ClayColorPickerWithState
			label={text('Label', 'Default Colors')}
			name="colorPicker3"
			showHex={boolean('Show Hex', true)}
			title="Native"
			useNative
		/>
	));
