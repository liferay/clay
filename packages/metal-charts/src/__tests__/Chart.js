'use strict';

import { bb } from 'billboard.js';

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

describe('Chart', function() {
	it('should be pass correctly formatted configuration options to billboard.js', () => {
		const chart = new Chart({
			columns: [],
		});

		const config = bb.generate.mock.calls[0][0];

		expect(config.bindto).toBe(chart.element);

		config.bindto = undefined;

		expect(JSON.stringify(config)).toMatchSnapshot();
	});

	it('should format columns array into billboard.js compatible data', () => {
		new Chart({
			columns: [
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

	it('should transform chart new type is passed', () => {
		const transformMock = jest.fn();

		bb.generate.mockReturnValue({
			transform: transformMock,
		});

		const chart = new Chart({
			columns: [],
			type: 'line',
		});

		chart.type = 'spline';

		expect(transformMock.mock.calls[0][0]).toBe('spline');
	});

	it('should rerender chart when new columns are passed', () => {
		const loadMock = jest.fn();

		bb.generate.mockReturnValue({
			load: loadMock,
		});

		const chart = new Chart({
			columns: [
				{
					id: 'data1',
					data: [1, 2, 3],
				},
			],
		});

		chart.columns = [
			{
				id: 'data1',
				data: [1, 2, 3, 4],
			},
		];

		const config = JSON.stringify(loadMock.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});

	it('should unload removed columns when new columns are passed', () => {
		const loadMock = jest.fn();

		bb.generate.mockReturnValue({
			load: loadMock,
		});

		const chart = new Chart({
			columns: [
				{
					id: 'data1',
					data: [1, 2, 3],
				},
			],
		});

		chart.columns = [
			{
				id: 'data2',
				data: [1, 2, 3],
			},
		];

		const config = JSON.stringify(loadMock.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});
});
