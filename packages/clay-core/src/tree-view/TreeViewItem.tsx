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

import {removeItemInternalProps} from './Collection';
import {Icons, useAPI, useTreeViewContext} from './context';
import {useItem} from './useItem';

export interface ITreeViewItemProps
	extends Omit<React.HTMLAttributes<HTMLLIElement>, 'children'> {
	/**
	 * Flag to set the node to the active state.
	 */
	active?: boolean;

	/**
	 * Property for rendering actions on a Node.
	 */
	actions?: React.ReactElement;

	/**
	 * Item content.
	 */
	children: React.ReactNode;

	/**
	 * Flag indicating that the component is disabled.
	 */
	disabled?: boolean;

	/**
	 * @ignore
	 */
	isDragging?: boolean;

	/**
	 * Flag to remove the visual of the hover over the item.
	 */
	noHover?: boolean;

	/**
	 * @ignore
	 */
	overPosition?: string;

	/**
	 * @ignore
	 */
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
		expandDoubleClick,
		expandedKeys,
		insert,
		nestedKey,
		onLoadMore,
		onRenameItem,
		onSelect,
		open,
		remove,
		replace,
		rootRef,
		selection,
		selectionMode,
		toggle,
	} = useTreeViewContext();

	const item = useItem();

	const [focus, setFocus] = useState(false);

	const [loading, setLoading] = useState(false);

	const api = useAPI();

	const [left, right] = React.Children.toArray(children);

	const group =
		// @ts-ignore
		right?.type?.displayName === 'ClayTreeViewGroup' ? right : null;

	if (!group && nestedKey && item[nestedKey] && childrenRoot.current) {
		return React.cloneElement(
			childrenRoot.current(removeItemInternalProps(item), ...api),
			{
				actions,
				isDragging,
				overPosition,
				overTarget,
				ref,
			}
		);
	}

	const hasItemStack =
		typeof left !== 'string' && group && React.isValidElement(left);

	const itemStackProps = hasItemStack
		? (left as React.ReactElement).props
		: {};

	// The ownership of TreeView properties changes according to the component
	// declaration that helps in inferring the visual intuition of which
	// component is Node.
	const propsOwnership = group ? 'item' : 'node';

	const itemProps = propsOwnership === 'item' ? otherProps : {};
	const nodeProps = propsOwnership === 'node' ? otherProps : {};

	return (
		<SpacingContext.Provider value={spacing + 24}>
			<li
				{...itemProps}
				className={classNames('treeview-item', itemProps.className, {
					'treeview-item-dragging': isDragging,
				})}
				role="none"
			>
				<div
					{...itemStackProps}
					{...nodeProps}
					aria-expanded={
						group ? expandedKeys.has(item.key) : undefined
					}
					className={classNames(
						'treeview-link',
						itemStackProps.className,
						nodeProps.className,
						{
							active:
								(selectionMode === 'single' &&
									selection.selectedKeys.has(item.key)) ||
								itemStackProps.active ||
								nodeProps.active,
							collapsed: group && expandedKeys.has(item.key),
							disabled:
								itemStackProps.disabled || nodeProps.disabled,
							focus,
							'treeview-dropping-bottom':
								overTarget && overPosition === 'bottom',
							'treeview-dropping-middle':
								overTarget && overPosition === 'middle',
							'treeview-dropping-top':
								overTarget && overPosition === 'top',
							'treeview-no-hover':
								itemStackProps.noHover || nodeProps.noHover,
						}
					)}
					disabled={itemStackProps.disabled || nodeProps.disabled}
					onBlur={({currentTarget, relatedTarget}) => {
						if (
							actions &&
							relatedTarget &&
							!currentTarget.contains(relatedTarget as Node)
						) {
							setFocus(false);
						}
					}}
					onClick={(event) => {
						if (itemStackProps.disabled || nodeProps.disabled) {
							return;
						}

						if (hasItemStack && itemStackProps.onClick) {
							itemStackProps.onClick(event);
						}

						if (nodeProps.onClick) {
							(
								nodeProps.onClick as unknown as (
									event: React.MouseEvent<
										HTMLDivElement,
										MouseEvent
									>
								) => void
							)(event);
						}

						if (event.defaultPrevented) {
							return;
						}

						// event.detail it has no type but is an existing property of the
						// element to know how many clicks were triggered.
						// https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
						// @ts-ignore
						if (expandDoubleClick && event.detail !== 2) {
							return;
						}

						if (selectionMode === 'single') {
							selection.toggleSelection(item.key);

							if (onSelect) {
								onSelect(removeItemInternalProps(item));
							}
						}

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
						if (itemStackProps.disabled || nodeProps.disabled) {
							return;
						}

						if (hasItemStack && itemStackProps.onKeyDown) {
							itemStackProps.onKeyDown(event);
						}

						if (nodeProps.onKeyDown) {
							(
								nodeProps.onKeyDown as unknown as (
									event: React.KeyboardEvent<HTMLDivElement>
								) => void
							)(event);
						}

						if (event.defaultPrevented) {
							return;
						}

						// We call `preventDefault` after checking if it was ignored
						// because the behavior is different when the developer sets
						// `onKeyDown` it can ignore the default behavior of the browser
						// and the default behavior of the TreeView when this is not done
						// by default we ignore the default browser behavior by default.
						event.preventDefault();

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
										'.treeview-link:not(.disabled)'
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

							if (onSelect) {
								onSelect(removeItemInternalProps(item));
							}
						}
					}}
					ref={ref}
					role="treeitem"
					style={{
						...(itemStackProps?.style ?? {}),
						...(nodeProps?.style ?? {}),
						paddingLeft: `${
							spacing + (group || onLoadMore ? 0 : 24)
						}px`,
					}}
					tabIndex={
						itemStackProps.disabled || nodeProps.disabled ? -1 : 0
					}
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
						{typeof left === 'string' && !right ? (
							<Layout.ContentRow>
								<Layout.ContentCol expand>
									<div className="component-text">{left}</div>
								</Layout.ContentCol>

								{actions && <Actions>{actions}</Actions>}
							</Layout.ContentRow>
						) : group ? (
							React.cloneElement(left as React.ReactElement, {
								actions,
								onClick: undefined,
							})
						) : (
							<TreeViewItemStack
								actions={actions}
								disabled={nodeProps.disabled}
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
	/**
	 * Flag to set the node to the active state.
	 */
	active?: boolean;

	/**
	 * @ignore
	 */
	actions?: React.ReactElement;

	/**
	 * Item content.
	 */
	children: React.ReactNode;

	/**
	 * Flag indicating that the component is disabled.
	 */
	disabled?: boolean;

	/**
	 * Flag indicating if Expander is disabled, by default it has the
	 * value of the disabled prop.
	 */
	expanderDisabled?: boolean;

	/**
	 * @ignore
	 */
	expandable?: boolean;

	/**
	 * Flag to remove the visual of the hover over the item.
	 */
	noHover?: boolean;

	/**
	 * @ignore
	 */
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
	disabled,
	expandable = true,
	expanderDisabled,
	loading = false,
	...otherProps
}: ITreeViewItemStackProps) {
	const {
		childrenRoot,
		expandOnCheck,
		expandedKeys,
		expanderClassName,
		expanderIcons,
		nestedKey,
		onSelect,
		open,
		selection,
		toggle,
	} = useTreeViewContext();

	const item = useItem();

	const childrenCount = React.Children.count(children);

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
						disabled={
							typeof expanderDisabled === 'undefined'
								? disabled
								: expanderDisabled
						}
						displayType={null}
						monospaced
						onClick={(event) => {
							event.stopPropagation();

							toggle(item.key);
						}}
						tabIndex={-1}
					>
						<span className="c-inner" tabIndex={-2}>
							{loading ? (
								<ClayLoadingIndicator small />
							) : (
								(hasChildren || !childrenRoot.current) && (
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

				if (
					typeof child === 'string' ||
					typeof child === 'number' ||
					// @ts-ignore
					child?.type.displayName === 'Text'
				) {
					content = <div className="component-text">{child}</div>;

					// @ts-ignore
				} else if (child?.type.displayName === 'ClayIcon') {
					content = <div className="component-icon">{child}</div>;

					// @ts-ignore
				} else if (child?.type.displayName === 'ClayCheckbox') {
					content = React.cloneElement(child as React.ReactElement, {
						checked: selection.selectedKeys.has(item.key),
						disabled: loading || disabled,
						indeterminate: selection.isIntermediate(item.key),
						onChange: (
							event: React.ChangeEvent<HTMLInputElement>
						) => {
							const {onChange} = (child as React.ReactElement)
								.props;

							if (onChange) {
								onChange(event);
							}

							if (event.defaultPrevented) {
								return;
							}

							selection.toggleSelection(item.key);

							if (onSelect) {
								onSelect(removeItemInternalProps(item));
							}

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
					<Layout.ContentCol expand={index === childrenCount - 1}>
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
									'component-action quick-action-item',
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
											'component-action quick-action-item',
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
