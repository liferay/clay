/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, {useState} from 'react';

import {ClayRadioGroup, ClayToggle} from '../src';

export default {
	argTypes: {
		sizing: {
			control: {type: 'select'},
			options: [undefined, 'sm'],
		},
	},
	component: ClayToggle,
	title: 'Design System/Components/Toggle',
};
export function Checkbox(args: any) {
	const [toggled1, setToggle1, toggled2, setToggle2, toggled3, setToggle3] =
		useState<boolean>(false);

	return (
		<>
			<ClayToggle
				aria-label="Toggle checkbox"
				label="Checkbox"
				onToggle={setToggle1}
				sizing={args.sizing}
				toggled={toggled1}
			/>

			<br />
			<br />

			<ClayToggle
				aria-label="Toggle checkbox with symbol"
				label="with symbol"
				onToggle={setToggle2}
				sizing={args.sizing}
				symbol={{
					off: 'times',
					on: 'check',
				}}
				toggled={toggled2}
			/>

			<br />
			<br />

			<ClayToggle
				aria-label="Toggle checkbox disabled"
				disabled
				label="Disabled"
				onToggle={setToggle3}
				sizing={args.sizing}
				toggled={toggled3}
			/>
		</>
	);
}
export function RadioGroup(args: any) {
	const [value, setValue] = useState<string>('foo');

	return (
		<ClayRadioGroup
			onSelectedValueChange={(val) => setValue(val as string)}
			selectedValue={value}
		>
			<ClayToggle
				aria-label="Radio Foo"
				label="Foo"
				sizing={args.sizing}
				value="foo"
			/>

			<ClayToggle
				aria-label="Radio Bar"
				label="Bar"
				sizing={args.sizing}
				value="bar"
			/>

			<ClayToggle
				aria-label="Radio Baz"
				label="Baz"
				sizing={args.sizing}
				value="baz"
			/>
		</ClayRadioGroup>
	);
}
