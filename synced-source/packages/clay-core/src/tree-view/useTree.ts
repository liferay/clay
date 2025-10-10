/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useControlledState} from '@clayui/shared';
import React, {useCallback, useEffect, useRef} from 'react';

import {Layout, useLayout} from './useLayout';
import {
	IMultipleSelection,
	IMultipleSelectionState,
	useMultipleSelection,
} from './useMultipleSelection';

import type {Key} from 'react';

import type {ICollectionProps} from './Collection';
import type {Position} from './DragAndDrop';
import type {Cursor} from './useLayout';

export interface IExpandable {
	/**
	 * Property to set the initial value of `expandedKeys`.
	 */
	defaultExpandedKeys?: Set<Key>;

	/**
	 * The currently expanded keys in the collection.
	 */
	expandedKeys?: Set<Key>;

	/**
	 * A callback that is called when items are expanded or collapsed.
	 */
	onExpandedChange?: (keys: Set<Key>) => void;

	/**
	 * Flag to indicate the hydration phase to expand the selected items. When
	 * `selectionMode` is `multiple-recursive` it also revalidates the
	 * indeterminate state of the items.
	 *
	 * It supports two rendering phases, render-first and hydrate after or
	 * hydrate before rendering, both have trade-offs that depend on the number
	 * of items being rendered.
	 *
	 * Both cases traverse the tree looking for the selected items to know which
	 * items should be expanded and which should be in the indeterminate state,
	 * this is done only the first time the component is rendered and if it has
	 * selected items. This operation can degrade the performance of the
	 * component depending on the number of items, choose the best option for
	 * your use case.
	 *
	 * - `render-first` will render first and then hydrate. It doesn't block the
	 * initial rendering but after rendering it is possible to see the items
	 * being expanded.
	 *
	 * - `hydrate-first` will hydrate first and then render. This blocks
	 * rendering first until it traverses the tree, when rendered the items
	 * are already expanded.
	 */
	selectionHydrationMode?: 'render-first' | 'hydrate-first';
}

export interface ITreeProps<T extends Record<string, any>>
	extends IExpandable,
		IMultipleSelection,
		Pick<ICollectionProps<T>, 'items' | 'defaultItems'> {
	/**
	 * Flag to indicate which key name matches the nested rendering of the tree.
	 */
	nestedKey?: string;

	/**
	 * A callback which is called when the property of items is changed.
	 */
	onItemsChange?: (items: ICollectionProps<T>['items']) => void;
	selectionMode?: 'single' | 'multiple' | 'multiple-recursive' | null;
}

export interface ITreeState<T extends Record<string, any>>
	extends Pick<ICollectionProps<T>, 'items'> {
	close: (key: Key) => boolean;
	cursors: React.MutableRefObject<Map<React.Key, unknown>>;
	expandedKeys: Set<Key>;
	insert: (path: Array<number>, value: unknown) => void;
	layout: Layout;
	open: (key: Key) => boolean;
	remove: (path: Array<number>) => void;
	reorder: (from: Cursor, path: Cursor, op: Position) => void;
	replace: (path: Array<number>, item: T) => void;
	selection: IMultipleSelectionState;
	toggle: (key: Key) => void;
}

export function useTree<T extends Record<string, any>>(
	props: ITreeProps<T>
): ITreeState<T> {
	const [items, setItems] = useControlledState({
		defaultName: 'defaultItems',
		defaultValue: props.defaultItems ?? [],
		handleName: 'onItemsChange',
		name: 'items',
		onChange: props.onItemsChange,
		value: props.items,
	});

	const cursors = useRef<Map<React.Key, unknown>>(new Map());

	const layout = useLayout();

	const selection = useMultipleSelection<T>({
		defaultSelectedKeys: props.defaultSelectedKeys,
		indeterminate: props.indeterminate,
		items,
		layoutKeys: layout.layoutKeys,
		nestedKey: props.nestedKey,
		onSelectionChange: props.onSelectionChange,
		selectedKeys: props.selectedKeys,
		selectionMode: props.selectionMode,
	});

	const [expandedKeys, setExpandedKeys] = useControlledState<Set<Key>>({
		defaultName: 'defaultExpandedKeys',
		defaultValue: () => {
			const {
				defaultExpandedKeys,
				indeterminate,
				nestedKey,
				selectionHydrationMode,
				selectionMode,
			} = props;

			if (
				selectionHydrationMode === 'hydrate-first' &&
				items &&
				selection.selectedKeys.size
			) {
				const expand = expandSelectedItems(
					items,
					nestedKey as string,

					// TODO try to make it configurable or be able to infer the name of
					// the property from the key passed in the React rendering.
					'id',
					selection.selectedKeys
				);

				if (selectionMode === 'multiple-recursive' && indeterminate) {
					selection.replaceIndeterminateKeys(
						expand.filter((key) => !selection.selectedKeys.has(key))
					);
				}

				return new Set(
					defaultExpandedKeys
						? Array.from(defaultExpandedKeys).concat(expand)
						: expand
				);
			}

			return defaultExpandedKeys ?? new Set();
		},
		handleName: 'onExpandedChange',
		name: 'expandedKeys',
		onChange: props.onExpandedChange,
		value: props.expandedKeys,
	});

	useEffect(() => {
		const {
			defaultExpandedKeys,
			indeterminate,
			nestedKey,
			selectionHydrationMode,
			selectionMode,
		} = props;

		if (
			selectionHydrationMode === 'render-first' &&
			items &&
			selection.selectedKeys.size
		) {
			const expand = expandSelectedItems(
				items,
				nestedKey as string,

				// TODO try to make it configurable or be able to infer the name of
				// the property from the key passed in the React rendering.
				'id',
				selection.selectedKeys
			);

			if (selectionMode === 'multiple-recursive' && indeterminate) {
				selection.replaceIndeterminateKeys(
					expand.filter((key) => !selection.selectedKeys.has(key))
				);
			}

			setExpandedKeys(
				new Set(
					defaultExpandedKeys
						? Array.from(defaultExpandedKeys).concat(expand)
						: expand
				)
			);
		}
	}, []);

	const close = useCallback(
		(key: Key) => {
			const expanded = new Set(expandedKeys);

			if (expanded.has(key)) {
				expanded.delete(key);

				setExpandedKeys(expanded);

				return true;
			}

			return false;
		},
		[expandedKeys]
	);

	const remove = useCallback(
		(path: Array<number>) => {
			const tree = createImmutableTree(items, props.nestedKey!);

			tree.produce({op: 'remove', path});

			setItems(tree.applyPatches());
		},
		[items]
	);

	const replace = useCallback(
		(path: Array<number>, item: any) => {
			const tree = createImmutableTree(items, props.nestedKey!);

			tree.produce({item, op: 'replace', path});

			setItems(tree.applyPatches());
		},
		[items]
	);

	const reorder = useCallback(
		(from: Cursor, path: Cursor, direction: Position) => {
			const tree = createImmutableTree(items, props.nestedKey!);

			tree.produce({direction, from, op: 'move', path});

			setItems(tree.applyPatches());
		},
		[items]
	);

	const insert = useCallback(
		(path: Array<number>, value: unknown) => {
			const tree = createImmutableTree(items, props.nestedKey!);

			tree.produce({op: 'add', path, value});

			setItems(tree.applyPatches());
		},
		[items]
	);

	const toggle = useCallback(
		(key: Key) => {
			const expanded = new Set(expandedKeys);

			if (expanded.has(key)) {
				expanded.delete(key);
			} else {
				expanded.add(key);
			}

			setExpandedKeys(expanded);
		},
		[expandedKeys]
	);

	const open = useCallback(
		(key: Key) => {
			const expanded = new Set(expandedKeys);

			if (!expanded.has(key)) {
				expanded.add(key);

				setExpandedKeys(expanded);

				return true;
			}

			return false;
		},
		[expandedKeys]
	);

	return {
		close,
		cursors,
		expandedKeys,
		insert,
		items,
		layout,
		open,
		remove,
		reorder,
		replace,
		selection,
		toggle,
	};
}

function expandSelectedItems<T extends Array<Record<string, any>>>(
	items: T,
	nestedKey: string,
	key: string,
	selectedKeys: Set<Key>
) {
	const expand: Array<React.Key> = [];

	let currentSelected = 0;

	visit(
		nestedKey as string,
		key,
		(item: Record<string, any>, path: Array<React.Key>) => {
			if (selectedKeys.has(item[key])) {
				currentSelected++;

				expand.push(...path);
			}

			return selectedKeys.size === currentSelected;
		}
	).iter(items);

	return expand;
}

function visit<T extends Array<Record<string, any>>>(
	nestedKey: string,
	key: string,
	callback: Function
) {
	let hasContinue = false;

	function iter(items: T, currentPath: Array<React.Key> = []) {
		if (hasContinue) {
			return;
		}

		const queue = [...items] as T;

		while (queue.length) {
			const item = queue.shift() as Record<string, any>;

			const path = currentPath.concat(item[key]);

			hasContinue = callback(item, path);

			if (hasContinue) {
				break;
			}

			if (item[nestedKey]) {
				iter(item[nestedKey], path);
			}
		}
	}

	return {iter};
}

// Operation of `move` value to the same document structure, removing from
// `from` and then adding to `path`.
// RFC 6902 (JSON Patch) 4.4
type PatchMove = {
	op: 'move';
	from: Cursor;
	path: Cursor;
	direction: Position;
};

// Operation of `add` value to the document structure.
// RFC 6902 (JSON Patch) 4.1
type PatchAdd = {
	op: 'add';
	path: Array<number>;
	value: unknown;
};

// Operation of `remove` value to the document structure.
// RFC 6902 (JSON Patch) 4.2
type PatchRemove = {
	op: 'remove';
	path: Array<number>;
};

// Operation of `replace` value to the document structure.
// RFC 6902 (JSON Patch) 4.3
type PatchReplace = {
	item: any;
	op: 'replace';
	path: Array<number>;
};

// Patch refers to the implementation of RFC 6902 operations (JSON Patch)
// https://datatracker.ietf.org/doc/html/rfc6902, we just borrow the document
// structure to make partial updates to a JSON document.
// Implementation Detail https://github.com/liferay/clay/pull/4254.
type Patch = PatchMove | PatchAdd | PatchRemove | PatchReplace;

export function createImmutableTree<T extends Array<Record<string, any>>>(
	initialTree: T,
	nestedKey: string
) {
	const patches: Array<Patch> = [];

	let immutableTree = [...initialTree] as T;

	function pointer(tree: T, index: number, item: any) {
		return [...tree.slice(0, index), item, ...tree.slice(index + 1)] as T;
	}

	function nodeByCursor(cursor: Cursor) {
		const queue = [...cursor];

		const rootId = queue.shift() as React.Key;

		let parent = null;
		let id = rootId;
		let index = immutableTree.findIndex((item) => item['_key'] === id);
		let item = {...immutableTree[index]};

		immutableTree = pointer(immutableTree, index, item);

		while (queue.length) {
			id = queue.shift() as React.Key;

			if (Array.isArray(item[nestedKey]) && item[nestedKey].length) {
				index = item[nestedKey].findIndex(
					(item: any) => item['_key'] === id
				);

				// The Index may still not exist after it's fixed because the
				// index is to move the item below the last item.
				if (item[nestedKey][index]) {
					parent = item;
					item = {...item[nestedKey][index]};

					parent[nestedKey] = pointer(parent[nestedKey], index, item);

					continue;
				}
			}

			if (!item[nestedKey]) {
				item[nestedKey] = [];
			}

			parent = item;
		}

		return {
			index,
			item,
			parent,
		};
	}

	function nodeByPath(path: Array<number>) {
		const queue = [...path];

		const rootIndex = queue.shift() as number;

		let item = {...immutableTree[rootIndex]};
		let parent = null;
		let index = rootIndex;

		immutableTree = pointer(immutableTree, index, item);

		while (queue.length) {
			index = queue.shift() as number;

			if (Array.isArray(item[nestedKey]) && item[nestedKey].length) {
				// This fixes the index when there is a case to move an item
				// that can be at the same level of the hierarchy inside the
				// other item at the same level, this causes the array size to
				// change and the index value to become stale.
				//
				// 1. Item A
				//   1. Item B
				//   2. Item C
				//   3. Item D
				//
				// Op:
				// from=[1, 1] path=[1, 3]
				//
				// 1. Item A
				//   ~1. Item B~ <- Remove item to move
				//   1. Item C
				//   2. Item D
				if (index > item[nestedKey].length - 1) {
					index -= 1;
				}

				// The Index may still not exist after it's fixed because the
				// index is to move the item below the last item.
				if (item[nestedKey][index]) {
					parent = item;
					item = {...item[nestedKey][index]};

					parent[nestedKey] = pointer(parent[nestedKey], index, item);

					continue;
				}
			}

			if (!item[nestedKey]) {
				item[nestedKey] = [];
			}

			parent = item;
		}

		return {
			index,
			item,
			parent,
		};
	}

	function applyPatches(): T {
		patches.forEach((patch) => {
			switch (patch.op) {
				case 'add': {
					const {path, value} = patch;

					const node = nodeByPath(path);

					if (node.parent) {
						if (node.parent[nestedKey]) {
							node.parent[nestedKey] = [
								...node.parent[nestedKey],
								...(value as Array<unknown>),
							];
						} else {
							node.parent[nestedKey] = value;
						}
					}

					break;
				}
				// Applies the operation on the tree, the move is functionally
				// identical to a "remove" operation on the `from` location and
				// immediately followed by the "add" operation at the target
				// location with the value that was removed.
				case 'move': {
					const {direction, from, path} = patch;

					const nodeToRemove = nodeByCursor(from);

					if (nodeToRemove.parent) {
						nodeToRemove.parent[nestedKey] = nodeToRemove.parent[
							nestedKey
						].filter(
							(item: any) =>
								item['_key'] !== nodeToRemove.item['_key']
						);
					} else {
						immutableTree = immutableTree.filter(
							(item: any) =>
								item['_key'] !== nodeToRemove.item['_key']
						) as T;
					}

					const pathToAdd = nodeByCursor(path);

					let index = pathToAdd.index;

					if (direction === 'bottom') {
						index += 1;
					} else if (direction === 'middle') {
						index = 0;
						pathToAdd.parent = pathToAdd.item;

						if (!pathToAdd.parent[nestedKey]) {
							pathToAdd.parent[nestedKey] = [];
						}
					}

					if (pathToAdd.parent) {
						pathToAdd.parent[nestedKey] = [
							...pathToAdd.parent[nestedKey].slice(0, index),
							nodeToRemove.item,
							...pathToAdd.parent[nestedKey].slice(index),
						];
					} else {
						immutableTree = [
							...immutableTree.slice(0, index),
							nodeToRemove.item,
							...immutableTree.slice(index),
						] as T;
					}

					break;
				}

				case 'remove': {
					const {path} = patch;

					const nodeToRemove = nodeByPath(path);

					if (nodeToRemove.parent) {
						nodeToRemove.parent[nestedKey] = nodeToRemove.parent[
							nestedKey
						].filter(
							(_item: any, index: number) =>
								index !== nodeToRemove.index
						);
					} else {
						immutableTree = immutableTree.filter(
							(_item: any, index: number) =>
								index !== nodeToRemove.index
						) as T;
					}

					break;
				}

				case 'replace': {
					const {item, path} = patch;

					const nodeToReplace = nodeByPath(path);

					if (nodeToReplace.parent) {
						nodeToReplace.parent[nestedKey] = nodeToReplace.parent[
							nestedKey
						].filter(
							(_item: any, index: number) =>
								index !== nodeToReplace.index
						);

						nodeToReplace.parent[nestedKey].splice(
							nodeToReplace.index,
							0,
							item
						);
					} else {
						immutableTree.splice(nodeToReplace.index, 1);
						immutableTree.splice(nodeToReplace.index, 0, item);
					}

					break;
				}

				default:
					break;
			}
		});

		return immutableTree;
	}

	function produce(patch: Patch) {
		patches.push(patch);
	}

	return {
		applyPatches,
		nodeByPath,
		produce,
	};
}
