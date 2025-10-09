/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
		if (items.length < previousLengthRef.current && items.length > 0) {
			virtualizer.scrollToIndex(0, {behavior: 'auto'});
		}

		previousLengthRef.current = items.length;
	}, [items.length]);

	return virtualizer;
}
