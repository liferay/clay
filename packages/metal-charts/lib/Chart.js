'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = undefined;

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _ChartBase = require('./ChartBase');

var _ChartBase2 = _interopRequireDefault(_ChartBase);

var _ChartSoy = require('./Chart.soy.js');

var _ChartSoy2 = _interopRequireDefault(_ChartSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Metal Chart component.
 * @extends Component
 * @extends ChartBase
 */
var Chart = function (_Component) {
  _inherits(Chart, _Component);

  function Chart() {
    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
  }

  return Chart;
}(_metalComponent2.default);

Object.assign(Chart.prototype, _ChartBase2.default);
Chart.STATE = _ChartBase2.default.STATE;

_metalSoy2.default.register(Chart, _ChartSoy2.default);

exports.Chart = Chart;
exports.default = Chart;