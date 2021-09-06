/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useInternalState} from '@clayui/shared';
import type {Key} from 'react';

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

export interface ITreeProps extends IExpandable, IMultipleSelection {}

export interface ITreeState {
	expandedKeys: Set<Key>;
	open: (key: Key) => void;
	selection: IMultipleSelectionState;
	toggle: (key: Key) => void;
}

export function useTree(props: ITreeProps): ITreeState {
	const [expandedKeys, setExpandedKeys] = useInternalState<Set<Key>>({
		initialValue: new Set(),
		onChange: props.onExpandedChange,
		value: props.expandedKeys,
	});

	const selection = useMultipleSelection({
		onSelectionChange: props.onSelectionChange,
		selectedKeys: props.selectedKeys,
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

	const open = (key: Key) => {
		const expanded = new Set(expandedKeys);

		if (!expanded.has(key)) {
			expanded.add(key);
		}

		setExpandedKeys(expanded);
	};

	return {
		expandedKeys,
		open,
		selection,
		toggle,
	};
}
