/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

export function throttle<T>(callback: Function, limit: number) {
	let waiting = false;

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
