/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useVirtualizer} from '@tanstack/react-virtual';
import {useEffect, useRef} from 'react';

type Props<T> = {

	/**
	 * Flag to estimate the default height of a list item in pixels.
	 */
	estimateSize: number;

	/**
	 * Property to render content with dynamic data.
	 */
	items: Array<T>;

	/**
	 * Add the reference of the parent element that will be used to define the
	 * scroll and get the height of the element for virtualization of the
	 * collection.
	 */
	parentRef: React.RefObject<HTMLElement>;
};

export function useVirtual<T>({estimateSize, items = [], parentRef}: Props<T>) {
	const virtualizer = useVirtualizer({
		count: items.length,
		estimateSize: () => estimateSize,
		getScrollElement: () => parentRef.current,
		overscan: 7,
	});

	const previousLengthRef = useRef(items.length);

	useEffect(() => {
		if (items.length < previousLengthRef.current && !!items.length) {
			virtualizer.scrollToIndex(0, {behavior: 'auto'});
		}

		previousLengthRef.current = items.length;
	}, [items.length]);

	return virtualizer;
}
