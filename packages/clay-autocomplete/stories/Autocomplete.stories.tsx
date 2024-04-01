/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Text, TextHighlight} from '@clayui/core';
import {useResource} from '@clayui/data-provider';
import {
	FetchPolicy,
	NetworkStatus,
} from '@clayui/data-provider/src/useResource';
import DropDown from '@clayui/drop-down';
import Layout from '@clayui/layout';
import {FocusScope, useDebounce} from '@clayui/shared';
import React, {useEffect, useRef, useState} from 'react';

import ClayAutocomplete from '../src';

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
		return <DropDown.Item className="disabled">Loading...</DropDown.Item>;
	}

	return render;
};

export default {
	title: 'Design System/Components/Autocomplete',
};

export const Default = (args: any) => (
	<div className="row">
		<div className="col-md-5">
			<div className="sheet">
				<div className="form-group">
					<label
						htmlFor="clay-autocomplete-1"
						id="clay-autocomplete-label-1"
					>
						Numbers (one-five)
					</label>
					<ClayAutocomplete
						aria-labelledby="clay-autocomplete-label-1"
						id="clay-autocomplete-1"
						menuTrigger={args.menuTrigger}
						messages={{
							listCount: '{0} option available.',
							listCountPlural: '{0} options available.',
							loading: 'Loading...',
							notFound: 'No results found',
						}}
						placeholder="Enter a number from One to Five"
					>
						{['one', 'two', 'three', 'four', 'five'].map((item) => (
							<ClayAutocomplete.Item key={item}>
								{item}
							</ClayAutocomplete.Item>
						))}
					</ClayAutocomplete>
				</div>
			</div>
		</div>
	</div>
);

Default.argTypes = {
	menuTrigger: {
		control: {type: 'select'},
		options: ['focus', 'input'],
	},
};

export const Dynamic = () => (
	<div className="row">
		<div className="col-md-5">
			<div className="sheet">
				<div className="form-group">
					<label
						htmlFor="clay-autocomplete-1"
						id="clay-autocomplete-label-1"
					>
						States
					</label>
					<ClayAutocomplete
						aria-labelledby="clay-autocomplete-label-1"
						defaultItems={[
							'Alabama',
							'Alaska',
							'Arizona',
							'Arkansas',
							'California',
							'Colorado',
							'Connecticut',
							'Delaware',
							'Florida',
							'Georgia',
							'Hawaii',
							'Idaho',
							'Illinois',
							'Indiana',
							'Iowa',
							'Kansas',
							'Kentucky',
							'Louisiana',
							'Maine',
							'Maryland',
							'Massachusetts',
							'Michigan',
							'Minnesota',
							'Mississippi',
							'Missouri',
							'Montana',
							'Nebraska',
							'Nevada',
							'New Hampshire',
							'New Jersey',
							'New Mexico',
							'New York',
							'North Carolina',
							'North Dakota',
							'Ohio',
							'Oklahoma',
							'Oregon',
							'Pennsylvania',
							'Rhode Island',
							'South Carolina',
							'South Dakota',
							'Tennessee',
							'Texas',
							'Utah',
							'Vermont',
							'Virginia',
							'Washington',
							'West Virginia',
							'Wisconsin',
							'Wyoming',
						]}
						id="clay-autocomplete-1"
						messages={{
							listCount: '{0} option available.',
							listCountPlural: '{0} options available.',
							loading: 'Loading...',
							notFound: 'No results found',
						}}
						placeholder="Enter a US state name"
					>
						{(item) => (
							<ClayAutocomplete.Item key={item}>
								{item}
							</ClayAutocomplete.Item>
						)}
					</ClayAutocomplete>
				</div>
			</div>
		</div>
	</div>
);

export const CustomItem = () => {
	const [value, setValue] = useState('');

	return (
		<div className="row">
			<div className="col-md-5">
				<div className="sheet">
					<div className="form-group">
						<label
							htmlFor="clay-autocomplete-2"
							id="clay-autocomplete-label-2"
						>
							Numbers (one-five)
						</label>
						<ClayAutocomplete
							aria-labelledby="clay-autocomplete-label-2"
							defaultItems={[
								'one',
								'two',
								'three',
								'four',
								'five',
							]}
							id="clay-autocomplete-2"
							messages={{
								listCount: '{0} option available.',
								listCountPlural: '{0} options available.',
								loading: 'Loading...',
								notFound: 'No results found',
							}}
							onChange={setValue}
							placeholder="Enter a number from One to Five"
							value={value}
						>
							{(item) => (
								<ClayAutocomplete.Item
									key={item}
									textValue={item}
								>
									<Layout.ContentRow>
										<Layout.ContentCol expand>
											<Text size={3}>
												<TextHighlight match={value}>
													{item}
												</TextHighlight>
											</Text>
										</Layout.ContentCol>
										<Layout.ContentCol>
											<Text size={2}>Description</Text>
										</Layout.ContentCol>
									</Layout.ContentRow>
								</ClayAutocomplete.Item>
							)}
						</ClayAutocomplete>
					</div>
				</div>
			</div>
		</div>
	);
};

type RickandMorty = {
	id: number;
	name: string;
	[key: string]: any;
};

export const AsyncFilter = () => {
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

	return (
		<div className="row">
			<div className="col-md-5">
				<div className="sheet">
					<div className="form-group">
						<label
							htmlFor="clay-autocomplete-1"
							id="clay-autocomplete-label-1"
						>
							Name
						</label>
						<ClayAutocomplete
							aria-labelledby="clay-autocomplete-label-1"
							id="clay-autocomplete-1"
							items={
								(resource?.results as Array<RickandMorty>) ?? []
							}
							loadingState={networkStatus}
							messages={{
								listCount: '{0} option available.',
								listCountPlural: '{0} options available.',
								loading: 'Loading...',
								notFound: 'No results found',
							}}
							onChange={setValue}
							onItemsChange={() => {}}
							placeholder="Enter a name"
							value={value}
						>
							{(item) => (
								<ClayAutocomplete.Item key={item.id}>
									{item.name}
								</ClayAutocomplete.Item>
							)}
						</ClayAutocomplete>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Keyboard = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [value, setValue] = useState('');
	const [active, setActive] = useState(!!value);

	const filteredItems = ['one', 'two', 'three', 'four', 'five'].filter(
		(item) => item.match(value)
	);

	useEffect(() => {
		setActive(!!value);
	}, [value]);

	return (
		<div className="row">
			<div className="col-md-5">
				<div className="sheet">
					<div className="form-group">
						<label>Numbers (one-five)</label>
						<FocusScope>
							<ClayAutocomplete>
								<ClayAutocomplete.Input
									aria-label="Numbers: Enter a number from One to Five"
									onChange={(event: any) =>
										setValue(event.target.value)
									}
									ref={inputRef}
									value={value}
								/>

								<ClayAutocomplete.DropDown
									active={active}
									onActiveChange={setActive}
								>
									<DropDown.ItemList>
										{filteredItems.map((item) => (
											<ClayAutocomplete.Item
												key={item}
												match={value}
												onClick={() => setValue(item)}
												value={item}
											/>
										))}
									</DropDown.ItemList>
								</ClayAutocomplete.DropDown>
							</ClayAutocomplete>
						</FocusScope>
					</div>
				</div>
			</div>
		</div>
	);
};

export const AsyncData = () => {
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
		<div className="row">
			<div className="col-md-5">
				<div className="sheet">
					<div className="form-group">
						<label>Name</label>
						<ClayAutocomplete>
							<ClayAutocomplete.Input
								aria-label="Enter a name:"
								onChange={(event: any) =>
									setValue(event.target.value)
								}
								value={value}
							/>

							<ClayAutocomplete.DropDown
								active={
									(!!resource && !!value) || initialLoading
								}
							>
								<DropDown.ItemList>
									<LoadingWithDebounce
										loading={loading}
										networkStatus={networkStatus}
										render={
											<>
												{(error ||
													(resource &&
														resource.error)) && (
													<DropDown.Item className="disabled">
														No Results Found
													</DropDown.Item>
												)}
												{!error &&
													resource &&
													resource.results &&
													resource.results.map(
														(item: any) => (
															<ClayAutocomplete.Item
																key={item.id}
																match={value}
																onClick={() =>
																	setValue(
																		item.name
																	)
																}
																value={
																	item.name
																}
															/>
														)
													)}
											</>
										}
									/>
								</DropDown.ItemList>
							</ClayAutocomplete.DropDown>
							{loading && <ClayAutocomplete.LoadingIndicator />}
						</ClayAutocomplete>
					</div>
				</div>
			</div>
		</div>
	);
};
