/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LRUCache} from './LRUCache';

export const SYMBOL_DATA_PROVIDER = Symbol('clay.data.provider');

export const SYMBOL_ORIGIN = Symbol('clay.internal');

/**
 * - Loading (1) The status is set to `loading` only when the first
 *   requisition occurs.
 * - Refetch (2) The status is set to `refetch` when a change in the variables API
 *   or refetch method is called.
 * - Polling (3) The status is set to `polling` when pollInterval is set above 0.
 * - Unused (4) When no request is happening the status will be `unused`.
 * - Error (5) When any timeout or request `error` occurs, the status will be set
 *   to error.
 */
export enum NetworkStatus {
	Error = 5,
	Loading = 1,
	Polling = 3,
	Refetch = 2,
	Unused = 4,
}

export enum FetchPolicy {
	CacheFirst = 'cache-first',
	NoCache = 'no-cache',
	CacheAndNetwork = 'cache-and-network',
}

export type TSymbolData = LRUCache<string, {}>;

export interface IVariables {
	[propName: string]: any;
}

export type TVariables = IVariables | null;

export type TLinkFunction = (variables: string) => Promise<any>;

export type TLink = TLinkFunction | string;

export interface IStorage {
	[SYMBOL_DATA_PROVIDER]?: TSymbolData;
	[SYMBOL_ORIGIN]?: boolean;
	[propName: string]: any;
}

export interface IFetchRetryDelay {
	/**
	 * The number of milliseconds to wait before attempting the first retry.
	 *
	 * Delays will increase exponentially for each attempt.  E.g. if this is
	 * set to 100, subsequent retries will be delayed by 200, 400, 800, etc...
	 *
	 * Note that if jittering is enabled, this is the average delay.
	 */
	initial?: number;

	/**
	 * Whether delays between attempts should be randomized.
	 *
	 * This helps avoid thundering herd type situations by better
	 * distributing load during major outages.
	 */
	jitter?: boolean;
}

export interface IFetchRetry {
	/**
	 * The maximum number of times to try a single request before giving up.
	 */
	attempts?: number;

	/**
	 * Configuration for the delay strategy to use.
	 */
	delay?: IFetchRetryDelay;
}

export interface IDataProvider {
	/**
	 * A Promise returning function to fetch your data, this replaces the
	 * use of `fetch` by default.
	 */
	fetch?: (
		link: string,
		init?: RequestInit | undefined
	) => Promise<Response>;

	/**
	 * This API is used in conjunction with variables API, if it is always
	 * changing its value set a debounce time to make a new request.
	 *
	 * Set a value in ms.
	 */
	fetchDelay?: number;

	/**
	 * Options passed to request configuration.
	 */
	fetchOptions?: RequestInit;

	/**
	 * Fetch policy is an option that allows you to specify how you
	 * want your component to interact with the cache.
	 *
	 * (cache-first) Whenever a new request occurs, the data provider
	 * will first look at the cache and return it if it satisfies the
	 * data, otherwise it will perform the request.
	 * (no-cache) It will always make a new request and return the result
	 * and the cache is deactivated.
	 * (cache-and-network) This case is specific to when you want your
	 * users to have a quick response, when a new request happens, it
	 * will first go to the cache and if it exists it will return and
	 * regardless if it is in the cache it will make a new request on
	 * the network.
	 *
	 * The data provider takes only the cached data when they meet the
	 * requirements, the variables and URL are what they define when
	 * the cache satisfies their request. Be careful if your request
	 * is needed to cache to avoid problems.
	 */
	fetchPolicy?: FetchPolicy;

	/**
	 * Define the strategies for attempting new requests when it
	 * fails.
	 */
	fetchRetry?: IFetchRetry;

	/**
	 * Set a request timeout in ms, if it reaches this limit it will
	 * go through the retry rules and if it still persists, it will
	 * set the networkStatus to 4 (Error).
	 */
	fetchTimeout?: number;

	/**
	 * Set the URL to where the data provider will have to make a
	 * request, by default the request is solved with json, if it does
	 * not cover your use case you can also pass a function by returning
	 * a Promise. We do not recommend that you use a function to do so,
	 * you will lose some benefits of the data provider,
	 * always try to avoid.
	 *
	 * The behavior of the `link` accepting a function has been deprecated
	 * in favor of the `fetcher` API.
	 */
	link: TLink;

	/**
	 * The interval is set in milliseconds, setting the value to zero
	 * will disable polling.
	 */
	pollInterval?: number;

	/**
	 * Reference your storage provider, like Context, Store Object...
	 * Whenever a new request happens the data provider will look at
	 * storage, respecting the fetch policy.
	 *
	 * If you have a context serving as your store in your application
	 * independent of where the user is interacting the data provider
	 * can retrieve the data from the cache again if it is satisfied.
	 * The data is removed in LRU (least recently used) order.
	 */
	storage?: IStorage;

	/**
	 * Set the amount of items that can be cached, set to zero will be
	 * treated as infinite, be aware to set an ideal size to offer a
	 * positive experience for your user but not use a large amount of memory.
	 */
	storageMaxSize?: number;

	/**
	 * Variables are analyzed and converted to be passed as parameters
	 * to the query of a GET request, for example.
	 *
	 * @example
	 * {
	 *   name: 'Matu',
	 * }
	 *
	 * output for the link:
	 * '/?name=Matu'
	 */
	variables?: TVariables;
}
