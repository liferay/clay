/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useDebounce} from '@clayui/shared';
import React, {useEffect} from 'react';
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

// TODO(matuzalemsteles): Rewrite the cache implementation to use the
// global implementation with promises.
const PROMISES: Record<string, Promise<any> | undefined> = {};
const CURSORS: Record<string, string | undefined> = {};

const useResource = ({
	fetch: fetcher,
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
	suspense = false,
	variables = null,
}: IResource) => {
	const [resource, setResource] = React.useState<any>(null);

	let pollingTimeoutId = React.useRef<null | NodeJS.Timeout>(null).current;

	let retryDelayTimeoutId = React.useRef<null | NodeJS.Timeout>(null).current;

	const pollIntervalRef = React.useRef(pollInterval);

	const cache = useCache(
		fetchPolicy,
		storage,
		storageMaxSize,
		link,
		variables
	);

	const debouncedVariablesChange = useDebounce(variables, fetchDelay);

	const cleanRetry = () => {
		if (retryDelayTimeoutId) {
			clearTimeout(retryDelayTimeoutId);
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

	const handleFetchRetry = (error: any, retryAttempts: number) => {
		const {attempts = 5} = fetchRetry;

		cleanRetry();

		if (attempts > 0 && retryAttempts < attempts) {
			const delay = getRetryDelay(retryAttempts);

			// eslint-disable-next-line no-console
			console.warn(
				`DataProvider: Trying ${
					retryAttempts + 1
				} of ${attempts} will happen in ${delay}ms`
			);

			retryDelayTimeoutId = setTimeout(() => {
				// eslint-disable-next-line @typescript-eslint/no-use-before-define
				doFetch(retryAttempts + 1);
			}, delay);
		} else {
			if (suspense) {
				const cacheKey = cache.getCacheKey(link, variables);

				if (cacheKey) {
					PROMISES[cacheKey] = error;
				}
			} else {
				dispatchNetworkStatus(NetworkStatus.Error);
			}

			warning(
				false,
				`DataProvider: Error making the requisition ${error}`
			);
		}
	};

	const cleanPoll = () => pollingTimeoutId && clearTimeout(pollingTimeoutId);

	const setPoll = () => {
		cleanPoll();

		pollingTimeoutId = setTimeout(() => {
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			maybeFetch(NetworkStatus.Polling);
		}, pollIntervalRef.current);
	};

	const fetchOnComplete = (result: any) => {
		// Should clear retry interval if any of the
		// attempts are successful.
		cleanRetry();

		const cacheKey = cache.getCacheKey(link, variables);

		const previousData =
			PROMISES[cacheKey!] instanceof Promise
				? resource
				: PROMISES[cacheKey!];

		let data = result;

		if (
			CURSORS[cacheKey!] &&
			previousData !== null &&
			previousData !== undefined
		) {
			if (Array.isArray(result) && Array.isArray(previousData)) {
				data = [...previousData, ...result];
			} else if (
				typeof result === 'object' &&
				typeof previousData === 'object'
			) {
				data = {...previousData, ...result};
			}
		}

		setResource(data);
		dispatchNetworkStatus(NetworkStatus.Unused);

		cache.set(data);

		if (pollIntervalRef.current > 0) {
			setPoll();
		}

		if (cacheKey) {
			PROMISES[cacheKey] = data;
		}

		return result;
	};

	const populateSearchParams = (uri: URL, variables: TVariables) => {
		if (!variables) {
			return uri;
		}

		const keys = Object.keys(variables);

		keys.forEach((key) => uri.searchParams.set(key, variables[key]));

		return uri;
	};

	const getUrlFormat = (link: string, variables: TVariables) => {
		const uri = new URL(link);

		if (CURSORS[cache.getCacheKey(link, variables)!] === null) {
			warning(
				uri.searchParams.toString() === '',
				'DataProvider: We recommend that instead of passing parameters over the link, use the variables API. \n More details: https://clayui.com/docs/components/data-provider.html'
			);
		}

		if (!variables) {
			return uri.toString();
		}

		populateSearchParams(uri, variables);

		return uri.toString();
	};

	const doFetch = (retryAttempts = 0) => {
		warning(
			typeof link === 'string',
			'DataProvider: The behavior of the `link` accepting a function has been deprecated in favor of the `fetcher` API. \n More details: https://clayui.com/docs/components/data-provider.html#data-fetching'
		);

		const cacheKey = cache.getCacheKey(link, variables);

		switch (typeof link) {
			case 'function':
				return timeout(
					fetchTimeout,
					link(
						populateSearchParams(
							// This is just a hack to be able to instantiate the URL and make
							// `populateSearchParams` reusable in `getUrlFormat` and make
							// things easier.
							new URL('http://clay.data.provider'),
							variables
						).searchParams.toString()
					)
				)
					.then(fetchOnComplete)
					.catch((error) => handleFetchRetry(error, retryAttempts));
			case 'string': {
				const fn = fetcher ?? fetch;

				return timeout(
					fetchTimeout,
					fn(
						getUrlFormat(CURSORS[cacheKey!] ?? link, variables),
						fetchOptions
					)
				)
					.then((res: any) => {
						if (
							res instanceof Response &&
							res.ok &&
							!res.bodyUsed
						) {
							return res.json();
						} else if (
							!(res instanceof Response) &&
							res.items &&
							res.cursor
						) {
							CURSORS[cacheKey!] = res.cursor;

							return res.items;
						}

						return res;
					})
					.then(fetchOnComplete)
					.catch((error) => handleFetchRetry(error, retryAttempts));
			}
			default:
				return null;
		}
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

		return doFetch();
	};

	const loadMore = () => {
		dispatchNetworkStatus(NetworkStatus.Loading);

		return doFetch();
	};

	const refetch = () => {
		dispatchNetworkStatus(NetworkStatus.Refetch);
		doFetch();
	};

	useEffect(() => {
		pollIntervalRef.current = pollInterval;

		if (pollInterval > 0) {
			setPoll();
		}
	}, [pollInterval]);

	useEffect(() => {
		if (resource !== null) {
			maybeFetch(NetworkStatus.Refetch);
		}
	}, [debouncedVariablesChange]);

	useEffect(() => {
		return () => {
			// Reset the cache only if the storage reference is
			// local from useResource.
			if (storage[SYMBOL_ORIGIN]) {
				cache.reset();
			}

			// Set to zero to prevent any unfinished requests
			// from continuing polling after umount has occurred.
			pollIntervalRef.current = 0;

			cleanPoll();
			cleanRetry();
		};
	}, []);

	const cacheKey = <string>cache.getCacheKey(link, variables);

	let latestData = resource;

	if (!PROMISES[cacheKey]) {
		const result = maybeFetch(NetworkStatus.Loading);

		if (result) {
			PROMISES[cacheKey] = result;
		}
	}

	// Integration with React.Suspense
	if (suspense) {
		if (latestData === null) {
			// Integration with React.Suspense, throwing a throw with the promise in
			// progress at render time for Suspense to catch.
			if (
				PROMISES[cacheKey] &&
				typeof PROMISES[cacheKey]!.then === 'function'
			) {
				throw PROMISES[cacheKey];
			}

			// Integration with ErrorBoundary, when a network error happens we throw
			// an error at render time so that ErrorBoundary catches the error.
			if (PROMISES[cacheKey] instanceof Error) {
				throw PROMISES[cacheKey];
			}

			latestData = PROMISES[cacheKey];
		}
	}

	return {loadMore, refetch, resource: latestData};
};

export {useResource};
