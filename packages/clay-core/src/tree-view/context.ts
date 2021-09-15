/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext} from 'react';

import type {ITreeState} from './useTree';

export type Icons = {
	open: React.ReactElement;
	close: React.ReactElement;
};

export interface ITreeViewContext<T> extends ITreeState<T> {
	childrenRoot?: (item: Object) => React.ReactElement;
	expanderIcons?: Icons;
	nestedKey?: string;
	showExpanderOnHover?: boolean;
}

export const TreeViewContext = React.createContext<ITreeViewContext<any>>(
	{} as ITreeViewContext<any>
);

export function useTreeViewContext(): ITreeViewContext<unknown> {
	return useContext(TreeViewContext);
}
