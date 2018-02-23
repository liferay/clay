import {bb} from 'billboard.js';
import GaugeChart from '../GaugeChart';

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

describe('GaugeChart', () => {
	it('should be pass correct type to billboard.js', done => {
		const chart = new GaugeChart({
			data: [],
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];

			expect(config.data.type).toBe('gauge');
			done();
		});
	});
});
