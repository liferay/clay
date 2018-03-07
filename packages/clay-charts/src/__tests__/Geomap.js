const path = require('path');
const fs = require('fs');
const geoData = fs.readFileSync(
	path.join(__dirname, '../../demos/data/world-low-res.geo.json'),
	{encoding: 'utf-8'}
);
const mockData = {data: JSON.parse(geoData)};

import Geomap from '../Geomap';

/**
 * Creates a Geomap
 * @param {Object} config
 * @return {Geomap}
 */
function createMap(config = {}) {
	return new Geomap(config);
}

describe('Geomap', () => {
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
		const geomap = createMap({
			data: './data/world-low-res.geo.json',
		});

		expect(geomap).toMatchSnapshot();
	});

	it('should accept data as an object', () => {
		const geomap = createMap({
			data: mockData.data,
		});

		expect(geomap).toMatchSnapshot();
	});

	it('should accept data as a function', () => {
		const geomap = createMap({
			data: () => {
				return new Promise(resolve => {
					setTimeout(() => {
						resolve(mockData.data);
					}, 500);
				});
			},
		});
		expect(geomap).toMatchSnapshot();
	});
});
