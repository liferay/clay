/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Helper function to create a unique key for list or tree when defined by
 * developer data or obtained by component in React.
 */
export function getKey(
	index: number,
	key?: React.Key | null,
	parentKey?: React.Key
) {
	if (
		key != null &&
		(!String(key).startsWith('.') || String(key).startsWith('.$'))
	) {
		return key;
	}

	return parentKey ? `${parentKey}.${index}` : `$.${index}`;
}

/**
 * Helper function for omitting properties of an object, similar to
 * TypeScript's Omit<T, K>.
 */
export function excludeProps<T extends Record<string, any>, K extends keyof T>(
	props: T,
	items: Set<K>
) {
	return (Object.keys(props) as Array<K>).reduce<T>((previous, key) => {
		if (!items.has(key)) {
			previous[key] = props[key];
		}

		return previous;
	}, {} as T);
}
