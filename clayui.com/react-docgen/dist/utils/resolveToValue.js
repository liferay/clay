"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveToValue;

var _astTypes = _interopRequireDefault(require("ast-types"));

var _getMemberExpressionRoot = _interopRequireDefault(require("./getMemberExpressionRoot"));

var _getPropertyValuePath = _interopRequireDefault(require("./getPropertyValuePath"));

var _expressionTo = require("./expressionTo");

var _traverse = require("./traverse");

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const {
  namedTypes: t,
  NodePath,
  builders
} = _astTypes.default;

function buildMemberExpressionFromPattern(path) {
  const node = path.node;

  if (t.Property.check(node)) {
    const objPath = buildMemberExpressionFromPattern(path.parent);

    if (objPath) {
      return new NodePath(builders.memberExpression(objPath.node, node.key, t.Literal.check(node.key)), objPath);
    }
  } else if (t.ObjectPattern.check(node)) {
    return buildMemberExpressionFromPattern(path.parent);
  } else if (t.VariableDeclarator.check(node)) {
    return path.get('init');
  }

  return null;
}

function findScopePath(paths, path) {
  if (paths.length < 1) {
    return null;
  }

  let resultPath = paths[0];
  const parentPath = resultPath.parent;

  if (t.ImportDefaultSpecifier.check(parentPath.node) || t.ImportSpecifier.check(parentPath.node) || t.ImportNamespaceSpecifier.check(parentPath.node) || t.VariableDeclarator.check(parentPath.node) || t.TypeAlias.check(parentPath.node) || t.InterfaceDeclaration.check(parentPath.node) || t.TSTypeAliasDeclaration.check(parentPath.node) || t.TSInterfaceDeclaration.check(parentPath.node)) {
    resultPath = parentPath;
  } else if (t.Property.check(parentPath.node)) {
    // must be inside a pattern
    const memberExpressionPath = buildMemberExpressionFromPattern(parentPath);

    if (memberExpressionPath) {
      return memberExpressionPath;
    }
  }

  if (resultPath.node !== path.node) {
    return resolveToValue(resultPath);
  }

  return null;
}
/**
 * Tries to find the last value assigned to `name` in the scope created by
 * `scope`. We are not descending into any statements (blocks).
 */


function findLastAssignedValue(scope, name) {
  const results = [];
  (0, _traverse.traverseShallow)(scope.path.node, {
    visitAssignmentExpression: function (path) {
      const node = path.node; // Skip anything that is not an assignment to a variable with the
      // passed name.

      if (!t.Identifier.check(node.left) || node.left.name !== name || node.operator !== '=') {
        return this.traverse(path);
      }

      results.push(path.get('right'));
      return false;
    }
  });

  if (results.length === 0) {
    return null;
  }

  return resolveToValue(results.pop());
}
/**
 * If the path is an identifier, it is resolved in the scope chain.
 * If it is an assignment expression, it resolves to the right hand side.
 * If it is a member expression it is resolved to it's initialization value.
 *
 * Else the path itself is returned.
 */


function resolveToValue(path) {
  const node = path.node;

  if (t.VariableDeclarator.check(node)) {
    if (node.init) {
      return resolveToValue(path.get('init'));
    }
  } else if (t.MemberExpression.check(node)) {
    const resolved = resolveToValue((0, _getMemberExpressionRoot.default)(path));

    if (t.ObjectExpression.check(resolved.node)) {
      let propertyPath = resolved;

      for (const propertyName of (0, _expressionTo.Array)(path).slice(1)) {
        if (propertyPath && t.ObjectExpression.check(propertyPath.node)) {
          propertyPath = (0, _getPropertyValuePath.default)(propertyPath, propertyName);
        }

        if (!propertyPath) {
          return path;
        }

        propertyPath = resolveToValue(propertyPath);
      }

      return propertyPath;
    }
  } else if (t.ImportDefaultSpecifier.check(node) || t.ImportNamespaceSpecifier.check(node) || t.ImportSpecifier.check(node)) {
    // go up two levels as first level is only the array of specifiers
    return path.parentPath.parentPath;
  } else if (t.AssignmentExpression.check(node)) {
    if (node.operator === '=') {
      return resolveToValue(path.get('right'));
    }
  } else if (t.TypeCastExpression.check(node)) {
    return resolveToValue(path.get('expression'));
  } else if (t.Identifier.check(node)) {
    if ((t.ClassDeclaration.check(path.parentPath.node) || t.ClassExpression.check(path.parentPath.node) || t.Function.check(path.parentPath.node)) && path.parentPath.get('id') === path) {
      return path.parentPath;
    }

    let scope = path.scope.lookup(node.name);
    let resolvedPath;

    if (scope) {
      // The variable may be assigned a different value after initialization.
      // We are first trying to find all assignments to the variable in the
      // block where it is defined (i.e. we are not traversing into statements)
      resolvedPath = findLastAssignedValue(scope, node.name);

      if (!resolvedPath) {
        const bindings = scope.getBindings()[node.name];
        resolvedPath = findScopePath(bindings, path);
      }
    } else {
      scope = path.scope.lookupType(node.name);

      if (scope) {
        const typesInScope = scope.getTypes()[node.name];
        resolvedPath = findScopePath(typesInScope, path);
      }
    }

    return resolvedPath || path;
  }

  return path;
}