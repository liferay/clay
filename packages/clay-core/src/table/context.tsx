/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext} from 'react';

export type Sorting = {
	column: React.Key;
	direction: 'ascending' | 'descending';
};

type Context = {
	expandedKeys: Set<React.Key>;
	messages: Record<string, string>;
	nestedKey?: string;
	onExpandedChange: (keys: Set<React.Key>) => void;
	onSortChange: (sorting: Sorting | null, textValue: string) => void;
	sort: Sorting | null;
	sortDescriptionId: string;
	treegrid: boolean;
};

export const TableContext = React.createContext<Context>({} as Context);

export function useTable() {
	return useContext(TableContext);
}

type RowContext = {
	expandable?: boolean;
	key: React.Key;
	level: number;
};

export const RowContext = React.createContext<RowContext>({key: 0, level: 1});

export function useRow() {
	return useContext(RowContext);
}
