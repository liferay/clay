/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useInternalState} from '@clayui/shared';
import {useCallback} from 'react';

import {
	IMultipleSelection,
	IMultipleSelectionState,
	useMultipleSelection,
} from './useMultipleSelection';

import type {Key} from 'react';

import type {ICollectionProps} from './Collection';

export interface IExpandable {
	/**
	 * The currently expanded keys in the collection.
	 */
	expandedKeys?: Set<Key>;

	/**
	 * A callback that is called when items are expanded or collapsed.
	 */
	onExpandedChange?: (keys: Set<Key>) => void;
}

export interface ITreeProps<T>
	extends IExpandable,
		IMultipleSelection,
		Pick<ICollectionProps<T>, 'items'> {
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

export interface ITreeState<T> extends Pick<ICollectionProps<T>, 'items'> {
	close: (key: Key) => boolean;
	expandedKeys: Set<Key>;
	insert: (path: Array<number>, value: unknown) => void;
	open: (key: Key) => boolean;
	remove: (path: Array<number>) => void;
	reorder: (from: Array<number>, path: Array<number>) => void;
	replace: (path: Array<number>, item: T) => void;
	selection: IMultipleSelectionState;
	toggle: (key: Key) => void;
}

function noop() {}

export function useTree<T>(props: ITreeProps<T>): ITreeState<T> {
	const [expandedKeys, setExpandedKeys] = useInternalState<Set<Key>>({
		initialValue: props.expandedKeys ?? new Set(),
		onChange: props.onExpandedChange,
		value: props.expandedKeys,
	});

	const [items, setItems] = useInternalState({
		initialValue: props.items ?? [],
		onChange: props.onItemsChange ?? noop,
		value: props.items,
	});

	const selection = useMultipleSelection<T>({
		items: props.items,
		nestedKey: props.nestedKey,
		onSelectionChange: props.onSelectionChange,
		selectedKeys: props.selectedKeys,
		selectionMode: props.selectionMode,
	});

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
		(from: Array<number>, path: Array<number>) => {
			const tree = createImmutableTree(items, props.nestedKey!);

			tree.produce({from, op: 'move', path});

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
		expandedKeys,
		insert,
		items,
		open,
		remove,
		reorder,
		replace,
		selection,
		toggle,
	};
}

// Operation of `move` value to the same document structure, removing from
// `from` and then adding to `path`.
// RFC 6902 (JSON Patch) 4.4
type PatchMove = {
	op: 'move';
	from: Array<number>;
	path: Array<number>;
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

	function nodeByPath(path: Array<number>) {
		const queue = [...path];
		const rootIndex: number = queue.shift() as number;

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
						node.parent[nestedKey] = value;
					}

					break;
				}
				// Applies the operation on the tree, the move is functionally
				// identical to a "remove" operation on the `from` location and
				// immediately followed by the "add" operation at the target
				// location with the value that was removed.
				case 'move': {
					const {from, path} = patch;

					const nodeToRemove = nodeByPath(from);

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

					const pathToAdd = nodeByPath(path);

					if (pathToAdd.parent) {
						pathToAdd.parent[nestedKey] = [
							...pathToAdd.parent[nestedKey].slice(
								0,
								pathToAdd.index
							),
							nodeToRemove.item,
							...pathToAdd.parent[nestedKey].slice(
								pathToAdd.index
							),
						];
					} else {
						immutableTree = [
							...immutableTree.slice(0, pathToAdd.index),
							nodeToRemove.item,
							...immutableTree.slice(pathToAdd.index),
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
