/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Uri from 'metal-uri';
import {
	FetchPolicy,
	IDataProvider,
	NetworkStatus,
	SYMBOL_ORIGIN,
	TVariables,
} from './types';
import {timeout} from './util';
import {useCache} from './useCache';
import {useDebounce} from '@clayui/shared';
import {useEffect, useRef, useState} from 'react';

interface IResource extends IDataProvider {
	onNetworkStatusChange?: (status: NetworkStatus) => void;
}

const useResource = ({
	fetchDelay = 300,
	fetchOptions,
	fetchPolicy = FetchPolicy.NoCache,
	fetchTimeout = 6000,
	link,
	onNetworkStatusChange = () => {},
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

	let networkStatus = useRef<NetworkStatus>(NetworkStatus.Unused).current;

	let pollingIntervalId = useRef<null | NodeJS.Timeout>(null).current;

	let retryDelayIntervalId = useRef<null | NodeJS.Timeout>(null).current;

	const firstRenderRef = useRef<boolean>(true);

	const cache = useCache(
		fetchPolicy,
		storage,
		storageMaxSize,
		link,
		variables
	);

	const debouncedVariablesChange = useDebounce(variables, fetchDelay);

	const setNetworkStatus = (status: NetworkStatus) => {
		networkStatus = status;
		onNetworkStatusChange(status);
	};

	const handleRefetch = () => {
		doFetch();
		setNetworkStatus(NetworkStatus.Refetch);
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

		let value = Math.min(baseDelay * 2 ** retryAttempts);

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
			setNetworkStatus(NetworkStatus.Error);
			// eslint-disable-next-line no-console
			console.error('DataProvider: Error making the requisition', err);
		}
	};

	const cleanPoll = () => {
		if (pollingIntervalId) {
			clearInterval(pollingIntervalId);
		}
	};

	const fetchOnComplete = (result: any) => {
		// Should clear retry interval if any of the
		// attempts are successful.
		cleanRetry();

		setResource(result);
		setNetworkStatus(NetworkStatus.Unused);

		cache.set(result);

		if (pollInterval > 0) {
			cleanPoll();

			pollingIntervalId = setInterval(() => {
				maybeFetch(NetworkStatus.Polling);
			}, pollInterval);
		}
	};

	const getUrlFormat = (
		link: string,
		variables: TVariables,
		fetchOptions?: RequestInit
	) => {
		const uri = new Uri(link);

		if ((fetchOptions && fetchOptions.method !== 'GET') || !variables) {
			return uri.toString();
		}

		const keys = Object.keys(variables);

		keys.forEach(key => uri.addParameterValue(key, variables[key]));

		return uri.toString();
	};

	const doFetch = (retryAttempts = 0) => {
		let promise: Promise<any>;

		switch (typeof link) {
			case 'function':
				promise = link();
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

		setNetworkStatus(status);
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
