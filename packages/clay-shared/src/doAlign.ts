/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import domAlign from 'dom-align';

type AlignProps<T, K> = {
	offset?: readonly [number, number];
	overflow?: {adjustX: boolean; adjustY: boolean};
	points?: readonly [string, string];
	sourceElement: K;
	targetElement: T;
	targetOffset?: readonly [string, string];
};

function isRtl<T extends HTMLElement>(element: T) {
	return window.getComputedStyle(element).direction === 'rtl';
}

export function doAlign<T extends HTMLElement, K extends HTMLElement>({
	sourceElement,
	targetElement,
	...config
}: AlignProps<T, K>) {
	return domAlign(sourceElement, targetElement, {
		...config,
		useCssRight: isRtl(sourceElement),
	});
}
