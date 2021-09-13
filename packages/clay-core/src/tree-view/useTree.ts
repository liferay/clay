/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

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
