/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export function useIsMobileDevice(): boolean {
	if (typeof window === 'undefined') {
		return false;
	}

	return window.screen.width <= 700;
}
