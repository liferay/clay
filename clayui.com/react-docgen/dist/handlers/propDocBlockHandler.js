"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = propDocBlockHandler;

var _astTypes = _interopRequireDefault(require("ast-types"));

var _getMemberValuePath = _interopRequireDefault(require("../utils/getMemberValuePath"));

var _resolveToValue = _interopRequireDefault(require("../utils/resolveToValue"));

var _setPropDescription = _interopRequireDefault(require("../utils/setPropDescription"));

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

function resolveDocumentation(documentation, path) {
  if (!t.ObjectExpression.check(path.node)) {
    return;
  }

  path.get('properties').each(propertyPath => {
    if (t.Property.check(propertyPath.node)) {
      (0, _setPropDescription.default)(documentation, propertyPath);
    } else if (t.SpreadElement.check(propertyPath.node)) {
      const resolvedValuePath = (0, _resolveToValue.default)(propertyPath.get('argument'));
      resolveDocumentation(documentation, resolvedValuePath);
    }
  });
}

function propDocBlockHandler(documentation, path) {
  let propTypesPath = (0, _getMemberValuePath.default)(path, 'propTypes');

  if (!propTypesPath) {
    return;
  }

  propTypesPath = (0, _resolveToValue.default)(propTypesPath);

  if (!propTypesPath) {
    return;
  }

  resolveDocumentation(documentation, propTypesPath);
}