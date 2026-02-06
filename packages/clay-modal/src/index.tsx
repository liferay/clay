/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Body from './Body';
import Header, {
	Item,
	ItemGroup,
	Subtitle,
	SubtitleSection,
	Title,
	TitleIndicator,
	TitleSection,
} from './Header';
import Modal from './Modal';
import ClayModalProvider, {Context} from './Provider';
import {useModal} from './useModal';

export {
	ClayModalProvider,
	Modal,
	useModal,
	Context,
	Body,
	Header,
	Item,
	ItemGroup,
	Subtitle,
	SubtitleSection,
	Title,
	TitleIndicator,
	TitleSection,
};
export default Modal;
