/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
				} else {
					setReduceMotion(false);
				}
				break;
			}
		}
	}, []);

	return reduceMotion;
}
