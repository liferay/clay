"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTypeAnnotation;

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

function hasTypeAnnotation(path) {
  return !!path.node.typeAnnotation;
}
/**
 * Gets the most inner valuable TypeAnnotation from path. If no TypeAnnotation
 * can be found nothing is returned
 */


function getTypeAnnotation(path) {
  if (!hasTypeAnnotation(path)) return null;
  let resultPath = path;

  do {
    resultPath = resultPath.get('typeAnnotation');
  } while (hasTypeAnnotation(resultPath) && !t.FlowType.check(resultPath.node) && !t.TSType.check(resultPath.node));

  return resultPath;
}