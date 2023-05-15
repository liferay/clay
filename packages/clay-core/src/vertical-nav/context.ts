/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createContext, useContext} from 'react';

import type {ChildrenFunction} from '../collection';

type VertivalNavContextProps = {
	activeKey?: React.Key;
	ariaCurrent?: 'page' | null;
	spritemap?: string;
	childrenRoot: React.MutableRefObject<
		React.ReactNode | ChildrenFunction<Object, null>
	>;
	close: (key: React.Key) => void;
	expandedKeys: Set<React.Key>;
	open: (key: React.Key) => void;
	toggle: (key: React.Key) => void;
};

export const VertivalNavContext = createContext<VertivalNavContextProps>(
	{} as VertivalNavContextProps
);

export function useVertical() {
	return useContext(VertivalNavContext);
}
