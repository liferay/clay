"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = printValue;

var _stripIndent = _interopRequireDefault(require("strip-indent"));

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function deindent(code) {
  const firstNewLine = code.indexOf('\n');
  return code.slice(0, firstNewLine + 1) + // remove indentation from all lines except first.
  (0, _stripIndent.default)(code.slice(firstNewLine + 1));
}

function getSrcFromAst(path) {
  do {
    if (path.node.type === 'File') {
      return path.node.__src;
    }

    path = path.parentPath;
  } while (path != null);

  throw new Error('Could not find source attached to File node');
}
/**
 * Prints the given path without leading or trailing comments.
 */


function printValue(path) {
  if (path.node.start == null) {
    // This only happens when we use AST builders to create nodes that do not actually
    // exist in the source (e.g. when resolving Object.keys()). We might need to enhance
    // this if we start using builders from `ast-types` more.
    if (path.node.type === 'Literal') {
      return `"${path.node.value}"`;
    }

    throw new Error(`Cannot print raw value for type '${path.node.type}'. Please report this with an example at https://github.com/reactjs/react-docgen/issues`);
  }

  const src = getSrcFromAst(path);
  return deindent(src.slice(path.node.start, path.node.end));
}