const mockData = {data: {}};

import DataComponent from '../DataComponent';

describe('DataComponent', () => {
	beforeEach(() => {
		global.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				json: jest.fn().mockImplementation(() => Promise.resolve(mockData)),
			})
		);
	});

	afterEach(() => {
		global.fetch.mockRestore();
	});

	it('should accept data as a string', () => {
		const comp = new DataComponent({
			data: './data/world-low-res.geo.json',
		});

		expect(comp).toMatchSnapshot();
	});

	it('should accept data as an object', () => {
		const component = new DataComponent({
			data: mockData.data,
		});

		expect(component).toMatchSnapshot();
	});

	it('should accept data as a function', () => {
		const component = new DataComponent({
			data: () => {
				return new Promise(resolve => {
					setTimeout(() => {
						resolve(mockData.data);
					}, 500);
				});
			},
		});
		expect(component).toMatchSnapshot();
	});

	it('should warn if data type is invalid', () => {
		global.console.error = jest.fn();

		const createComponent = () => {
			return new DataComponent({
				data: 123,
			});
		};

		createComponent();
		expect(global.console.error.mock.calls[0][0]).toBeDefined();
		global.console.error.mockRestore();
	});

	it('should support `pollingInterval`', done => {
		const component = new DataComponent({
			data: mockData.data,
			pollingInterval: 100,
		});

		const updateData = (DataComponent.prototype._updateData = jest.fn());

		component._setupPolling();
		component._setupPolling();

		expect(component._pollingInterval).toBeDefined();

		setTimeout(() => {
			expect(updateData.mock.calls[0]).toBeDefined();
			updateData.mockRestore();
			done();
		}, 500);
	});

	it('should clean up `pollingInterval`', () => {
		const component = new DataComponent({
			data: mockData.data,
			pollingInterval: 100,
		});
		component._setupPolling();
		expect(component._pollingInterval).toBeDefined();
		component.dispose();
		expect(component._pollingInterval).toBe(null);
	});
});
