/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {CardDisplayType} from './types';
import {createContext} from 'react';

export interface IContext {
	displayType?: CardDisplayType;

	horizontal?: boolean;

	interactive?: boolean;
}

export default createContext({} as IContext);
