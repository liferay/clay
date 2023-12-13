/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {sub, useControlledState, useId} from '@clayui/shared';
import RootTable from '@clayui/table';
import classNames from 'classnames';
import React, {useCallback, useRef, useState} from 'react';
import {createPortal} from 'react-dom';

import {FocusWithinProvider} from '../aria';
import {useForwardRef} from '../hooks';
import {LiveAnnouncer} from '../live-announcer';
import {Sorting, TableContext} from './context';
import {useTreeNavigation} from './useTreeNavigation';

import type {AnnouncerAPI} from '../live-announcer';

export type Props = {
	/**
	 * Flag to enable column visibility control.
	 */
	columnsVisibility?: boolean;

	/**
	 * Property to set the initial value of `expandedKeys` (uncontrolled).
	 */
	defaultExpandedKeys?: Set<React.Key>;

	/**
	 * Default state of sort (uncontrolled).
	 */
	defaultSort?: Sorting | null;

	/**
	 * Default value for hidden columns in the table (uncontrolled).
	 */
	defaultHiddenColumns?: Map<React.Key, number>;

	/**
	 * The currently expanded keys in the collection (controlled).
	 */
	expandedKeys?: Set<React.Key>;

	/**
	 * Defines which columns are hidden in the table (controlled).
	 */
	hiddenColumns?: Map<React.Key, number>;

	/**
	 * Texts used for assertive messages to SRs.
	 */
	messages?: {
		columnsVisibility: string;
		expandable: string;
		sortDescription: string;
		sorting: string;
	};

	/**
	 * A callback that is called when items are expanded or collapsed
	 * (controlled).
	 */
	onExpandedChange?: (keys: Set<React.Key>) => void;

	/**
	 * When a tree is very large, loading items (nodes) asynchronously is preferred to
	 * decrease the initial payload and memory space. The callback is called every time
	 * the item is a leaf node of the tree.
	 */
	onLoadMore?: (item: unknown) => Promise<Array<any> | undefined>;

	/**
	 * Callback for when the sorting change (controlled).
	 */
	onSortChange?: (sorting: Sorting | null) => void;

	/**
	 * Callback called when columns visibility changes (controlled).
	 */
	onHiddenColumnsChange?: (columns: Map<React.Key, number>) => void;

	/**
	 * Current state of sort (controlled).
	 */
	sort?: Sorting | null;

	/**
	 * Flag to indicate which key name matches the nested rendering of the tree.
	 */
	nestedKey?: string;

	/**
	 * Defines the size of the table.
	 */
	size?: 'sm' | 'lg';
} & React.ComponentProps<typeof RootTable>;

const focusableElements = ['[role="row"]', 'td[role="gridcell"]'];
const locator = {
	cell: 'gridcell',
	row: 'row',
};
const defaultSet = new Set<React.Key>();

export const Table = React.forwardRef<HTMLDivElement, Props>(
	function TableInner(
		{
			columnsVisibility = true,
			children,
			className,
			defaultExpandedKeys = defaultSet,
			defaultSort,
			defaultHiddenColumns = new Map(),
			expandedKeys: externalExpandedKeys,
			messages = {
				columnsVisibility: 'Manage Columns Visibility',
				expandable: 'expandable',
				sortDescription: 'sortable column',
				sorting: 'sorted by column {0} in {1} order',
			},
			hiddenColumns: externalHiddenColumns,
			onExpandedChange,
			onHiddenColumnsChange,
			onLoadMore,
			onSortChange,
			size,
			sort: externalSort,
			nestedKey,
			...otherProps
		}: Props,
		outRef
	) {
		const [expandedKeys, setExpandedKeys] = useControlledState<
			Set<React.Key>
		>({
			defaultName: 'defaultExpandedKeys',
			defaultValue: defaultExpandedKeys,
			handleName: 'onExpandedChange',
			name: 'expandedKeys',
			onChange: onExpandedChange,
			value: externalExpandedKeys,
		});

		const [sort, setSorting] = useControlledState({
			defaultName: 'defaultSort',
			defaultValue: defaultSort,
			handleName: 'onSortChange',
			name: 'sort',
			onChange: onSortChange,
			value: externalSort,
		});

		const [hidden, setHidden] = useControlledState({
			defaultName: 'defaultSort',
			defaultValue: defaultHiddenColumns,
			handleName: 'onHiddenColumnsChange',
			name: 'hiddenColumns',
			onChange: onHiddenColumnsChange,
			value: externalHiddenColumns,
		});

		const ref = useForwardRef(outRef);
		const announcerAPI = useRef<AnnouncerAPI>(null);

		const {navigationProps} = useTreeNavigation({
			disabled: !nestedKey,
			locator,
			ref,
		});

		const sortDescriptionId = useId();

		const [headCellsCount, setHeadCellsCount] = useState(0);

		return (
			<RootTable
				{...otherProps}
				{...navigationProps}
				className={classNames(className, {
					'table-nested-rows': nestedKey,
					[`table-${size}`]: size,
				})}
				ref={ref}
				role={nestedKey ? 'treegrid' : undefined}
				style={{
					tableLayout: 'fixed',
				}}
				tableVerticalAlignment="middle"
			>
				<LiveAnnouncer ref={announcerAPI} />

				<FocusWithinProvider
					containerRef={ref}
					focusableElements={focusableElements}
				>
					<TableContext.Provider
						value={{
							columnsVisibility,
							expandedKeys,
							headCellsCount,
							hiddenColumns: hidden,
							messages,
							nestedKey,
							onExpandedChange: setExpandedKeys,
							onHeadCellsChange: setHeadCellsCount,
							onHiddenColumnsChange: useCallback(
								(column: React.Key, index: number) => {
									const columns = new Map(hidden);

									if (columns.has(column)) {
										columns.delete(column);
									} else {
										columns.set(column, index);
									}

									setHidden(columns);
								},
								[setHidden, hidden]
							),
							onLoadMore,
							onSortChange: useCallback(
								(sort, textValue) => {
									announcerAPI.current!.announce(
										sub(messages!.sorting, [
											textValue,
											sort!.direction,
										])
									);
									setSorting(sort);
								},
								[setSorting]
							),
							sort,
							sortDescriptionId,
							treegrid: !!nestedKey,
						}}
					>
						{children}
					</TableContext.Provider>
				</FocusWithinProvider>

				{createPortal(
					<div
						aria-hidden="true"
						id={sortDescriptionId}
						style={{display: 'none'}}
					>
						{messages!.sortDescription}
					</div>,
					document.body
				)}
			</RootTable>
		);
	}
);
