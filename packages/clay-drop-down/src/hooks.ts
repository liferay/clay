/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

const ESC_KEY_CODE = 27;

/**
 * Hook for closing dropdown when user hits ESC key or clicks outside the menu.
 */
export function useDropdownCloseInteractions(
	elementRef: React.RefObject<HTMLElement>,
	setActive: (val: boolean) => void
) {
	React.useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				event.target instanceof Element &&
				elementRef.current &&
				!elementRef.current.contains(event.target)
			) {
				setActive(false);
			}
		};

		const handleEsc = (event: KeyboardEvent) =>
			event.keyCode === ESC_KEY_CODE ? setActive(false) : undefined;

		window.addEventListener('mousedown', handleClick);
		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleEsc);
		};
	}, []);
}
