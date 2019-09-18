/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayForm, {
	ClayCheckbox,
	ClayInput,
	ClayInputWithAutocomplete,
	ClayMultiSelectInput,
	ClayRadio,
	ClayRadioGroup,
	ClaySelect,
	ClaySelectWithOption,
} from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

import '@clayui/css/lib/css/atlas.css';
import {boolean, text} from '@storybook/addon-knobs';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

const ClayMultiSelectWithState = (props: any) => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(['one']);

	return (
		<ClayMultiSelectInput
			{...props}
			inputName="myInput"
			inputValue={value}
			items={items}
			onInputChange={setValue}
			onItemsChange={setItems}
			spritemap={spritemap}
		/>
	);
};

const ClayMultiSelectWithAutocomplete = () => {
	const [value, setValue] = React.useState('');
	const [selectedItems, setSelectedItems] = React.useState(['one']);

	const sourceItems = ['one', 'two', 'three', 'four'];

	return (
		<ClayMultiSelectInput
			inputName="myInput"
			inputValue={value}
			items={selectedItems}
			onInputChange={setValue}
			onItemsChange={setSelectedItems}
			sourceItems={sourceItems}
			spritemap={spritemap}
		/>
	);
};

const AutoCompleteWithState = ({items, ...otherProps}: any) => {
	const [value, setValue] = React.useState('');

	const filteredItems = items.filter((val: any) =>
		(typeof val === 'string'
			? val
			: `${val.firstName} ${val.lastName}`
		).match(new RegExp(value, 'gi'))
	);

	return (
		<div className="sheet">
			<div className="form-group">
				<ClayInputWithAutocomplete
					{...otherProps}
					items={filteredItems}
					loading={boolean('Loading', false)}
					onItemSelect={(val: any) =>
						setValue(
							typeof val === 'string'
								? val
								: `${val.firstName} ${val.lastName}`
						)
					}
					onValueChange={setValue}
					value={value}
				/>
			</div>
		</div>
	);
};

storiesOf('Components|ClayForm', module)
	.add('default', () => <ClayForm />)
	.add('InputWithMultiSelect', () => (
		<ClayMultiSelectWithState
			disabled={boolean('Disabled all', false)}
			disabledClearAll={boolean('Disabled Clear All', false)}
			isValid={boolean('isValid', true)}
		/>
	))
	.add('InputWithMultiSelect w/ sourceItems', () => (
		<ClayMultiSelectWithAutocomplete />
	))
	.add('InputWithMultiSelect w/ group', () => {
		const isValid = boolean('isValid', true);

		return (
			<div className="sheet">
				<ClayForm.Group className={!isValid ? 'has-error' : ''}>
					<label>{'Composed MultiSelect'}</label>

					<ClayInput.Group>
						<ClayInput.GroupItem>
							<ClayMultiSelectWithState
								isValid={isValid}
								items={['one', 'two', 'three', 'four']}
							/>

							<ClayForm.FeedbackGroup>
								<ClayForm.Text>
									{'Simple help comment..'}
								</ClayForm.Text>
							</ClayForm.FeedbackGroup>

							{!isValid && (
								<ClayForm.FeedbackGroup>
									<ClayForm.FeedbackItem>
										<ClayForm.FeedbackIndicator
											spritemap={spritemap}
											symbol="info-circle"
										/>

										{'You made an error'}
									</ClayForm.FeedbackItem>
								</ClayForm.FeedbackGroup>
							)}
						</ClayInput.GroupItem>

						<ClayInput.GroupItem shrink>
							<ClayButton
								displayType="secondary"
								onClick={() => {}}
							>
								{'Select'}
							</ClayButton>
						</ClayInput.GroupItem>
					</ClayInput.Group>
				</ClayForm.Group>
			</div>
		);
	})
	.add('InputWithAutocomplete', () => (
		<AutoCompleteWithState items={['one', 'two', 'three', 'four']} />
	))
	.add('InputWithAutocomplete w/ objects', () => (
		<AutoCompleteWithState
			items={[
				{firstName: 'Joe', lastName: 'Bloggs'},
				{firstName: 'Steve', lastName: 'Nash'},
				{firstName: 'Abraham', lastName: 'Kuyper'},
			]}
			itemSelector={(person: any) =>
				`${person.firstName} ${person.lastName}`
			}
		/>
	));

const ClayCheckboxWithState = () => {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayCheckbox
			checked={value}
			disabled={boolean('Disabled', false)}
			indeterminate={boolean('Indeterminate', false)}
			label={text('Label', 'Default')}
			onChange={() => setValue(val => !val)}
		/>
	);
};

storiesOf('Components|ClayCheckbox', module)
	.add('default', () => <ClayCheckboxWithState />)
	.add('hidden label w/ aria-label', () => (
		<ClayCheckbox
			aria-label="hello! Can you see me?"
			checked={boolean('Checked', false)}
			onChange={() => {}}
		/>
	))
	.add('custom JSX content', () => (
		<ClayCheckbox
			checked={boolean('Checked', false)}
			label="Badge"
			onChange={() => {}}
		>
			<span className="badge badge-primary">
				<span className="badge-item badge-item-expand">{'10'}</span>
			</span>
		</ClayCheckbox>
	));

const RadioGroupWithState = ({inline}: {inline?: boolean}) => {
	const [value, setValue] = React.useState<string>('one');

	return (
		<ClayRadioGroup
			inline={inline}
			onSelectedValueChange={val => setValue(val as string)}
			selectedValue={value}
		>
			<ClayRadio label="One" value="one" />
			<ClayRadio label="Two" value="two" />
			<ClayRadio label="Three" value="three" />
		</ClayRadioGroup>
	);
};

storiesOf('Components|ClayRadioGroup', module)
	.add('default', () => <RadioGroupWithState />)
	.add('inline', () => <RadioGroupWithState inline />);

const options = [
	{
		label: 'Option 1',
		value: '1',
	},
	{
		label: 'Option 2',
		value: '2',
	},
];

storiesOf('Components|ClaySelect', module)
	.add('with low-level APIs (composition)', () => (
		<div className="sheet">
			<div className="form-group">
				<label htmlFor="mySelectId">{'Select Label'}</label>
				<ClaySelect
					aria-label="Select Label"
					disabled={boolean('Disabled', false)}
					id="mySelectId"
					multiple={boolean('Multiple', false)}
				>
					{options.map(item => (
						<ClaySelect.Option
							key={item.value}
							label={item.label}
							value={item.value}
						/>
					))}
				</ClaySelect>
			</div>
		</div>
	))
	.add('with high-level', () => (
		<div className="sheet">
			<div className="form-group">
				<label htmlFor="mySelectId">{'Select Label'}</label>
				<ClaySelectWithOption
					aria-label="Select Label"
					disabled={boolean('Disabled', false)}
					id="mySelectId"
					multiple={boolean('Multiple', false)}
					options={options}
				/>
			</div>
		</div>
	));
