/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {TDisplay, TSidebarPosition} from './types';

export interface IContext {
	children: React.ReactChildren | React.ReactNode;

	displayType: TDisplay;

	position: TSidebarPosition;

	selectedPanelId: string;
}

const context = React.createContext({} as IContext);

context.displayName = 'ClaySidebarContext';

export default context;
