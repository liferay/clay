/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext} from 'react';

import type {ICollectionProps} from './Collection';
import type {ITreeState} from './useTree';

export type Icons = {
	open: React.ReactElement;
	close: React.ReactElement;
};

export interface ITreeViewContext extends ITreeState {
	childrenRoot?: (item: Object) => React.ReactElement;
	expanderIcons?: Icons;
	nestedKey?: string;
	items?: ICollectionProps<unknown>['items'];
	showExpanderOnHover?: boolean;
}

export const TreeViewContext = React.createContext<ITreeViewContext>(
	{} as ITreeViewContext
);

export function useTreeViewContext(): ITreeViewContext {
	return useContext(TreeViewContext);
}
