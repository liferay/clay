/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
	rect: DOMRect | undefined;
	hasRectChanged: boolean;
	callback: (rect?: DOMRect) => void;
}

const rectChanged = (a: DOMRect = {} as DOMRect, b: DOMRect = {} as DOMRect) =>
	rectAttrs.some((prop) => a[prop] !== b[prop]);

let rafId: number;

const run = (node: Element, state: IRectState) => {
	const newRect = node.getBoundingClientRect();

	if (rectChanged(newRect, state.rect)) {
		state.rect = newRect;

		state.callback(state.rect);
	}

	rafId = window.requestAnimationFrame(() => run(node, state));
};

export const observeRect = (
	node: Element,
	callback: (rect?: DOMRect) => void
) => {
	run(node, {callback, hasRectChanged: false, rect: undefined});

	return () => {
		cancelAnimationFrame(rafId);
	};
};
