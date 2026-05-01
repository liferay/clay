/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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

	// Clear any inline positioning written by a previous alignment pass.
	// `dom-align` only sets one of `left`/`right` (and one of `top`/`bottom`)
	// per call based on `useCssRight`, so when the resolved direction flips
	// across calls the opposite side is left behind and both rules apply at
	// once, producing the RTL flicker reported in LPD-69776.

	sourceElement.style.bottom = '';
	sourceElement.style.left = '';
	sourceElement.style.right = '';
	sourceElement.style.top = '';

	return domAlign(sourceElement, targetElement, {
		...config,
		useCssRight: isRtl(sourceElement),
	});
}
