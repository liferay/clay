'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DonutChart = undefined;

var _DonutChart = require('../DonutChart');

var _Chart2 = require('./Chart');

var _Chart3 = _interopRequireDefault(_Chart2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Donut Chart component.
 * @augments Chart
 */
var DonutChart = function (_Chart) {
  _inherits(DonutChart, _Chart);

  function DonutChart() {
    _classCallCheck(this, DonutChart);

    return _possibleConstructorReturn(this, (DonutChart.__proto__ || Object.getPrototypeOf(DonutChart)).apply(this, arguments));
  }

  return DonutChart;
}(_Chart3.default);

DonutChart.PROPS = _DonutChart.DonutChart.STATE;

exports.DonutChart = DonutChart;
exports.default = DonutChart;