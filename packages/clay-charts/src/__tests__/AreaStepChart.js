'use strict';

import { bb } from 'billboard.js';

import AreaStepChart from '../AreaStepChart';

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

describe('AreaStepChart', function() {
	it('should be pass correct type to billboard.js', () => {
		new AreaStepChart({
			columns: [],
		});

		const config = bb.generate.mock.calls[0][0];

		expect(config.data.type).toBe('area-step');
	});
});
