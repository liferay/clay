/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayForm from '@clayui/form';
import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayColorPicker from '../src';

const ClayColorPickerWithState = (props: any) => {
	const [color, setColor] = React.useState('FFFFFF');

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
	const [customColors, setCustoms] = React.useState([
		'008000',
		'00FFFF',
		'0000FF',
		'blue',
		'black',
		'var(--blue)',
	]);

	const [color, setColor] = React.useState(customColors[0]);

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
			disabled={boolean('Disabled', false)}
			label={text('Label', 'Default Colors')}
			name="colorPicker1"
			showHex={boolean('Show Hex', true)}
			title={text('Title', 'Default')}
		/>
	))
	.add('custom colors', () => (
		<ClayColorPickerWithCustomColors
			disabled={boolean('Disabled', false)}
			label={text('Label', 'Custom Colors')}
			name="colorPicker2"
			showHex={boolean('Show Hex', true)}
			title={text('Title', 'Default')}
		/>
	))
	.add('custom and predefined colors', () => (
		<ClayColorPickerWithCustomColors
			label={text('Label', 'Custom Colors')}
			name="colorPicker2"
			showHex
			showPredefinedColorsWithCustom
			title={text('Title', 'Default')}
		/>
	))
	.add('custom w/o palette', () => (
		<ClayColorPickerWithCustomColors
			disabled={boolean('Disabled', false)}
			label={text('Label', '')}
			name="colorPicker2"
			showHex={boolean('Show Hex', true)}
			showPalette={false}
			title={text('Title', 'Default')}
		/>
	))
	.add('native', () => (
		<ClayColorPickerWithState
			disabled={boolean('Disabled', false)}
			label={text('Label', 'Default Colors')}
			name="colorPicker3"
			showHex={boolean('Show Hex', true)}
			title="Native"
			useNative
		/>
	))
	.add('small', () => (
		<ClayColorPickerWithState
			disabled={boolean('Disabled', false)}
			label={text('Label', 'Default Colors')}
			name="colorPicker1"
			showHex={boolean('Show Hex', true)}
			small={boolean('Small', true)}
			title={text('Title', 'Default')}
		/>
	))
	.add('w/ validation', () => {
		const [color, setColor] = React.useState('');

		const valid = color.length === 6;

		return (
			<ClayForm.Group className={!valid ? 'has-error' : ''}>
				<ClayColorPicker
					onValueChange={setColor}
					spritemap={spritemap}
					value={color}
				/>

				{!valid && (
					<ClayForm.FeedbackGroup>
						<ClayForm.FeedbackItem>
							<ClayForm.FeedbackIndicator
								spritemap={spritemap}
								symbol="exclamation-full"
							/>
							Input must be 6 letters long
						</ClayForm.FeedbackItem>
					</ClayForm.FeedbackGroup>
				)}
			</ClayForm.Group>
		);
	});
