/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import React, {useRef, useState} from 'react';

import ClayMultiSelect, {itemLabelFilter} from '../src';

export default {
	argTypes: {
		size: {
			control: {type: 'select'},
			options: [null, 'sm'],
		},
	},
	component: ClayMultiSelect,
	title: 'Design System/Components/MultiSelect',
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
	const [value, setValue] = useState('');
	const [items, setItems] = useState(
		props.items || [
			{
				label: 'one',
				value: '1',
			},
		]
	);

	return (
		<ClayMultiSelect
			aria-labelledby="multi-select-label"
			inputName="myInput"
			items={items}
			onChange={setValue}
			onItemsChange={setItems}
			sourceItems={itemLabelFilter(sourceItems, value)}
			value={value}
			{...props}
		/>
	);
};

export const Default = (args: any) => {
	const [items, setItems] = useState([
		{
			label: 'one',
			value: '1',
		},
	]);

	return (
		<>
			<label htmlFor="multiSelect" id="multi-select-label">
				Multi Select
			</label>

			<ClayMultiSelect
				aria-labelledby="multi-select-label"
				disabled={args.disabled}
				disabledClearAll={args.disabledClearAll}
				id="multiSelect"
				inputName="myInput"
				isValid={args.isValid}
				items={items}
				onItemsChange={(items) => setItems(items)}
				size={args.size}
			/>
		</>
	);
};

Default.args = {
	disabled: false,
	disabledClearAll: false,
	isValid: false,
	size: null,
};

export const ComparingItems = () => {
	const [items, setItems] = useState<
		React.ComponentProps<typeof ClayMultiSelect>['items']
	>([
		{
			label: 'one',
			value: '1',
		},
	]);

	return (
		<>
			<label htmlFor="multiSelect" id="multi-select-label">
				Multi Select
			</label>

			<ClayMultiSelect
				aria-labelledby="multi-select-label"
				id="multiSelect"
				inputName="myInput"
				items={items}
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
			/>
		</>
	);
};

export const SourceItems = () => {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState([
		{
			label: 'one',
			value: '1',
		},
	]);

	return (
		<>
			<label htmlFor="multiSelect" id="multi-select-label">
				Multi Select
			</label>

			<ClayMultiSelect
				aria-labelledby="multi-select-label"
				inputName="myInput"
				items={items}
				onChange={setValue}
				onItemsChange={(val) => setItems(val as any)}
				sourceItems={itemLabelFilter(sourceItems, value)}
				value={value}
			/>
		</>
	);
};

const MenuCustom: React.ComponentProps<typeof ClayMultiSelect>['menuRenderer'] =
	({inputValue, locator, onItemClick = () => {}, sourceItems}) => (
		<ClayDropDown.ItemList>
			{sourceItems
				.filter(
					(item) =>
						inputValue && item[locator.label].match(inputValue)
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
									<ClayIcon symbol="user" />
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

export const CustomMenu = () => {
	const [items, setItems] = React.useState([
		{
			email: 'one@example.com',
			label: 'One',
			value: '1',
		},
	]);

	return (
		<>
			<label htmlFor="multiSelect" id="multi-select-label">
				Multi Select
			</label>

			<ClayMultiSelectWithAutocomplete
				id="multiSelect"
				inputName="myInput"
				items={items}
				menuRenderer={MenuCustom}
				onItemsChange={setItems}
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
	);
};

export const CustomFilter = () => {
	const [value, setValue] = useState('');
	const [items, setItems] = useState<any>([]);

	return (
		<ClayMultiSelect
			items={items}
			onChange={setValue}
			onItemsChange={setItems}
			sourceItems={sourceItems.filter((item) => item.label.match(value))}
			value={value}
		/>
	);
};

export const Async = () => {
	const [dropdownItems, setDropdownItems] = useState<any>([]);
	const [value, setValue] = useState('');
	const [items, setItems] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(false);
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
			isLoading={isLoading}
			items={items}
			onChange={(newInputVal) => {
				setValue(newInputVal);

				asyncData(newInputVal);
			}}
			onItemsChange={setItems}
			sourceItems={dropdownItems}
			value={value}
		/>
	);
};

export const Group = (args: any) => {
	return (
		<div className="sheet">
			<ClayForm.Group className={!args.isValid ? 'has-error' : ''}>
				<label htmlFor="multiSelect" id="multi-select-label">
					Composed MultiSelect
				</label>

				<ClayInput.Group>
					<ClayInput.GroupItem>
						<ClayMultiSelectWithAutocomplete
							aria-describedby={
								!args.isValid ? 'multiselect-error' : undefined
							}
							aria-invalid={!args.isValid}
							id="multiSelect"
							isValid={args.isValid}
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
							<ClayForm.Text>Simple help comment..</ClayForm.Text>
						</ClayForm.FeedbackGroup>

						{!args.isValid && (
							<ClayForm.FeedbackGroup>
								<ClayForm.FeedbackItem id="multiselect-error">
									<ClayForm.FeedbackIndicator symbol="info-circle" />
									You made an error
								</ClayForm.FeedbackItem>
							</ClayForm.FeedbackGroup>
						)}
					</ClayInput.GroupItem>

					<ClayInput.GroupItem shrink>
						<ClayButton displayType="secondary" onClick={() => {}}>
							Select
						</ClayButton>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
		</div>
	);
};

Group.args = {
	isValid: false,
};
