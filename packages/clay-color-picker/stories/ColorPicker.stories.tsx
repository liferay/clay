/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayForm from '@clayui/form';
import React, {useState} from 'react';

import ClayColorPicker from '../src';

export default {
	component: ClayColorPicker,
	title: 'Design System/Components/ColorPicker',
};
export function Default(args: any) {
	const [color, setColor] = useState('FFFFFF');

	return (
		<ClayColorPicker
			disabled={args.disabled}
			label={args.label}
			name="colorPicker1"
			onValueChange={setColor}
			showHex={args.showHex}
			small={args.small}
			title={args.title}
			value={color}
		/>
	);
}

Default.args = {
	disabled: false,
	label: 'Default Colors',
	showHex: true,
	small: false,
	title: 'Default',
};
export function CustomColors(args: any) {
	const [customColors, setCustoms] = useState([
		'008000',
		'00FFFF',
		'0000FF',
		'blue',
		'black',
		'var(--blue)',
	]);

	const [color, setColor] = useState(customColors[0]);

	return (
		<ClayColorPicker
			colors={customColors}
			disabled={args.disabled}
			label={args.label}
			name="colorPicker2"
			onChange={setColor}
			onColorsChange={setCustoms}
			showHex={args.showHex}
			small={args.small}
			title={args.title}
			value={color}
		/>
	);
}

CustomColors.args = {
	disabled: false,
	label: 'Custom Colors',
	showHex: true,
	small: false,
	title: 'Default',
};
export function CustomAndPredefinedColors(args: any) {
	const [customColors, setCustoms] = useState([
		'008000',
		'00FFFF',
		'0000FF',
		'blue',
		'black',
		'var(--blue)',
	]);

	const [color, setColor] = useState(customColors[0]);

	return (
		<ClayColorPicker
			colors={customColors}
			disabled={args.disabled}
			label={args.label}
			name="colorPicker2"
			onChange={setColor}
			onColorsChange={setCustoms}
			showHex
			showPredefinedColorsWithCustom
			small={args.small}
			title={args.title}
			value={color}
		/>
	);
}

CustomAndPredefinedColors.args = {
	disabled: false,
	label: 'Custom Colors',
	small: false,
	title: 'Default',
};
export function CustomPalette(args: any) {
	const [customColors, setCustoms] = useState([
		'008000',
		'00FFFF',
		'0000FF',
		'blue',
		'black',
		'var(--blue)',
	]);

	const [color, setColor] = useState(customColors[0]);

	return (
		<ClayColorPicker
			colors={customColors}
			disabled={args.disabled}
			label={args.label}
			name="colorPicker2"
			onChange={setColor}
			onColorsChange={setCustoms}
			showHex={args.showHex}
			showPalette={false}
			small={args.small}
			title={args.title}
			value={color}
		/>
	);
}

CustomPalette.args = {
	disabled: false,
	label: '',
	showHex: true,
	small: false,
	title: 'Default',
};
export function Native(args: any) {
	const [color, setColor] = React.useState('FFFFFF');

	return (
		<ClayColorPicker
			disabled={args.disabled}
			label={args.label}
			onValueChange={setColor}
			showHex={args.showHex}
			small={args.small}
			title={args.title}
			useNative
			value={color}
		/>
	);
}

Native.args = {
	disabled: false,
	label: 'Default Colors',
	showHex: true,
	small: false,
	title: 'Default',
};
export function Validation() {
	const [color, setColor] = useState('');

	const valid = color.length === 8;

	return (
		<ClayForm.Group className={!valid ? 'has-error' : ''}>
			<ClayColorPicker onChange={setColor} value={color} />

			{!valid && (
				<ClayForm.FeedbackGroup>
					<ClayForm.FeedbackItem>
						<ClayForm.FeedbackIndicator symbol="exclamation-full" />
						Input must be 6 letters long
					</ClayForm.FeedbackItem>
				</ClayForm.FeedbackGroup>
			)}
		</ClayForm.Group>
	);
}
