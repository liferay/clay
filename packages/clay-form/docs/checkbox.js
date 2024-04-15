/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {ClayCheckbox} from '@clayui/form';
import React from 'react';

const checkboxContainerPropsImportsCode = `import {ClayCheckbox} from '@clayui/form';
`;

export const CheckboxContainerProps = () => {
	const scope = {ClayCheckbox};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	const data = {
		id: 'test'
	};

	return (
		<ClayCheckbox
			aria-label="I'm checked indefinitely"
			checked={true}
			containerProps={data}
			onChange={() => setValue(val => !val)}
		/>
	);
}

render(<Component />)`;

	return (
		<Editor
			code={code}
			imports={checkboxContainerPropsImportsCode}
			scope={scope}
		/>
	);
};

const checkboxIndeterminateImportsCode = `import {ClayCheckbox} from '@clayui/form';
`;

export const CheckboxIndeterminate = () => {
	const scope = {ClayCheckbox};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<ClayCheckbox
			aria-label="I'm indeterminate"
			checked={value}
			onChange={() => setValue(val => !val)}
			indeterminate
		/>
	);
}

render(<Component />)`;

	return (
		<Editor
			code={code}
			imports={checkboxIndeterminateImportsCode}
			scope={scope}
		/>
	);
};

const checkboxesInlineImportsCode = `import {ClayCheckbox} from '@clayui/form';
`;

export const CheckboxesInline = () => {
	const scope = {ClayCheckbox};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<>
			<ClayCheckbox
				aria-label="Option 1"
				checked={value}
				onChange={() => setValue(val => !val)}
				label="Option 1"
				inline
			/>
			<ClayCheckbox
				aria-label="Option 2"
				checked={value}
				onChange={() => setValue(val => !val)}
				label="Option 2"
				inline
			/>
			<ClayCheckbox
				aria-label="Option 3"
				checked={value}
				onChange={() => setValue(val => !val)}
				label="Option 3"
				inline
			/>
		</>
	);
}

render(<Component />)`;

	return (
		<Editor
			code={code}
			imports={checkboxesInlineImportsCode}
			scope={scope}
		/>
	);
};

const checkboxLabelImportsCode = `import {ClayCheckbox} from '@clayui/form';
`;

export const CheckboxLabel = () => {
	const scope = {ClayCheckbox};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<ClayCheckbox
			aria-label="Option 1"
			checked={value}
			onChange={() => setValue(val => !val)}
			label="Option 1"
		/>
	);
}

render(<Component />)`;

	return (
		<Editor code={code} imports={checkboxLabelImportsCode} scope={scope} />
	);
};

const checkboxWithCallbackImportsCode = `import {ClayCheckbox} from '@clayui/form';
`;

export const CheckboxWithCallback = () => {
	const scope = {ClayCheckbox};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<ClayCheckbox
			checked={value}
			onChange={() => setValue(val => !val)}
		/>
	);
}

render(<Component />)`;

	return (
		<Editor
			code={code}
			imports={checkboxWithCallbackImportsCode}
			scope={scope}
		/>
	);
};
