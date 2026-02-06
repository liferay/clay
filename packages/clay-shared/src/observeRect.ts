/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const rectAttrs: Array<keyof DOMRect> = [
	'bottom',
	'height',
	'left',
	'right',
	'top',
	'width',
];

interface IRectState {
	callback: (rect?: DOMRect) => void;
	hasRectChanged: boolean;
	rect: DOMRect | undefined;
}

function rectChanged(a: DOMRect = {} as DOMRect, b: DOMRect = {} as DOMRect) {
	return rectAttrs.some((prop) => a[prop] !== b[prop]);
}

let rafId: number;

function run(node: Element, state: IRectState) {
	const newRect = node.getBoundingClientRect();
	if (rectChanged(newRect, state.rect)) {
		state.rect = newRect;
		state.callback(state.rect);
	}
	rafId = window.requestAnimationFrame(() => run(node, state));
}

export function observeRect(node: Element, callback: (rect?: DOMRect) => void) {
	run(node, {callback, hasRectChanged: false, rect: undefined});

	return () => {
		cancelAnimationFrame(rafId);
	};
}
