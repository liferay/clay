/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {Collection} from '../collection';

import type {ICollectionProps} from '../collection';

type Context = {
	displayType?: 'light' | 'dark';
};

export const ContentContext = React.createContext<Context>({} as Context);

interface IProps<T> extends Omit<ICollectionProps<T, unknown>, 'virtualize'> {
	/**
	 * Flag to determine which style the VerticalBar will display.
	 */
	displayType?: 'light' | 'dark';
}

export function Content<T>({
	children,
	displayType = 'light',
	items,
}: IProps<T>) {
	return (
		<ContentContext.Provider value={{displayType}}>
			<Collection<T> items={items}>{children}</Collection>
		</ContentContext.Provider>
	);
}
