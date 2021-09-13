/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useInternalState} from '@clayui/shared';
import {Key, useCallback, useRef} from 'react';

export interface IMultipleSelection {
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
	createPartialLayoutItem: (key: Key, parentKey?: Key) => () => void;
	isIntermediate: (key: Key) => boolean;
	selectedKeys: Set<Key>;
	toggleSelection: (key: Key) => void;
}

export interface IMultipleSelectionProps extends IMultipleSelection {}

type LayoutInfo = {
	children: Set<Key>;
	intermediate: boolean;
	parentKey?: Key;
};

export function useMultipleSelection(
	props: IMultipleSelectionProps
): IMultipleSelectionState {
	const layoutKeys = useRef(new Map<Key, LayoutInfo>());

	const [selectedKeys, setSelectionKeys] = useInternalState<Set<Key>>({
		initialValue: props.selectedKeys ?? new Set(),
		onChange: props.onSelectionChange,
		value: props.selectedKeys,
	});

	const toggleParentSelection = (keyMap: LayoutInfo, selecteds: Set<Key>) => {
		if (!keyMap.parentKey) {
			return;
		}

		const parentKeyMap = layoutKeys.current.get(
			keyMap.parentKey
		) as LayoutInfo;

		// Instead of doing the whole operation again below, we know that the
		// element below already has intermediate status and we don't need to
		// check everything again.
		if (keyMap.intermediate) {
			parentKeyMap.intermediate = true;
			selecteds.delete(keyMap.parentKey);
		} else {
			const children = [...parentKeyMap.children];

			// Instead of using every to check if all elements are selected, we
			// look for any not selected, which means we don't have all the
			// elements selected and we don't always need to go through the
			// entire array.
			const unselected = children.some((key) => !selecteds.has(key));

			if (unselected) {
				// An element can only be intermediate when there is at least
				// one element selected in its tree. We don't need to sweep
				// the tree because we have the recursive effect.
				if (children.some((key) => selecteds.has(key))) {
					parentKeyMap.intermediate = true;
				} else {
					parentKeyMap.intermediate = false;
				}

				selecteds.delete(keyMap.parentKey);
			} else {
				parentKeyMap.intermediate = false;
				selecteds.add(keyMap.parentKey);
			}
		}

		toggleParentSelection(parentKeyMap, selecteds);
	};

	const toggleChildrenSelection = (
		keyMap: LayoutInfo,
		selecteds: Set<Key>,
		select: boolean
	) => {
		if (!keyMap.children.size) {
			return;
		}

		keyMap.children.forEach((key) => {
			if (select) {
				selecteds.add(key);
			} else {
				selecteds.delete(key);
			}

			const childrenKeyMap = layoutKeys.current.get(key) as LayoutInfo;

			toggleChildrenSelection(childrenKeyMap, selecteds, select);
		});
	};

	const toggleSelection = (key: Key) => {
		const keyMap = layoutKeys.current.get(key) as LayoutInfo;
		const selecteds = new Set(selectedKeys);

		// Resets the intermediate state because the element will be selected
		// or otherwise the state must be false because it will be unchecking
		// all its children.
		keyMap.intermediate = false;

		if (selecteds.has(key)) {
			selecteds.delete(key);
		} else {
			selecteds.add(key);
		}

		toggleChildrenSelection(keyMap, selecteds, selecteds.has(key));
		toggleParentSelection(keyMap, selecteds);

		setSelectionKeys(selecteds);
	};

	// The Mount will start building the tree in a flat structure using the
	// component's rendering stream to avoid traversing the tree in a separate
	// stream. This means it is reactive to rendering, if any component of the
	// structure is removed it will update the layout without going traverse
	// the structure.
	const createPartialLayoutItem = useCallback(
		(key: Key, parentKey?: Key) => {
			const keyMap = layoutKeys.current.get(key);

			if (!keyMap) {
				layoutKeys.current.set(key, {
					children: new Set(),
					intermediate: false,
					parentKey,
				});
			} else if (keyMap.parentKey !== parentKey) {
				layoutKeys.current.set(key, {
					...keyMap,
					parentKey,
				});
			}

			if (parentKey) {
				const keyMap = layoutKeys.current.get(parentKey);

				if (keyMap) {
					layoutKeys.current.set(parentKey, {
						...keyMap,
						children: new Set([...keyMap.children, key]),
					});
				} else {
					// Pre-initializes the parent layout, as this is linked to
					// React rendering, the mount is used inside `useEffect`
					// this causes callbacks from the last rendering to be
					// called first than parents, starting from the bottom up.
					//
					// We just add an initial value then update the parentKey
					// when the corresponding one is called.
					layoutKeys.current.set(parentKey, {
						children: new Set([key]),
						intermediate: false,
						parentKey: undefined,
					});
				}
			}

			return function unmount() {
				layoutKeys.current.delete(key);

				if (parentKey && layoutKeys.current.has(parentKey)) {
					const keyMap = layoutKeys.current.get(
						parentKey
					) as LayoutInfo;

					const children = new Set(keyMap.children);

					children.delete(key);

					layoutKeys.current.set(parentKey, {
						...keyMap,
						children,
					});
				}
			};
		},
		[layoutKeys]
	);

	const isIntermediate = (key: Key) => {
		if (selectedKeys.has(key)) {
			return false;
		}

		const keyMap = layoutKeys.current.get(key);

		if (!keyMap) {
			return false;
		}

		return keyMap.intermediate;
	};

	return {
		createPartialLayoutItem,
		isIntermediate,
		selectedKeys,
		toggleSelection,
	};
}
