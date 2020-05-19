/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type Documentation from '../Documentation';
import getMemberValuePath from './getMemberValuePath';
import getTypeAnnotation from './getTypeAnnotation';
import getTypeParameters, { type TypeParameters } from './getTypeParameters';
import isReactComponentClass from './isReactComponentClass';
import isReactForwardRefCall from './isReactForwardRefCall';
import resolveGenericTypeAnnotation from './resolveGenericTypeAnnotation';
import resolveToValue from './resolveToValue';

function getStatelessPropsPath(componentDefinition): NodePath {
  const value = resolveToValue(componentDefinition);
  if (isReactForwardRefCall(value)) {
    const inner = value.get('arguments', 0);
    return inner.get('params', 0);
  }
  return value.get('params', 0);
}

/**
 * Given an React component (stateless or class) tries to find the
 * flow type for the props. If not found or not one of the supported
 * component types returns null.
 */
export default (path: NodePath): ?NodePath => {
  let typePath: ?NodePath = null;

  if (isReactComponentClass(path)) {
    const superTypes = path.get('superTypeParameters');

    if (superTypes.value) {
      const params = superTypes.get('params');
      if (params.value.length === 3) {
        typePath = params.get(1);
      } else {
        typePath = params.get(0);
      }
    } else {
      const propsMemberPath = getMemberValuePath(path, 'props');
      if (!propsMemberPath) {
        return null;
      }

      typePath = getTypeAnnotation(propsMemberPath.parentPath);
    }

    return typePath;
  }

  const propsParam = getStatelessPropsPath(path);

  if (propsParam) {
    typePath = getTypeAnnotation(propsParam);
  }

  return typePath;
};

export function applyToFlowTypeProperties(
  documentation: Documentation,
  path: NodePath,
  callback: (propertyPath: NodePath, typeParams: ?TypeParameters) => void,
  typeParams?: ?TypeParameters,
) {
  if (path.node.properties) {
    path
      .get('properties')
      .each(propertyPath => callback(propertyPath, typeParams));
  } else if (path.node.members) {
    path
      .get('members')
      .each(propertyPath => callback(propertyPath, typeParams));
  } else if (path.node.type === 'InterfaceDeclaration') {
    if (path.node.extends) {
      applyExtends(documentation, path, callback, typeParams);
    }

    path
      .get('body', 'properties')
      .each(propertyPath => callback(propertyPath, typeParams));
  } else if (path.node.type === 'TSInterfaceDeclaration') {
    if (path.node.extends) {
      applyExtends(documentation, path, callback, typeParams);
    }

    path
      .get('body', 'body')
      .each(propertyPath => callback(propertyPath, typeParams));
  } else if (
    path.node.type === 'IntersectionTypeAnnotation' ||
    path.node.type === 'TSIntersectionType'
  ) {
    path
      .get('types')
      .each(typesPath =>
        applyToFlowTypeProperties(
          documentation,
          typesPath,
          callback,
          typeParams,
        ),
      );
  } else if (path.node.type !== 'UnionTypeAnnotation') {
    // The react-docgen output format does not currently allow
    // for the expression of union types
    const typePath = resolveGenericTypeAnnotation(path);
    if (typePath) {
      applyToFlowTypeProperties(documentation, typePath, callback, typeParams);
    }
  }
}

function applyExtends(documentation, path, callback, typeParams) {
  path.get('extends').each((extendsPath: NodePath) => {
    const resolvedPath = resolveGenericTypeAnnotation(extendsPath);
    if (resolvedPath) {
      if (resolvedPath.node.typeParameters && extendsPath.node.typeParameters) {
        typeParams = getTypeParameters(
          resolvedPath.get('typeParameters'),
          extendsPath.get('typeParameters'),
          typeParams,
        );
      }
      applyToFlowTypeProperties(
        documentation,
        resolvedPath,
        callback,
        typeParams,
      );
    } else {
      const id =
        extendsPath.node.id ||
        extendsPath.node.typeName ||
        extendsPath.node.expression;
      if (id && id.type === 'Identifier') {
        documentation.addComposes(id.name);
      }
    }
  });
}
