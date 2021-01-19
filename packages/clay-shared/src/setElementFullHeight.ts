/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Adds a height style that triggers a transition when collapsed
 */
export function setElementFullHeight(element: HTMLElement) {
	if (element) {
		let height = 0;

		for (let i = 0; i < element.children.length; i++) {
			height += element.children[i].clientHeight;
		}

		element.setAttribute('style', `height: ${height}px`);
	}
}
