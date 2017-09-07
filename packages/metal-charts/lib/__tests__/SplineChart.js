'use strict';

var _billboard = require('billboard.js');

var _SplineChart = require('../SplineChart');

var _SplineChart2 = _interopRequireDefault(_SplineChart);

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

describe('SplineChart', function () {
	it('should be pass correct type to billboard.js', function () {
		new _SplineChart2.default({
			columns: []
		});

		var config = _billboard.bb.generate.mock.calls[0][0];

		expect(config.data.type).toBe('spline');
	});
});