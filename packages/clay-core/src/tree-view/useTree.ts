/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useInternalState} from '@clayui/shared';

export interface IExpandable {
	/**
	 * The currently expanded keys in the collection.
	 */
	expandedKeys?: Set<string>;

	/**
	 * Handler that is called when items are expanded or collapsed.
	 */
	onExpandedChange?: (keys: Set<string>) => void;
}

export interface IMultipleSelection {
	/**
	 * The currently selected keys in the collection.
	 */
	selectedKeys?: Set<string>;

	/**
	 * Handler that is called when the selection changes.
	 */
	onSelectionChange?: (keys: Set<string>) => void;
}

interface ITreeProps extends IExpandable, IMultipleSelection {}

export function useTree(props: ITreeProps) {
	const [expandedKeys, setExpandedKeys] = useInternalState<Set<string>>({
		initialValue: new Set(),
		onChange: props.onExpandedChange,
		value: props.expandedKeys,
	});

	const toggle = (key: string) => {
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
