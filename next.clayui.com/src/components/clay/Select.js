/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClaySelect, {ClaySelectWithOption} from '@clayui/select';
import Editor from './Editor';
import React from 'react';

export const Select = () => {
	const scope = {ClaySelect};
	const code = `const Component = () => {
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

	return <Editor code={code} scope={scope} />;
};

export const SelectWithOption = () => {
	const scope = {ClaySelectWithOption};
	const code = `const Component = () => {
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

	return <Editor code={code} scope={scope} />;
};
