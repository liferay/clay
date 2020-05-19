/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import * as docblock from './docblock';

export { docblock };

export { default as getClassMemberValuePath } from './getClassMemberValuePath';
export { default as getFlowType } from './getFlowType';
export {
  default as getFlowTypeFromReactComponent,
} from './getFlowTypeFromReactComponent';
export { default as getMemberExpressionRoot } from './getMemberExpressionRoot';
export { default as getMembers } from './getMembers';
export { default as getMemberValuePath } from './getMemberValuePath';
export { default as getMethodDocumentation } from './getMethodDocumentation';
export { default as getNameOrValue } from './getNameOrValue';
export { default as getParameterName } from './getParameterName';
export { default as getPropertyName } from './getPropertyName';
export { default as getPropertyValuePath } from './getPropertyValuePath';
export { default as getPropType } from './getPropType';
export { default as getTypeAnnotation } from './getTypeAnnotation';
export {
  default as isExportsOrModuleAssignment,
} from './isExportsOrModuleAssignment';
export { default as isReactComponentClass } from './isReactComponentClass';
export { default as isReactComponentMethod } from './isReactComponentMethod';
export { default as isReactCreateClassCall } from './isReactCreateClassCall';
export { default as isReactForwardRefCall } from './isReactForwardRefCall';
export { default as isReactModuleName } from './isReactModuleName';
export { default as isStatelessComponent } from './isStatelessComponent';
export { default as match } from './match';
export {
  default as normalizeClassDefinition,
} from './normalizeClassDefinition';
export { default as normalizeClassDefiniton } from './normalizeClassDefinition'; // backward compatibility
export { default as printValue } from './printValue';
export {
  default as resolveExportDeclaration,
} from './resolveExportDeclaration';
export { default as resolveToModule } from './resolveToModule';
export { default as resolveToValue } from './resolveToValue';
