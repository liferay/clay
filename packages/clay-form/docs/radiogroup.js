/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {ClayRadio, ClayRadioGroup} from '@clayui/form';
import React from 'react';

const radioGroupImportsCode = `import {ClayRadio, ClayRadioGroup} from '@clayui/form';
`;

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
	const scope = {ClayRadio, ClayRadioGroup};

	return (
		<Editor
			code={radioGroupCode}
			imports={radioGroupImportsCode}
			scope={scope}
		/>
	);
};

export {RadioGroup};
