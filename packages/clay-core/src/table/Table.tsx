/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {sub, useControlledState, useId} from '@clayui/shared';
import RootTable from '@clayui/table';
import React, {useCallback, useRef} from 'react';
import {createPortal} from 'react-dom';

import {FocusWithinProvider} from '../aria';
import {useForwardRef} from '../hooks';
import {LiveAnnouncer} from '../live-announcer';
import {Sorting, TableContext} from './context';
import {useTreeNavigation} from './useTreeNavigation';

import type {AnnouncerAPI} from '../live-announcer';

type Props = {
	/**
	 * Default state of sort (uncontrolled).
	 */
	defaultSort?: Sorting | null;

	/**
	 * Texts used for assertive messages to SRs.
	 */
	messages?: {
		sortDescription: string;
		sorting: string;
	};

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

export const Table = React.forwardRef<HTMLDivElement, Props>(
	function TableInner(
		{
			children,
			defaultSort,
			messages = {
				sortDescription: 'sortable column',
				sorting: 'sorted by column {0} in {1} order',
			},
			onSortChange,
			sort: externalSort,
			nestedKey,
			...otherProps
		}: Props,
		outRef
	) {
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
							nestedKey,
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
