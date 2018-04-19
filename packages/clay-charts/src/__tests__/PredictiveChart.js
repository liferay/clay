import {bb} from 'billboard.js';
import PredictiveChart from '../PredictiveChart';

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

describe('PredictiveChart', () => {
	it('should be pass correct type to billboard.js', done => {
		const chart = new PredictiveChart({
			data: [],
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];

			expect(config.data.type).toBe('area-line-range');
			done();
		});
	});

	it('should transform the data correctly', done => {
		const chart = new PredictiveChart({
			data: [
				{
					data: ['2018-01-01', '2018-02-01', '2018-03-01'],
					id: 'x',
				},
				{
					data: [10, 20, {low: 50, mid: 80, high: 110}],
					id: 'data1',
				},
			],
		});

		chart.on('chartReady', () => {
			const config = bb.generate.mock.calls[0][0];

			expect(config.data.columns).toBeInstanceOf(Array);

			const col1 = config.data.columns[1];

			expect(col1).toBeInstanceOf(Array);

			expect(col1).toEqual(
				expect.arrayContaining([
					{low: 10, mid: 10, high: 10},
					{low: 20, mid: 20, high: 20},
					{low: 50, mid: 80, high: 110},
				])
			);

			done();
		});
	});
});
