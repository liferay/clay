/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import types from 'ast-types';
import isReactComponentClass from '../utils/isReactComponentClass';
import isReactCreateClassCall from '../utils/isReactCreateClassCall';
import isReactForwardRefCall from '../utils/isReactForwardRefCall';
import isStatelessComponent from '../utils/isStatelessComponent';
import normalizeClassDefinition from '../utils/normalizeClassDefinition';
import resolveToValue from '../utils/resolveToValue';

const { visit, namedTypes: t } = types;

/**
 * Given an AST, this function tries to find all object expressions that are
 * passed to `React.createClass` calls, by resolving all references properly.
 */
export default function findAllReactCreateClassCalls(
  ast: ASTNode,
): Array<NodePath> {
  const definitions = new Set();

  function classVisitor(path) {
    if (isReactComponentClass(path)) {
      normalizeClassDefinition(path);
      definitions.add(path);
    }
    return false;
  }

  function statelessVisitor(path) {
    if (isStatelessComponent(path)) {
      definitions.add(path);
    }
    return false;
  }

  visit(ast, {
    visitFunctionDeclaration: statelessVisitor,
    visitFunctionExpression: statelessVisitor,
    visitArrowFunctionExpression: statelessVisitor,
    visitClassExpression: classVisitor,
    visitClassDeclaration: classVisitor,
    visitCallExpression: function(path) {
      if (isReactForwardRefCall(path)) {
        // If the the inner function was previously identified as a component
        // replace it with the parent node
        const inner = resolveToValue(path.get('arguments', 0));
        definitions.delete(inner);
        definitions.add(path);

        // Do not traverse into arguments
        return false;
      } else if (isReactCreateClassCall(path)) {
        const resolvedPath = resolveToValue(path.get('arguments', 0));
        if (t.ObjectExpression.check(resolvedPath.node)) {
          definitions.add(resolvedPath);
        }

        // Do not traverse into arguments
        return false;
      }

      // If it is neither of the above cases we need to traverse further
      // as this call expression could be a HOC
      this.traverse(path);
    },
  });

  return Array.from(definitions);
}
