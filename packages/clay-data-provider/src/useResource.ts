/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useDebounce} from '@clayui/shared';
import {useEffect, useRef, useState} from 'react';
import warning from 'warning';

import {
	FetchPolicy,
	IDataProvider,
	NetworkStatus,
	SYMBOL_ORIGIN,
	TVariables,
} from './types';
import {useCache} from './useCache';
import {timeout} from './util';

interface IResource extends IDataProvider {
	onNetworkStatusChange?: (status: NetworkStatus) => void;
}

const useResource = ({
	fetchDelay = 300,
	fetchOptions,
	fetchPolicy = FetchPolicy.NoCache,
	fetchTimeout = 6000,
	link,
	onNetworkStatusChange: dispatchNetworkStatus = () => {},
	pollInterval = 0,
	storage = {
		/**
		 * This will ensure that we know that the storage
		 * reference is not external, otherwise the cache
		 * will persist by the application.
		 */
		[SYMBOL_ORIGIN]: true,
	},
	fetchRetry = {},
	storageMaxSize = 20,
	variables = null,
}: IResource) => {
	const [resource, setResource] = useState<any>(null);

	let pollingIntervalId = useRef<null | NodeJS.Timeout>(null).current;

	let retryDelayIntervalId = useRef<null | NodeJS.Timeout>(null).current;

	// A flag to identify if the first rendering happened to avoid
	// two requests.
	const firstRenderRef = useRef<boolean>(true);

	const cache = useCache(
		fetchPolicy,
		storage,
		storageMaxSize,
		link,
		variables
	);

	const debouncedVariablesChange = useDebounce(variables, fetchDelay);

	const handleRefetch = () => {
		doFetch();
		dispatchNetworkStatus(NetworkStatus.Refetch);
	};

	const cleanRetry = () => {
		if (retryDelayIntervalId) {
			clearInterval(retryDelayIntervalId);
		}
	};

	const getRetryDelay = (retryAttempts: number) => {
		const {delay = {}} = fetchRetry;
		const {initial = 300, jitter = true} = delay;

		const baseDelay = jitter ? initial : initial / 2;

		let value = baseDelay * 2 ** retryAttempts;

		if (jitter) {
			value = Math.random() * value;
		}

		return value;
	};

	const handleFetchRetry = (err: any, retryAttempts: number) => {
		const {attempts = 5} = fetchRetry;

		cleanRetry();

		if (attempts > 0 && retryAttempts < attempts) {
			const delay = getRetryDelay(retryAttempts);

			// eslint-disable-next-line no-console
			console.warn(
				`DataProvider: Trying ${retryAttempts +
					1} of ${attempts} will happen in ${delay}ms`
			);

			retryDelayIntervalId = setInterval(() => {
				doFetch(retryAttempts + 1);
			}, delay);
		} else {
			dispatchNetworkStatus(NetworkStatus.Error);
			warning(false, `DataProvider: Error making the requisition ${err}`);
		}
	};

	const cleanPoll = () =>
		pollingIntervalId && clearInterval(pollingIntervalId);

	const fetchOnComplete = (result: any) => {
		// Should clear retry interval if any of the
		// attempts are successful.
		cleanRetry();

		setResource(result);
		dispatchNetworkStatus(NetworkStatus.Unused);

		cache.set(result);

		if (pollInterval > 0) {
			cleanPoll();

			pollingIntervalId = setInterval(() => {
				maybeFetch(NetworkStatus.Polling);
			}, pollInterval);
		}
	};

	const populateSearchParams = (uri: URL, variables: TVariables) => {
		if (!variables) {
			return uri;
		}

		const keys = Object.keys(variables);

		keys.forEach(key => uri.searchParams.set(key, variables[key]));

		return uri;
	};

	const getUrlFormat = (
		link: string,
		variables: TVariables,
		fetchOptions?: RequestInit
	) => {
		const uri = new URL(link);

		if ((fetchOptions && fetchOptions.method !== 'GET') || !variables) {
			return uri.toString();
		}

		warning(
			uri.searchParams.toString() === '',
			'DataProvider: We recommend that instead of passing parameters over the link, use the variables API. \n More details: https://next.clayui.com/docs/components/data-provider.html'
		);

		populateSearchParams(uri, variables);

		return uri.toString();
	};

	const doFetch = (retryAttempts = 0) => {
		let promise: Promise<any>;

		switch (typeof link) {
			case 'function':
				promise = link(
					populateSearchParams(
						// This is just a hack to be able to instantiate the URL and make
						// `populateSearchParams` reusable in `getUrlFormat` and make
						// things easier.
						new URL('http://clay.data.provider'),
						variables
					).searchParams.toString()
				);
				break;
			case 'string':
				promise = fetch(
					getUrlFormat(link, variables, fetchOptions),
					fetchOptions
				).then(res => res.json());
				break;
			default:
				return null;
		}

		timeout(fetchTimeout, promise)
			.then(fetchOnComplete)
			.catch(err => handleFetchRetry(err, retryAttempts));
	};

	const maybeFetch = (status: NetworkStatus) => {
		const cacheData = cache.get();

		if (cacheData) {
			fetchOnComplete(cacheData);

			// When fetch policy is only cache-first and gets the data from
			// the cache, it should not perform a request, only when it is
			// cache-and-network.
			if (fetchPolicy === FetchPolicy.CacheFirst) {
				return false;
			}
		}

		dispatchNetworkStatus(status);
		doFetch();
	};

	useEffect(() => {
		if (!firstRenderRef.current) {
			maybeFetch(NetworkStatus.Refetch);
		}
	}, [debouncedVariablesChange]);

	useEffect(() => {
		maybeFetch(NetworkStatus.Loading);
		firstRenderRef.current = false;

		return () => {
			// Reset the cache only if the storage reference is
			// local from useResource.
			if (storage[SYMBOL_ORIGIN]) {
				cache.reset();
			}
			cleanPoll();
			cleanRetry();
		};
	}, []);

	return {refetch: handleRefetch, resource};
};

export {useResource};
