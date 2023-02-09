/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export const noop = () => {};
export {ClayPortal} from './Portal';
export {delegate} from './delegate';
export {doAlign} from './doAlign';
export {FocusScope} from './FocusScope';
export {getEllipsisItems} from './getEllipsisItems';
export {Keys} from './Keys';
export {LinkOrButton} from './LinkOrButton';
export {MouseSafeArea} from './MouseSafeArea';
export {observeRect} from './observeRect';
export {Overlay} from './Overlay';
export {setElementFullHeight} from './setElementFullHeight';
export {sub} from './sub';
export {useDebounce} from './useDebounce';
export {useFocusManagement, FOCUSABLE_ELEMENTS} from './useFocusManagement';
export {useId} from './useId';
export {useInteractionFocus, useFocusVisible} from './useInteractionFocus';
export {useInternalState} from './useInternalState';
export {useMousePosition} from './useMousePosition';
export {useNavigation, isTypeahead, getFocusableList} from './useNavigation';
export {useOverlayPosition} from './useOverlayPositon';
export {useHover} from './useHover';
export {useIsMobileDevice} from './useIsMobileDevice';
export {isMac, isIPhone, isIPad, isIOS, isAppleDevice} from './platform';
export type {AlignPoints} from './useOverlayPositon';
export type {IBaseProps as IPortalBaseProps} from './Portal';
export type {InternalDispatch} from './useInternalState';
