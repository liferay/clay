/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {Option, Picker, Text} from '@clayui/core';
import DropDown from '@clayui/drop-down';
import Form from '@clayui/form';
import Icon from '@clayui/icon';
import Label from '@clayui/label';
import Layout from '@clayui/layout';
import {useId} from '@clayui/shared';
import React from 'react';

const PickerWidthExample = () => {
	const imports = `import {Option, Picker} from '@clayui/core';
import Form from '@clayui/form';
import React from 'react';`;

	const code = `const CustomWidth = () => {
	return (
		<div style={{width: '100px'}}>
			<Form.Group>
				<label htmlFor="picker" id="picker-label">
					Year
				</label>
				<Picker
					width={85}
					aria-labelledby="picker-label"
					id="picker"
					items={[
						'2020',
						'2021',
						'2022',
						'2023',
						'2024',
						'2025',
						'2026',
						'2027',
						'2028',
					]}
					placeholder="Year"
				>
					{(item) => <Option key={item}>{item}</Option>}
				</Picker>
			</Form.Group>
		</div>
	);
};

render(<CustomWidth />)`;

	return (
		<Editor code={code} imports={imports} scope={{Form, Option, Picker}} />
	);
};

const exampleImports = `import {Option, Picker} from '@clayui/core';
import Form from '@clayui/form';
import React from 'react';`;

const exampleCode = `const SelectAnFruit = () => {
  return (
    <div style={{width: '150px'}}>
			<Form.Group>
        <label htmlFor="picker" id="picker-label">
					Choose a fruit
				</label>
				<Picker
          aria-labelledby="picker-label"
          id="picker"
					items={[
						'Apple',
						'Banana',
						'Mangos',
						'Blueberry',
						'Boysenberry',
						'Cherry',
						'Cranberry',
						'Eggplant',
						'Fig',
						'Grape',
						'Guava',
						'Huckleberry',
					]}
          placeholder="Select a fruit"
				>
					{(item) => <Option key={item}>{item}</Option>}
				</Picker>
			</Form.Group>
		</div>
  );
};

render(<SelectAnFruit />)`;

const PickerExample = () => {
	const scope = {Form, Option, Picker};

	return <Editor code={exampleCode} imports={exampleImports} scope={scope} />;
};

const exampleTriggerImports = `import {Option, Picker} from '@clayui/core';
import Form from '@clayui/form';
import Icon from '@clayui/icon';
import React from 'react';`;

const exampleTriggerCode = `const Trigger = React.forwardRef(({children, ...otherProps}, ref) => (
	<div ref={ref} {...otherProps} tabIndex={0}>
		<Icon className="mr-2" symbol="user" />
		{children}
	</div>
));

const CustomTrigger = () => {
	const pickerId = useId();
	const labelId = useId();

  return (
    <div style={{width: '150px'}}>
			<Form.Group>
				<label htmlFor={pickerId} id={labelId}>
					Choose a user
				</label>
				<Picker
					aria-labelledby={labelId}
					as={Trigger}
					id={pickerId}
					items={['Liam', 'Noah', 'Oliver']}
				>
					{(item) => <Option key={item}>{item}</Option>}
				</Picker>
			</Form.Group>
		</div>
  );
};

render(<CustomTrigger />)`;

const PickerTriggerExample = () => {
	const scope = {Form, Icon, Option, Picker, React, useId};

	return (
		<Editor
			code={exampleTriggerCode}
			imports={exampleTriggerImports}
			scope={scope}
		/>
	);
};

const exampleOptionsImports = `import {Option, Picker} from '@clayui/core';
import Form from '@clayui/form';
import React from 'react';`;

const exampleOptionsCode = `const CustomOptions = () => {
	const pickerId = useId();
	const labelId = useId();

  return (
    <div style={{width: '150px'}}>
			<Form.Group>
				<label htmlFor={pickerId} id={labelId}>
					Choose a user
				</label>
				<Picker
					aria-labelledby={labelId}
					id={pickerId}
					items={['Liam', 'Noah', 'Oliver']}
				>
					{(item) => (
						<Option
							key={item}
							textValue={item}
						>
							<Layout.ContentRow>
								<Layout.ContentCol expand>
									<Text
										size={3}
										weight="semi-bold"
									>
										{item}
									</Text>
									<Text
										aria-hidden
										color="secondary"
										size={2}
									>
										Description
									</Text>
								</Layout.ContentCol>
								<Layout.ContentCol>
									<Label
										aria-hidden
										displayType="success"
									>
										Active
									</Label>
								</Layout.ContentCol>
							</Layout.ContentRow>
						</Option>
					)}
				</Picker>
			</Form.Group>
		</div>
  );
};

render(<CustomOptions />)`;

const PickerOptionsxample = () => {
	const scope = {
		Form,
		Icon,
		Label,
		Layout,
		Option,
		Picker,
		React,
		Text,
		useId,
	};

	return (
		<Editor
			code={exampleOptionsCode}
			imports={exampleOptionsImports}
			scope={scope}
		/>
	);
};

const exampleGroupImports = `import {Option, Picker} from '@clayui/core';
import Form from '@clayui/form';
import Icon from '@clayui/icon';
import React from 'react';`;

const exampleGroupCode = `const Trigger = React.forwardRef(({children, ...otherProps}, ref) => (
	<div ref={ref} {...otherProps} tabIndex={0}>
		<Icon className="mr-2" symbol="user" />
		{children}
	</div>
));

const CustomTrigger = () => {
	const pickerId = useId();
	const labelId = useId();

  return (
    <div style={{width: '150px'}}>
			<Form.Group>
				<label htmlFor={pickerId} id={labelId}>
					Select an option
				</label>
				<Picker
					aria-labelledby={labelId}
					id={pickerId}
					items={[
						{
							items: [
								{label: 'Apple', value: '1'},
								{label: 'Banana', value: '2'},
								{label: 'Mangos', value: '3'},
							],
							label: 'Fruit',
						},
						{
							items: [
								{label: 'Onions', value: '4'},
								{label: 'abc', value: '5'},
								{label: 'def', value: '6'},
							],
							label: 'Vegetable',
						},
					]}
				>
					{(group) => (
						<DropDown.Group
							header={group.label}
							items={group.items}
						>
							{(item) => (
								<Option key={item.value}>{item.label}</Option>
							)}
						</DropDown.Group>
					)}
				</Picker>
			</Form.Group>
		</div>
  );
};

render(<CustomTrigger />)`;

const PickerGroupExample = () => {
	const scope = {DropDown, Form, Option, Picker, React, useId};

	return (
		<Editor
			code={exampleGroupCode}
			imports={exampleGroupImports}
			scope={scope}
		/>
	);
};
export {
	PickerWidthExample,
	PickerExample,
	PickerGroupExample,
	PickerTriggerExample,
	PickerOptionsxample,
};
