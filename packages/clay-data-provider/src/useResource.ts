/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import LRU from 'lru-cache';
import {
	FetchPolicy,
	IDataProvider,
	NetworkStatus,
	SYMBOL_DATA_PROVIDER,
	SYMBOL_ORIGIN,
	TSymbolData,
} from './types';
import {timeout} from './util';
import {useDebounce} from '@clayui/shared';
import {useEffect, useRef, useState} from 'react';

interface IResource extends IDataProvider {
	onNetworkStatusChange?: (status: NetworkStatus) => void;
}

const evaluteVariables = (variables: any): string | null => {
	if (!variables) {
		return null;
	}

	const keys = Object.keys(variables);

	return keys
		.map((key, index) => {
			const param = `${key}=${variables[key]}`;
			return index === keys.length - 1 ? `?${param}` : param;
		})
		.join('&');
};

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
	fetchRetry = {
		delay: {
			initial: 300,
			jitter: true,
		},
		attempts: 5,
	},
	storageMaxSize = 20,
	variables = null,
}: IResource) => {
	const [resource, setResource] = useState<any>(null);

	const getStorageCache = () => {
		if (storage[SYMBOL_DATA_PROVIDER]) {
			return storage[SYMBOL_DATA_PROVIDER] as TSymbolData;
		}

		return (storage[SYMBOL_DATA_PROVIDER] = new LRU(storageMaxSize));
	};

	let networkStatus = useRef<NetworkStatus>(NetworkStatus.Unused).current;

	let pollingIntervalIdRef = useRef<null | NodeJS.Timeout>(null).current;

	let retryDelayIntervalIdRef = useRef<null | NodeJS.Timeout>(null).current;

	const cache = useRef<TSymbolData>(getStorageCache()).current;

	const debouncedVariablesChange = useDebounce(variables, fetchDelay);

	const setNetworkStatus = (status: NetworkStatus) => {
		networkStatus = status;
		onNetworkStatusChange(status);
	};

	const handleRefetch = () => {
		handleFetch();
		setNetworkStatus(NetworkStatus.Refetch);
	};

	const cleanRetry = () => {
		if (retryDelayIntervalIdRef) {
			clearInterval(retryDelayIntervalIdRef);
		}
	};

	const getRetryDelay = (retryAttempts: number) => {
		const {
			delay: {initial, jitter},
		} = fetchRetry;
		const baseDelay = jitter ? initial : initial / 2;

		let delay = Math.min(baseDelay * 2 ** retryAttempts);

		if (jitter) {
			delay = Math.random() * delay;
		}

		return delay;
	};

	const handleFetchRetry = (err: any, retryAttempts: number) => {
		const {attempts} = fetchRetry;

		cleanRetry();

		if (attempts > 0 && retryAttempts < attempts) {
			const delay = getRetryDelay(retryAttempts);
			console.warn(
				`DataProvider: Trying ${retryAttempts +
					1} of ${attempts} will happen in ${delay}ms`
			);
			retryDelayIntervalIdRef = setInterval(() => {
				handleFetch(retryAttempts + 1);
			}, delay);
		} else {
			setNetworkStatus(NetworkStatus.Error);
			console.error('DataProvider: Error making the requisition', err);
		}
	};

	const cleanPoll = () => {
		if (pollingIntervalIdRef) {
			clearInterval(pollingIntervalIdRef);
		}
	};

	const cacheSatisfies = () => {
		if (typeof link === 'string') {
			return `${link}:${JSON.stringify(variables)}`;
		}

		return null;
	};

	const evaluteCachePolicy = () => {
		switch (fetchPolicy) {
			case FetchPolicy.CacheFirst:
			case FetchPolicy.CacheAndNetwork:
				return true;
			case FetchPolicy.NoCache:
			default:
				return false;
		}
	};

	const getCache = () => {
		const key = cacheSatisfies();

		if (key && cache.has(key)) {
			return cache.get(key);
		}

		return null;
	};

	const evaluteSetCache = (value: any) => {
		const key = cacheSatisfies();

		if (key) {
			return cache.set(key, value);
		}

		return null;
	};

	const setupPoll = () => {
		cleanPoll();

		pollingIntervalIdRef = setInterval(() => {
			performFetch(NetworkStatus.Polling);
		}, pollInterval);
	};

	const fetchOnComplete = (result: any) => {
		// Should clear retry interval if any of the
		// attempts are successful.
		cleanRetry();

		setResource(result);
		setNetworkStatus(NetworkStatus.Unused);

		if (evaluteCachePolicy()) {
			evaluteSetCache(result);
		}

		if (pollInterval > 0) {
			setupPoll();
		}
	};

	const performCache = () => {
		if (evaluteCachePolicy()) {
			const cacheData = getCache();

			if (cacheData) {
				fetchOnComplete(cacheData);

				// When fetch policy is only cache-first and gets the data from
				// the cache, it should not perform a request, only when it is
				// cache-and-network.
				if (fetchPolicy === FetchPolicy.CacheFirst) {
					return false;
				}
			}
		}

		return true;
	};

	const evaluateUrl = (): string => {
		if (fetchOptions && fetchOptions.method !== 'GET') {
			return link as string;
		}

		const query = evaluteVariables(variables);

		return query ? `${link}/${query}` : (link as string);
	};

	const handleFetch = (retryAttempts = 0) => {
		let promise: Promise<any>;

		switch (typeof link) {
			case 'function':
				promise = link();
				break;
			case 'string':
				promise = fetch(evaluateUrl(), fetchOptions).then(res =>
					res.json()
				);
				break;
			default:
				return null;
		}

		timeout(fetchTimeout, promise)
			.then(fetchOnComplete)
			.catch(err => handleFetchRetry(err, retryAttempts));
	};

	const performFetch = (status: NetworkStatus) => {
		if (performCache()) {
			setNetworkStatus(status);
			handleFetch();
		}
	};

	useEffect(() => {
		performFetch(NetworkStatus.Refetch);
	}, [debouncedVariablesChange]);

	useEffect(() => {
		performFetch(NetworkStatus.Loading);

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

	return {resource, refetch: handleRefetch};
};

export {useResource};
