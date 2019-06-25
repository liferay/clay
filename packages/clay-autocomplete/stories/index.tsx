/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '../src';
import ClayDropDown from '@clayui/drop-down';
import React, {useEffect, useRef, useState} from 'react';
import {FetchPolicy, NetworkStatus} from '@clayui/data-provider/src/types';
import {storiesOf} from '@storybook/react';
import {useDebounce, useKeyHandlerForList} from '@clayui/shared';
import {useResource} from '@clayui/data-provider';

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
	const activeListItemRef = useRef<HTMLLIElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState('');
	const [activeIndex, setActiveIndex] = useState(0);

	const [active, setActive] = useState(!!value);

	const filteredItems = ['one', 'two', 'three', 'four', 'five'].filter(item =>
		item.match(value)
	);

	const keyHandler = useKeyHandlerForList({
		activeListItemRef,
		index: activeIndex,
		inputRef,
		onIndexChange: setActiveIndex,
		onIndexSelect: (index: number) => setValue(filteredItems[index]),
		totalItems: filteredItems.length,
	});

	useEffect(() => {
		setActive(!!value);
	}, [value]);

	useEffect(() => {
		setActiveIndex(0);
	}, [active]);

	return (
		<ClayAutocomplete>
			<ClayAutocomplete.Input
				onChange={(event: any) => setValue(event.target.value)}
				onKeyDown={keyHandler}
				ref={inputRef}
				value={value}
			/>

			<ClayAutocomplete.DropDown active={active} onSetActive={setActive}>
				<ClayDropDown.ItemList>
					{filteredItems.map((item, i) => (
						<ClayAutocomplete.Item
							active={i === activeIndex}
							key={item}
							match={value}
							onClick={() => setValue(item)}
							ref={
								activeIndex === i
									? activeListItemRef
									: undefined
							}
							value={item}
						/>
					))}
				</ClayDropDown.ItemList>
			</ClayAutocomplete.DropDown>
		</ClayAutocomplete>
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

storiesOf('ClayAutocomplete', module)
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
	));
