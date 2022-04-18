/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';

import {ClayRadioGroup, ClayToggle} from '../src';

export default {
	component: ClayToggle,
	title: 'Design System/Components/Toggle',
};

export const Checkbox = () => {
	const [toggled, setToggle] = useState<boolean>(false);

	return (
		<>
			<ClayToggle
				aria-label="Toggle checkbox"
				label="Checkbox"
				onToggle={setToggle}
				toggled={toggled}
			/>

			<br />
			<br />

			<ClayToggle
				aria-label="Toggle checkbox with symbol"
				label="with symbol"
				onToggle={setToggle}
				symbol={{
					off: 'times',
					on: 'check',
				}}
				toggled={toggled}
			/>

			<br />
			<br />

			<ClayToggle
				aria-label="Toggle checkbox disabled"
				disabled
				label="Disabled"
				onToggle={setToggle}
				toggled={toggled}
			/>
		</>
	);
};

export const RadioGroup = () => {
	const [value, setValue] = useState<string>('foo');

	return (
		<ClayRadioGroup
			onSelectedValueChange={(val) => setValue(val as string)}
			selectedValue={value}
		>
			<ClayToggle aria-label="Radio Foo" label="Foo" value="foo" />

			<ClayToggle aria-label="Radio Bar" label="Bar" value="bar" />

			<ClayToggle aria-label="Radio Baz" label="Baz" value="baz" />
		</ClayRadioGroup>
	);
};
