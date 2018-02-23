import {bb} from 'billboard.js';
import PieChart from '../PieChart';

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

describe('PieChart', () => {
	it('should be pass correct type to billboard.js', done => {
		const chart = new PieChart({
			data: [],
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];

			expect(config.data.type).toBe('pie');
			done();
		});
	});
});
