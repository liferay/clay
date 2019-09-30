/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {FetchPolicy, NetworkStatus} from '@clayui/data-provider/src/types';
import {useResource} from '@clayui/data-provider';
import ClayDropDown from '@clayui/drop-down';
import {FocusScope, useDebounce} from '@clayui/shared';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React, {useEffect, useRef, useState} from 'react';

import ClayAutocomplete, {ClayInputWithAutocomplete} from '../src';

import '@clayui/css/lib/css/atlas.css';

const LoadingWithDebounce = ({
	loading,
	networkStatus,
	render,
}: {
	networkStatus?: NetworkStatus;
	loading: boolean;
	render: any;
}) => {
	const debouncedLoadingChange = useDebounce(loading, 500);

	if (networkStatus === 1 || debouncedLoadingChange) {
		return (
			<ClayDropDown.Item className="disabled">
				{'Loading...'}
			</ClayDropDown.Item>
		);
	}

	return render;
};

const AutocompleteBasic = () => {
	const [value, setValue] = useState('');

	return (
		<ClayAutocomplete>
			<ClayAutocomplete.Input
				onChange={(event: any) => setValue(event.target.value)}
				value={value}
			/>

			<ClayAutocomplete.DropDown active={!!value}>
				<ClayDropDown.ItemList>
					{['one', 'two', 'three', 'four', 'five']
						.filter(item => item.match(value))
						.map(item => (
							<ClayAutocomplete.Item
								key={item}
								match={value}
								onClick={() => setValue(item)}
								value={item}
							/>
						))}
				</ClayDropDown.ItemList>
			</ClayAutocomplete.DropDown>
		</ClayAutocomplete>
	);
};

const AutocompleteWithKeyboardFunctionality = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [value, setValue] = useState('');
	const [active, setActive] = useState(!!value);

	const filteredItems = ['one', 'two', 'three', 'four', 'five'].filter(item =>
		item.match(value)
	);

	useEffect(() => {
		setActive(!!value);
	}, [value]);

	return (
		<FocusScope>
			<ClayAutocomplete>
				<ClayAutocomplete.Input
					onChange={(event: any) => setValue(event.target.value)}
					ref={inputRef}
					value={value}
				/>

				<ClayAutocomplete.DropDown
					active={active}
					onSetActive={setActive}
				>
					<ClayDropDown.ItemList>
						{filteredItems.map(item => (
							<ClayAutocomplete.Item
								key={item}
								match={value}
								onClick={() => setValue(item)}
								value={item}
							/>
						))}
					</ClayDropDown.ItemList>
				</ClayAutocomplete.DropDown>
			</ClayAutocomplete>
		</FocusScope>
	);
};

const AutocompleteWithAsyncData = () => {
	const [value, setValue] = useState('');
	const [networkStatus, setNetworkStatus] = useState<NetworkStatus>(
		NetworkStatus.Unused
	);
	const {resource} = useResource({
		fetchPolicy: FetchPolicy.CacheFirst,
		link: 'https://rickandmortyapi.com/api/character/',
		onNetworkStatusChange: setNetworkStatus,
		variables: {name: value},
	});

	const initialLoading = networkStatus === 1;
	const loading = networkStatus < 4;
	const error = networkStatus === 5;

	return (
		<ClayAutocomplete>
			<ClayAutocomplete.Input
				onChange={(event: any) => setValue(event.target.value)}
				value={value}
			/>

			<ClayAutocomplete.DropDown
				active={(!!resource && !!value) || initialLoading}
			>
				<ClayDropDown.ItemList>
					<LoadingWithDebounce
						loading={loading}
						networkStatus={networkStatus}
						render={
							<>
								{(error || (resource && resource.error)) && (
									<ClayDropDown.Item className="disabled">
										{'No Results Found'}
									</ClayDropDown.Item>
								)}
								{!error &&
									resource &&
									resource.results &&
									resource.results.map((item: any) => (
										<ClayAutocomplete.Item
											key={item.id}
											match={value}
											onClick={() => setValue(item.name)}
											value={item.name}
										/>
									))}
							</>
						}
					/>
				</ClayDropDown.ItemList>
			</ClayAutocomplete.DropDown>
			{loading && <ClayAutocomplete.LoadingIndicator />}
		</ClayAutocomplete>
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

storiesOf('Components|ClayAutocomplete', module)
	.add('basic', () => (
		<div className="row">
			<div className="col-md-5">
				<div className="sheet">
					<div className="form-group">
						<label>{'Numbers (one-five)'}</label>
						<AutocompleteBasic />
					</div>
				</div>
			</div>
		</div>
	))
	.add('w/ keyboard functionality', () => (
		<div className="row">
			<div className="col-md-5">
				<div className="sheet">
					<div className="form-group">
						<label>{'Numbers (one-five)'}</label>
						<AutocompleteWithKeyboardFunctionality />
					</div>
				</div>
			</div>
		</div>
	))
	.add('w/ async data', () => (
		<div className="row">
			<div className="col-md-5">
				<div className="sheet">
					<div className="form-group">
						<label>{'Name'}</label>
						<AutocompleteWithAsyncData />
					</div>
				</div>
			</div>
		</div>
	))
	.add('InputWithAutocomplete', () => (
		<AutoCompleteWithState items={['one', 'two', 'three', 'four']} />
	))
	.add('InputWithAutocomplete w/ objects', () => (
		<AutoCompleteWithState
			itemSelector={(person: any) =>
				`${person.firstName} ${person.lastName}`
			}
			items={[
				{firstName: 'Abraham', lastName: 'Kuyper'},
				{firstName: 'Joe', lastName: 'Bloggs'},
				{firstName: 'Steve', lastName: 'Nash'},
			]}
		/>
	));
