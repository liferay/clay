/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Key, useCallback, useRef} from 'react';

/**
 * Cursors are the reference to the unique id of the items in the tree
 * referring to their parent. Cursor creates the safe address of an item
 * in the tree for immutability operations.
 */
export type Cursor = Array<React.Key>;

export type LayoutInfo = {
	children: Set<Key>;

	/**
	 * Lazy Child means that the current Node has children but they were not
	 * created because they are not visible in the DOM.
	 */
	lazyChild: boolean;
	loc: Array<number>;
	cursor: Cursor;
	parentKey?: Key;
};

export type Layout = {
	createPartialLayoutItem: (
		key: Key,
		lazy: boolean,
		loc: Array<number>,
		cursor: Cursor,
		parentKey?: Key
	) => () => void;
	layoutKeys: React.MutableRefObject<Map<Key, LayoutInfo>>;
	patchItem: (key: Key, cursor: Cursor, loc: Array<number>) => void;
};

export function useLayout(): Layout {
	const layoutKeys = useRef(new Map<Key, LayoutInfo>());

	/**
	 * The method creates the mirror of the tree in a hashmap structure with a
	 * linked list using `parentKey` and `children`. Adding data to the structure
	 * is reactive to item component rendering and disassembly. Only the rendered
	 * items are in the structure, if a component is moved, removed, or added the
	 * structure is updated automatically.
	 *
	 * useEffect(() => createPartialLayoutItem(...), []);
	 *
	 * The design of this method is to be coupled to `useEffect` which has the
	 * mount and unmount behavior, also handles lifecycle and call order,
	 * `useEffect` in nested components are called bottom-up instead of top-down
	 * as in rendering.
	 */
	const createPartialLayoutItem = useCallback(
		(
			key: Key,
			lazyChild: boolean,
			loc: Array<number>,
			cursor: Cursor,
			parentKey?: Key
		) => {
			const keyMap = layoutKeys.current.get(key);

			if (!keyMap) {
				layoutKeys.current.set(key, {
					children: new Set(),
					cursor,
					lazyChild,
					loc,
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
						lazyChild: false,
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
						cursor: cursor.slice(0, -1),
						lazyChild: false,
						loc: loc.slice(0, -1),
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
						lazyChild: children.size === 0,
					});
				}
			};
		},
		[layoutKeys]
	);

	const patchItem = useCallback(
		(key: Key, cursor: Cursor, loc: Array<number>) => {
			const keyMap = layoutKeys.current.get(key);

			if (keyMap) {
				layoutKeys.current.set(key, {
					...keyMap,
					cursor,
					loc,
				});
			}
		},
		[layoutKeys]
	);

	return {createPartialLayoutItem, layoutKeys, patchItem};
}
