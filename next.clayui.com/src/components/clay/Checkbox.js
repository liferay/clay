/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm from '@clayui/form';
import Editor from './Editor';
import React, {useState} from 'react';

const spritemap = '/images/icons/icons.svg';

export const Checkbox = () => {
	const scope = {ClayForm, spritemap};
	const code = `const Component = () => {
	
	return (
		<ClayForm.Checkbox
			aria-label="hello! Can you see me?"
			checked={true}
			readOnly
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const CheckboxContainerProps = () => {
	const scope = {ClayForm, spritemap, useState};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	const data = {
		id: 'test'
	};

	return (
		<ClayForm.Checkbox
			aria-label="I'm checked indefinitely"
			checked={true}
			containerProps={data}
			onChange={() => setValue(val => !val)}
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const CheckboxIndeterminate = () => {
	const scope = {ClayForm, spritemap, useState};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<ClayForm.Checkbox
			aria-label="I'm indeterminate"
			checked={value}
			onChange={() => setValue(val => !val)}
			indeterminate
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const CheckboxesInline = () => {
	const scope = {ClayForm, spritemap, useState};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<>
			<ClayForm.Checkbox
				aria-label="Option 1"
				checked={value}
				onChange={() => setValue(val => !val)}
				label="Option 1"
				inline
			/>
			<ClayForm.Checkbox
				aria-label="Option 2"
				checked={value}
				onChange={() => setValue(val => !val)}
				label="Option 2"
				inline
			/>
			<ClayForm.Checkbox
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

	return <Editor code={code} scope={scope} />;
};

export const CheckboxLabel = () => {
	const scope = {ClayForm, spritemap, useState};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<ClayForm.Checkbox
			aria-label="Option 1"
			checked={value}
			onChange={() => setValue(val => !val)}
			label="Option 1"
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};

export const CheckboxWithCallback = () => {
	const scope = {ClayForm, spritemap, useState};
	const code = `const Component = () => {
	const [value, setValue] = useState(false);

	return (
		<ClayForm.Checkbox
			checked={value}
			onChange={() => setValue(val => !val)}
		/>
	);
}

render(<Component />)`;

	return <Editor code={code} scope={scope} />;
};
