/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {sub, useControlledState, useId} from '@clayui/shared';
import RootTable from '@clayui/table';
import classNames from 'classnames';
import React, {useCallback, useRef} from 'react';
import {createPortal} from 'react-dom';

import {FocusWithinProvider} from '../aria';
import {useForwardRef} from '../hooks';
import {LiveAnnouncer} from '../live-announcer';
import {Sorting, TableContext} from './context';
import {useTreeNavigation} from './useTreeNavigation';

import type {AnnouncerAPI} from '../live-announcer';

export type Props = {
	/**
	 * Property to set the initial value of `expandedKeys` (uncontrolled).
	 */
	defaultExpandedKeys?: Set<React.Key>;

	/**
	 * Default state of sort (uncontrolled).
	 */
	defaultSort?: Sorting | null;

	/**
	 * The currently expanded keys in the collection (controlled).
	 */
	expandedKeys?: Set<React.Key>;

	/**
	 * Texts used for assertive messages to SRs.
	 */
	messages?: {
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
	 * Current state of sort (controlled).
	 */
	sort?: Sorting | null;

	/**
	 * Flag to indicate which key name matches the nested rendering of the tree.
	 */
	nestedKey?: string;
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
			children,
			className,
			defaultExpandedKeys = defaultSet,
			defaultSort,
			expandedKeys: externalExpandedKeys,
			messages = {
				expandable: 'expandable',
				sortDescription: 'sortable column',
				sorting: 'sorted by column {0} in {1} order',
			},
			onExpandedChange,
			onLoadMore,
			onSortChange,
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

		const ref = useForwardRef(outRef);
		const announcerAPI = useRef<AnnouncerAPI>(null);

		const {navigationProps} = useTreeNavigation({
			disabled: !nestedKey,
			locator,
			ref,
		});

		const sortDescriptionId = useId();

		return (
			<RootTable
				{...otherProps}
				{...navigationProps}
				className={classNames(className, {
					'table-nested-rows': nestedKey,
				})}
				ref={ref}
				role={nestedKey ? 'treegrid' : undefined}
			>
				<LiveAnnouncer ref={announcerAPI} />

				<FocusWithinProvider
					containerRef={ref}
					focusableElements={focusableElements}
				>
					<TableContext.Provider
						value={{
							expandedKeys,
							messages,
							nestedKey,
							onExpandedChange: setExpandedKeys,
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
