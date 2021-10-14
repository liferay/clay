/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/* global fetchMock*/

import {cleanup, render, waitFor} from '@testing-library/react';
import {FetchMock} from 'jest-fetch-mock'; // eslint-disable-line @typescript-eslint/no-unused-vars
import React from 'react';

import DataProvider from '../';
import {LRUCache} from '../LRUCache';
import {
	FetchPolicy,
	IStorage,
	SYMBOL_DATA_PROVIDER,
	SYMBOL_ORIGIN,
	TSymbolData,
} from '../types';

const setupCache = (key: string, data: Object): IStorage => {
	const symbolDataProvider: TSymbolData = new LRUCache(10);

	symbolDataProvider.set(key, data);

	const cache = {
		[SYMBOL_DATA_PROVIDER]: symbolDataProvider,
		[SYMBOL_ORIGIN]: true,
	};

	return cache;
};

describe('ClayDataProvider', () => {
	afterEach(cleanup);

	// this is just a little hack to silence a warning that we'll get until react
	// fixes this: https://github.com/facebook/react/pull/14853
	// https://github.com/testing-library/react/issues/281
	// eslint-disable-next-line no-console
	const originalError = console.error;
	// eslint-disable-next-line no-console
	const originalWarn = console.warn;
	beforeAll(() => {
		// eslint-disable-next-line no-console
		console.error = (...args: any) => {
			if (
				/Warning.*not wrapped in act/.test(args[0]) ||
				/DataProvider: Error making/.test(args[0])
			) {
				return;
			}
			originalError.call(console, ...args);
		};
		// eslint-disable-next-line no-console
		console.warn = (...args: any) => {
			if (/DataProvider: Trying/.test(args[0])) {
				return;
			}
			originalWarn.call(console, ...args);
		};
	});

	afterAll(() => {
		// eslint-disable-next-line no-console
		console.error = originalError;
		// eslint-disable-next-line no-console
		console.warn = originalWarn;
	});

	beforeEach(() => {
		fetchMock.resetMocks();
	});

	it('calls clay.data and return data', async () => {
		fetchMock.mockResponse(JSON.stringify({title: 'Foo'}));

		const {container} = render(
			<DataProvider link="https://clay.data">
				{({data}) => <h1>{data && data.title}</h1>}
			</DataProvider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

		expect(fetchMock.mock.calls[0][0]).toEqual('https://clay.data/');
		expect(container.innerHTML).toMatchSnapshot();
	});

	it('call clay.data with link being a function', async () => {
		fetchMock.mockResponse(JSON.stringify({title: 'Foo'}));

		render(
			<DataProvider link={() => fetch('https://clay.data')}>
				{({data}) => <h1>{data && data.title}</h1>}
			</DataProvider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

		expect(fetchMock.mock.calls[0][0]).toEqual('https://clay.data');
	});

	it('call clay.data with a custom fetch', async () => {
		const fetch = jest
			.fn()
			.mockImplementation(() => Promise.resolve({data: 'Foo'}));

		render(
			<DataProvider fetch={fetch} link="https://clay.data">
				{() => <div />}
			</DataProvider>
		);

		await waitFor(() => expect(fetch).toHaveBeenCalled());

		expect(fetch).toHaveBeenCalledWith('https://clay.data/', undefined);
	});

	it('calls clay.data and return data from cache', async () => {
		const data = {title: 'Foo'};
		const cache = setupCache('https://clay.data:null', data);

		fetchMock.mockResponse(JSON.stringify(data));

		const {container} = render(
			<DataProvider
				fetchPolicy={FetchPolicy.CacheFirst}
				link="https://clay.data"
				storage={cache}
			>
				{({data}) => <h1>{data && data.title}</h1>}
			</DataProvider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).not.toEqual(1));

		expect(fetchMock.mock.calls.length).toBe(0);
		expect(container.innerHTML).toMatchSnapshot();
	});

	it('calls clay.data and returns data from the cache and fetches data on the network', async () => {
		const data = {title: 'Foo'};
		const cache = setupCache('https://clay.data:null', data);

		fetchMock.mockResponse(JSON.stringify({title: 'Bar'}));

		const {container} = render(
			<DataProvider
				fetchPolicy={FetchPolicy.CacheAndNetwork}
				link="https://clay.data"
				storage={cache}
			>
				{({data}) => <h1>{data && data.title}</h1>}
			</DataProvider>
		);

		expect(container.innerHTML).toMatchSnapshot();

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

		expect(fetchMock.mock.calls[0][0]).toEqual('https://clay.data/');
		expect(container.innerHTML).toMatchSnapshot();
	});

	it('calls clay.data and returns the timeout error', async () => {
		fetchMock.mockResponseOnce(
			() =>
				new Promise((resolve) =>
					setTimeout(() => resolve({body: 'ok'}), 200)
				)
		);

		const {container} = render(
			<DataProvider
				fetchRetry={{
					attempts: 0,
				}}
				fetchTimeout={100}
				link="https://clay.data"
			>
				{({error}) => <h1>{error && 'Timeout Error'}</h1>}
			</DataProvider>
		);

		await fetchMock.mock.results[0].value;

		expect(fetchMock.mock.calls.length).toEqual(1);

		expect(fetchMock.mock.calls[0][0]).toEqual('https://clay.data/');
		expect(container.innerHTML).toMatchSnapshot();
	});

	it('make 5 attempts when the request fails', async () => {
		const spy = jest.spyOn(global.console, 'warn');

		fetchMock.mockReject(new Error('fake error message'));

		const {container} = render(
			<DataProvider link="https://clay.data">
				{({error}) => <h1>{error && 'Error'}</h1>}
			</DataProvider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(6), {
			timeout: 15000,
		});
		expect(spy.mock.calls.length).toBe(5);
		expect(spy.mock.calls[0][0]).not.toBe(
			'DataProvider: Trying 1 of 5 will happen in 150ms'
		);
		expect(spy.mock.calls[1][0]).not.toBe(
			'DataProvider: Trying 2 of 5 will happen in 300ms'
		);
		expect(spy.mock.calls[2][0]).not.toBe(
			'DataProvider: Trying 3 of 5 will happen in 600ms'
		);
		expect(spy.mock.calls[3][0]).not.toBe(
			'DataProvider: Trying 4 of 5 will happen in 1200ms'
		);
		expect(spy.mock.calls[4][0]).not.toBe(
			'DataProvider: Trying 5 of 5 will happen in 2400ms'
		);
		expect(fetchMock.mock.calls[0][0]).toEqual('https://clay.data/');
		expect(container.innerHTML).toMatchSnapshot();

		spy.mockRestore();
	}, 20000);

	it('make 5 attempts with jitter disabled when the request fails', async () => {
		const spy = jest.spyOn(global.console, 'warn');

		fetchMock.mockReject(new Error('fake error message'));

		const {container} = render(
			<DataProvider
				fetchRetry={{delay: {jitter: false}}}
				link="https://clay.data"
			>
				{({error}) => <h1>{error && 'Error'}</h1>}
			</DataProvider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(6), {
			timeout: 8000,
		});
		expect(spy.mock.calls.length).toBe(5);
		expect(spy.mock.calls[0][0]).toBe(
			'DataProvider: Trying 1 of 5 will happen in 150ms'
		);
		expect(spy.mock.calls[1][0]).toBe(
			'DataProvider: Trying 2 of 5 will happen in 300ms'
		);
		expect(spy.mock.calls[2][0]).toBe(
			'DataProvider: Trying 3 of 5 will happen in 600ms'
		);
		expect(spy.mock.calls[3][0]).toBe(
			'DataProvider: Trying 4 of 5 will happen in 1200ms'
		);
		expect(spy.mock.calls[4][0]).toBe(
			'DataProvider: Trying 5 of 5 will happen in 2400ms'
		);
		expect(fetchMock.mock.calls[0][0]).toEqual('https://clay.data/');
		expect(container.innerHTML).toMatchSnapshot();

		spy.mockRestore();
	});

	it('calls clay.data and fetch again when variables change', async () => {
		const data = {title: 'Bar'};

		fetchMock.mockResponse(JSON.stringify(data));

		const DataProviderTest = ({variables}: {variables: any}) => (
			<DataProvider link="https://clay.data" variables={variables}>
				{({data}) => <h1>{data && data.tile}</h1>}
			</DataProvider>
		);

		const {rerender} = render(
			<DataProviderTest variables={{name: 'Bar'}} />
		);

		await fetchMock.mock.results[0].value;
		expect(fetchMock.mock.calls.length).toEqual(1);

		rerender(<DataProviderTest variables={{name: 'Baz'}} />);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(2));
		await fetchMock.mock.results[1].value;

		expect(fetchMock.mock.calls[0][0]).toEqual(
			'https://clay.data/?name=Bar'
		);
		expect(fetchMock.mock.calls[1][0]).toEqual(
			'https://clay.data/?name=Baz'
		);
	});

	it('call clay.data with search params and link being a function', async () => {
		fetchMock.mockResponse(JSON.stringify({title: 'Foo'}));

		render(
			<DataProvider
				link={(variables) => fetch(`https://clay.data/?${variables}`)}
				variables={{name: 'Bar'}}
			>
				{({data}) => <h1>{data && data.title}</h1>}
			</DataProvider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

		expect(fetchMock.mock.calls[0][0]).toEqual(
			'https://clay.data/?name=Bar'
		);
	});

	it('calls clay.data only once with many changes in variables', async () => {
		const data = {title: 'Bar'};

		fetchMock.mockResponse(JSON.stringify(data));

		const DataProviderTest = ({variables}: {variables: any}) => (
			<DataProvider link="https://clay.data" variables={variables}>
				{({data}) => <h1>{data && data.tile}</h1>}
			</DataProvider>
		);

		const {rerender} = render(
			<DataProviderTest variables={{name: 'Bar'}} />
		);

		rerender(<DataProviderTest variables={{name: 'Baz'}} />);
		rerender(<DataProviderTest variables={{name: 'Foo'}} />);
		rerender(<DataProviderTest variables={{name: 'Data'}} />);
		rerender(<DataProviderTest variables={{name: 'Clay'}} />);

		await fetchMock.mock.results[0].value;
		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(2));

		expect(fetchMock.mock.calls[0][0]).toEqual(
			'https://clay.data/?name=Bar'
		);
		expect(fetchMock.mock.calls[1][0]).toEqual(
			'https://clay.data/?name=Clay'
		);
	});

	it('calls clay.data with polling of 50ms', async () => {
		fetchMock
			.once(JSON.stringify({title: '1'}))
			.once(JSON.stringify({title: '2'}))
			.once(JSON.stringify({title: '3'}));

		const {container} = render(
			<DataProvider link="https://clay.data" pollInterval={50}>
				{({data}) => <h1>{data && data.title}</h1>}
			</DataProvider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));
		expect(container.innerHTML).toMatchSnapshot();

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(2));
		expect(container.innerHTML).toMatchSnapshot();

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(3));
		expect(container.innerHTML).toMatchSnapshot();

		expect(fetchMock.mock.calls[0][0]).toEqual('https://clay.data/');
	});
});
