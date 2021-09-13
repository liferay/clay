/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext} from 'react';

export interface ITreeViewContext {
	showExpanderOnHover?: boolean;
}

export const TreeViewContext = React.createContext<ITreeViewContext>({});

export function useTreeViewContext(): ITreeViewContext {
	return useContext(TreeViewContext);
}
