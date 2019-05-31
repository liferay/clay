/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '../src';
import ClayDropDown from '@clayui/drop-down';
import React, {useState} from 'react';
import {FetchPolicy, NetworkStatus} from '@clayui/data-provider/src/types';
import {storiesOf} from '@storybook/react';
import {useDebounce} from '@clayui/shared';
import {useResource} from '@clayui/data-provider';

import 'clay-css/lib/css/atlas.css';

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

const ClayAutocompleteWithState = () => {
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
		<ClayAutocomplete>
			<ClayAutocomplete.Input
				onChange={event => setValue(event.target.value)}
				value={value}
			/>
			<ClayAutocomplete.DropDown
				active={(!!resource && !!value) || networkStatus === 1}
			>
				<ClayDropDown.ItemList>
					<LoadingWithDebounce
						loading={networkStatus < 4}
						networkStatus={networkStatus}
						render={
							<>
								{(networkStatus === 5 ||
									(resource && resource.error)) && (
									<ClayDropDown.Item className="disabled">
										{'No Results Found'}
									</ClayDropDown.Item>
								)}
								{!(networkStatus === 5) &&
									resource &&
									resource.results &&
									resource.results.map((item: any) => (
										<ClayDropDown.Item
											key={item.id}
											onClick={() => setValue(item.name)}
										>
											{item.name}
										</ClayDropDown.Item>
									))}
							</>
						}
					/>
				</ClayDropDown.ItemList>
			</ClayAutocomplete.DropDown>
			{networkStatus < 4 && <ClayAutocomplete.LoadingIndicator />}
		</ClayAutocomplete>
	);
};

storiesOf('ClayAutocomplete', module).add(
	'with low-level APIs (composition)',
	() => (
		<div className="row">
			<div className="col-md-5">
				<div className="sheet">
					<div className="form-group">
						<label>{'Name'}</label>
						<ClayAutocompleteWithState />
					</div>
				</div>
			</div>
		</div>
	)
);
