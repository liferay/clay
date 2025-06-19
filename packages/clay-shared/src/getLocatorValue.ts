/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export type Item = number | string | Record<string, any>;
export type Locator = Function | string;

export function getLocatorValue<T extends Item>({
	item,
	locator,
}: {
	item: T;
	locator?: Locator;
}): string | undefined {
	let value;

	if (typeof item === 'number' || typeof item === 'string') {
		return item.toString();
	} else if (typeof item === 'object' && locator) {
		if (typeof locator == 'function') {
			value = locator(item);
		} else {
			value = item[locator];
		}
	}

	return value;
}
