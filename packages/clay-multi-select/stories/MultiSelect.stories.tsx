/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import {useResource} from '@clayui/data-provider';
import {
	FetchPolicy,
	NetworkStatus,
} from '@clayui/data-provider/src/useResource';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import React, {useState} from 'react';

import ClayMultiSelect from '../src';

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
				onItemsChange={setItems}
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
				sourceItems={sourceItems}
				value={value}
			/>
		</>
	);
};

export const CustomMenu = () => {
	const [items, setItems] = useState([
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

			<ClayMultiSelect
				aria-labelledby="multi-select-label"
				id="multiSelect"
				inputName="myInput"
				items={items}
				onItemsChange={(items) => setItems(items)}
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
			>
				{(item) => (
					<ClayMultiSelect.Item
						key={item.value}
						textValue={item.label}
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
								<strong>{item.label}</strong>
								<span>{item.email}</span>
							</div>
						</div>
					</ClayMultiSelect.Item>
				)}
			</ClayMultiSelect>
		</>
	);
};

export const CustomFilter = () => {
	const [value, setValue] = useState('');
	const [items, setItems] = useState<Array<{label: string; value: string}>>(
		[]
	);

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

type RickandMorty = {
	id: number;
	name: string;
	[key: string]: any;
};

export const Async = () => {
	const [value, setValue] = useState('');
	const [items, setItems] = useState<Array<RickandMorty>>([]);

	const [networkStatus, setNetworkStatus] = useState<NetworkStatus>(
		NetworkStatus.Unused
	);
	const {resource} = useResource({
		fetchPolicy: FetchPolicy.CacheFirst,
		link: 'https://rickandmortyapi.com/api/character/',
		onNetworkStatusChange: setNetworkStatus,
		variables: {name: value},
	});

	return (
		<ClayMultiSelect
			items={items}
			loadingState={networkStatus}
			locator={{id: 'id', label: 'name', value: 'name'}}
			onChange={setValue}
			onItemsChange={setItems}
			sourceItems={(resource?.results as Array<RickandMorty>) ?? []}
			value={value}
		>
			{(item) => (
				<ClayMultiSelect.Item key={item.id}>
					{item.name}
				</ClayMultiSelect.Item>
			)}
		</ClayMultiSelect>
	);
};

export const Group = (args: any) => {
	const [items, setItems] = useState([
		{
			label: 'one',
			value: '1',
		},
		{
			label: 'two',
			value: '2',
		},
	]);

	return (
		<div className="sheet">
			<ClayForm.Group className={!args.isValid ? 'has-error' : ''}>
				<label htmlFor="multiSelect" id="multi-select-label">
					Composed MultiSelect
				</label>

				<ClayInput.Group>
					<ClayInput.GroupItem>
						<ClayMultiSelect
							aria-describedby={
								!args.isValid ? 'multiselect-error' : undefined
							}
							aria-invalid={!args.isValid}
							id="multiSelect"
							inputName="myInput"
							isValid={args.isValid}
							items={items}
							onItemsChange={(items) => setItems(items)}
							sourceItems={sourceItems}
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
