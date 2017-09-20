'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScatterChart = undefined;

var _ScatterChart = require('../ScatterChart');

var _Chart2 = require('./Chart');

var _Chart3 = _interopRequireDefault(_Chart2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Scatter Chart component.
 * @augments Chart
 */
var ScatterChart = function (_Chart) {
  _inherits(ScatterChart, _Chart);

  function ScatterChart() {
    _classCallCheck(this, ScatterChart);

    return _possibleConstructorReturn(this, (ScatterChart.__proto__ || Object.getPrototypeOf(ScatterChart)).apply(this, arguments));
  }

  return ScatterChart;
}(_Chart3.default);

ScatterChart.PROPS = _ScatterChart.ScatterChart.STATE;

exports.ScatterChart = ScatterChart;
exports.default = ScatterChart;
//# sourceMappingURL=ScatterChart.js.map