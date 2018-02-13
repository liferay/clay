'use strict';

import {bb} from 'billboard.js';

import BubbleChart from '../BubbleChart';

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

describe('BubbleChart', function() {
	it('should be pass correct type to billboard.js', async () => {
		await new BubbleChart({
			columns: [],
		});

		const config = bb.generate.mock.calls[0][0];

		expect(config.data.type).toBe('bubble');
	});
});
