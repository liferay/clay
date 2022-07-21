/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useEffect, useState} from 'react';

type MousePosition = [number, number];

function throttle<T>(callback: Function, limit: number) {
	var waiting = false;

	return (...args: Array<T>) => {
		if (!waiting) {
			callback(...args);
			waiting = true;

			setTimeout(() => {
				waiting = false;
			}, limit);
		}
	};
}

/**
 * Hook to get the current mouse position
 */
export const useMousePosition = (delay: number = 200) => {
	const [mousePosition, setMousePosition] = useState<MousePosition>([0, 0]);

	useEffect(() => {
		const handleMousePosition = throttle(
			(event: MouseEvent) =>
				setMousePosition([event.clientX, event.clientY]),
			delay
		);

		window.addEventListener('mousemove', handleMousePosition);

		return () =>
			window.removeEventListener('mousemove', handleMousePosition);
	}, [delay]);

	return mousePosition;
};
