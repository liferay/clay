"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNameOrValue;

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
 * If node is an Identifier, it returns its name. If it is a literal, it returns
 * its value.
 */

function getNameOrValue(path, raw) {
  const node = path.node;

  switch (node.type) {
    case t.Identifier.name:
      return node.name;

    case t.Literal.name:
      return raw ? node.raw : node.value;

    default:
      throw new TypeError('Argument must be an Identifier or a Literal');
  }
}