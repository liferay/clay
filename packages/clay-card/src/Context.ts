/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import {createContext} from 'react';

export interface IContext {
	horizontal?: boolean;

	interactive?: boolean;
}

export default createContext({} as IContext);
