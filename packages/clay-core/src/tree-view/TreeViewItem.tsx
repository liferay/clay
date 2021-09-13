/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import Icon from '@clayui/icon';
import Layout from '@clayui/layout';
import classNames from 'classnames';
import React, {useContext} from 'react';

import {useTreeViewContext} from './context';
import {useItem} from './useItem';

type TreeViewItemProps = {
	children: React.ReactNode;
};

const SpacingContext = React.createContext(0);

export const TreeViewItem = React.forwardRef<HTMLDivElement, TreeViewItemProps>(
	function TreeViewItemInner({children}, ref) {
		const spacing = useContext(SpacingContext);
		const {
			childrenRoot,
			expandedKeys,
			nestedKey,
			toggle,
		} = useTreeViewContext();

		const item = useItem();

		const [left, right] = React.Children.toArray(children);

		const group =
			// @ts-ignore
			right?.type?.displayName === 'ClayTreeViewGroup' ? right : null;

		if (!group && nestedKey && item[nestedKey] && childrenRoot) {
			return React.cloneElement(childrenRoot(item), {
				ref,
			});
		}

		return (
			<SpacingContext.Provider value={spacing + 24}>
				<li className="treeview-item" role="none">
					<div
						aria-expanded={
							group ? expandedKeys.has(item.key) : undefined
						}
						className={classNames('treeview-link', {
							collapsed: group && expandedKeys.has(item.key),
						})}
						onClick={() => group && toggle(item.key)}
						ref={ref}
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
										<div className="component-text">
											{left}
										</div>
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
);

TreeViewItem.displayName = 'ClayTreeViewItem';

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
