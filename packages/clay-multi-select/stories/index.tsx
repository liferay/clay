/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
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
import React, {useRef} from 'react';

import ClayMultiSelect, {itemLabelFilter} from '../src';

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
			sourceItems={itemLabelFilter(sourceItems, value)}
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
			.filter(
				(item) => inputValue && item[locator.label].match(inputValue)
			)
			.map((item) => (
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
		<>
			<label htmlFor="multiSelect">{'Multi Select'}</label>

			<ClayMultiSelectWithState
				disabled={boolean('Disabled all', false)}
				disabledClearAll={boolean('Disabled Clear All', false)}
				id="multiSelect"
				isValid={boolean('isValid', true)}
			/>
		</>
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
			<>
				<label htmlFor="multiSelect">{'Multi Select'}</label>

				<ClayMultiSelect
					id="multiSelect"
					inputName="myInput"
					inputValue={value}
					items={items}
					onChange={setValue}
					onItemsChange={(itemsChanged) => {
						const removedItems = items.filter(
							(value) => !itemsChanged.includes(value)
						);
						const newItems = itemsChanged.filter(
							(value) => !items.includes(value)
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
			</>
		);
	})
	.add('w/ sourceItems', () => (
		<>
			<label htmlFor="multiSelect">{'Multi Select'}</label>

			<ClayMultiSelectWithAutocomplete id="multiSelect" />
		</>
	))
	.add('w/ custom menu', () => (
		<>
			<label htmlFor="multiSelect">{'Multi Select'}</label>

			<ClayMultiSelectWithAutocomplete
				id="multiSelect"
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
		</>
	))
	.add('custom filter', () => {
		const [value, setValue] = React.useState('');
		const [items, setItems] = React.useState<any>([]);

		return (
			<ClayMultiSelect
				inputValue={value}
				items={items}
				onChange={setValue}
				onItemsChange={setItems}
				sourceItems={sourceItems.filter((item) =>
					item.label.match(value)
				)}
				spritemap={spritemap}
			/>
		);
	})
	.add('async', () => {
		const [dropdownItems, setDropdownItems] = React.useState<any>([]);
		const [value, setValue] = React.useState('');
		const [items, setItems] = React.useState<any>([]);
		const [isLoading, setIsLoading] = React.useState(false);
		const timeoutRef = useRef<number | NodeJS.Timeout>(0);

		function asyncData(query: string) {
			setIsLoading(true);

			clearTimeout(timeoutRef.current as number);

			timeoutRef.current = setTimeout(() => {
				setDropdownItems(
					sourceItems.filter((item) => item.label.match(query))
				);

				setIsLoading(false);
			}, 2000);
		}

		return (
			<ClayMultiSelect
				inputValue={value}
				isLoading={isLoading}
				items={items}
				onChange={(newInputVal) => {
					setValue(newInputVal);

					asyncData(newInputVal);
				}}
				onItemsChange={setItems}
				sourceItems={dropdownItems}
				spritemap={spritemap}
			/>
		);
	})
	.add('w/ group', () => {
		const isValid = boolean('isValid', true);

		return (
			<div className="sheet">
				<ClayForm.Group className={!isValid ? 'has-error' : ''}>
					<label htmlFor="multiSelect">
						{'Composed MultiSelect'}
					</label>

					<ClayInput.Group>
						<ClayInput.GroupItem>
							<ClayMultiSelectWithAutocomplete
								id="multiSelect"
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
