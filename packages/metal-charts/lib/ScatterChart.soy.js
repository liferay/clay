'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ScatterChart = undefined;

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {
  var soy = goog.require('soy');
  var soydata = goog.require('soydata');
  // This file was automatically generated from ScatterChart.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ScatterChart.
   * @public
   */

  goog.module('ScatterChart.incrementaldom');

  var incrementalDom = goog.require('incrementaldom');
  var soyIdom = goog.require('soy.idom');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {Object<string, *>=} opt_ijData
   * @param {Object<string, *>=} opt_ijData_deprecated
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
    opt_ijData = opt_ijData_deprecated || opt_ijData;
    incrementalDom.elementOpenStart('div');
    incrementalDom.attr('class', 'metal-chart');
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ScatterChart.render';
  }

  exports.render.params = [];
  exports.render.types = {};
  exports.templates = templates = exports;
  return exports;
});

var ScatterChart = function (_Component) {
  _inherits(ScatterChart, _Component);

  function ScatterChart() {
    _classCallCheck(this, ScatterChart);

    return _possibleConstructorReturn(this, (ScatterChart.__proto__ || Object.getPrototypeOf(ScatterChart)).apply(this, arguments));
  }

  return ScatterChart;
}(_metalComponent2.default);

_metalSoy2.default.register(ScatterChart, templates);
exports.ScatterChart = ScatterChart;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */
//# sourceMappingURL=ScatterChart.soy.js.map