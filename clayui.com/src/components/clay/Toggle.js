/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayRadioGroup, ClayToggle} from '@clayui/form';
import React from 'react';

import Editor from '../Editor';

const ToggleWithRadioGroup = `const Component = () => {
	const [value, setValue] = useState('foo');

	return (
		<ClayRadioGroup
			onSelectedValueChange={setValue}
			selectedValue={value}
			style={{display: 'flex', justifyContent: 'space-around'}}
		>
			<ClayToggle label="Foo" value="foo" />

			<ClayToggle label="Bar" value="bar" />

			<ClayToggle label="Baz" value="baz" />
		</ClayRadioGroup>
	);
}

render(<Component />);`;

const radioToggleImports = `import React from 'react';
import {ClayRadioGroup, ClayToggle} from '@clayui/form';;`;

export const RadioToggle = () => {
	const scope = {ClayRadioGroup, ClayToggle};
	const code = ToggleWithRadioGroup;

	return <Editor code={code} imports={radioToggleImports} scope={scope} />;
};

const ToggleCode = `const Component = () => {
	const [toggled, setToggle] = useState(false);

	return (
		<div style={{display: 'flex', justifyContent: 'space-around'}}>
			<ClayToggle
				label="Checkbox"
				onToggle={setToggle}
				toggled={toggled}
			/>

			<ClayToggle
				label="with symbol"
				onToggle={setToggle}
				spritemap={spritemap}
				symbol={{
					off: 'times',
					on: 'check',
				}}
				toggled={toggled}
			/>

			<ClayToggle
				disabled
				label="Disabled"
				onToggle={setToggle}
				toggled={toggled}
			/>
		</div>
	);
}

render(<Component />);`;

const toggleImports = `import React from 'react';
import {ClayToggle} from '@clayui/form';;`;

export const Toggle = () => {
	const scope = {ClayToggle};
	const code = ToggleCode;

	return <Editor code={code} imports={toggleImports} scope={scope} />;
};
