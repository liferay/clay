"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = componentDocblockHandler;

var _astTypes = _interopRequireDefault(require("ast-types"));

var _docblock = require("../utils/docblock");

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

function isClassDefinition(nodePath) {
  const node = nodePath.node;
  return t.ClassDeclaration.check(node) || t.ClassExpression.check(node);
}
/**
 * Finds the nearest block comment before the component definition.
 */


function componentDocblockHandler(documentation, path) {
  let description = null;

  if (isClassDefinition(path)) {
    // If we have a class declaration or expression, then the comment might be
    // attached to the last decorator instead as trailing comment.
    if (path.node.decorators && path.node.decorators.length > 0) {
      description = (0, _docblock.getDocblock)(path.get('decorators', path.node.decorators.length - 1), true);
    }
  }

  if (description == null) {
    // Find parent statement (e.g. var Component = React.createClass(<path>);)
    let searchPath = path;

    while (searchPath && !t.Statement.check(searchPath.node)) {
      searchPath = searchPath.parent;
    }

    if (searchPath) {
      // If the parent is an export statement, we have to traverse one more up
      if (t.ExportNamedDeclaration.check(searchPath.parentPath.node) || t.ExportDefaultDeclaration.check(searchPath.parentPath.node)) {
        searchPath = searchPath.parentPath;
      }

      description = (0, _docblock.getDocblock)(searchPath);
    }
  }

  documentation.set('description', description || '');
}