/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export function throttle<T>(callback: Function, limit: number) {
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
