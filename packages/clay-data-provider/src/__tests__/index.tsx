/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/* global fetchMock*/

import {Provider} from '@clayui/provider';
import {cleanup, fireEvent, render, waitFor} from '@testing-library/react';
import {FetchMock} from 'jest-fetch-mock'; // eslint-disable-line @typescript-eslint/no-unused-vars
import React, {useState} from 'react';

import DataProvider, {useResource} from '../';
import {FetchPolicy} from '../useResource';

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
			<Provider spritemap="">
				<DataProvider link="https://clay.data">
					{({data}) => <h1>{data && data.title}</h1>}
				</DataProvider>
			</Provider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

		expect(fetchMock.mock.calls[0]![0]).toEqual('https://clay.data/');
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

		expect(fetchMock.mock.calls[0]![0]).toEqual('https://clay.data');
	});

	it('call clay.data with a custom fetch', async () => {
		const fetch = jest
			.fn()
			.mockImplementation(() => Promise.resolve({data: 'Foo'}));

		render(
			<Provider spritemap="">
				<DataProvider fetch={fetch} link="https://clay.data">
					{() => <div />}
				</DataProvider>
			</Provider>
		);

		await waitFor(() => expect(fetch).toHaveBeenCalled());

		expect(fetch).toHaveBeenCalledWith(
			'https://clay.data/',
			expect.any(Object),
			undefined
		);
	});

	it.skip('calls clay.data and return data from cache', async () => {
		const data = {title: 'Foo'};

		fetchMock.mockResponse(JSON.stringify(data));

		const {container} = render(
			<Provider spritemap="">
				<DataProvider
					fetchPolicy={FetchPolicy.CacheFirst}
					link="https://clay.data"
				>
					{({data}) => <h1>{data && data.title}</h1>}
				</DataProvider>
			</Provider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).not.toEqual(1));

		expect(fetchMock.mock.calls.length).toBe(0);
		expect(container.innerHTML).toMatchSnapshot();
	});

	xit('calls clay.data and returns data from the cache and fetches data on the network', async () => {
		fetchMock.mockResponse(JSON.stringify({title: 'Bar'}));

		const {container} = render(
			<Provider spritemap="">
				<DataProvider
					fetchPolicy={FetchPolicy.CacheAndNetwork}
					link="https://clay.data"
				>
					{({data}) => <h1>{data && data.title}</h1>}
				</DataProvider>
			</Provider>
		);

		expect(container.innerHTML).toMatchSnapshot();

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

		expect(fetchMock.mock.calls[0]![0]).toEqual('https://clay.data/');
		expect(container.innerHTML).toMatchSnapshot();
	});

	xit('calls clay.data and returns the timeout error', async () => {
		fetchMock.mockResponseOnce(
			() =>
				new Promise((resolve) =>
					setTimeout(() => resolve({body: 'ok'}), 200)
				)
		);

		const {container} = render(
			<Provider spritemap="">
				<DataProvider
					fetchRetry={{
						attempts: 0,
					}}
					fetchTimeout={100}
					link="https://clay.data"
				>
					{({error}) => <h1>{error && 'Timeout Error'}</h1>}
				</DataProvider>
			</Provider>
		);

		await fetchMock.mock.results[0]!.value;

		expect(fetchMock.mock.calls.length).toEqual(1);

		expect(fetchMock.mock.calls[0]![0]).toEqual('https://clay.data/');
		expect(container.innerHTML).toMatchSnapshot();
	});

	it('make 5 attempts when the request fails', async () => {
		const spy = jest.spyOn(global.console, 'warn');

		fetchMock.mockReject(new Error('fake error message'));

		const {container} = render(
			<Provider spritemap="">
				<DataProvider link="https://clay.data">
					{({error}) => <h1>{error && 'Error'}</h1>}
				</DataProvider>
			</Provider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(6), {
			timeout: 15000,
		});
		expect(spy.mock.calls.length).toBe(5);
		expect(spy.mock.calls[0]![0]).not.toBe(
			'DataProvider: Trying 1 of 5 will happen in 150ms'
		);
		expect(spy.mock.calls[1]![0]).not.toBe(
			'DataProvider: Trying 2 of 5 will happen in 300ms'
		);
		expect(spy.mock.calls[2]![0]).not.toBe(
			'DataProvider: Trying 3 of 5 will happen in 600ms'
		);
		expect(spy.mock.calls[3]![0]).not.toBe(
			'DataProvider: Trying 4 of 5 will happen in 1200ms'
		);
		expect(spy.mock.calls[4]![0]).not.toBe(
			'DataProvider: Trying 5 of 5 will happen in 2400ms'
		);
		expect(fetchMock.mock.calls[0]![0]).toEqual('https://clay.data/');
		expect(container.innerHTML).toMatchSnapshot();

		spy.mockRestore();
	}, 20000);

	it('make 5 attempts with jitter disabled when the request fails', async () => {
		const spy = jest.spyOn(global.console, 'warn');

		fetchMock.mockReject(new Error('fake error message'));

		const {container} = render(
			<Provider spritemap="">
				<DataProvider
					fetchRetry={{delay: {jitter: false}}}
					link="https://clay.data"
				>
					{({error}) => <h1>{error && 'Error'}</h1>}
				</DataProvider>
			</Provider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(6), {
			timeout: 8000,
		});
		expect(spy.mock.calls.length).toBe(5);
		expect(spy.mock.calls[0]![0]).toBe(
			'DataProvider: Trying 1 of 5 will happen in 150ms'
		);
		expect(spy.mock.calls[1]![0]).toBe(
			'DataProvider: Trying 2 of 5 will happen in 300ms'
		);
		expect(spy.mock.calls[2]![0]).toBe(
			'DataProvider: Trying 3 of 5 will happen in 600ms'
		);
		expect(spy.mock.calls[3]![0]).toBe(
			'DataProvider: Trying 4 of 5 will happen in 1200ms'
		);
		expect(spy.mock.calls[4]![0]).toBe(
			'DataProvider: Trying 5 of 5 will happen in 2400ms'
		);
		expect(fetchMock.mock.calls[0]![0]).toEqual('https://clay.data/');
		expect(container.innerHTML).toMatchSnapshot();

		spy.mockRestore();
	});

	it('calls clay.data and fetch again when variables change', async () => {
		const data = {title: 'Bar'};

		fetchMock.mockResponse(JSON.stringify(data));

		const DataProviderTest = ({variables}: {variables: any}) => (
			<Provider spritemap="">
				<DataProvider link="https://clay.data" variables={variables}>
					{({data}) => <h1>{data && data.tile}</h1>}
				</DataProvider>
			</Provider>
		);

		const {rerender} = render(
			<DataProviderTest variables={{name: 'Bar'}} />
		);

		await fetchMock.mock.results[0]!.value;
		expect(fetchMock.mock.calls.length).toEqual(1);

		rerender(<DataProviderTest variables={{name: 'Baz'}} />);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(2));
		await fetchMock.mock.results[1]!.value;

		expect(fetchMock.mock.calls[0]![0]).toEqual(
			'https://clay.data/?name=Bar'
		);
		expect(fetchMock.mock.calls[1]![0]).toEqual(
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

		expect(fetchMock.mock.calls[0]![0]).toEqual(
			'https://clay.data/?name=Bar'
		);
	});

	it('calls clay.data only once with many changes in variables', async () => {
		jest.useFakeTimers();

		const data = {title: 'Bar'};

		fetchMock.mockResponse(JSON.stringify(data));

		const DataProviderTest = () => {
			const [variables, setVariables] = useState({name: 'Bar'});

			return (
				<DataProvider link="https://clay.data" variables={variables}>
					{({data}) => (
						<>
							<h1>{data && data.tile}</h1>
							<button
								onClick={() => setVariables({name: 'Baz'})}
								type="button"
							>
								Baz
							</button>
							<button
								onClick={() => setVariables({name: 'Foo'})}
								type="button"
							>
								Foo
							</button>
							<button
								onClick={() => setVariables({name: 'Clay'})}
								type="button"
							>
								Clay
							</button>
						</>
					)}
				</DataProvider>
			);
		};

		const {getByText} = render(
			<Provider spritemap="">
				<DataProviderTest />
			</Provider>
		);

		const bazButton = getByText('Baz');

		fireEvent.click(bazButton);

		const fooButton = getByText('Foo');

		fireEvent.click(fooButton);

		const clayButton = getByText('Clay');

		fireEvent.click(clayButton);

		jest.runAllTimers();

		await fetchMock.mock.results[0]!.value;
		await waitFor(() => expect(fetchMock).toBeCalledTimes(2));
	});

	it('calls clay.data with polling of 50ms', async () => {
		fetchMock
			.once(JSON.stringify({title: '1'}))
			.once(JSON.stringify({title: '2'}))
			.once(JSON.stringify({title: '3'}));

		const {container} = render(
			<Provider spritemap="">
				<DataProvider link="https://clay.data" pollInterval={50}>
					{({data}) => <h1>{data && data.title}</h1>}
				</DataProvider>
			</Provider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));
		expect(container.innerHTML).toMatchSnapshot();

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(2));
		expect(container.innerHTML).toMatchSnapshot();

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(3));
		expect(container.innerHTML).toMatchSnapshot();

		expect(fetchMock.mock.calls[0]![0]).toEqual('https://clay.data/');
	});

	it('data must be aggregated when using paginated data', async () => {
		fetchMock
			.once(
				JSON.stringify({
					data: [{name: 'Foo'}],
					next: 'https://clay.data/?cursor=1',
				})
			)
			.once(
				JSON.stringify({
					data: [{name: 'Bar'}],
					next: 'https://clay.data/?cursor=2',
				})
			)
			.once(JSON.stringify({data: [{name: 'Baz'}]}));

		const DataProviderTest = () => {
			const {loadMore, resource} = useResource({
				fetch: async (link: string) => {
					const result = await fetch(link);
					const json = await result.json();

					return {
						cursor: json.next ?? null,
						items: json.data,
					};
				},
				link: 'https://clay.data',
				variables: {limit: 10},
			});

			return (
				<>
					<ul>
						{resource &&
							resource.map((item: any) => (
								<li key={item.name}>{item.name}</li>
							))}
					</ul>
					<button onClick={() => loadMore()} type="button">
						Load more
					</button>
				</>
			);
		};

		const {getAllByRole, getByRole} = render(
			<Provider spritemap="">
				<DataProviderTest />
			</Provider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));
		expect(fetchMock.mock.calls[0]![0]).toEqual(
			'https://clay.data/?limit=10'
		);

		const button = getByRole('button');

		fireEvent.click(button);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(2));

		expect(fetchMock.mock.calls[1]![0]).toEqual(
			'https://clay.data/?cursor=1&limit=10'
		);

		fireEvent.click(button);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(3));

		expect(fetchMock.mock.calls[2]![0]).toEqual(
			'https://clay.data/?cursor=2&limit=10'
		);

		expect(getAllByRole('listitem').length).toBe(3);
	});

	it('does not deduplicate the request to the same endpoint when there is no declared Provider', async () => {
		const data = [{name: 'Bar'}];

		fetchMock.mockResponse(JSON.stringify(data));

		const DataProviderTest = () => {
			const {resource} = useResource({
				link: 'https://clay.data',
				variables: {limit: 10},
			});

			const {resource: resource2} = useResource({
				link: 'https://clay.data',
				variables: {limit: 10},
			});

			return (
				<>
					<ul role="list">
						{resource &&
							resource.map((item: any) => (
								<li key={item.name} role="listitem">
									{item.name}
								</li>
							))}
					</ul>

					<ul role="list">
						{resource2 &&
							resource2.map((item: any) => (
								<li key={item.name} role="listitem">
									{item.name}
								</li>
							))}
					</ul>
				</>
			);
		};

		const {getAllByRole} = render(<DataProviderTest />);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(2));

		const [listitem1, listitem2] = getAllByRole('listitem');

		expect(listitem1).toBeDefined();
		expect(listitem2).toBeDefined();
	});

	it('deduplicates the first request to the same endpoint when the Provider is declared', async () => {
		const data = [{name: 'Bar'}];

		fetchMock.mockResponse(JSON.stringify(data));

		const DataProviderTest = () => {
			const {resource} = useResource({
				link: 'https://clay.data',
				variables: {limit: 10},
			});

			const {resource: resource2} = useResource({
				link: 'https://clay.data',
				variables: {limit: 10},
			});

			return (
				<>
					<ul role="list">
						{resource &&
							resource.map((item: any) => (
								<li key={item.name} role="listitem">
									{item.name}
								</li>
							))}
					</ul>

					<ul role="list">
						{resource2 &&
							resource2.map((item: any) => (
								<li key={item.name} role="listitem">
									{item.name}
								</li>
							))}
					</ul>
				</>
			);
		};

		const {getAllByRole} = render(
			<Provider spritemap="">
				<DataProviderTest />
			</Provider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(1));

		const [listitem1, listitem2] = getAllByRole('listitem');

		expect(listitem1).toBeDefined();
		expect(listitem2).toBeDefined();
	});

	it('do not deduplicate request to same endpoint when options are different', async () => {
		fetchMock.mockResponse(
			(request) =>
				new Promise((resolve, reject) =>
					request.text().then((body) => {
						const search = new URLSearchParams(body);
						const cmd = JSON.parse(search.get('cmd')!);

						if (cmd['/foo/query']) {
							resolve(JSON.stringify([{name: 'Foo'}]));
						} else if (cmd['/bar/query']) {
							resolve(JSON.stringify([{name: 'Baz'}]));
						}
					}, reject)
				)
		);

		const DataProviderTest = () => {
			const {resource} = useResource({
				fetchOptions: {
					body: new URLSearchParams({
						cmd: JSON.stringify({
							'/foo/query': {
								name: 'f',
							},
						}),
					}),
					method: 'POST',
				},
				link: 'https://clay.data',
				variables: {limit: 10},
			});

			const {resource: resource2} = useResource({
				fetchOptions: {
					body: new URLSearchParams({
						cmd: JSON.stringify({
							'/bar/query': {
								name: 'b',
							},
						}),
					}),
					method: 'POST',
				},
				link: 'https://clay.data',
				variables: {limit: 10},
			});

			return (
				<>
					<ul role="list">
						{resource &&
							resource.map((item: any) => (
								<li key={item.name} role="listitem">
									{item.name}
								</li>
							))}
					</ul>

					<ul role="list">
						{resource2 &&
							resource2.map((item: any) => (
								<li key={item.name} role="listitem">
									{item.name}
								</li>
							))}
					</ul>
				</>
			);
		};

		const {getAllByRole} = render(
			<Provider spritemap="">
				<DataProviderTest />
			</Provider>
		);

		await waitFor(() => expect(fetchMock.mock.calls.length).toEqual(2));

		const [listitem1, listitem2] = getAllByRole('listitem');

		expect(listitem1!.innerHTML).toBe('Foo');
		expect(listitem2!.innerHTML).toBe('Baz');
	});
});
