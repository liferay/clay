import Geomap from '../Geomap';

function createMap(config = {}) {
	return new Geomap(config);
}

describe('Geomap', () => {
	it('should throw an error if required configuration is invalid', () => {
		expect(createMap).toThrow();
	});

	it('should not throw an error', () => {
		const geomap = createMap({
			data: '../../demos/data/world-low-res.geo.json',
		});

		expect(geomap).toMatchSnapshot();
	});
});
