/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext} from 'react';

export interface ITreeViewContext {
	childrenRoot?: (item: Object) => React.ReactElement;
	expandedKeys?: Set<string>;
	nestedKey?: string;
	showExpanderOnHover?: boolean;
	toggle?: (key: string) => void;
}

export const TreeViewContext = React.createContext<ITreeViewContext>({});

export function useTreeViewContext(): ITreeViewContext {
	return useContext(TreeViewContext);
}
