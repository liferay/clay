/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {storiesOf} from '@storybook/react';
import * as React from 'react';

import {
	ClayCheckbox,
	ClayInput,
	ClayRadio,
	ClayRadioGroup,
	ClaySelect,
	ClaySelectWithOption,
} from '../src';
import ClayForm from '../src/Form';

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {boolean, text, select} from '@storybook/addon-knobs';

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

storiesOf('Components|ClayForm', module).add('Feedback', () => (
	<div className="sheet">
		<ClayForm>
			<ClayForm.Group className="has-error">
				<label>{'Name'}</label>
				<ClayInput placeholder="Enter some text..." type="text" />

				<ClayForm.FeedbackGroup>
					<ClayForm.FeedbackItem>
						<ClayForm.FeedbackIndicator
							spritemap={spritemap}
							symbol="exclamation-full"
						/>
						{'This is a description of the error!'}
					</ClayForm.FeedbackItem>
				</ClayForm.FeedbackGroup>
			</ClayForm.Group>
		</ClayForm>
	</div>
));

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

storiesOf('Components|ClayInput', module)
	.add('default', () => (
		<div className="sheet">
			<ClayForm.Group>
				<label htmlFor="basicInputText">{'Name'}</label>
				<ClayInput
					disabled={boolean('Disabled ', false)}
					id="basicInputText"
					placeholder="Insert your name here"
					readOnly={boolean('Read Only ', false)}
					sizing={select(
						'Sizing',
						{
							lg: 'lg',
							sm: 'sm',
						},
						undefined
					)}
					type="text"
				/>
			</ClayForm.Group>
		</div>
	))
	.add('group separated', () => (
		<div className="sheet">
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem shrink>
						<ClayInput.GroupText>{'@'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem>
						<ClayInput placeholder="Username" type="text" />
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem>
						<ClayInput placeholder="Email" type="text" />
					</ClayInput.GroupItem>
					<ClayInput.GroupItem shrink>
						<ClayInput.GroupText>{'@'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem>
						<ClayInput placeholder="liferay" type="text" />
					</ClayInput.GroupItem>
					<ClayInput.GroupItem shrink>
						<ClayInput.GroupText>{'.com'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
		</div>
	))
	.add('group connected', () => (
		<div className="sheet">
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem prepend shrink>
						<ClayInput.GroupText>{'@'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem append>
						<ClayInput placeholder="Username" type="text" />
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem prepend>
						<ClayInput placeholder="Email" type="text" />
					</ClayInput.GroupItem>
					<ClayInput.GroupItem prepend shrink>
						<ClayInput.GroupText>{'@'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem prepend>
						<ClayInput placeholder="liferay" type="text" />
					</ClayInput.GroupItem>
					<ClayInput.GroupItem append shrink>
						<ClayInput.GroupText>{'.com'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
		</div>
	))
	.add('group mixed', () => (
		<div className="sheet">
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem shrink>
						<ClayInput.GroupText>{'@'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem prepend>
						<ClayInput placeholder="Username" type="text" />
					</ClayInput.GroupItem>
					<ClayInput.GroupItem append shrink>
						<button className="btn btn-secondary" type="submit">
							{'Submit'}
						</button>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
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
