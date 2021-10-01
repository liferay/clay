/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Implementation of the timeout.
 * Based on: https://github.com/github/fetch/issues/175#issuecomment-125779262
 */
export const timeout = (ms: number, promise: Promise<any>) => {
	return new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => {
			reject(new Error('timeout'));
		}, ms);

		promise
			.then((res) => {
				clearTimeout(timeoutId);
				resolve(res);
			})
			.catch((error) => {
				clearTimeout(timeoutId);
				reject(error);
			});
	});
};
