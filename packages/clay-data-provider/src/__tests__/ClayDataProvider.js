import * as utils from '../utils';
import ClayDataProvider from '../ClayDataProvider';

let component;
let content = function() {
	IncrementalDOM.elementOpen('div');
	IncrementalDOM.text('DataProvider');
	IncrementalDOM.elementClose('div');
};
let dataSourceRemote = {
	data: [
		{
			id: 'foo',
			name: 'Foo',
		},
		{
			id: 'bar',
			name: 'Bar',
		},
		{
			id: 'baz',
			name: 'Baz',
		},
	],
};

describe('ClayDataProvider', function() {
	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render the default markup', () => {
		component = new ClayDataProvider({
			content,
			dataSource: [],
		});

		expect(component).toMatchSnapshot();
	});

	it('should receive local data and store internally', () => {
		const dataSource = [
			'Bread',
			'Ammonia cookie',
			'Cuisine of Antebellum America',
			'Apple butter',
			'Apple sauce',
		];

		component = new ClayDataProvider({
			content,
			dataSource,
		});

		expect(component._dataSource).toEqual(dataSource);
	});

	it('should filter the internal data', () => {
		const dataSource = [
			'Bread',
			'Ammonia cookie',
			'Cuisine of Antebellum America',
			'Apple butter',
			'Apple sauce',
		];

		component = new ClayDataProvider({
			content,
			dataSource,
		});

		const filteredItem = component.filter('brea');

		expect(filteredItem).toEqual([
			{
				data: 'Bread',
				index: 0,
				matches: [
					{match: true, value: 'B'},
					{match: true, value: 'r'},
					{match: true, value: 'e'},
					{match: true, value: 'a'},
					{value: 'd'},
				],
				value: 'Bread',
				score: 26,
			},
		]);
	});

	describe('remote data', () => {
		beforeEach(() => {
			fetch.resetMocks();
			jest.useFakeTimers();
		});

		it('should request remote data', async () => {
			fetch.mockResponseOnce(JSON.stringify(dataSourceRemote));

			component = new ClayDataProvider({
				content,
				dataSource: 'http://clay.datasource',
			});

			await Promise.resolve();

			expect(fetch.mock.calls.length).toBe(1);
			expect(fetch.mock.calls[0][0]).toEqual('http://clay.datasource');
		});

		it('should emit an event on data change', async done => {
			fetch.mockResponseOnce(JSON.stringify(dataSourceRemote));

			component = new ClayDataProvider({
				content,
				dataSource: 'http://clay.datasource',
				events: {
					dataChange: async event => {
						expect(dataSourceRemote).toEqual(event.data);
						done();
					},
				},
			});

			await Promise.resolve();

			expect(fetch.mock.calls.length).toBe(1);
		});

		it('should add an initial data while the request is not resolved', async done => {
			utils.timeout = jest.fn((ms, promise) => promise);
			fetch.mockResponseOnce(
				() =>
					new Promise(resolve =>
						setTimeout(
							() => resolve(JSON.stringify(dataSourceRemote)),
							20
						)
					)
			);

			const initialData = [{id: 'foo', name: 'Foo'}];

			component = new ClayDataProvider({
				content,
				dataSource: 'http://clay.datasource',
				initialData,
				events: {
					dataChange: event => {
						expect(initialData).toEqual(event.data);
						done();
					},
				},
			});

			await Promise.resolve();

			expect(fetch.mock.calls.length).toBe(1);
		});
	});
});
