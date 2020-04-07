/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDataProvider, {useResource} from '@clayui/data-provider';
import React from 'react';

import Editor from '../Editor';

const dataProviderImportsCode = `import ClayDataProvider from '@clayui/data-provider';
`;

const dataProviderCode = `const Component = () => (
	<ClayDataProvider
		link="https://rickandmortyapi.com/api/character"
	>
		{({data, error, loading, refetch}) => {}}
	</ClayDataProvider>
);

render(<Component />)`;

const DataProvider = () => {
	const scope = {ClayDataProvider};

	return (
		<Editor
			code={dataProviderCode}
			imports={dataProviderImportsCode}
			preview={false}
			scope={scope}
		/>
	);
};

const dataProviderWithNetworkStatusImportsCode = `import ClayDataProvider from '@clayui/data-provider';
`;

const dataProviderWithNetworkStatusCode = `const Component = () => (
	<ClayDataProvider
		link="https://rickandmortyapi.com/api/character"
		notifyOnNetworkStatusChange
	>
		{({data, error, loading, refetch, networkStatus}) => {}}
	</ClayDataProvider>
);

render(<Component />)`;

const DataProviderWithNetworkStatus = () => {
	const scope = {ClayDataProvider};

	return (
		<Editor
			code={dataProviderWithNetworkStatusCode}
			imports={dataProviderWithNetworkStatusImportsCode}
			preview={false}
			scope={scope}
		/>
	);
};

const dataProviderWithCacheRootLevelImportsCode = `import ClayDataProvider from '@clayui/data-provider';
import React, {useContext} from 'react';`;

const dataProviderWithCacheRootLevelCode = `const Component = () => {
	const storageContext = useContext(Store);

	return (
		<ClayDataProvider
			link="https://rickandmortyapi.com/api/character"
			fetchPolicy="cache-first"
			storage={storageContext}
		>
			{({data, error, loading, refetch}) => {}}
		</ClayDataProvider>
	);
};

render(<Component />)`;

const DataProviderWithCacheRootLevel = () => {
	const scope = {ClayDataProvider};

	return (
		<Editor
			code={dataProviderWithCacheRootLevelCode}
			imports={dataProviderWithCacheRootLevelImportsCode}
			preview={false}
			scope={scope}
		/>
	);
};

const useResourceImportsCode = `import {useResource} from '@clayui/data-provider';
`;

const useResourceCode = `const Component = () => {
	const {resource} = useResource({
		link: 'https://rickandmortyapi.com/api/character/',
	});

	return null;
};

render(<Component />)`;

const UseResource = () => {
	const scope = {useResource};

	return (
		<Editor
			code={useResourceCode}
			imports={useResourceImportsCode}
			preview={false}
			scope={scope}
		/>
	);
};

const useResourceWithJitterImportsCode = `import {useResource} from '@clayui/data-provider';
`;

const useResourceWithJitterCode = `const Component = () => {
	const {resource} = useResource({
		link: 'https://rickandmortyapi.com/api/character/',
		fetchRetry: {
			attempts: 5,
			delay: {
				initial: 300,
				jitter: true,
			}
		},
	});

	return null;
};

render(<Component />)`;

const UseResourceWithJitter = () => {
	const scope = {useResource};

	return (
		<Editor
			code={useResourceWithJitterCode}
			imports={useResourceWithJitterImportsCode}
			preview={false}
			scope={scope}
		/>
	);
};

const useResourceWithNetworkStatusImportsCode = `import {useResource} from '@clayui/data-provider';
`;

const useResourceWithNetworkStatusCode = `const Component = () => {
	const [state, setState] = React.useState(() => ({
		error: false,
		loading: false,
		networkStatus: 4,
	}));
	const {resource} = useResource({
		link: 'https://rickandmortyapi.com/api/character/',
		onNetworkStatusChange: status => setState({
			error: status === 5,
			loading: status < 4,
			networkStatus: status,
		}),
	});

	return null;
};

render(<Component />)`;

const UseResourceWithNetworkStatus = () => {
	const scope = {useResource};

	return (
		<Editor
			code={useResourceWithNetworkStatusCode}
			imports={useResourceWithNetworkStatusImportsCode}
			preview={false}
			scope={scope}
		/>
	);
};

const useResourceWithVariablesChangeImportsCode = `import {useResource} from '@clayui/data-provider';
`;

const useResourceWithVariablesChangeCode = `const Component = () => {
	const [value, setValue] = React.useState('Rick');
	const {resource} = useResource({
		link: 'https://rickandmortyapi.com/api/character/',
		fetchDelay: 300,
		variables: {name: value}
	});

	return null;
};

render(<Component />)`;

const UseResourceWithVariablesChange = () => {
	const scope = {useResource};

	return (
		<Editor
			code={useResourceWithVariablesChangeCode}
			imports={useResourceWithVariablesChangeImportsCode}
			preview={false}
			scope={scope}
		/>
	);
};

export {
	DataProvider,
	DataProviderWithCacheRootLevel,
	DataProviderWithNetworkStatus,
	UseResource,
	UseResourceWithJitter,
	UseResourceWithNetworkStatus,
	UseResourceWithVariablesChange,
};
