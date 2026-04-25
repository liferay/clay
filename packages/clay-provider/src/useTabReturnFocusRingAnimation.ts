/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useEffect} from 'react';

export const FOCUS_RING_ANIMATION_CLASS = 'c-prefers-focus-ring';
export const TAB_RETURNING_CLASS = 'c-tab-returning';

let listenerCount = 0;

function onVisibilityChange() {
	const {classList} = document.body;

	if (!document.hidden && classList.contains(FOCUS_RING_ANIMATION_CLASS)) {
		classList.add(TAB_RETURNING_CLASS);

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				classList.remove(TAB_RETURNING_CLASS);
			});
		});
	}
}

export function useTabReturnFocusRingAnimation() {
	useEffect(() => {
		if (listenerCount === 0) {
			document.addEventListener('visibilitychange', onVisibilityChange);
		}

		listenerCount += 1;

		return () => {
			listenerCount -= 1;

			if (listenerCount === 0) {
				document.removeEventListener(
					'visibilitychange',
					onVisibilityChange
				);
			}
		};
	}, []);
}
