/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

/**
 * Adds a height style that triggers a transition when collapsed
 */
export function setElementFullHeight(element: HTMLElement) {
	if (element) {
		let height = 0;

		for (let i = 0; i < element.children.length; i++) {
			height += element.children[i]!.clientHeight;
		}

		element.setAttribute('style', `height: ${height}px`);
	}
}
