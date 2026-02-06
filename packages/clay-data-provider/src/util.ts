/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import stringify from 'fast-json-stable-stringify';

/**
 * Implementation of the timeout.
 * Based on: https://github.com/github/fetch/issues/175#issuecomment-125779262
 */

/**
 * Implementation of the timeout.
 * Based on: https://github.com/github/fetch/issues/175#issuecomment-125779262
 */
export function timeout(
	ms: number,
	promise: Promise<any>,
	controller?: AbortController
) {
	return new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => {
			controller?.abort();
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
}

/**
 * Generates a unique identifier from a request, using the request data like
 * URL, body, headers... from an HTTP request.
 */

/**
 * Generates a unique identifier from a request, using the request data like
 * URL, body, headers... from an HTTP request.
 */
export function getIdentifier(
	link: string,
	variables: Record<string, any> | null,
	options?: RequestInit
) {
	let uid = link;
	if (variables) {
		uid += stringify(variables);
	}
	if (typeof options === 'object') {
		const serializedOptions: Record<string, any> = {...options};
		const keys = Object.keys(options);
		for (let index = 0; index < keys.length; index++) {
			const key = keys[index] as keyof RequestInit;
			const value = options[key];
			if (value instanceof URLSearchParams) {
				serializedOptions[key] = value.toString();
			}
		}
		uid += stringify(serializedOptions);
	}

	return uid;
}
