/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayCheckbox} from '@clayui/form';
import React, {useState} from 'react';

import Editor from '../Editor';

const spritemap = '/images/icons/icons.svg';

const checkboxImportsCode = `import {ClayCheckbox} from '@clayui/form';
import React from 'react';`;

export const Checkbox = () => {
	const scope = {ClayCheckbox, spritemap};
	const code = `const Component = () => {
	
	return (
		<ClayCheckbox
			aria-label="hello! Can you see me?"
			checked={true}
			readOnly
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} imports={checkboxImportsCode} scope={scope} />;
};

const checkboxContainerPropsImportsCode = `import {ClayCheckbox} from '@clayui/form';
import React, {useState} from 'react';`;

export const CheckboxContainerProps = () => {
	const scope = {ClayCheckbox, spritemap, useState};
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
import React, {useState} from 'react';`;

export const CheckboxIndeterminate = () => {
	const scope = {ClayCheckbox, spritemap, useState};
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
import React, {useState} from 'react';`;

export const CheckboxesInline = () => {
	const scope = {ClayCheckbox, spritemap, useState};
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
import React, {useState} from 'react';`;

export const CheckboxLabel = () => {
	const scope = {ClayCheckbox, spritemap, useState};
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
import React, {useState} from 'react';`;

export const CheckboxWithCallback = () => {
	const scope = {ClayCheckbox, spritemap, useState};
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
