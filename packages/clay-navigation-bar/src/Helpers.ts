/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Removes the height style that triggers a transition when collapse
 * @param collapseElementRef
 */
export function removeCollapseHeight(collapseElementRef: React.RefObject<any>) {
	if (collapseElementRef && collapseElementRef.current) {
		collapseElementRef.current.style.removeProperty('height');
	}
}

/**
 * Adds a height style that triggers a transition when collapsed
 * @param collapseElementRef
 */
export function setCollapseHeight(collapseElementRef: React.RefObject<any>) {
	if (collapseElementRef && collapseElementRef.current) {
		collapseElementRef.current.setAttribute(
			'style',
			`height: ${collapseElementRef.current.children[0].clientHeight}px`
		);
	}
}
