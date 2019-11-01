/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import types from 'ast-types';
import getNameOrValue from './getNameOrValue';
import resolveToValue from './resolveToValue';

const { namedTypes: t } = types;

export const COMPUTED_PREFIX = '@computed#';

/**
 * In an ObjectExpression, the name of a property can either be an identifier
 * or a literal (or dynamic, but we don't support those). This function simply
 * returns the value of the literal or name of the identifier.
 */
export default function getPropertyName(propertyPath: NodePath): ?string {
  if (t.ObjectTypeSpreadProperty.check(propertyPath.node)) {
    return getNameOrValue(propertyPath.get('argument').get('id'), false);
  } else if (propertyPath.node.computed) {
    const key = propertyPath.get('key');

    // Try to resolve variables and member expressions
    if (t.Identifier.check(key.node) || t.MemberExpression.check(key.node)) {
      const value = resolveToValue(key).node;

      if (
        t.Literal.check(value) &&
        (typeof value.value === 'string' || typeof value.value === 'number')
      ) {
        return `${value.value}`;
      }
    }

    // generate name for identifier
    if (t.Identifier.check(key.node)) {
      return `${COMPUTED_PREFIX}${key.node.name}`;
    }

    if (
      t.Literal.check(key.node) &&
      (typeof key.node.value === 'string' || typeof key.node.value === 'number')
    ) {
      return `${key.node.value}`;
    }

    return null;
  }

  return getNameOrValue(propertyPath.get('key'), false);
}
