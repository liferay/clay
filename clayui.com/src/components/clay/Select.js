/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClaySelect, ClaySelectWithOption} from '@clayui/form';
import React from 'react';

import Editor from '../Editor';

const selectImportsCode = `import {ClaySelect} from '@clayui/form';
`;

const SelectCode = `const Component = () => {
	const options = [
		{
			label: 'Option 1',
			value: '1',
		},
		{
			label: 'Option 2',
			value: '2',
		},
	]
	return (
		<ClaySelect
			aria-label="Select Label"
			id="mySelectId"
		>
			{options.map(item => (
				<ClaySelect.Option
					key={item.value}
					label={item.label}
					value={item.value}
				/>
			))}
		</ClaySelect>
	);
}

render(<Component />)`;

export const Select = () => {
	const scope = {ClaySelect};
	const code = SelectCode;

	return <Editor code={code} imports={selectImportsCode} scope={scope} />;
};

const selectWithOptionImportsCode = `import {ClaySelectWithOption} from '@clayui/form';
`;

const SelectWithOptionCode = `const Component = () => {
	const options = [
		{
			label: 'Option 1',
			value: '1',
		},
		{
			label: 'Option 2',
			value: '2',
		},
	]
	return (
		<ClaySelectWithOption
			aria-label="Select Label"
			id="mySelectId"
			options={options}
		/>
	);
}

render(<Component />)`;

export const SelectWithOption = () => {
	const scope = {ClaySelectWithOption};
	const code = SelectWithOptionCode;

	return (
		<Editor
			code={code}
			imports={selectWithOptionImportsCode}
			scope={scope}
		/>
	);
};
