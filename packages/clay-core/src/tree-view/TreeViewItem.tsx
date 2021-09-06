/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import Icon from '@clayui/icon';
import Layout from '@clayui/layout';
import classNames from 'classnames';
import React, {useContext} from 'react';
import {useDrag, useDrop} from 'react-dnd';

import {useTreeViewContext} from './context';
import {useItem} from './useItem';

type TreeViewItemProps = {
	children: React.ReactNode;
};

const SpacingContext = React.createContext(0);

export function TreeViewItem({children}: TreeViewItemProps) {
	const spacing = useContext(SpacingContext);
	const {
		childrenRoot,
		expandedKeys,
		items,
		nestedKey,
		open,
		toggle,
	} = useTreeViewContext();

	const item = useItem();

	const [left, right] = React.Children.toArray(children);

	const group =
		// @ts-ignore
		right?.type?.displayName === 'ClayTreeViewGroup' ? right : null;

	if (!group && nestedKey && item[nestedKey] && childrenRoot) {
		return childrenRoot(item);
	}

	/* eslint-disable */
	const ref = React.useRef(null);

	const [, drag] = useDrag({
		end(dragItem: any) {
			if (!items || !Array.isArray(items)) {
				return;
			}
			if (dragItem.parentIndex) {
				const parentItem: any = items?.find(
					(item: any) => item.index === dragItem.parentIndex
				);
				if (parentItem) {
					const childIndex: number = parentItem.children.findIndex(
						(item: any) => item.index === dragItem.index
					);
					if (childIndex !== -1) {
						parentItem.children.splice(childIndex, 1);
						toggle(parentItem.key);
					}
				}
			}
		},
		item: {
			...item,
			type: 'treeViewItem',
		},
	});

	const [, drop] = useDrop({
		accept: 'treeViewItem',
		drop(dragItem: any) {
			if (!Array.isArray(item.children)) {
				item.children = [];
			}

			item.children.push(dragItem);

			return dragItem;
		},
		hover() {
			open(item.key);
		},
	});

	drag(drop(ref));

	return (
		<SpacingContext.Provider value={spacing + 24}>
			<li className="treeview-item" ref={ref} role="none">
				<div
					aria-expanded={
						group ? expandedKeys.has(item.key) : undefined
					}
					className={classNames('treeview-link', {
						collapsed: group && expandedKeys.has(item.key),
					})}
					onClick={() => group && toggle(item.key)}
					role="treeitem"
					style={{paddingLeft: `${spacing}px`}}
					tabIndex={0}
				>
					<span
						className="c-inner"
						style={{marginLeft: `-${spacing}px`}}
						tabIndex={-2}
					>
						{typeof left === 'string' ? (
							<Layout.ContentRow>
								<Layout.ContentCol expand>
									<div className="component-text">{left}</div>
								</Layout.ContentCol>
							</Layout.ContentRow>
						) : group ? (
							left
						) : (
							<TreeViewItemStack expandable={false}>
								{children}
							</TreeViewItemStack>
						)}
					</span>
				</div>
				{group}
			</li>
		</SpacingContext.Provider>
	);
}

type TreeViewItemStackProps = {
	children: React.ReactNode;
	expandable?: boolean;
};

export function TreeViewItemStack({
	children,
	expandable = true,
}: TreeViewItemStackProps) {
	const {
		expandedKeys,
		expanderIcons,
		selection,
		toggle,
	} = useTreeViewContext();

	const item = useItem();

	const childrenArray = React.Children.toArray(children);

	return (
		<Layout.ContentRow>
			{expandable && (
				<Layout.ContentCol>
					<Button
						aria-controls={`${item.key}`}
						aria-expanded={expandedKeys.has(item.key)}
						className={classNames('component-expander', {
							collapsed: expandedKeys.has(item.key),
						})}
						displayType={null}
						monospaced
						onClick={() => toggle(item.key)}
					>
						<span className="c-inner" tabIndex={-2}>
							{expanderIcons?.close ? (
								expanderIcons.close
							) : (
								<Icon symbol="angle-down" />
							)}
							{expanderIcons?.open ? (
								React.cloneElement(expanderIcons.open, {
									className: 'component-expanded-d-none',
								})
							) : (
								<Icon
									className="component-expanded-d-none"
									symbol="angle-right"
								/>
							)}
						</span>
					</Button>
				</Layout.ContentCol>
			)}

			{React.Children.map(children, (child, index) => {
				let content = child;

				if (!content) {
					return null;
				}

				if (typeof child === 'string') {
					content = <div className="component-text">{child}</div>;

					// @ts-ignore
				} else if (child?.type.displayName === 'ClayIcon') {
					content = <div className="component-icon">{child}</div>;

					// @ts-ignore
				} else if (child?.type.displayName === 'ClayCheckbox') {
					content = React.cloneElement(child as React.ReactElement, {
						checked: selection.selectedKeys.has(item.key),
						indeterminate: selection.isIntermediate(item.key),
						onChange: () => selection.toggleSelection(item.key),
						onClick: (
							event: React.MouseEvent<
								HTMLInputElement,
								MouseEvent
							>
						) => {
							event.stopPropagation();

							const {
								onClick,
							} = (child as React.ReactElement).props;

							if (onClick) {
								onClick(event);
							}
						},
					});
				}

				return (
					<Layout.ContentCol
						expand={index === childrenArray.length - 1}
					>
						{content}
					</Layout.ContentCol>
				);
			})}
		</Layout.ContentRow>
	);
}
