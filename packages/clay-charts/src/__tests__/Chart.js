'use strict';

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
	it('should be pass correctly formatted configuration options to billboard.js', async () => {
		const chart = await new Chart({
			data: [],
		});
		const config = bb.generate.mock.calls[0][0];
		expect(config.bindto).toBe(chart.refs.chart);

		config.bindto = undefined;
		expect(JSON.stringify(config)).toMatchSnapshot();
	});

	it('should format columns array into billboard.js compatible data', async () => {
		await new Chart({
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

		const config = bb.generate.mock.calls[0][0];

		config.bindto = undefined;

		expect(JSON.stringify(config)).toMatchSnapshot();
	});

	it('should transform chart new type is passed', async () => {
		const transformMock = jest.fn();

		bb.generate.mockReturnValue({
			transform: transformMock,
		});

		const chart = await new Chart({
			data: [],
			type: 'line',
		});

		chart.type = 'spline';

		expect(transformMock.mock.calls[0][0]).toBe('spline');
	});

	it('should rerender chart when new data is passed', async () => {
		const loadMock = jest.fn();

		bb.generate.mockReturnValue({
			load: loadMock,
		});

		const chart = await new Chart({
			data: [
				{
					id: 'data1',
					data: [1, 2, 3],
				},
			],
		});

		/** */
		async function updateData() {
			chart.data = [
				{
					id: 'data1',
					data: [1, 2, 3, 4],
				},
			];
		}
		await updateData();

		const config = JSON.stringify(loadMock.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});

	it('should unload removed data when new data is passed', async () => {
		const loadMock = jest.fn();

		bb.generate.mockReturnValue({
			load: loadMock,
		});

		const chart = await new Chart({
			data: [
				{
					id: 'data1',
					data: [1, 2, 3],
				},
			],
		});

		/** */
		async function updateData() {
			chart.data = [
				{
					id: 'data2',
					data: [1, 2, 3],
				},
			];
		}

		await updateData();

		const config = JSON.stringify(loadMock.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});
});
