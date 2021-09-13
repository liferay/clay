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
	onItemsChange?: (items: ICollectionProps<T>['items']) => void;
}

export interface ITreeState<T> extends Pick<ICollectionProps<T>, 'items'> {
	expandedKeys: Set<Key>;
	open: (key: Key) => void;
	reorder: (from: Array<number>, path: Array<number>) => void;
	selection: IMultipleSelectionState;
	toggle: (key: Key) => void;
}

export function useTree<T>(props: ITreeProps<T>): ITreeState<T> {
	const [expandedKeys, setExpandedKeys] = useInternalState<Set<Key>>({
		initialValue: new Set(),
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
		const tree = createImmutableTree(items);

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

function createImmutableTree<T extends Array<Record<string, any>>>(tree: T) {
	const patches: Array<Patch> = [];

	function nodeByPath(path: Array<number>): any {
		const queue = [...path];
		const rootIndex: number = queue.shift() as number;
		let item = tree[rootIndex];
		let parent = tree;
		let index = rootIndex;

		while (queue.length) {
			index = queue.shift() as number;

			if (Array.isArray(item.children) && item.children.length) {
				parent = item.children as T;
				item = item.children[index];
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
					const newChildren = nodeToRemove.parent.filter(
						(item: any, index: number) =>
							index !== nodeToRemove.index
					);

					let oldParentNode = tree[from[0]];
					for (let i = 1; i < from.length - 2; i++) {
						oldParentNode = oldParentNode.children[from[i]];
					}
					oldParentNode.children = newChildren;

					let destinationNode = tree[path[0]];
					for (let i = 1; i < path.length; i++) {
						destinationNode = destinationNode.children[path[i]];
					}
					destinationNode.children.push(nodeToRemove.item);
					break;
				}
				default:
					break;
			}
		});

		return tree;
	}

	function produce(from: Array<number>, path: Array<number>) {
		patches.push({from, op: 'move', path});
	}

	return {
		applyPatches,
		produce,
	};
}
