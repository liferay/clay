'use strict';

var _billboard = require('billboard.js');

var _Chart = require('../Chart');

var _Chart2 = _interopRequireDefault(_Chart);

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

describe('Chart', function () {
	it('should be pass correctly formatted configuration options to billboard.js', function () {
		new _Chart2.default({
			columns: []
		});

		var config = JSON.stringify(_billboard.bb.generate.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});

	it('should format columns array into billboard.js compatible data', function () {
		new _Chart2.default({
			columns: [{
				axis: 'y',
				class: 'data1',
				color: 'red',
				data: [1, 2, 3],
				hide: true,
				id: 'data1',
				name: 'Data 1',
				regions: [{
					end: 2,
					start: 1,
					style: 'dashed'
				}],
				type: 'line',
				x: 'x1'
			}, {
				axis: 'y2',
				class: 'data2',
				color: 'blue',
				data: [1, 2, 3],
				hide: false,
				id: 'data2',
				name: 'Data 2',
				regions: [{
					end: 3,
					start: 2,
					style: 'dashed'
				}],
				type: 'spline',
				x: 'x2'
			}]
		});

		var config = JSON.stringify(_billboard.bb.generate.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});

	it('should transform chart new type is passed', function () {
		var transformMock = jest.fn();

		_billboard.bb.generate.mockReturnValue({
			transform: transformMock
		});

		var chart = new _Chart2.default({
			columns: [],
			type: 'line'
		});

		chart.type = 'spline';

		expect(transformMock.mock.calls[0][0]).toBe('spline');
	});

	it('should rerender chart when new columns are passed', function () {
		var loadMock = jest.fn();

		_billboard.bb.generate.mockReturnValue({
			load: loadMock
		});

		var chart = new _Chart2.default({
			columns: [{
				id: 'data1',
				data: [1, 2, 3]
			}]
		});

		chart.columns = [{
			id: 'data1',
			data: [1, 2, 3, 4]
		}];

		var config = JSON.stringify(loadMock.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});

	it('should unload removed columns when new columns are passed', function () {
		var loadMock = jest.fn();

		_billboard.bb.generate.mockReturnValue({
			load: loadMock
		});

		var chart = new _Chart2.default({
			columns: [{
				id: 'data1',
				data: [1, 2, 3]
			}]
		});

		chart.columns = [{
			id: 'data2',
			data: [1, 2, 3]
		}];

		var config = JSON.stringify(loadMock.mock.calls[0][0]);

		expect(config).toMatchSnapshot();
	});
});