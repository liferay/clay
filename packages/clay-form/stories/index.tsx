/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {storiesOf} from '@storybook/react';
import React from 'react';

import {
	ClayCheckbox,
	ClayDualListBox,
	ClayInput,
	ClayRadio,
	ClayRadioGroup,
	ClaySelect,
	ClaySelectBox,
	ClaySelectWithOption,
	ClayToggle,
} from '../src';
import ClayForm from '../src/Form';

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {boolean, number, select, text} from '@storybook/addon-knobs';

const ClayCheckboxWithState = () => {
	const [value, setValue] = React.useState<boolean>(false);

	return (
		<ClayCheckbox
			checked={value}
			disabled={boolean('Disabled', false)}
			indeterminate={boolean('Indeterminate', false)}
			label={text('Label', 'Default')}
			onChange={() => setValue((val) => !val)}
			value="default"
		/>
	);
};

const moveBoxesOptions = [
	[
		{
			label: 'Discord',
			value: 'discord',
		},
		{
			label: 'Evernote',
			value: 'evernote',
		},
		{
			label: 'Facebook',
			value: 'facebook',
		},
		{
			label: 'LinkedIn',
			value: 'linkedin',
		},
	],
	[
		{
			label: 'Reddit',
			value: 'reddit',
		},
		{
			label: 'Slack',
			value: 'slack',
		},
		{
			label: 'Twitter',
			value: 'twitter',
		},
	],
];

storiesOf('Components|ClayDualListBox', module).add('default', () => {
	const [items, setItems] = React.useState(moveBoxesOptions);
	const [leftSelected, setLeftSelected] = React.useState<Array<string>>([]);
	const [rightSelected, setRightSelected] = React.useState<Array<string>>([]);

	const [firstSelectBoxItems, secondSelectBoxItems] = items;

	const leftMaxItems = number('leftMaxItems', 3);
	const rightMaxItems = number('rightMaxItems', 5);

	return (
		<ClayDualListBox
			disableLTR={
				boolean('disableLTR', false) ||
				secondSelectBoxItems.length >= rightMaxItems
			}
			disableRTL={
				boolean('disableRTL', false) ||
				firstSelectBoxItems.length >= leftMaxItems
			}
			items={items}
			left={{
				id: 'leftSelectBox',
				label: 'In Use',
				onSelectChange: setLeftSelected,
				selected: leftSelected,
			}}
			onItemsChange={setItems}
			right={{
				id: 'rightSelectBox',
				label: 'Available',
				onSelectChange: setRightSelected,
				selected: rightSelected,
			}}
			size={8}
			spritemap={spritemap}
		/>
	);
});

storiesOf('Components|ClaySelectBox', module).add('default', () => {
	const [items, setItems] = React.useState(moveBoxesOptions[0]);
	const [value, setValue] = React.useState<Array<string>>([]);

	return (
		<ClaySelectBox
			items={items}
			label="In Use"
			multiple
			onItemsChange={setItems}
			onSelectChange={setValue}
			showArrows
			size={8}
			spritemap={spritemap}
			value={value}
		/>
	);
});

storiesOf('Components|ClayForm', module).add('Feedback', () => (
	<div className="sheet">
		<ClayForm>
			<ClayForm.Group className="has-error">
				<label htmlFor="Feedback Input">{'Name'}</label>
				<ClayInput
					id="Feedback Input"
					placeholder="Enter some text..."
					type="text"
				/>

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
						<ClayInput
							aria-label="Username"
							placeholder="Username"
							type="text"
						/>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem>
						<ClayInput
							aria-label="Email"
							placeholder="Email"
							type="text"
						/>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem shrink>
						<ClayInput.GroupText>{'@'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem>
						<ClayInput
							aria-label="Email Host"
							placeholder="liferay"
							type="text"
						/>
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
						<ClayInput
							aria-label="Username"
							placeholder="Username"
							type="text"
						/>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
			<ClayForm.Group>
				<ClayInput.Group>
					<ClayInput.GroupItem prepend>
						<ClayInput
							aria-label="Email"
							placeholder="Email"
							type="text"
						/>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem prepend shrink>
						<ClayInput.GroupText>{'@'}</ClayInput.GroupText>
					</ClayInput.GroupItem>
					<ClayInput.GroupItem prepend>
						<ClayInput
							aria-label="Email Host"
							placeholder="liferay"
							type="text"
						/>
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
						<ClayInput
							aria-label="Username"
							placeholder="Username"
							type="text"
						/>
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
			onSelectedValueChange={(val) => setValue(val as string)}
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
					{options.map((item) => (
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
	.add('high-level', () => (
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
	))
	.add('high-level with groups', () => (
		<div className="sheet">
			<div className="form-group">
				<label htmlFor="mySelectId">{'Dinosaurs'}</label>
				<ClaySelectWithOption
					id="mySelectId"
					options={[
						{
							label: 'Theropods',
							options: [
								{
									label: 'Tyrannosaurus',
									value: 'Tyrannosaurus',
								},
								{
									label: 'Velociraptor',
									value: 'Velociraptor',
								},
							],
							type: 'group',
						},
						{
							label: 'Sauropods',
							options: [
								{
									label: 'Diplodocus',
									value: 'Diplodocus',
								},
								{
									label: 'Saltasaurus',
									value: 'Saltasaurus',
								},
							],
							type: 'group',
						},
					]}
				/>
			</div>
		</div>
	));

storiesOf('Components|ClayToggle', module)
	.add('checkbox', () => {
		const [toggled, setToggle] = React.useState<boolean>(false);

		return (
			<>
				<ClayToggle
					aria-label="Toggle checkbox"
					label={text('label', 'Checkbox')}
					onToggle={setToggle}
					toggled={toggled}
				/>

				<br />
				<br />

				<ClayToggle
					aria-label="Toggle checkbox with symbol"
					label="with symbol"
					onToggle={setToggle}
					spritemap={spritemap}
					symbol={{
						off: 'times',
						on: 'check',
					}}
					toggled={toggled}
				/>

				<br />
				<br />

				<ClayToggle
					aria-label="Toggle checkbox disabled"
					disabled
					label={text('label', 'Disabled')}
					onToggle={setToggle}
					toggled={toggled}
				/>
			</>
		);
	})
	.add('radio group', () => {
		const [value, setValue] = React.useState<string>('foo');

		return (
			<ClayRadioGroup
				onSelectedValueChange={(val) => setValue(val as string)}
				selectedValue={value}
			>
				<ClayToggle aria-label="Radio Foo" label="Foo" value="foo" />

				<ClayToggle aria-label="Radio Bar" label="Bar" value="bar" />

				<ClayToggle aria-label="Radio Baz" label="Baz" value="baz" />
			</ClayRadioGroup>
		);
	});
