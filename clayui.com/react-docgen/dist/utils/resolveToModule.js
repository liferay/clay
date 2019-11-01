"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveToModule;

var _astTypes = _interopRequireDefault(require("ast-types"));

var _match = _interopRequireDefault(require("./match"));

var _resolveToValue = _interopRequireDefault(require("./resolveToValue"));

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
 * Given a path (e.g. call expression, member expression or identifier),
 * this function tries to find the name of module from which the "root value"
 * was imported.
 */

function resolveToModule(path) {
  const node = path.node;

  switch (node.type) {
    case t.VariableDeclarator.name:
      if (node.init) {
        return resolveToModule(path.get('init'));
      }

      break;

    case t.CallExpression.name:
      if ((0, _match.default)(node.callee, {
        type: t.Identifier.name,
        name: 'require'
      })) {
        return node.arguments[0].value;
      }

      return resolveToModule(path.get('callee'));

    case t.Identifier.name:
    case t.JSXIdentifier.name:
      {
        const valuePath = (0, _resolveToValue.default)(path);

        if (valuePath !== path) {
          return resolveToModule(valuePath);
        }

        break;
      }

    case t.ImportDeclaration.name:
      return node.source.value;

    case t.MemberExpression.name:
      while (path && t.MemberExpression.check(path.node)) {
        path = path.get('object');
      }

      if (path) {
        return resolveToModule(path);
      }

  }

  return null;
}