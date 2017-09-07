'use strict';

var _billboard = require('billboard.js');

var _DonutChart = require('../DonutChart');

var _DonutChart2 = _interopRequireDefault(_DonutChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

beforeAll(function () {
	jest.spyOn(_billboard.bb, 'generate').mockImplementation();
});

beforeEach(function () {
	_billboard.bb.generate.mockReset();
});

afterAll(function () {
	_billboard.bb.generate.mockReset();
	_billboard.bb.generate.mockRestore();
});

describe('DonutChart', function () {
	it('should be pass correct type to billboard.js', function () {
		new _DonutChart2.default({
			columns: []
		});

		var config = _billboard.bb.generate.mock.calls[0][0];

		expect(config.data.type).toBe('donut');
	});
});