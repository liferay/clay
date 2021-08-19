/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useInternalState} from '@clayui/shared';
import type {Key} from 'react';

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

export interface IMultipleSelection {
	/**
	 * The currently selected keys in the collection.
	 */
	selectedKeys?: Set<Key>;

	/**
	 * Handler that is called when the selection changes.
	 */
	onSelectionChange?: (keys: Set<Key>) => void;
}

interface ITreeProps extends IExpandable, IMultipleSelection {}

export function useTree(props: ITreeProps) {
	const [expandedKeys, setExpandedKeys] = useInternalState<Set<Key>>({
		initialValue: new Set(),
		onChange: props.onExpandedChange,
		value: props.expandedKeys,
	});

	const toggle = (key: Key) => {
		const expanded = new Set(expandedKeys);

		if (expanded.has(key)) {
			expanded.delete(key);
		} else {
			expanded.add(key);
		}

		setExpandedKeys(expanded);
	};

	return {
		expandedKeys,
		toggle,
	};
}
