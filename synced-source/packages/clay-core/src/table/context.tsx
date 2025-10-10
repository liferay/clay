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
	alwaysVisibleColumns: Set<React.Key>;
	columnsVisibility: boolean;
	expandedKeys: Set<React.Key>;
	headCellsCount: number;
	itemIdKey: string;
	visibleColumns: Map<React.Key, number>;
	messages: Record<string, string>;
	nestedKey?: string;
	onExpandedChange: (keys: Set<React.Key>) => void;
	onHeadCellsChange: (value: number) => void;
	onLoadMore?: (item: unknown) => Promise<Array<any> | undefined>;
	onSortChange: (sorting: Sorting | null, textValue: string) => void;
	onVisibleColumnsChange: (
		column: React.Key | Array<React.Key>,
		index: number
	) => void;
	sort: Sorting | null;
	sortDescriptionId: string;
	treegrid: boolean;
};

export const TableContext = React.createContext<Context>({} as Context);

export function useTable() {
	return useContext(TableContext);
}

type RowContext = {
	divider: boolean;
	expandable?: boolean;
	isLoading: boolean;
	key: React.Key;
	lazy: boolean;
	level: number;
	loadMore: () => void;
};

export const RowContext = React.createContext<RowContext>({
	divider: false,
	isLoading: false,
	key: 0,
	lazy: false,
	level: 1,
	loadMore: () => {},
});

export function useRow() {
	return useContext(RowContext);
}

type BodyContext = {
	insert: (path: Array<number>, value: unknown) => void;
};

export const BodyContext = React.createContext<BodyContext>({} as BodyContext);

export function useBody() {
	return useContext(BodyContext);
}
