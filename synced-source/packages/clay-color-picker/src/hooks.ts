/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback} from 'react';

/**
 * Utility hook for calculating the mouse position
 */
export function usePointerPosition(containerRef: React.RefObject<any>) {
	const [xy, setXY] = React.useState({x: 0, y: 0});

	const onPointerMove = useCallback(
		(event: React.PointerEvent | PointerEvent) => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				const x = event.pageX;

				let newLeft = x - (rect.left + window.pageXOffset);

				newLeft =
					newLeft < 0
						? 0
						: newLeft > rect.width
						? rect.width
						: newLeft;

				const y = event.pageY;

				let newTop = y - (rect.top + window.pageYOffset);

				newTop =
					newTop < 0
						? 0
						: newTop > rect.height
						? rect.height
						: newTop;

				setXY({x: newLeft, y: newTop});
			}
		},
		[]
	);

	return {...xy, onPointerMove, setXY};
}
