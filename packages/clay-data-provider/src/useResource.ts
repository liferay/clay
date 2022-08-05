/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useProvider} from '@clayui/provider';
import {useDebounce} from '@clayui/shared';
import stringify from 'fast-json-stable-stringify';
import {useEffect, useMemo, useRef, useState} from 'react';
import warning from 'warning';

import {FetchPolicy, IDataProvider, NetworkStatus, TVariables} from './types';
import {timeout} from './util';

interface IResource extends IDataProvider {
	onNetworkStatusChange?: (status: NetworkStatus) => void;
}

let idCounter = 0;

const useResource = ({
	fetch: fetcher,
	fetchDelay = 300,
	fetchOptions,
	fetchPolicy = FetchPolicy.NoCache,
	fetchTimeout = 6000,
	link,
	onNetworkStatusChange: dispatchNetworkStatus = () => {},
	pollInterval = 0,
	fetchRetry = {},
	suspense = false,
	variables = null,
}: IResource) => {
	// We changed the cache policy when suspense is enabled so that the
	// integration with suspense and the client works better, we need
	// to store the data that was retrieved from the promise in progress
	// on the client and then get it again to fill in the hook.
	// When we throw the promise at render time, suspense invokes and resets
	// the hook states and refs every time, when realizes the promise has been
	// resolved starts the hooks lifecycle with useEffects and other states.
	if (fetchPolicy === FetchPolicy.NoCache && suspense) {
		fetchPolicy = FetchPolicy.CacheAndNetwork;
	}

	const pollingTimeoutIdRef = useRef<null | NodeJS.Timeout>(null);

	const retryDelayTimeoutIdRef = useRef<null | NodeJS.Timeout>(null);

	const pollIntervalRef = useRef(pollInterval);

	const uid = useMemo(() => {
		idCounter++;

		return String(idCounter);
	}, []);

	// A flag to identify if the first rendering happened to avoid
	// two requests.
	const firstRenderRef = useRef<boolean>(true);

	const shouldUseCache =
		fetchPolicy === FetchPolicy.CacheFirst ||
		fetchPolicy === FetchPolicy.CacheAndNetwork;

	const identifier = useMemo(() => {
		if (typeof link === 'string') {
			return `${link}:${stringify(variables)}`;
		}

		return uid;
	}, [link, variables]);

	const {client} = useProvider();

	const [resource, setResource] = useState<any>(
		client.read(identifier) ?? null
	);

	const debouncedVariablesChange = useDebounce(variables, fetchDelay);

	const cleanRetry = () => {
		if (retryDelayTimeoutIdRef.current) {
			clearTimeout(retryDelayTimeoutIdRef.current);
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

			retryDelayTimeoutIdRef.current = setTimeout(() => {
				// eslint-disable-next-line @typescript-eslint/no-use-before-define
				doFetch(retryAttempts + 1);
			}, delay);
		} else {
			if (suspense) {
				client.update(identifier, error);
			} else {
				dispatchNetworkStatus(NetworkStatus.Error);
			}

			warning(
				false,
				`DataProvider: Error making the requisition ${error}`
			);
		}
	};

	const cleanPoll = () =>
		pollingTimeoutIdRef.current &&
		clearTimeout(pollingTimeoutIdRef.current);

	const setPoll = () => {
		cleanPoll();

		pollingTimeoutIdRef.current = setTimeout(() => {
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			maybeFetch(NetworkStatus.Polling);
		}, pollIntervalRef.current);
	};

	const fetchOnComplete = (result: any) => {
		// Should clear retry interval if any of the
		// attempts are successful.
		cleanRetry();

		let data = result;

		if (
			client.getCursor(identifier) &&
			resource !== null &&
			resource !== undefined
		) {
			if (Array.isArray(result) && Array.isArray(resource)) {
				data = [...resource, ...result];
			} else if (
				typeof result === 'object' &&
				typeof resource === 'object'
			) {
				data = {...resource, ...result};
			}
		}

		setResource(data);
		dispatchNetworkStatus(NetworkStatus.Unused);

		if (shouldUseCache) {
			client.update(identifier, data);
		}

		if (pollIntervalRef.current > 0) {
			setPoll();
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

		if (client.getCursor(identifier) === null) {
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
						getUrlFormat(
							client.getCursor(identifier) ?? link,
							variables
						),
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
							client.setCursor(identifier, res.cursor);

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
		const data = client.read(identifier);

		if (shouldUseCache && data) {
			fetchOnComplete(data);

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
		if (!firstRenderRef.current) {
			maybeFetch(NetworkStatus.Refetch);
		}
	}, [debouncedVariablesChange]);

	useEffect(() => {
		firstRenderRef.current = false;

		return () => {
			// Set to zero to prevent any unfinished requests
			// from continuing polling after umount has occurred.
			pollIntervalRef.current = 0;

			cleanPoll();
			cleanRetry();
		};
	}, []);

	const fetchingOrError = client.isFetching(identifier);

	if (!fetchingOrError && firstRenderRef.current) {
		const result = maybeFetch(NetworkStatus.Loading);

		if (result) {
			client.update(identifier, result);
		}
	}

	// Integration with React.Suspense
	if (
		suspense &&
		resource === null &&
		(fetchingOrError instanceof Promise || fetchingOrError instanceof Error)
	) {
		// Integration with React.Suspense, throwing a throw with the promise in
		// progress at render time for Suspense to catch.
		// Integration with ErrorBoundary, when a network error happens we throw
		// an error at render time so that ErrorBoundary catches the error.
		throw fetchingOrError;
	}

	return {loadMore, refetch, resource};
};

export {useResource};
