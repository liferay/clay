/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import domAlign from 'dom-align';

type AlignBase = {
	offset?: readonly [number, number];
	overflow?: {adjustX: boolean; adjustY: boolean; alwaysByViewport?: boolean};
	points?: readonly [string, string];
	targetOffset?: readonly [string, string];
};

type AlignProps<T, K> = AlignBase & {
	sourceElement: K;
	targetElement: T;
};

function isRtl<T extends HTMLElement>(element: T) {
	return window.getComputedStyle(element).direction === 'rtl';
}

export function doAlign<T extends HTMLElement, K extends HTMLElement>({
	sourceElement,
	targetElement,
	...config
}: AlignProps<T, K>): Required<AlignBase> {
	return domAlign(sourceElement, targetElement, {
		...config,
		useCssRight: isRtl(sourceElement),
	});
}
