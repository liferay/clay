"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = displayNameHandler;

var _astTypes = _interopRequireDefault(require("ast-types"));

var _getMemberValuePath = _interopRequireDefault(require("../utils/getMemberValuePath"));

var _getNameOrValue = _interopRequireDefault(require("../utils/getNameOrValue"));

var _resolveToValue = _interopRequireDefault(require("../utils/resolveToValue"));

var _resolveFunctionDefinitionToReturnValue = _interopRequireDefault(require("../utils/resolveFunctionDefinitionToReturnValue"));

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

function displayNameHandler(documentation, path) {
  let displayNamePath = (0, _getMemberValuePath.default)(path, 'displayName');

  if (!displayNamePath) {
    // Function and class declarations need special treatment. The name of the
    // function / class is the displayName
    if (t.ClassDeclaration.check(path.node) || t.FunctionDeclaration.check(path.node)) {
      documentation.set('displayName', (0, _getNameOrValue.default)(path.get('id')));
    } else if (t.ArrowFunctionExpression.check(path.node) || t.FunctionExpression.check(path.node)) {
      let currentPath = path;

      while (currentPath.parent) {
        if (t.VariableDeclarator.check(currentPath.parent.node)) {
          documentation.set('displayName', (0, _getNameOrValue.default)(currentPath.parent.get('id')));
          return;
        } else if (t.AssignmentExpression.check(currentPath.parent.node)) {
          const leftPath = currentPath.parent.get('left');

          if (t.Identifier.check(leftPath.node) || t.Literal.check(leftPath.node)) {
            documentation.set('displayName', (0, _getNameOrValue.default)(leftPath));
            return;
          }
        }

        currentPath = currentPath.parent;
      }
    }

    return;
  }

  displayNamePath = (0, _resolveToValue.default)(displayNamePath); // If display name is defined as a getter we get a function expression as
  // value. In that case we try to determine the value from the return
  // statement.

  if (t.FunctionExpression.check(displayNamePath.node)) {
    displayNamePath = (0, _resolveFunctionDefinitionToReturnValue.default)(displayNamePath);
  }

  if (!displayNamePath || !t.Literal.check(displayNamePath.node)) {
    return;
  }

  documentation.set('displayName', displayNamePath.node.value);
}