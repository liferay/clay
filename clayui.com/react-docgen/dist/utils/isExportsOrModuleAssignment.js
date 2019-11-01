"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isExportsOrModuleAssignment;

var _astTypes = _interopRequireDefault(require("ast-types"));

var expressionTo = _interopRequireWildcard(require("./expressionTo"));

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
 * Returns true if the expression is of form `exports.foo = ...;` or
 * `modules.exports = ...;`.
 */

function isExportsOrModuleAssignment(path) {
  if (t.ExpressionStatement.check(path.node)) {
    path = path.get('expression');
  }

  if (!t.AssignmentExpression.check(path.node) || !t.MemberExpression.check(path.node.left)) {
    return false;
  }

  const exprArr = expressionTo.Array(path.get('left'));
  return exprArr[0] === 'module' && exprArr[1] === 'exports' || exprArr[0] === 'exports';
}