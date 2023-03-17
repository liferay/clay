/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export {
	default as Button,
	ClayButtonWithIcon as ButtonWithIcon,
} from '@clayui/button';
export {default as Icon} from '@clayui/icon';
export {
	default as Modal,
	Context as ModalContext,
	useModal,
} from '@clayui/modal';
export {Provider, useProvider} from '@clayui/provider';

export {Heading, Text, TextHighlight} from './typography';
export {OverlayMask} from './overlay-mask';
export {TreeView} from './tree-view';
export {VerticalBar} from './vertical-bar';
export {Picker, Option} from './picker';
export {FocusTrap} from './focus-trap';

// Internal dependencies not public but exposed to other Clay packages.
export * as __NOT_PUBLIC_COLLECTION from './collection';
export type {ICollectionProps} from './collection';
