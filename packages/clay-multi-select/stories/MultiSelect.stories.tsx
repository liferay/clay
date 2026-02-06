/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import {FetchPolicy, NetworkStatus, useResource} from '@clayui/data-provider';
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
export function Default(args: any) {
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
}

Default.args = {
	disabled: false,
	disabledClearAll: false,
	isValid: false,
	size: null,
};
export function ComparingItems() {
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
}
export function SourceItems() {
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
}

const locatorPropSourceItems = [
	{
		data: '1',
		label: 'label',
		name: 'one',
		value: 'value',
	},
	{
		data: '2',
		label: 'label',
		name: 'two',
		value: 'value',
	},
	{
		data: '3',
		label: 'label',
		name: 'three',
		value: 'value',
	},
	{
		data: '4',
		label: 'label',
		name: 'four',
		value: 'value',
	},
];
export function LocatorProp() {
	const [value, setValue] = React.useState('');
	const [items, setItems] = React.useState([
		{
			data: '1',
			label: 'label',
			name: 'one',
			value: 'value',
		},
		{
			data: '2',
			label: 'label',
			name: 'two',
			value: 'value',
		},
	]);

	return (
		<>
			<label
				htmlFor="multiSelectLocatorProp"
				id="multiSelectLabelLocatorProp"
			>
				Multi Select
			</label>

			<ClayMultiSelect
				aria-labelledby="multi-select-label"
				id="multiSelectLocatorProp"
				inputName="multiSelectLocatorPropInput"
				items={items}
				locator={{
					label: 'name',
					value: 'data',
				}}
				onChange={setValue}
				onItemsChange={(val) => setItems(val as any)}
				sourceItems={locatorPropSourceItems}
				value={value}
			/>
		</>
	);
}
export function CustomMenu() {
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
}
export function CustomFilter() {
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
}

type RickandMorty = {
	id: number;
	name: string;
	[key: string]: any;
};
export function Async() {
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
}

type RickandMortyNested = RickandMorty & {
	nested: {
		name: string;
	};
};
export function NestedData() {
	const [value, setValue] = useState('');
	const [items, setItems] = useState<Array<RickandMorty>>([]);

	const [networkStatus, setNetworkStatus] = useState<NetworkStatus>(
		NetworkStatus.Unused
	);
	const {resource} = useResource({
		fetch: async (link: string) => {
			const result = await fetch(link);

			const json = await result.json();

			const items = json.results.map((item: RickandMorty) => ({
				...item,
				nested: {
					name: item.name,
				},
			}));

			return {
				cursor: json.next,
				items,
			};
		},
		fetchPolicy: FetchPolicy.CacheFirst,
		link: 'https://rickandmortyapi.com/api/character/',
		onNetworkStatusChange: setNetworkStatus,
		variables: {name: value},
	});

	return (
		<ClayMultiSelect
			allowsCustomLabel={false}
			items={items}
			loadingState={networkStatus}
			locator={{
				id: 'id',
				label: (item: RickandMortyNested) => item.nested.name,
				value: (item: RickandMortyNested) => item.nested.name,
			}}
			onChange={setValue}
			onItemsChange={setItems}
			sourceItems={(resource?.results as Array<RickandMortyNested>) ?? []}
			value={value}
		>
			{(item: RickandMortyNested) => (
				<ClayMultiSelect.Item key={item.id}>
					{item.nested.name}
				</ClayMultiSelect.Item>
			)}
		</ClayMultiSelect>
	);
}
export function Group(args: any) {
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
							Submit Labels
						</ClayButton>
					</ClayInput.GroupItem>
				</ClayInput.Group>
			</ClayForm.Group>
		</div>
	);
}

Group.args = {
	isValid: false,
};
export function WithPrimaryAction() {
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
				primaryAction={{
					label: 'Create',
					onClick: () => {
						alert('create!');
					},
				}}
				sourceItems={sourceItems}
				value={value}
			/>
		</>
	);
}
