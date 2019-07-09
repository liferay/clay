/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayForm from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

import '@clayui/css/lib/css/atlas.css';
import {boolean, text} from '@storybook/addon-knobs';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayMultiSelectWithState = (props: any) => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	return (
		<div className="sheet">
			<ClayForm.MultiSelect
				{...props}
				inputValue={value}
				items={items}
				onInputChange={setValue}
				onItemsChange={setItems}
				spritemap={spritemap}
			/>
		</div>
	);
};

const ClayMultiSelectWithAutocomplete = () => {
	const [value, setValue] = React.useState('');
	const [selectedItems, setSelectedItems] = React.useState(['one']);

	const sourceItems = ['one', 'two', 'three', 'four'];

	return (
		<div className="sheet">
			<ClayForm.MultiSelect
				inputValue={value}
				items={selectedItems}
				onInputChange={setValue}
				onItemsChange={setSelectedItems}
				sourceItems={sourceItems}
				spritemap={spritemap}
			/>
		</div>
	);
};

storiesOf('ClayForm', module)
	.add('default', () => <ClayForm />)
	.add('InputWithMultiSelect', () => (
		<ClayMultiSelectWithState
			errorMessage="you done goofed up"
			helpText="You can use a comma to enter tags."
			isValid={boolean('isValid', true)}
			label={text('Label', 'Multi-Select')}
		/>
	))
	.add('InputWithMultiSelect w/ sourceItems', () => (
		<ClayMultiSelectWithAutocomplete />
	));

const ClayCheckboxWithState = () => {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayForm.Checkbox
			checked={value}
			disabled={boolean('Disabled', false)}
			indeterminate={boolean('Indeterminate', false)}
			label={text('Label', 'Default')}
			onChange={() => setValue(val => !val)}
		/>
	);
};

storiesOf('ClayCheckbox', module)
	.add('default', () => <ClayCheckboxWithState />)
	.add('hidden label w/ aria-label', () => (
		<ClayForm.Checkbox
			aria-label="hello! Can you see me?"
			checked={boolean('Checked', false)}
			onChange={() => {}}
		/>
	))
	.add('custom JSX content', () => (
		<ClayForm.Checkbox
			checked={boolean('Checked', false)}
			label="Badge"
			onChange={() => {}}
		>
			<span className="badge badge-primary">
				<span className="badge-item badge-item-expand">{'10'}</span>
			</span>
		</ClayForm.Checkbox>
	));

const RadioGroupWithState = ({inline}: {inline?: boolean}) => {
	const [value, setValue] = React.useState<string>('one');

	return (
		<ClayForm.RadioGroup
			inline={inline}
			onSelectedValueChange={val => setValue(val as string)}
			selectedValue={value}
		>
			<ClayForm.Radio label="One" value="one" />
			<ClayForm.Radio label="Two" value="two" />
			<ClayForm.Radio label="Three" value="three" />
		</ClayForm.RadioGroup>
	);
};

storiesOf('ClayRadioGroup', module)
	.add('default', () => <RadioGroupWithState />)
	.add('inline', () => <RadioGroupWithState inline />);
