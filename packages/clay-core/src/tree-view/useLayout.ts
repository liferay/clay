/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
	cursor: Cursor;
	icon: string | undefined;

	/**
	 * Lazy Child means that the current Node has children but they were not
	 * created because they are not visible in the DOM.
	 */
	lazyChild: boolean;
	loc: Array<number>;
	name: string;
	parentKey?: Key;
};

export type Layout = {
	createPartialLayoutItem: (
		key: Key,
		lazy: boolean,
		loc: Array<number>,
		name: string,
		icon: string | undefined,
		cursor: Cursor,
		parentKey?: Key
	) => () => void;
	layoutKeys: React.MutableRefObject<Map<Key, LayoutInfo>>;
	patchItem: (key: Key, cursor: Cursor, loc: Array<number>) => void;
};

export function useLayout(): Layout {
	const layoutKeysRef = useRef(new Map<Key, LayoutInfo>());

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
			name: string,
			icon: string | undefined,
			cursor: Cursor,
			parentKey?: Key
		) => {
			const keyMap = layoutKeysRef.current.get(key);

			if (!keyMap) {
				layoutKeysRef.current.set(key, {
					children: new Set(),
					cursor,
					icon,
					lazyChild,
					loc,
					name,
					parentKey,
				});
			}
			else if (keyMap.parentKey !== parentKey) {
				layoutKeysRef.current.set(key, {
					...keyMap,
					cursor,
					icon,
					lazyChild,
					loc,
					name,
					parentKey,
				});
			}

			if (parentKey) {
				const keyMap = layoutKeysRef.current.get(parentKey);

				if (keyMap) {
					layoutKeysRef.current.set(parentKey, {
						...keyMap,
						children: new Set([...keyMap.children, key]),
						lazyChild: false,
					});
				}
				else {

					// Pre-initializes the parent layout, as this is linked to
					// React rendering, the mount is used inside `useEffect`
					// this causes callbacks from the last rendering to be
					// called first than parents, starting from the bottom up.
					//
					// We just add an initial value then update the parentKey
					// when the corresponding one is called.

					layoutKeysRef.current.set(parentKey, {
						children: new Set([key]),
						cursor: cursor.slice(0, -1),
						icon: undefined,
						lazyChild: false,
						loc: loc.slice(0, -1),
						name: '',
						parentKey: undefined,
					});
				}
			}

			return function unmount() {
				layoutKeysRef.current.delete(key);

				if (parentKey && layoutKeysRef.current.has(parentKey)) {
					const keyMap = layoutKeysRef.current.get(
						parentKey
					) as LayoutInfo;

					const children = new Set(keyMap.children);

					children.delete(key);

					layoutKeysRef.current.set(parentKey, {
						...keyMap,
						children,
						lazyChild: children.size === 0,
					});
				}
			};
		},
		[layoutKeysRef]
	);

	const patchItem = useCallback(
		(key: Key, cursor: Cursor, loc: Array<number>) => {
			const keyMap = layoutKeysRef.current.get(key);

			if (keyMap) {
				layoutKeysRef.current.set(key, {
					...keyMap,
					cursor,
					loc,
				});
			}
		},
		[layoutKeysRef]
	);

	return {createPartialLayoutItem, layoutKeys: layoutKeysRef, patchItem};
}
