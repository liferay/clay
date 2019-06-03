/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {FetchPolicy, NetworkStatus} from '@clayui/data-provider/src/types';
import {storiesOf} from '@storybook/react';
import {useDebounce} from '@clayui/shared';
import {useResource} from '@clayui/data-provider';
import ClayAutocomplete from '../src';
import ClayDropDown from '@clayui/drop-down';
import fuzzy from 'fuzzy';
import React, {useState} from 'react';

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

const optionsFuzzy = { pre: '<strong>', post: '</strong>' };

interface IProps {
	name: string;
	value: string;
}

const Item: React.FunctionComponent<IProps> = ({name, value}) => {
	const match = fuzzy.match(value, name, optionsFuzzy);

	if (match) {
		return <div dangerouslySetInnerHTML={{__html: match.rendered}} />;
	}

	return <>{name}</>;
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

	const initialLoading = networkStatus === 1;
	const loading = networkStatus < 4;
	const error = networkStatus === 5;

	return (
		<ClayAutocomplete>
			<ClayAutocomplete.Input
				onChange={event => setValue(event.target.value)}
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
								{(error ||
									(resource && resource.error)) && (
									<ClayDropDown.Item className="disabled">
										{'No Results Found'}
									</ClayDropDown.Item>
								)}
								{!(error) &&
									resource &&
									resource.results &&
									resource.results.map((item: any) => (
										<ClayDropDown.Item
											key={item.id}
											onClick={() => setValue(item.name)}
										>
											<Item name={item.name} value={value} />
										</ClayDropDown.Item>
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
