/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayForm from '../src/Form';
import {
	ClayCheckbox,
	ClayInput,
	ClayRadio,
	ClayRadioGroup,
	ClaySelect,
	ClaySelectWithOption,
} from '../src';

import '@clayui/css/lib/css/atlas.css';
import {boolean, text} from '@storybook/addon-knobs';

const ClayCheckboxWithState = () => {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayCheckbox
			checked={value}
			disabled={boolean('Disabled', false)}
			indeterminate={boolean('Indeterminate', false)}
			label={text('Label', 'Default')}
			onChange={() => setValue(val => !val)}
			value="default"
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

storiesOf('Components|ClayForm', module)
	.add('default', () => (
		<div className="sheet">
			<h4 className="sheet-subtitle">{'Form Example'}</h4>
			<ClayForm>
				<ClayForm.Group className="form-group-sm">
					<label htmlFor="basicInput">{'Name'}</label>
					<ClayInput placeholder="Name" type="text" />
				</ClayForm.Group>
				<ClayForm.Group className="form-group-sm">
					<label htmlFor="basicInput">{'Description'}</label>
					<textarea
						className="form-control"
						placeholder="Description"
					/>
				</ClayForm.Group>
			</ClayForm>
		</div>
	))
	.add('validation', () => (
		<div className="sheet">
			<h4 className="sheet-subtitle">{'Form Validation Example'}</h4>
			<ClayForm>
				<ClayForm.Group className="has-success">
					<label htmlFor="basicInput">{'Name'}</label>
					<ClayInput placeholder="Name" type="text" />
					<ClayForm.FeedbackGroup>
						<ClayForm.FeedbackItem>
							{'This is a form-feedback-item.'}
						</ClayForm.FeedbackItem>
						<ClayForm.FeedbackItem>
							<ClayForm.FeedbackIndicator
								spritemap={spritemap}
								symbol="check-circle-full"
							/>
							{
								'This is a form-feedback-item with a check feedback indicator.'
							}
						</ClayForm.FeedbackItem>
					</ClayForm.FeedbackGroup>
				</ClayForm.Group>
				<ClayForm.Group className="has-warning">
					<label htmlFor="basicInput">{'Description'}</label>
					<textarea
						className="form-control"
						placeholder="Description"
					/>
					<ClayForm.FeedbackGroup>
						<ClayForm.FeedbackItem>
							{'This is a form-feedback-item.'}
						</ClayForm.FeedbackItem>
						<ClayForm.FeedbackItem>
							<ClayForm.FeedbackIndicator
								spritemap={spritemap}
								symbol="warning-full"
							/>
							{
								'This is a form-feedback-item with a warning feedback indicator.'
							}
						</ClayForm.FeedbackItem>
					</ClayForm.FeedbackGroup>
				</ClayForm.Group>
				<ClayForm.Group className="has-error">
					<label htmlFor="basicInput">{'Password'}</label>
					<ClayInput placeholder="Name" type="password" />
					<ClayForm.FeedbackGroup>
						<ClayForm.FeedbackItem>
							{'This is a form-feedback-item.'}
						</ClayForm.FeedbackItem>
						<ClayForm.FeedbackItem>
							<ClayForm.FeedbackIndicator
								spritemap={spritemap}
								symbol="exclamation-full"
							/>
							{
								'This is a form-feedback-item with a error feedback indicator.'
							}
						</ClayForm.FeedbackItem>
					</ClayForm.FeedbackGroup>
				</ClayForm.Group>
			</ClayForm>
		</div>
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
