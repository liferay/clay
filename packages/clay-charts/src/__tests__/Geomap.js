import Geomap from '../Geomap';

let consoleErrorReference;

/**
 * Stubs console.error
 */
function mockConsoleError() {
	console.error = () => {};
}

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
		consoleErrorReference = console.error;
	});

	afterEach(() => {
		console.error = consoleErrorReference;
	});

	it('should throw an error if required configuration is invalid', () => {
		mockConsoleError();

		expect(createMap).toThrow();
	});

	it('should not throw an error', () => {
		const geomap = createMap({
			data: '../../demos/data/world-low-res.geo.json',
		});

		expect(geomap).toMatchSnapshot();
	});
});
