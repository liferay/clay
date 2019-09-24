/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDataProvider, {useResource} from '@clayui/data-provider';
import Editor from './Editor';
import React from 'react';

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
	return <Editor code={dataProviderCode} preview={false} scope={scope} />;
};

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
			preview={false}
			scope={scope}
		/>
	);
};

const dataProviderWithCacheRootLevelCode = `const Component = () => (
	const storageContext = useContext(Store);
	<ClayDataProvider
		link="https://rickandmortyapi.com/api/character"
		fetchPolicy="cache-first"
		storage={storageContext}
	>
		{({data, error, loading, refetch}) => {}}
	</ClayDataProvider>
);

render(<Component />)`;

const DataProviderWithCacheRootLevel = () => {
	const scope = {ClayDataProvider};
	return (
		<Editor
			code={dataProviderWithCacheRootLevelCode}
			preview={false}
			scope={scope}
		/>
	);
};

const useResourceCode = `const Component = () => {
	const {resource} = useResource({
		link: 'https://rickandmortyapi.com/api/character/',
	});

	return null;
};

render(<Component />)`;

const UseResource = () => {
	const scope = {useResource};
	return <Editor code={useResourceCode} preview={false} scope={scope} />;
};

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
			preview={false}
			scope={scope}
		/>
	);
};

const useResourceWithNetworkStatusCode = `const Component = () => {
	const [state, setState] = useState(() => ({
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
			preview={false}
			scope={scope}
		/>
	);
};

const useResourceWithVariablesChangeCode = `const Component = () => {
	const [value, setValue] = useState('Rick');
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
