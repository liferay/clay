/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {sub, useControlledState, useId} from '@clayui/shared';
import RootTable from '@clayui/table';
import React, {useCallback, useRef} from 'react';
import {createPortal} from 'react-dom';

import {LiveAnnouncer} from '../live-announcer';
import {Sorting, TableContext} from './context';

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
} & React.ComponentProps<typeof RootTable>;

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
			...otherProps
		}: Props,
		ref
	) {
		const [sort, setSorting] = useControlledState({
			defaultName: 'defaultSort',
			defaultValue: defaultSort,
			handleName: 'onSortChange',
			name: 'sort',
			onChange: onSortChange,
			value: externalSort,
		});

		const announcerAPI = useRef<AnnouncerAPI>(null);

		const sortDescriptionId = useId();

		return (
			<RootTable {...otherProps} ref={ref}>
				<LiveAnnouncer ref={announcerAPI} />

				<TableContext.Provider
					value={{
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
					}}
				>
					{children}
				</TableContext.Provider>

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
