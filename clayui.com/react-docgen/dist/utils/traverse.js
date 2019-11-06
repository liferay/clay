"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseShallow = traverseShallow;

var _astTypes = _interopRequireDefault(require("ast-types"));

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * A helper function that doesn't traverse into nested blocks / statements by
 * default.
 */
function traverseShallow(ast, visitors) {
  _astTypes.default.visit(ast, { ...defaultVisitors,
    ...visitors
  });
}

const ignore = () => false;

const defaultVisitors = {
  visitFunctionDeclaration: ignore,
  visitFunctionExpression: ignore,
  visitClassDeclaration: ignore,
  visitClassExpression: ignore,
  visitIfStatement: ignore,
  visitWithStatement: ignore,
  visitSwitchStatement: ignore,
  visitWhileStatement: ignore,
  visitDoWhileStatement: ignore,
  visitForStatement: ignore,
  visitForInStatement: ignore,
  visitForOfStatement: ignore,
  visitExportNamedDeclaration: ignore,
  visitExportDefaultDeclaration: ignore,
  visitConditionalExpression: ignore
};