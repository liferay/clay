/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayDropDown from '@clayui/drop-down';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
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
			inputName="myInput"
			inputValue={value}
			items={items}
			onChange={setValue}
			onItemsChange={setItems}
			sourceItems={sourceItems}
			spritemap={spritemap}
			{...props}
		/>
	);
};

const MenuCustom: React.ComponentProps<
	typeof ClayMultiSelect
>['menuRenderer'] = ({
	inputValue,
	locator,
	onItemClick = () => {},
	sourceItems,
}) => (
	<ClayDropDown.ItemList>
		{sourceItems
			.filter(item => inputValue && item[locator.label].match(inputValue))
			.map(item => (
				<ClayDropDown.Item
					key={item[locator.value]}
					onClick={() => onItemClick(item)}
				>
					<div className="autofit-row autofit-row-center">
						<div className="autofit-col mr-3">
							<ClaySticker
								className="sticker-user-icon"
								size="lg"
							>
								<ClayIcon spritemap={spritemap} symbol="user" />
							</ClaySticker>
						</div>
						<div className="autofit-col">
							<strong>{item[locator.label]}</strong>
							<span>{item.email}</span>
						</div>
					</div>
				</ClayDropDown.Item>
			))}
	</ClayDropDown.ItemList>
);

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
		const [items, setItems] = React.useState<
			React.ComponentProps<typeof ClayMultiSelect>['items']
		>([
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
	.add('w/ no filter', () => (
		<ClayMultiSelectWithAutocomplete filter={() => true} />
	))
	.add('w/ custom filter', () => (
		<ClayMultiSelectWithAutocomplete
			filter={(item: any, inputValue: any, locator: any) =>
				item[locator.label].match('two')
			}
		/>
	))
	.add('w/ custom menu', () => (
		<ClayMultiSelectWithAutocomplete
			items={[
				{
					email: 'one@example.com',
					label: 'One',
					value: '1',
				},
			]}
			menuRenderer={MenuCustom}
			sourceItems={[
				{
					email: 'one@example.com',
					label: 'One',
					value: '1',
				},
				{
					email: 'two@example.com',
					label: 'Two',
					value: '2',
				},
			]}
		/>
	))
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
