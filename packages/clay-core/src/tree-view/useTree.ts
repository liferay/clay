/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useInternalState} from '@clayui/shared';
import type {Key} from 'react';

import type {ICollectionProps} from './Collection';
import {
	IMultipleSelection,
	IMultipleSelectionState,
	useMultipleSelection,
} from './useMultipleSelection';

export interface IExpandable {
	/**
	 * The currently expanded keys in the collection.
	 */
	expandedKeys?: Set<Key>;

	/**
	 * Handler that is called when items are expanded or collapsed.
	 */
	onExpandedChange?: (keys: Set<Key>) => void;
}

export interface ITreeProps<T>
	extends IExpandable,
		IMultipleSelection,
		Pick<ICollectionProps<T>, 'items'> {
	nestedKey?: string;
	onItemsChange?: (items: ICollectionProps<T>['items']) => void;
}

export interface ITreeState<T> extends Pick<ICollectionProps<T>, 'items'> {
	expandedKeys: Set<Key>;
	nestedKey?: string;
	open: (key: Key) => void;
	reorder: (from: Array<number>, path: Array<number>) => void;
	selection: IMultipleSelectionState;
	toggle: (key: Key) => void;
}

export function useTree<T>(props: ITreeProps<T>): ITreeState<T> {
	const [expandedKeys, setExpandedKeys] = useInternalState<Set<Key>>({
		initialValue: props.expandedKeys ?? new Set(),
		onChange: props.onExpandedChange,
		value: props.expandedKeys,
	});

	const [items, setItems] = useInternalState({
		initialValue: props.items ?? [],
		onChange: props.onItemsChange,
		value: props.items,
	});

	const selection = useMultipleSelection({
		onSelectionChange: props.onSelectionChange,
		selectedKeys: props.selectedKeys,
	});

	const reorder = (from: Array<number>, path: Array<number>) => {
		const tree = createImmutableTree(items, props.nestedKey!);

		tree.produce(from, path);

		setItems(tree.applyPatches());
	};

	const toggle = (key: Key) => {
		const expanded = new Set(expandedKeys);

		if (expanded.has(key)) {
			expanded.delete(key);
		} else {
			expanded.add(key);
		}

		setExpandedKeys(expanded);
	};

	const open = (key: Key) => {
		if (expandedKeys.has(key)) {
			return;
		}

		const expanded = new Set(expandedKeys);

		if (!expanded.has(key)) {
			expanded.add(key);
		}

		setExpandedKeys(expanded);
	};

	return {
		expandedKeys,
		items,
		open,
		reorder,
		selection,
		toggle,
	};
}

// RFC 6902 4.4
type Patch = {
	op: 'move';
	from: Array<number>;
	path: Array<number>;
};

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
				parent = item;
				item = {...item[nestedKey][index]};

				parent[nestedKey] = pointer(parent[nestedKey], index, item);
			}
		}

		return {
			index,
			item,
			parent,
		};
	}

	function applyPatches(): T {
		patches.forEach((patch) => {
			const {from, op, path} = patch;

			switch (op) {
				// Applies the operation on the tree, the move is functionally
				// identical to a "remove" operation on the `from` location and
				// immediately followed by the "add" operation at the target
				// location with the value that was removed.
				case 'move': {
					const nodeToRemove = nodeByPath(from);

					if (nodeToRemove.parent) {
						nodeToRemove.parent[nestedKey] = nodeToRemove.parent[
							nestedKey
						].filter(
							(item: any, index: number) =>
								index !== nodeToRemove.index
						);
					} else {
						immutableTree = immutableTree.filter(
							(item: any, index: number) =>
								index !== nodeToRemove.index
						) as T;
					}

					const pathToAdd = nodeByPath(path);

					if (pathToAdd.parent) {
						if (!Array.isArray(pathToAdd.parent[nestedKey])) {
							pathToAdd.parent[nestedKey] = [];
						}

						pathToAdd.parent[nestedKey].splice(pathToAdd.index, 1);
						pathToAdd.parent[nestedKey].splice(
							pathToAdd.index,
							0,
							nodeToRemove.item
						);
						pathToAdd.parent[nestedKey].splice(
							pathToAdd.index + 1,
							0,
							pathToAdd.item
						);
					} else {
						if (!Array.isArray(pathToAdd.item[nestedKey])) {
							pathToAdd.item[nestedKey] = [];
						}

						pathToAdd.item[nestedKey] = [
							...pathToAdd.item[nestedKey],
							nodeToRemove.item,
						];
					}

					break;
				}
				default:
					break;
			}
		});

		return immutableTree;
	}

	function produce(from: Array<number>, path: Array<number>) {
		patches.push({from, op: 'move', path});
	}

	return {
		applyPatches,
		produce,
	};
}
