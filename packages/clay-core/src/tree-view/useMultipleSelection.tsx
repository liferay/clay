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
}

export interface IMultipleSelectionState {
	isIntermediate: (key: Key) => boolean;
	replaceIntermediateKeys: (keys: Array<Key>) => void;
	selectedKeys: Set<Key>;
	toggleSelection: (key: Key) => void;
}

export interface IMultipleSelectionProps<T>
	extends IMultipleSelection,
		Pick<ITreeProps<T>, 'nestedKey'>,
		Pick<ICollectionProps<T>, 'items'> {
	selectionMode?: 'single' | 'multiple' | 'multiple-recursive' | null;
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

	const intermediateKeys = useRef(new Set<Key>());

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
	 * We are using `useMemo` to do intermediate state revalidation in the
	 * render cycle instead of in the `useEffect` which happens after rendering.
	 */
	useMemo(() => {
		if (props.selectionMode === 'multiple-recursive' && !isUncontrolled) {
			const intermediates = Array.from(intermediateKeys.current);

			intermediateKeys.current = new Set(
				intermediates.filter((key) => {
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
									intermediateKeys.current.has(key)
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
		(hasIntermediate: boolean, keyMap: LayoutInfo, selecteds: Set<Key>) => {
			if (!keyMap.parentKey) {
				return;
			}

			const parentKeyMap = props.layoutKeys.current.get(
				keyMap.parentKey
			) as LayoutInfo;

			// Root
			// ├─ Item 0
			// ├─ Item 1 <- Current recursion flow
			// │  ├─ (Intermediate) Item 2
			// │  │  ├─ (Checked) Item 3 <- Start
			// │  │  ├─ Item 4
			//
			// As the method works recursively from the item's point in the tree
			// to up, if the item's parent was already marked as intermediate, from
			// here we start to mark all the parents as intermediate to avoid
			// unnecessary operations.
			if (hasIntermediate) {
				intermediateKeys.current.add(keyMap.parentKey);
				selecteds.delete(keyMap.parentKey);
			} else {
				const children = [...parentKeyMap.children];

				// Instead of using `every` method to check if all items are
				// selected, we look for any not selected, which means we don't have
				// all the items selected and we don't always need to go through the
				// entire array.
				const unselected = children.some((key) => !selecteds.has(key));

				if (unselected) {
					// An item can only be intermediate when there is at least
					// one selected or intermediate item in its tree. We don't need
					// to sweep the tree because we have the recursive effect.
					if (
						children.some(
							(key) =>
								selecteds.has(key) ||
								intermediateKeys.current.has(key)
						)
					) {
						intermediateKeys.current.add(keyMap.parentKey);
					} else {
						intermediateKeys.current.delete(keyMap.parentKey);
					}

					selecteds.delete(keyMap.parentKey);
				} else {
					intermediateKeys.current.delete(keyMap.parentKey);
					selecteds.add(keyMap.parentKey);
				}
			}

			toggleParentSelection(
				intermediateKeys.current.has(keyMap.parentKey),
				parentKeyMap,
				selecteds
			);
		},
		[props.layoutKeys, intermediateKeys]
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
		(key: Key) => {
			switch (selectionMode) {
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
					} else if (!intermediateKeys.current.has(key)) {
						selecteds.add(key);
					}

					// Resets the intermediate state because its selected state
					// will change.
					intermediateKeys.current.delete(key);

					toggleChildrenSelection(
						keyMap,
						key,
						selecteds,
						selecteds.has(key)
					);

					toggleParentSelection(false, keyMap, selecteds);

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
			intermediateKeys,
			selectedKeys,
			selectionMode,
			toggleChildrenSelection,
			toggleParentSelection,
		]
	);

	const isIntermediate = useCallback(
		(key: Key) => intermediateKeys.current.has(key),
		[intermediateKeys]
	);

	const replaceIntermediateKeys = useCallback(
		(keys: Array<Key>) => {
			intermediateKeys.current = new Set(keys);
		},
		[intermediateKeys]
	);

	return {
		isIntermediate,
		replaceIntermediateKeys,
		selectedKeys,
		toggleSelection,
	};
}
