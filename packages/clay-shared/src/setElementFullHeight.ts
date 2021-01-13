/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Adds a height style that triggers a transition when collapsed
 */
export function setElementFullHeight(element: HTMLElement) {
	if (element) {
		// Cloned into a new array since `.reduce` is not a method on an HTMLCollection
		const height = Array.prototype.slice
			.call(element.children)
			.reduce(
				(acc: number, child: HTMLElement) => acc + child.clientHeight,
				0
			);

		element.setAttribute('style', `height: ${height}px`);
	}
}
