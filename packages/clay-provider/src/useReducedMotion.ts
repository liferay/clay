/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useEffect, useState} from 'react';

export function useReducedMotion(mode: 'user' | 'always' | 'never') {
	const [reduceMotion, setReduceMotion] = useState(false);

	useEffect(() => {
		switch (mode) {
			case 'always':
				setReduceMotion(true);
				break;
			case 'never':
				break;
			default: {
				if (window.matchMedia) {
					const motionMediaQuery = window.matchMedia(
						'(prefers-reduced-motion)'
					);

					const setReducedMotionPreferences = (
						mediaQuery: MediaQueryListEvent
					) => setReduceMotion(mediaQuery.matches);

					motionMediaQuery.addEventListener(
						'change',
						setReducedMotionPreferences
					);

					return () => {
						motionMediaQuery.removeEventListener(
							'change',
							setReducedMotionPreferences
						);
					};
				}
				else {
					setReduceMotion(false);
				}
				break;
			}
		}
	}, []);

	return reduceMotion;
}
