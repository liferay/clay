/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useInternalState} from '@clayui/shared';
import {Key, useCallback, useMemo, useRef} from 'react';

import {getKey} from '../collection';
import {ITreeProps, createImmutableTree} from './useTree';

import type {ICollectionProps} from './Collection';
import type {LayoutInfo} from './useLayout';

export interface IMultipleSelection {
	/**
	 * Property to set the initial value of `selectedKeys`.
	 */
	defaultSelectedKeys?: Set<Key>;

	/**
	 * Handler that is called when the selection changes.
	 */
	onSelectionChange?: (keys: Set<Key>) => void;

	/**
	 * The currently selected keys in the collection.
	 */
	selectedKeys?: Set<Key>;

	/**
	 * Flag to disable indeterminate state when selectionMode is multiple-recursive.
	 */
	indeterminate?: boolean;
}

type SelectionMode = 'single' | 'multiple' | 'multiple-recursive' | null;

type SelectionToggleOptions = {
	selectionMode?: SelectionMode;
	parentSelection?: boolean;
};

export interface IMultipleSelectionState {
	isIndeterminate: (key: Key) => boolean;
	replaceIndeterminateKeys: (keys: Array<Key>) => void;
	selectedKeys: Set<Key>;
	toggleSelection: (key: Key, options?: SelectionToggleOptions) => void;
}

export interface IMultipleSelectionProps<T>
	extends IMultipleSelection,
		Pick<ITreeProps<T>, 'nestedKey'>,
		Pick<ICollectionProps<T>, 'items'> {
	selectionMode?: SelectionMode;
	layoutKeys: React.MutableRefObject<Map<React.Key, LayoutInfo>>;
}

/**
 * The selection hook implementation handles the responsibility of optimizing
 * the tree selection in more complex scenarios like multiple recursive
 * selection, recursively selecting in two directions from the point where the
 * item is in the tree.
 *
 * Root
 * ├─ Item 0
 * ├─ Item 1
 * │  ├─ Item 2 <- Select this item.
 * │  │  ├─ Item 3
 * │  │  ├─ Item 4
 * │  ├─ Item 5
 *
 * Selecting the item must recursively navigate up and down from the item's
 * point in the tree to the end at each end, the selection rules are different
 * when navigating up and down.
 *
 * {
 *  'Item 1': {
 *    children: ['Item 2', 'Item 5'],
 *    parentKey: 'Root'
 *  }
 * }
 *
 * Navigation in the tree is supported by a hashmap structure with linked list
 * that avoids the operation of traversing the tree in search of all parent and
 * childs items. Navigation done this way lets you go from 1 to 1.
 *
 * Assembling the `layoutKeys` structure is also optimized to avoid traversing
 * the entire tree and blocking rendering until the operation is finished,
 * instead, the hook embodies the concept of building the structure in
 * React flow, i.e. when the item component is rendered, the record is added
 * to `layoutKeys` and and keeping the structure up to date is free because the
 * method is called on component mount and unmount. The trade-off is that we
 * don't get the complete mirror of the tree in the hashmap but only what is
 * rendered, this decreases the amount of data when there is a big tree but we
 * have problems recursively selecting to down.
 *
 * Root [0]
 * ├─ Item 0 [0, 0]
 * ├─ Item 1 [0, 1]
 * │  ├─ Item 2 [0, 1, 0]
 * │  │  ├─ Item 3 [0, 1, 0, 0]
 * │  │  ├─ Item 4 [0, 1, 0, 1]
 * │  ├─ Item 5 [0, 1, 1]
 *
 * The implementation solves this with a fallback approach of identifying if
 * the item has unrendered children and using the tree to navigate but using
 * the item path to avoid traversing the entire tree.
 */
export function useMultipleSelection<T>(
	props: IMultipleSelectionProps<T>
): IMultipleSelectionState {
	const selectionMode = props.selectionMode;

	const indeterminateKeys = useRef(new Set<Key>());

	const [selectedKeys, setSelectionKeys, isUncontrolled] = useInternalState<
		Set<Key>
	>({
		defaultName: 'defaultSelectedKeys',
		defaultValue: props.defaultSelectedKeys ?? new Set(),
		handleName: 'onSelectionChange',
		name: 'selectedKeys',
		onChange: props.onSelectionChange,
		value: props.selectedKeys,
	});

	/**
	 * We are using `useMemo` to do indeterminate state revalidation in the
	 * render cycle instead of in the `useEffect` which happens after rendering.
	 */
	useMemo(() => {
		if (props.selectionMode === 'multiple-recursive' && !isUncontrolled) {
			const indeterminates = Array.from(indeterminateKeys.current);

			indeterminateKeys.current = new Set(
				indeterminates.filter((key) => {
					const keyMap = props.layoutKeys.current.get(
						key
					) as LayoutInfo;

					const children = [...keyMap.children];

					const unselected = children.some(
						(key) => !selectedKeys.has(key)
					);

					if (unselected) {
						if (
							children.some(
								(key) =>
									selectedKeys.has(key) ||
									indeterminateKeys.current.has(key)
							)
						) {
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				})
			);
		}
	}, [selectedKeys]);

	const toggleParentSelection = useCallback(
		(
			hasIndeterminate: boolean,
			keyMap: LayoutInfo,
			selecteds: Set<Key>
		) => {
			if (!keyMap.parentKey) {
				return;
			}

			const parentKeyMap = props.layoutKeys.current.get(
				keyMap.parentKey
			) as LayoutInfo;

			// Support variable for indeterminate state during recursive flow when
			// visual indeterminate state is disabled.
			let isIndeterminate = false;

			// Root
			// ├─ Item 0
			// ├─ Item 1 <- Current recursion flow
			// │  ├─ (Indeterminate) Item 2
			// │  │  ├─ (Checked) Item 3 <- Start
			// │  │  ├─ Item 4
			//
			// As the method works recursively from the item's point in the tree
			// to up, if the item's parent was already marked as indeterminate, from
			// here we start to mark all the parents as indeterminate to avoid
			// unnecessary operations.
			if (hasIndeterminate) {
				if (props.indeterminate) {
					indeterminateKeys.current.add(keyMap.parentKey);
				}

				isIndeterminate = true;
				selecteds.delete(keyMap.parentKey);
			} else {
				const children = [...parentKeyMap.children];

				// Instead of using `every` method to check if all items are
				// selected, we look for any not selected, which means we don't have
				// all the items selected and we don't always need to go through the
				// entire array.
				const unselected = children.some((key) => !selecteds.has(key));

				if (unselected) {
					// An item can only be indeterminate when there is at least
					// one selected or indeterminate item in its tree. We don't need
					// to sweep the tree because we have the recursive effect.
					if (
						children.some(
							(key) =>
								selecteds.has(key) ||
								indeterminateKeys.current.has(key)
						)
					) {
						if (props.indeterminate) {
							indeterminateKeys.current.add(keyMap.parentKey);
						}

						isIndeterminate = true;
					} else {
						indeterminateKeys.current.delete(keyMap.parentKey);
						isIndeterminate = false;
					}

					selecteds.delete(keyMap.parentKey);
				} else {
					indeterminateKeys.current.delete(keyMap.parentKey);
					isIndeterminate = false;
					selecteds.add(keyMap.parentKey);
				}
			}

			toggleParentSelection(isIndeterminate, parentKeyMap, selecteds);
		},
		[props.layoutKeys, indeterminateKeys, props.indeterminate]
	);

	const toggleLazyChildrenSelection = useCallback(
		(
			item: Record<string, any>,
			currentKey: Key,
			selecteds: Set<Key>,
			select: boolean
		) => {
			const children: Array<Record<string, any>> = item[props.nestedKey!];

			if (!children) {
				return;
			}

			children.forEach((item, index) => {
				// TODO: The `key` property of the component that the developer
				// can set is not being considered.
				const key = getKey(index, item.id, currentKey);

				if (select) {
					selecteds.add(key);
				} else {
					selecteds.delete(key);
				}

				toggleLazyChildrenSelection(item, key, selecteds, select);
			});
		},
		[props.nestedKey]
	);

	/**
	 * The recursive selection of children of an item is done using the
	 * `layoutKeys` structure which is the representation of the items rendered
	 * in the DOM, when the child is not rendered in the DOM the method uses the
	 * fallback of the tree to continue the recursion from where it left off.
	 */
	const toggleChildrenSelection = useCallback(
		(
			keyMap: LayoutInfo,
			currentKey: Key,
			selecteds: Set<Key>,
			select: boolean
		) => {
			if (keyMap.lazyChild) {
				const tree = createImmutableTree(
					props.items ?? [],
					props.nestedKey!
				);

				const node = tree.nodeByPath(keyMap.loc);

				return toggleLazyChildrenSelection(
					node.item,
					currentKey,
					selecteds,
					select
				);
			}

			if (!keyMap.children.size) {
				return;
			}

			keyMap.children.forEach((key) => {
				if (select) {
					selecteds.add(key);
				} else {
					selecteds.delete(key);
				}

				const childrenKeyMap = props.layoutKeys.current.get(
					key
				) as LayoutInfo;

				toggleChildrenSelection(childrenKeyMap, key, selecteds, select);
			});
		},
		[
			toggleLazyChildrenSelection,
			props.layoutKeys,
			props.items,
			props.nestedKey,
		]
	);

	const toggleSelection = useCallback(
		(key: Key, options?: SelectionToggleOptions) => {
			const {parentSelection = true, selectionMode: mode} = options ?? {};

			switch (mode ?? selectionMode) {
				case 'multiple': {
					const selecteds = new Set(selectedKeys);

					if (selecteds.has(key)) {
						selecteds.delete(key);
					} else {
						selecteds.add(key);
					}

					setSelectionKeys(selecteds);
					break;
				}
				case 'multiple-recursive': {
					const selecteds = new Set(selectedKeys);

					const keyMap = props.layoutKeys.current.get(
						key
					) as LayoutInfo;

					if (selecteds.has(key)) {
						selecteds.delete(key);
					} else if (!indeterminateKeys.current.has(key)) {
						selecteds.add(key);
					}

					// Resets the indeterminate state because its selected state
					// will change.
					indeterminateKeys.current.delete(key);

					toggleChildrenSelection(
						keyMap,
						key,
						selecteds,
						selecteds.has(key)
					);

					if (parentSelection) {
						toggleParentSelection(false, keyMap, selecteds);
					}

					setSelectionKeys(selecteds);
					break;
				}
				default: {
					if (selectedKeys.has(key)) {
						setSelectionKeys(new Set<Key>());
					} else {
						setSelectionKeys(new Set<Key>([key]));
					}
					break;
				}
			}
		},
		[
			props.layoutKeys,
			indeterminateKeys,
			selectedKeys,
			selectionMode,
			toggleChildrenSelection,
			toggleParentSelection,
		]
	);

	const isIndeterminate = useCallback(
		(key: Key) => indeterminateKeys.current.has(key),
		[indeterminateKeys]
	);

	const replaceIndeterminateKeys = useCallback(
		(keys: Array<Key>) => {
			indeterminateKeys.current = new Set(keys);
		},
		[indeterminateKeys]
	);

	return {
		isIndeterminate,
		replaceIndeterminateKeys,
		selectedKeys,
		toggleSelection,
	};
}
