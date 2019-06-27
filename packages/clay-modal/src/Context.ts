/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { createContext } from 'react';
import { Status } from './types';

export interface IContext {
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

const context = createContext({} as IContext);

context.displayName = 'ClayModalContext';

export default context
