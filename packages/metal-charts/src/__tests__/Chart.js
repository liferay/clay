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

describe('Chart', function() {
	it('should be pass correctly formatted configuration options to billboard.js', () => {
		new Chart({
			columns: []
		});

		const config = JSON.stringify(bb.generate.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});

	it('should format columns array into billboard.js compatible data', () => {
		new Chart({
			columns: [
				{
					axis: 'y',
					class: 'data1',
					color: 'red',
					data: [1, 2, 3],
					id: 'data1',
					name: 'Data 1',
					regions: [{
						end: 2,
						start: 1,
						style: 'dashed'
					}],
					type: 'line',
					xs: 'x1'
				},
				{
					axis: 'y2',
					class: 'data2',
					color: 'blue',
					data: [1, 2, 3],
					id: 'data2',
					name: 'Data 2',
					regions: [{
						end: 3,
						start: 2,
						style: 'dashed'
					}],
					type: 'spline',
					xs: 'x2'
				}
			]
		});

		const config = JSON.stringify(bb.generate.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});
});
