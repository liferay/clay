/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useEffect, useState} from 'react';

import {throttle} from './throttle';

function getIsMobile() {
	return window.document.body.clientWidth < 768;
}

export function useIsMobileDevice(): boolean {
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
