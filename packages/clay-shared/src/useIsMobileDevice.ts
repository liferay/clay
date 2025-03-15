/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useEffect, useState} from 'react';

import {throttle} from './throttle';

export function useIsMobileDevice(): boolean {
	const getIsMobile = () => window.screen.width <= 700;

	const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const handleResize = throttle(() => setIsMobile(getIsMobile()), 200);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return isMobile;
}
