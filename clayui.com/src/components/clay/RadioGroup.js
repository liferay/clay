/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayRadio, ClayRadioGroup} from '@clayui/form';
import React, {useState} from 'react';

import Editor from '../Editor';

const radioGroupImportsCode = `import {ClayRadio, ClayRadioGroup} from '@clayui/form';
import React, {useState} from 'react';`;

const radioGroupCode = `const Component = () => {
	const [value, setValue] = useState('one');

	return (
		<ClayRadioGroup
			inline
			onSelectedValueChange={val => setValue(val)}
			selectedValue={value}
		>
			<ClayRadio label="One" value="one" />
			<ClayRadio label="Two" value="two" />
			<ClayRadio label="Three" value="three" />
		</ClayRadioGroup>
	);
}

render(<Component />)`;

const RadioGroup = () => {
	const scope = {ClayRadio, ClayRadioGroup, useState};

	return (
		<Editor
			code={radioGroupCode}
			imports={radioGroupImportsCode}
			scope={scope}
		/>
	);
};

export {RadioGroup};
