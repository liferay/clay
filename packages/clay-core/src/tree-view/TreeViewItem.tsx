/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import Icon from '@clayui/icon';
import Layout from '@clayui/layout';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import {Keys} from '@clayui/shared';
import classNames from 'classnames';
import React, {useContext, useState} from 'react';

import {Icons, useTreeViewContext} from './context';
import {useItem} from './useItem';

export interface ITreeViewItemProps
	extends Omit<React.HTMLAttributes<HTMLLIElement>, 'children'> {
	/**
	 * Property for rendering actions on a Node.
	 */
	actions?: React.ReactElement;
	children: React.ReactNode;
	isDragging?: boolean;
	overPosition?: string;
	overTarget?: boolean;
}

const SpacingContext = React.createContext(0);

export const TreeViewItem = React.forwardRef<
	HTMLDivElement,
	ITreeViewItemProps
>(function TreeViewItemInner(
	{
		actions,
		children,
		className,
		isDragging,
		overPosition,
		overTarget,
		...otherProps
	}: ITreeViewItemProps,
	ref
) {
	const spacing = useContext(SpacingContext);
	const {
		childrenRoot,
		close,
		expandedKeys,
		insert,
		nestedKey,
		onLoadMore,
		onRenameItem,
		open,
		remove,
		replace,
		rootRef,
		selection,
		toggle,
	} = useTreeViewContext();

	const item = useItem();

	const [focus, setFocus] = useState(false);

	const [loading, setLoading] = useState(false);

	const [left, right] = React.Children.toArray(children);

	const group =
		// @ts-ignore
		right?.type?.displayName === 'ClayTreeViewGroup' ? right : null;

	if (!group && nestedKey && item[nestedKey] && childrenRoot.current) {
		return React.cloneElement(childrenRoot.current(item), {
			actions,
			isDragging,
			overPosition,
			overTarget,
			ref,
		});
	}

	return (
		<SpacingContext.Provider value={spacing + 24}>
			<li
				{...otherProps}
				className={classNames('treeview-item', className, {
					disabled: isDragging,
				})}
				role="none"
			>
				<div
					aria-expanded={
						group ? expandedKeys.has(item.key) : undefined
					}
					className={classNames('treeview-link', {
						collapsed: group && expandedKeys.has(item.key),
						focus,
						'treeview-dropping-bottom':
							overTarget && overPosition === 'bottom',
						'treeview-dropping-middle':
							overTarget && overPosition === 'middle',
						'treeview-dropping-top':
							overTarget && overPosition === 'top',
					})}
					onBlur={({currentTarget, relatedTarget}) => {
						if (
							actions &&
							relatedTarget &&
							!currentTarget.contains(relatedTarget as Node)
						) {
							setFocus(false);
						}
					}}
					onClick={() => {
						if (group) {
							toggle(item.key);
						} else {
							if (onLoadMore) {
								setLoading(true);
								onLoadMore(item)
									.then((items) => {
										setLoading(false);

										if (items) {
											insert([...item.indexes, 0], items);
											toggle(item.key);
										}
									})
									.catch((error) => {
										console.error(error);
									});
							}
						}
					}}
					onFocus={() => actions && setFocus(true)}
					onKeyDown={(event) => {
						const {key} = event;

						if (key === Keys.Left) {
							if (
								!close(item.key) &&
								item.parentItemRef?.current
							) {
								item.parentItemRef.current.focus();
							}
						}

						if (key === Keys.Right) {
							if (!group) {
								if (onLoadMore) {
									setLoading(true);
									onLoadMore(item)
										.then((items) => {
											setLoading(false);

											if (!items) {
												return;
											}

											insert([...item.indexes, 0], items);
										})
										.catch((error) => {
											console.error(error);
										});
								} else {
									return;
								}
							}
							if (!open(item.key) && item.itemRef.current) {
								const group =
									item.itemRef.current.parentElement?.querySelector<HTMLDivElement>(
										'.treeview-group'
									);
								const firstItemElement =
									group?.querySelector<HTMLDivElement>(
										'.treeview-link'
									);
								firstItemElement?.focus();
							} else {
								item.itemRef.current?.focus();
							}
						}

						if (key === Keys.Backspace || key === Keys.Del) {
							remove(item.indexes);

							item.parentItemRef.current?.focus();
						}

						if (key === Keys.End) {
							const lastListElement = rootRef.current
								?.lastElementChild as HTMLLinkElement;
							const linkElement =
								lastListElement.firstElementChild as HTMLDivElement;
							linkElement.focus();
						}

						if (key === Keys.Home) {
							const firstListElement = rootRef.current
								?.firstElementChild as HTMLLinkElement;
							const linkElement =
								firstListElement.firstElementChild as HTMLDivElement;
							linkElement.focus();
						}

						if (
							(key.toUpperCase() === Keys.R || key === Keys.F2) &&
							onRenameItem
						) {
							onRenameItem({...item})
								.then((newItem) => {
									replace(item.indexes, {
										...newItem,
										index: item.index,
										indexes: item.indexes,
										itemRef: item.itemRef,
										key: item.key,
										parentItemRef: item.parentItemRef,
									});

									item.itemRef.current?.focus();
								})
								.catch((error) => {
									console.error(error);
								});
						}

						if (key === Keys.Spacebar) {
							selection.toggleSelection(item.key);
						}
					}}
					ref={ref}
					role="treeitem"
					style={{
						paddingLeft: `${
							spacing + (group || onLoadMore ? 0 : 24)
						}px`,
					}}
					tabIndex={0}
				>
					<span
						className="c-inner"
						style={{
							marginLeft: `-${
								spacing + (group || onLoadMore ? 0 : 24)
							}px`,
						}}
						tabIndex={-2}
					>
						{typeof left === 'string' ? (
							<Layout.ContentRow>
								<Layout.ContentCol expand>
									<div className="component-text">{left}</div>
								</Layout.ContentCol>

								{actions && <Actions>{actions}</Actions>}
							</Layout.ContentRow>
						) : group ? (
							React.cloneElement(left as React.ReactElement, {
								actions,
							})
						) : (
							<TreeViewItemStack
								actions={actions}
								expandable={!!onLoadMore}
								loading={loading}
							>
								{children}
							</TreeViewItemStack>
						)}
					</span>
				</div>
				{group}
			</li>
		</SpacingContext.Provider>
	);
});

TreeViewItem.displayName = 'ClayTreeViewItem';

interface ITreeViewItemStackProps extends React.HTMLAttributes<HTMLDivElement> {
	actions?: React.ReactElement;
	children: React.ReactNode;
	expandable?: boolean;
	loading?: boolean;
}

type ExpanderProps = {
	expanderIcons: Icons | undefined;
};

function Expander({expanderIcons}: ExpanderProps) {
	return (
		<>
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
		</>
	);
}

export function TreeViewItemStack({
	actions,
	children,
	expandable = true,
	loading = false,
	...otherProps
}: ITreeViewItemStackProps) {
	const {
		expandOnCheck,
		expandedKeys,
		expanderClassName,
		expanderIcons,
		nestedKey,
		open,
		selection,
		toggle,
	} = useTreeViewContext();

	const item = useItem();

	const childrenArray = React.Children.toArray(children);

	const nestedChildren =
		nestedKey && (item[nestedKey] as Array<Record<string, any>>);

	const hasChildren = nestedChildren && nestedChildren.length > 0;

	return (
		<Layout.ContentRow {...otherProps}>
			{expandable && (
				<Layout.ContentCol>
					<Button
						aria-controls={`${item.key}`}
						aria-expanded={expandedKeys.has(item.key)}
						className={classNames(
							'component-expander',
							expanderClassName,
							{
								collapsed: expandedKeys.has(item.key),
							}
						)}
						displayType={null}
						monospaced
						onClick={() => toggle(item.key)}
						tabIndex={-1}
					>
						<span className="c-inner" tabIndex={-2}>
							{loading ? (
								<ClayLoadingIndicator small />
							) : (
								hasChildren && (
									<Expander expanderIcons={expanderIcons} />
								)
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
						disabled: loading,
						indeterminate: selection.isIntermediate(item.key),
						onChange: () => {
							selection.toggleSelection(item.key);

							if (expandOnCheck) {
								open(item.key);
							}
						},
						onClick: (
							event: React.MouseEvent<
								HTMLInputElement,
								MouseEvent
							>
						) => {
							event.stopPropagation();

							const {onClick} = (child as React.ReactElement)
								.props;

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

			{actions && <Actions>{actions}</Actions>}
		</Layout.ContentRow>
	);
}

TreeViewItemStack.displayName = 'TreeViewItemStack';

type TreeViewItemActionsProps = {
	children: React.ReactElement;
};

function Actions({children}: TreeViewItemActionsProps) {
	const childrenArray = React.Children.toArray(
		children.type === React.Fragment ? children.props.children : children
	);

	return (
		<>
			{childrenArray.map((child, index) => {
				if (child.type.displayName === 'ClayButton') {
					return (
						<Layout.ContentCol key={index}>
							{React.cloneElement(child, {
								children: (
									<div className="c-inner" tabIndex={-2}>
										{child.props.children}
									</div>
								),
								className: classNames(
									'component-action',
									child.props.className
								),
								onClick: (
									event: React.MouseEvent<
										HTMLButtonElement,
										MouseEvent
									>
								) => {
									event.stopPropagation();

									if (child.props.onClick) {
										child.props.onClick(event);
									}
								},
								tabIndex: -1,
							})}
						</Layout.ContentCol>
					);
				} else if (child.type.displayName === 'ClayDropDownWithItems') {
					return (
						<Layout.ContentCol key={index}>
							{React.cloneElement(child, {
								trigger: React.cloneElement(
									child.props.trigger,
									{
										children: (
											<div
												className="c-inner"
												tabIndex={-2}
											>
												{
													child.props.trigger.props
														.children
												}
											</div>
										),
										className: classNames(
											'component-action',
											child.props.trigger.props.className
										),
										onClick: (
											event: React.MouseEvent<
												HTMLButtonElement,
												MouseEvent
											>
										) => {
											event.stopPropagation();

											if (
												child.props.trigger.props
													.onClick
											) {
												child.props.trigger.props.onClick(
													event
												);
											}
										},
										tabIndex: -1,
									}
								),
							})}
						</Layout.ContentCol>
					);
				}

				return child;
			})}
		</>
	);
}

Actions.displayName = 'TreeViewItemActions';
