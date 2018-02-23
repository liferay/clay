import {bb} from 'billboard.js';
import Chart from '../Chart';

beforeAll(() => {
	jest.spyOn(bb, 'generate').mockImplementation();
});

beforeEach(() => {
	bb.generate.mockReset();
});

afterAll(() => {
	bb.generate.mockReset();
	bb.generate.mockRestore();
});

describe('Chart', () => {
	it('should be pass correctly formatted configuration options to billboard.js', done => {
		const chart = new Chart({
			data: [],
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];
			expect(config.bindto).toBe(chart.refs.chart);

			config.bindto = undefined;

			expect(JSON.stringify(config)).toMatchSnapshot();
			done();
		});
	});

	it('should format columns array into billboard.js compatible data', done => {
		const chart = new Chart({
			data: [
				{
					axis: 'y',
					class: 'data1',
					color: 'red',
					data: [1, 2, 3],
					hide: true,
					id: 'data1',
					name: 'Data 1',
					regions: [
						{
							end: 2,
							start: 1,
							style: 'dashed',
						},
					],
					type: 'line',
					x: 'x1',
				},
				{
					axis: 'y2',
					class: 'data2',
					color: 'blue',
					data: [1, 2, 3],
					hide: false,
					id: 'data2',
					name: 'Data 2',
					regions: [
						{
							end: 3,
							start: 2,
							style: 'dashed',
						},
					],
					type: 'spline',
					x: 'x2',
				},
			],
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];
			config.bindto = undefined;

			expect(JSON.stringify(config)).toMatchSnapshot();
			done();
		});
	});

	it('should transform chart new type is passed', done => {
		const transformMock = jest.fn();

		bb.generate.mockReturnValue({
			transform: transformMock,
		});

		const chart = new Chart({
			data: [],
			type: 'line',
		});

		chart.on('chartReady', () => {
			chart.type = 'spline';

			expect(transformMock.mock.calls[0][0]).toBe('spline');
			done();
		});
	});

	it('should rerender chart when new data is passed', done => {
		const loadMock = jest.fn();

		bb.generate.mockReturnValue({
			load: loadMock,
		});

		const chart = new Chart({
			data: [
				{
					id: 'data1',
					data: [1, 2, 3],
				},
			],
		});

		chart.on('chartReady', () => {
			chart.on('dataResolved', () => {
				const config = JSON.stringify(loadMock.mock.calls[0][0]);

				expect(config).toMatchSnapshot();
				done();
			});

			chart.data = [
				{
					id: 'data1',
					data: [1, 2, 3, 4],
				},
			];
		});
	});

	it('should unload removed data when new data is passed', done => {
		const loadMock = jest.fn();

		bb.generate.mockReturnValue({
			load: loadMock,
		});

		const chart = new Chart({
			data: [
				{
					id: 'data1',
					data: [1, 2, 3],
				},
			],
		});

		chart.on('chartReady', () => {
			chart.on('dataResolved', () => {
				const config = JSON.stringify(loadMock.mock.calls[0][0]);

				expect(config).toMatchSnapshot();
				done();
			});

			chart.data = [
				{
					id: 'data2',
					data: [1, 2, 3],
				},
			];
		});
	});
});
