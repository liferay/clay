/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import {ClayToggle as Toggle} from '@clayui/form';
import Icon from '@clayui/icon';
import Layout from '@clayui/layout';
import React, {useMemo} from 'react';

import {ChildrenFunction, Collection, useCollection} from '../collection';
import {Item, Menu} from '../drop-down';
import {Cell} from './Cell';
import {Scope, ScopeContext} from './ScopeContext';
import {useTable} from './context';

type Props<T> = {
	/**
	 * Children content to render a dynamic or static content.
	 */
	children: React.ReactNode | ChildrenFunction<T, unknown>;

	/**
	 * Property to render content with dynamic data.
	 */
	items?: Array<T>;
} & React.TableHTMLAttributes<HTMLTableSectionElement>;

function HeadInner<T extends Record<string, any>>(
	{children, items, ...otherProps}: Props<T>,
	ref: React.Ref<HTMLTableSectionElement>
) {
	const {
		columnsVisibility,
		headCellsCount,
		hiddenColumns,
		messages,
		onHeadCellsChange,
		onHiddenColumnsChange,
	} = useTable();

	const collection = useCollection<T>({
		children,
		disabledKeys: new Set(hiddenColumns.keys()),
		items,
		suppressTextValueWarning: false,
	});

	useMemo(() => {
		onHeadCellsChange(collection.getSize());
	}, []);

	return (
		<thead {...otherProps} ref={ref}>
			<ScopeContext.Provider value={Scope.Head}>
				<tr>
					<Collection<T> collection={collection} />

					{columnsVisibility && (
						<Cell keyValue="visibility" width="72px">
							<Menu
								items={collection.getItems()}
								trigger={
									<Button
										aria-label={
											messages['columnsVisibility']
										}
										borderless
										displayType="secondary"
										monospaced
									>
										<Icon symbol="caret-bottom" />
									</Button>
								}
							>
								{(item) => (
									<Item
										key={item}
										textValue={
											collection.getItem(item).value
										}
									>
										<Layout.ContentRow>
											<Layout.ContentCol expand>
												{collection.getItem(item).value}
											</Layout.ContentCol>
											<Layout.ContentCol>
												<Toggle
													disabled={
														!hiddenColumns.has(
															item
														) &&
														headCellsCount - 1 ===
															hiddenColumns.size
													}
													onToggle={() =>
														onHiddenColumnsChange(
															item,
															collection.getItem(
																item
															).index
														)
													}
													toggled={hiddenColumns.has(
														item
													)}
												/>
											</Layout.ContentCol>
										</Layout.ContentRow>
									</Item>
								)}
							</Menu>
						</Cell>
					)}
				</tr>
			</ScopeContext.Provider>
		</thead>
	);
}

type ForwardRef = {
	displayName: string;
	<T>(
		props: Props<T> & {ref?: React.Ref<HTMLTableSectionElement>}
	): JSX.Element;
};

export const Head = React.forwardRef(HeadInner) as ForwardRef;

Head.displayName = 'TableHead';
