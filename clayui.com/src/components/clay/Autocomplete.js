/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '@clayui/autocomplete';
import ClayDataProvider, {useResource} from '@clayui/data-provider';
import ClayDropDown from '@clayui/drop-down';
import React, {useState} from 'react';

import Editor from '../Editor';

const spritemap = '/images/icons/icons.svg';

const autocompleteWithLoadingImportsCode = `import React, {useState} from 'react';
import ClayAutocomplete from '@clayui/autocomplete';`;

const autocompleteWithLoadingStateCode = `const Component = () => {
	const [loading] = useState(true);
	const [value, setValue] = useState('');

	return (
		<ClayAutocomplete>
			<ClayAutocomplete.Input
				onChange={event => setValue(event.target.value)}
				value={value}
			/>
			{loading && <ClayAutocomplete.LoadingIndicator />}
		</ClayAutocomplete>
	);
}

render(<Component />)`;

const AutocompleteWithLoadingState = () => {
	const scope = {ClayAutocomplete, spritemap, useState};

	return (
		<Editor
			code={autocompleteWithLoadingStateCode}
			imports={autocompleteWithLoadingImportsCode}
			scope={scope}
		/>
	);
};

const autocompleteWithDataProviderImportsCode = `import React, {useState} from 'react';
import ClayAutocomplete from '@clayui/autocomplete';
import {useResource} from '@clayui/data-provider';
import ClayDropDown from '@clayui/drop-down';`;

const autocompleteWithDataProviderCode = `const Component = () => {
	const [value, setValue] = useState('');
	const [networkStatus, setNetworkStatus] = useState(4);
	const {resource} = useResource({
		fetchPolicy: 'cache-first',
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
				placeholder="Type here"
				value={value}
			/>
			<ClayAutocomplete.DropDown
				active={(!!resource && !!value) || initialLoading}
			>
				<ClayDropDown.ItemList>
					{(error || (resource && resource.error)) && (
						<ClayDropDown.Item className="disabled">
							{'No Results Found'}
						</ClayDropDown.Item>
					)}
					{!error &&
						resource &&
						resource.results &&
						resource.results.map((item) => (
							<ClayAutocomplete.Item
								key={item.id}
								match={value}
								value={item.name}
							/>
						))}
				</ClayDropDown.ItemList>
			</ClayAutocomplete.DropDown>
			{loading && <ClayAutocomplete.LoadingIndicator />}
		</ClayAutocomplete>
	);
}

render(<Component />)`;

const AutocompleteWithDataProvider = () => {
	const scope = {
		ClayAutocomplete,
		ClayDataProvider,
		ClayDropDown,
		spritemap,
		useResource,
		useState,
	};

	return (
		<Editor
			code={autocompleteWithDataProviderCode}
			imports={autocompleteWithDataProviderImportsCode}
			scope={scope}
		/>
	);
};

export {AutocompleteWithLoadingState, AutocompleteWithDataProvider};
