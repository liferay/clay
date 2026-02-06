/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import {Status} from './types';

export interface IContext {
	ariaLabelledby?: string;

	/**
	 * Callback called to close the modal.
	 */
	onClose: () => void;

	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;

	/**
	 * Status messages.
	 */
	status?: Status;
}

const context = React.createContext({} as IContext);

context.displayName = 'ClayModalContext';

export default context;
