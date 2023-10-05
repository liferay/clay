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
	onSortChange: (sorting: Sorting | null, textValue: string) => void;
	sort: Sorting | null;
	sortDescriptionId: string;
	nestedKey?: string;
	treegrid: boolean;
};

export const TableContext = React.createContext<Context>({} as Context);

export function useTable() {
	return useContext(TableContext);
}

export const RowLevelContext = React.createContext<number>(1);

export function useLevel() {
	return useContext(RowLevelContext);
}
