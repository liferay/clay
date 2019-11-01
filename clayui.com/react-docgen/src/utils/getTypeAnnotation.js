/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import types from 'ast-types';

const { namedTypes: t } = types;

function hasTypeAnnotation(path: NodePath): boolean {
  return !!path.node.typeAnnotation;
}

/**
 * Gets the most inner valuable TypeAnnotation from path. If no TypeAnnotation
 * can be found nothing is returned
 */
export default function getTypeAnnotation(path: NodePath): ?NodePath {
  if (!hasTypeAnnotation(path)) return null;

  let resultPath: NodePath = path;
  do {
    resultPath = resultPath.get('typeAnnotation');
  } while (
    hasTypeAnnotation(resultPath) &&
    !t.FlowType.check(resultPath.node) &&
    !t.TSType.check(resultPath.node)
  );

  return resultPath;
}
