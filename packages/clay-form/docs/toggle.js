/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {ClayRadioGroup, ClayToggle} from '@clayui/form';
import React from 'react';

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
	const [toggled1, setToggle1, toggled2, setToggle2, toggled3, setToggle3] = useState(false);

	return (
		<div style={{display: 'flex', justifyContent: 'space-around'}}>
			<ClayToggle
				label="Checkbox"
				onToggle={setToggle1}
				toggled={toggled1}
			/>

			<ClayToggle
				label="with symbol"
				onToggle={setToggle2}
				spritemap={spritemap}
				symbol={{
					off: 'times',
					on: 'check',
				}}
				toggled={toggled2}
			/>

			<ClayToggle
				disabled
				label="Disabled"
				onToggle={setToggle3}
				toggled={toggled3}
			/>
		</div>
	);
}

render(<Component />);`;

const toggleImports = `import React from 'react';
import {ClayToggle} from '@clayui/form';`;

export const Toggle = () => {
	const scope = {ClayToggle};
	const code = ToggleCode;

	return <Editor code={code} imports={toggleImports} scope={scope} />;
};

const ToggleSmCode = `const Component = () => {
	const [toggled1, setToggle1, toggled2, setToggle2, toggled3, setToggle3] = useState(false);

	return (
		<div>
			<div className="form-group">
				<ClayToggle
					label="Checkbox"
					onToggle={setToggle1}
					sizing="sm"
					toggled={toggled1}
				/>
			</div>

			<div className="form-group">
				<ClayToggle
					label="with symbol"
					onToggle={setToggle2}
					sizing="sm"
					spritemap={spritemap}
					symbol={{
						off: 'times',
						on: 'check',
					}}
					toggled={toggled2}
				/>
			</div>

			<div className="form-group">
				<ClayToggle
					disabled
					label="Disabled"
					onToggle={setToggle3}
					sizing="sm"
					toggled={toggled3}
				/>
			</div>
		</div>
	);
}

render(<Component />);`;

const toggleSmImports = `import React from 'react';
import {ClayToggle} from '@clayui/form';`;

export const ToggleSm = () => {
	const scope = {ClayToggle};
	const code = ToggleSmCode;

	return <Editor code={code} imports={toggleSmImports} scope={scope} />;
};
