'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BarChart = undefined;

var _metalState = require('metal-state');

var _Chart2 = require('./Chart');

var _Chart3 = _interopRequireDefault(_Chart2);

var _types = require('./utils/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Bar Chart component.
 * @augments Chart
 */
var BarChart = function (_Chart) {
	_inherits(BarChart, _Chart);

	function BarChart() {
		_classCallCheck(this, BarChart);

		return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).apply(this, arguments));
	}

	return BarChart;
}(_Chart3.default);

BarChart.STATE = {
	/**
  * Data that will be rendered to the chart.
  * @instance
  * @memberof BarChart
  * @type {?Array|undefined}
  * @default []
  */
	columns: _metalState.Config.arrayOf(_metalState.Config.shapeOf({
		axis: _metalState.Config.oneOf(['y', 'y2']),
		class: _metalState.Config.string(),
		color: _metalState.Config.string(),
		data: _metalState.Config.array().required(),
		id: _metalState.Config.required().string(),
		hide: _metalState.Config.bool(),
		name: _metalState.Config.string(),
		regions: _metalState.Config.array(),
		type: _metalState.Config.oneOf(_types2.default.point),
		x: _metalState.Config.string()
	})),

	/**
  * The variety of chart that will be rendered.
  * @instance
  * @memberof BarChart
  * @type {?string|undefined}
  * @default bar
  */
	type: _metalState.Config.oneOf(_types2.default.point).value('bar')
};

exports.BarChart = BarChart;
exports.default = BarChart;