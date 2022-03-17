/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
