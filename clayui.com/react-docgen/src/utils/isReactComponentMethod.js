/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import types from 'ast-types';
import getPropertyName from './getPropertyName';

const { namedTypes: t } = types;

const componentMethods = [
  'componentDidMount',
  'componentDidReceiveProps',
  'componentDidUpdate',
  'componentWillMount',
  'UNSAFE_componentWillMount',
  'componentWillReceiveProps',
  'UNSAFE_componentWillReceiveProps',
  'componentWillUnmount',
  'componentWillUpdate',
  'UNSAFE_componentWillUpdate',
  'getChildContext',
  'getDefaultProps',
  'getInitialState',
  'render',
  'shouldComponentUpdate',
  'getDerivedStateFromProps',
  'getDerivedStateFromError',
  'getSnapshotBeforeUpdate',
  'componentDidCatch',
];

/**
 * Returns if the method path is a Component method.
 */
export default function(methodPath: NodePath): boolean {
  if (
    !t.MethodDefinition.check(methodPath.node) &&
    !t.Property.check(methodPath.node)
  ) {
    return false;
  }

  const name = getPropertyName(methodPath);
  return !!name && componentMethods.indexOf(name) !== -1;
}
