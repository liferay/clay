/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {ISidebarItem, TDisplay, TSidebarPosition} from './types';

export interface IContext {
	displayType: TDisplay;

	items: Array<ISidebarItem>;

	position: TSidebarPosition;
}

const context = React.createContext({} as IContext);

context.displayName = 'ClaySidebarContext';

export default context;
