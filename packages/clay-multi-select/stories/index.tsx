/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayForm, {ClayInput} from '@clayui/form';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayMultiSelect from '../src';

const ClayMultiSelectWithState = (props: any) => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(
		props.items || [
			{
				label: 'one',
				value: '1',
			},
		]
	);

	return (
		<ClayMultiSelect
			{...props}
			inputName="myInput"
			inputValue={value}
			items={items}
			onChange={setValue}
			onItemsChange={setItems}
			spritemap={spritemap}
		/>
	);
};

const sourceItems = [
	{
		label: 'one',
		value: '1',
	},
	{
		label: 'two',
		value: '2',
	},
	{
		label: 'three',
		value: '3',
	},
	{
		label: 'four',
		value: '4',
	},
];

const ClayMultiSelectWithAutocomplete = (props: any) => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState(
		props.items || [
			{
				label: 'one',
				value: '1',
			},
		]
	);

	return (
		<ClayMultiSelect
			{...props}
			inputName="myInput"
			inputValue={value}
			items={items}
			onChange={setValue}
			onItemsChange={setItems}
			sourceItems={sourceItems}
			spritemap={spritemap}
		/>
	);
};

storiesOf('Components|ClayMultiSelect', module)
	.add('default', () => (
		<ClayMultiSelectWithState
			disabled={boolean('Disabled all', false)}
			disabledClearAll={boolean('Disabled Clear All', false)}
			isValid={boolean('isValid', true)}
		/>
	))
	.add('comparing items', () => {
		const [value, setValue] = React.useState('');
		const [items, setItems] = React.useState([
			{
				label: 'one',
				value: '1',
			},
		]);

		return (
			<ClayMultiSelect
				inputName="myInput"
				inputValue={value}
				items={items}
				onChange={setValue}
				onItemsChange={itemsChanged => {
					const removedItems = items.filter(
						value => !itemsChanged.includes(value)
					);
					const newItems = itemsChanged.filter(
						value => !items.includes(value)
					);

					setItems(itemsChanged);

					alert(
						`Removed Items: ${JSON.stringify(
							removedItems
						)}\nNew Items: ${JSON.stringify(newItems)}\n`
					);
				}}
				sourceItems={sourceItems}
				spritemap={spritemap}
			/>
		);
	})
	.add('w/ sourceItems', () => <ClayMultiSelectWithAutocomplete />)
	.add('w/ group', () => {
		const isValid = boolean('isValid', true);

		return (
			<div className="sheet">
				<ClayForm.Group className={!isValid ? 'has-error' : ''}>
					<label>{'Composed MultiSelect'}</label>

					<ClayInput.Group>
						<ClayInput.GroupItem>
							<ClayMultiSelectWithAutocomplete
								isValid={isValid}
								items={[
									{
										label: 'one',
										value: '1',
									},
									{
										label: 'two',
										value: '2',
									},
								]}
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
	});
