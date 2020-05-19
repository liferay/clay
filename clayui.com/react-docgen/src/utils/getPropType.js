/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/*eslint no-use-before-define: 0*/

import types from 'ast-types';
import { getDocblock } from '../utils/docblock';
import getMembers from './getMembers';
import getPropertyName from './getPropertyName';
import isRequiredPropType from '../utils/isRequiredPropType';
import printValue from './printValue';
import resolveToValue from './resolveToValue';
import resolveObjectKeysToArray from './resolveObjectKeysToArray';
import resolveObjectValuesToArray from './resolveObjectValuesToArray';
import type { PropTypeDescriptor, PropDescriptor } from '../types';

const { namedTypes: t } = types;

function getEnumValues(path) {
  const values = [];

  path.get('elements').each(function(elementPath) {
    if (t.SpreadElement.check(elementPath.node)) {
      const value = resolveToValue(elementPath.get('argument'));

      if (t.ArrayExpression.check(value.node)) {
        // if the SpreadElement resolved to an Array, add all their elements too
        return values.push(...getEnumValues(value));
      } else {
        // otherwise we'll just print the SpreadElement itself
        return values.push({
          value: printValue(elementPath),
          computed: !t.Literal.check(elementPath.node),
        });
      }
    }

    // try to resolve the array element to it's value
    const value = resolveToValue(elementPath);
    return values.push({
      value: printValue(value),
      computed: !t.Literal.check(value.node),
    });
  });

  return values;
}

function getPropTypeOneOf(argumentPath) {
  const type: PropTypeDescriptor = { name: 'enum' };
  let value = resolveToValue(argumentPath);
  if (!t.ArrayExpression.check(value.node)) {
    value =
      resolveObjectKeysToArray(value) || resolveObjectValuesToArray(value);
    if (value) {
      type.value = getEnumValues(value);
    } else {
      // could not easily resolve to an Array, let's print the original value
      type.computed = true;
      type.value = printValue(argumentPath);
    }
  } else {
    type.value = getEnumValues(value);
  }
  return type;
}

function getPropTypeOneOfType(argumentPath) {
  const type: PropTypeDescriptor = { name: 'union' };
  if (!t.ArrayExpression.check(argumentPath.node)) {
    type.computed = true;
    type.value = printValue(argumentPath);
  } else {
    type.value = argumentPath.get('elements').map(function(itemPath) {
      const descriptor: PropTypeDescriptor = getPropType(itemPath);
      const docs = getDocblock(itemPath);
      if (docs) {
        descriptor.description = docs;
      }
      return descriptor;
    });
  }
  return type;
}

function getPropTypeArrayOf(argumentPath) {
  const type: PropTypeDescriptor = { name: 'arrayOf' };

  const docs = getDocblock(argumentPath);
  if (docs) {
    type.description = docs;
  }

  const subType = getPropType(argumentPath);

  if (subType.name === 'unknown') {
    type.value = printValue(argumentPath);
    type.computed = true;
  } else {
    type.value = subType;
  }
  return type;
}

function getPropTypeObjectOf(argumentPath) {
  const type: PropTypeDescriptor = { name: 'objectOf' };

  const docs = getDocblock(argumentPath);
  if (docs) {
    type.description = docs;
  }

  const subType = getPropType(argumentPath);

  if (subType.name === 'unknown') {
    type.value = printValue(argumentPath);
    type.computed = true;
  } else {
    type.value = subType;
  }
  return type;
}

/**
 * Handles shape and exact prop types
 */
function getPropTypeShapish(name, argumentPath) {
  const type: PropTypeDescriptor = { name };
  if (!t.ObjectExpression.check(argumentPath.node)) {
    argumentPath = resolveToValue(argumentPath);
  }

  if (t.ObjectExpression.check(argumentPath.node)) {
    const value = {};
    argumentPath.get('properties').each(function(propertyPath) {
      if (propertyPath.get('type').value === t.SpreadElement.name) {
        // It is impossible to resolve a name for a spread element
        return;
      }

      const propertyName = getPropertyName(propertyPath);
      if (!propertyName) return;
      const descriptor: PropDescriptor | PropTypeDescriptor = getPropType(
        propertyPath.get('value'),
      );
      const docs = getDocblock(propertyPath);
      if (docs) {
        descriptor.description = docs;
      }
      descriptor.required = isRequiredPropType(propertyPath.get('value'));
      value[propertyName] = descriptor;
    });
    type.value = value;
  }

  if (!type.value) {
    type.value = printValue(argumentPath);
    type.computed = true;
  }

  return type;
}

function getPropTypeInstanceOf(argumentPath) {
  return {
    name: 'instanceOf',
    value: printValue(argumentPath),
  };
}

const simplePropTypes = [
  'array',
  'bool',
  'func',
  'number',
  'object',
  'string',
  'any',
  'element',
  'node',
  'symbol',
  'elementType',
];

const propTypes = {
  oneOf: getPropTypeOneOf,
  oneOfType: getPropTypeOneOfType,
  instanceOf: getPropTypeInstanceOf,
  arrayOf: getPropTypeArrayOf,
  objectOf: getPropTypeObjectOf,
  shape: getPropTypeShapish.bind(null, 'shape'),
  exact: getPropTypeShapish.bind(null, 'exact'),
};

/**
 * Tries to identify the prop type by inspecting the path for known
 * prop type names. This method doesn't check whether the found type is actually
 * from React.PropTypes. It simply assumes that a match has the same meaning
 * as the React.PropTypes one.
 *
 * If there is no match, "custom" is returned.
 */
export default function getPropType(path: NodePath): PropTypeDescriptor {
  let descriptor;
  getMembers(path, true).some(member => {
    const node = member.path.node;
    let name;
    if (t.Literal.check(node)) {
      name = node.value;
    } else if (t.Identifier.check(node) && !member.computed) {
      name = node.name;
    }
    if (name) {
      if (simplePropTypes.includes(name)) {
        descriptor = { name };
        return true;
      } else if (propTypes.hasOwnProperty(name) && member.argumentsPath) {
        descriptor = propTypes[name](member.argumentsPath.get(0));
        return true;
      }
    }
  });
  if (!descriptor) {
    const node = path.node;
    if (t.Identifier.check(node) && simplePropTypes.includes(node.name)) {
      descriptor = { name: node.name };
    } else if (
      t.CallExpression.check(node) &&
      t.Identifier.check(node.callee) &&
      propTypes.hasOwnProperty(node.callee.name)
    ) {
      descriptor = propTypes[node.callee.name](path.get('arguments', 0));
    } else {
      descriptor = { name: 'custom', raw: printValue(path) };
    }
  }
  return descriptor;
}
