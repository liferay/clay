'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _chromaJs = require('chroma-js');

var _chromaJs2 = _interopRequireDefault(_chromaJs);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nunjucksEnv = _nunjucks2.default.configure(_path2.default.resolve(__dirname, '..', 'views'));

var safe = function safe(fn) {
  return (fn.safe = true) && fn;
};

var isColor = function isColor(value) {
  try {
    (0, _chromaJs2.default)(value);
    return true;
  } catch (e) {
    return false;
  }
};

var displayAsType = function displayAsType(input) {
  return input.split('|').map(function (x) {
    return x.trim();
  }).map(nunjucksEnv.getFilter('capitalize')).join('</code> or <code>');
};

var yiq = function yiq(_ref) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 3),
      red = _ref2[0],
      green = _ref2[1],
      blue = _ref2[2];

  return (red * 299 + green * 587 + blue * 114) / 1000;
};

var yiqContrast = function yiqContrast(rgb) {
  return yiq(rgb) >= 128 ? '#000' : '#fff';
};

var getChannel = function getChannel(start, hex) {
  return parseInt(hex.substr(start, 2), 16);
};

var hexToRgb = function hexToRgb(hex) {
  return [0, 2, 4].map(function (x) {
    return getChannel(x, hex);
  });
};

var colorToHex = function colorToHex(color) {
  return (0, _chromaJs2.default)(color).hex().substr(1);
};

var pluralize = function pluralize(input) {
  return input.toLowerCase().substring(input.length - 1) === 's' ? input : input + 's';
};

// Prevent escaping chars from being printed.
// See sassdoc/sassdoc#531
var unescape = function unescape(input) {
  return input.replace(/\\/g, '');
};

/**
 * Normalises a CSS color, then uses the YIQ algorithm to get the
 * correct contrast.
 *
 * @param {String} color
 * @return {String} `#000` or `#fff` depending on which one is a better.
 * @see {@link http://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area}
 */
var maybeYiqContrast = function maybeYiqContrast(color) {
  return isColor(color) ? yiqContrast(hexToRgb(colorToHex(color))) : '#000';
};

nunjucksEnv.addFilter('in', function (key, object) {
  return key in object;
});
nunjucksEnv.addFilter('is_color', isColor);
nunjucksEnv.addFilter('display_as_type', safe(displayAsType));
nunjucksEnv.addFilter('yiq', maybeYiqContrast);
nunjucksEnv.addFilter('pluralize', pluralize);
nunjucksEnv.addFilter('unescape', unescape);

// debug
nunjucksEnv.addGlobal('debug', function () {
  return this.ctx;
});

/**
 * "Warning: The simple API (above; e.g. nunjucks.render) always uses the configuration
 * from the most recent call to nunjucks.configure. Since this is implicit and can result
 * in unexpected side effects, use of the simple API is discouraged in most cases
 * (especially if configure is used); instead, explicitly create an environment using
 * var env = nunjucks.configure(...) and then call env.render(...) etc."
 *
 * @link https://mozilla.github.io/nunjucks/api.html#configure
 * Investigate why it doesn't work like this if we export nunjucksEnv instead
 */
exports.default = _nunjucks2.default;