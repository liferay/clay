/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useEffect, useState} from 'react';

import {throttle} from './throttle';

type MousePosition = [number, number];

/**
 * Hook to get the current mouse position
 */ export function useMousePosition(delay: number = 200) {
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
}
