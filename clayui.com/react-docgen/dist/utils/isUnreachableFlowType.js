"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _astTypes = _interopRequireDefault(require("ast-types"));

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
/**
 * Returns true of the path is an unreachable TypePath
 */

var _default = path => {
  return !path || t.Identifier.check(path.node) || t.ImportDeclaration.check(path.node) || t.CallExpression.check(path.node);
};

exports.default = _default;