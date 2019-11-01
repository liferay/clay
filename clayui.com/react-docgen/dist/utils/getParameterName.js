"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParameterName;

var _astTypes = _interopRequireDefault(require("ast-types"));

var _printValue = _interopRequireDefault(require("./printValue"));

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const {
  namedTypes: t
} = _astTypes.default;

function getParameterName(parameterPath) {
  switch (parameterPath.node.type) {
    case t.Identifier.name:
      return parameterPath.node.name;

    case t.AssignmentPattern.name:
      return getParameterName(parameterPath.get('left'));

    case t.ObjectPattern.name:
    case t.ArrayPattern.name:
      return (0, _printValue.default)(parameterPath);

    case t.RestElement.name:
      return '...' + getParameterName(parameterPath.get('argument'));

    default:
      throw new TypeError('Parameter name must be an Identifier, an AssignmentPattern an ' + `ObjectPattern or a RestElement, got ${parameterPath.node.type}`);
  }
}