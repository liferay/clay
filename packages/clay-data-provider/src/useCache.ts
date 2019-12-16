/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as stringify from 'fast-json-stable-stringify';
import * as React from 'react';

import {LRUCache} from './LRUCache';
import {
	FetchPolicy,
	IStorage,
	SYMBOL_DATA_PROVIDER,
	TLink,
	TSymbolData,
	TVariables,
} from './types';

type TCacheKey = string | null;

const useCache = (
	fetchPolicy: FetchPolicy,
	storage: IStorage,
	storageMaxSize: number,
	link: TLink,
	variables: TVariables
) => {
	if (!storage[SYMBOL_DATA_PROVIDER]) {
		storage[SYMBOL_DATA_PROVIDER] = new LRUCache(storageMaxSize);
	}

	const cache = React.useRef<TSymbolData>(storage[
		SYMBOL_DATA_PROVIDER
	] as TSymbolData).current;

	const shouldUseCache =
		fetchPolicy === FetchPolicy.CacheFirst ||
		fetchPolicy === FetchPolicy.CacheAndNetwork;

	const getCacheKey = (link: TLink, variables: TVariables) => {
		if (typeof link === 'string') {
			return `${link}:${stringify(variables)}`;
		}

		return null;
	};

	const ifVal = (x: any, fn: Function) => (x ? fn : () => null);

	const partial = (fn: Function, presetArgs: any) => (args: any) =>
		fn(presetArgs, args);

	const readFromCache = (key: TCacheKey) => {
		if (key && cache.has(key)) {
			return cache.get(key);
		}

		return null;
	};

	const putCacheValue = (key: TCacheKey, value: any) => {
		if (key) {
			return cache.set(key, value);
		}

		return null;
	};

	return {
		get: ifVal(
			shouldUseCache,
			partial(readFromCache, getCacheKey(link, variables))
		),
		reset: cache.reset,
		set: ifVal(
			shouldUseCache,
			partial(putCacheValue, getCacheKey(link, variables))
		),
	};
};

export {useCache};
