/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import domAlign, {IConfigOptional} from 'dom-align';

type AlignProps<T, K> = Omit<IConfigOptional, 'useCssRight'> & {
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
}: AlignProps<T, K>) {
	return domAlign(sourceElement, targetElement, {
		...config,
		useCssRight: isRtl(sourceElement),
	});
}
