"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMethodDocumentation;

var _astTypes = _interopRequireDefault(require("ast-types"));

var _docblock = require("./docblock");

var _getFlowType = _interopRequireDefault(require("./getFlowType"));

var _getTSType = _interopRequireDefault(require("./getTSType"));

var _getParameterName = _interopRequireDefault(require("./getParameterName"));

var _getPropertyName = _interopRequireDefault(require("./getPropertyName"));

var _getTypeAnnotation = _interopRequireDefault(require("./getTypeAnnotation"));

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

function getMethodParamsDoc(methodPath) {
  const params = [];
  const functionExpression = methodPath.get('value'); // Extract param flow types.

  functionExpression.get('params').each(paramPath => {
    let type = null;
    const typePath = (0, _getTypeAnnotation.default)(paramPath);

    if (typePath && t.Flow.check(typePath.node)) {
      type = (0, _getFlowType.default)(typePath);

      if (t.GenericTypeAnnotation.check(typePath.node)) {
        type.alias = typePath.node.id.name;
      }
    } else if (typePath) {
      type = (0, _getTSType.default)(typePath);

      if (t.TSTypeReference.check(typePath.node)) {
        type.alias = typePath.node.typeName.name;
      }
    }

    const param = {
      name: (0, _getParameterName.default)(paramPath),
      optional: paramPath.node.optional,
      type
    };
    params.push(param);
  });
  return params;
} // Extract flow return type.


function getMethodReturnDoc(methodPath) {
  const functionExpression = methodPath.get('value');

  if (functionExpression.node.returnType) {
    const returnType = (0, _getTypeAnnotation.default)(functionExpression.get('returnType'));

    if (returnType && t.Flow.check(returnType.node)) {
      return {
        type: (0, _getFlowType.default)(returnType)
      };
    } else if (returnType) {
      return {
        type: (0, _getTSType.default)(returnType)
      };
    }
  }

  return null;
}

function getMethodModifiers(methodPath) {
  const modifiers = [];

  if (methodPath.node.static) {
    modifiers.push('static');
  }

  if (methodPath.node.kind === 'get' || methodPath.node.kind === 'set') {
    modifiers.push(methodPath.node.kind);
  }

  const functionExpression = methodPath.get('value').node;

  if (functionExpression.generator) {
    modifiers.push('generator');
  }

  if (functionExpression.async) {
    modifiers.push('async');
  }

  return modifiers;
}

function getMethodDocumentation(methodPath) {
  const name = (0, _getPropertyName.default)(methodPath);
  if (!name) return null;
  const docblock = (0, _docblock.getDocblock)(methodPath);
  return {
    name,
    docblock,
    modifiers: getMethodModifiers(methodPath),
    params: getMethodParamsDoc(methodPath),
    returns: getMethodReturnDoc(methodPath)
  };
}