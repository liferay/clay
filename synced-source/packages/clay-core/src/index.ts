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

export {Body, Cell, Head, Row, Table} from './table';
export {FocusTrap} from './focus-trap';
export {Heading, Text, TextHighlight} from './typography';
export {IconSelector} from './icon-selector';
export {LanguagePicker} from './language-picker';
export {Nav} from './nav';
export {OverlayMask} from './overlay-mask';
export {Picker, Option} from './picker';
export {SidePanel} from './side-panel';
export {SidePanelWithDrilldown} from './side-panel';
export {TreeView} from './tree-view';
export {VerticalBar} from './vertical-bar';
export {VerticalNav} from './vertical-nav';
export type {ColorType} from './typography';
export type {Item} from './language-picker';
export type {SidePanelProps} from './side-panel';

// Experimental components
export * as __EXPERIMENTAL_MENU from './drop-down';

// Internal dependencies not public but exposed to other Clay packages.
export * as __NOT_PUBLIC_COLLECTION from './collection';
export * as __NOT_PUBLIC_LIVE_ANNOUNCER from './live-announcer';
export type {AnnouncerAPI} from './live-announcer';
export type {ICollectionProps} from './collection';
