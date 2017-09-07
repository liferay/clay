'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SplineChart = undefined;

var _metalState = require('metal-state');

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _Chart2 = require('./Chart');

var _Chart3 = _interopRequireDefault(_Chart2);

var _SplineChartSoy = require('./SplineChart.soy.js');

var _SplineChartSoy2 = _interopRequireDefault(_SplineChartSoy);

var _types = require('./utils/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Spline Chart component.
 * @augments Chart
 */
var SplineChart = function (_Chart) {
	_inherits(SplineChart, _Chart);

	function SplineChart() {
		_classCallCheck(this, SplineChart);

		return _possibleConstructorReturn(this, (SplineChart.__proto__ || Object.getPrototypeOf(SplineChart)).apply(this, arguments));
	}

	return SplineChart;
}(_Chart3.default);

SplineChart.STATE = {
	/**
  * Data that will be rendered to the chart.
  * @instance
  * @memberof SplineChart
  * @type {?Array|undefined}
  * @default []
  */
	columns: _metalState.Config.arrayOf(_metalState.Config.shapeOf({
		axis: _metalState.Config.oneOf(['y', 'y2']),
		class: _metalState.Config.string(),
		color: _metalState.Config.string(),
		data: _metalState.Config.array().required(),
		hide: _metalState.Config.bool(),
		id: _metalState.Config.required().string(),
		name: _metalState.Config.string(),
		regions: _metalState.Config.array(),
		type: _metalState.Config.oneOf(_types2.default.point),
		x: _metalState.Config.string()
	})),

	/**
  * The variety of chart that will be rendered.
  * @instance
  * @memberof SplineChart
  * @type {?string|undefined}
  * @default spline
  */
	type: _metalState.Config.oneOf(_types2.default.point).value('spline')
};

_metalSoy2.default.register(SplineChart, _SplineChartSoy2.default);

exports.SplineChart = SplineChart;
exports.default = SplineChart;