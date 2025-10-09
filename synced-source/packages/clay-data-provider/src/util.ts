/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import stringify from 'fast-json-stable-stringify';

/**
 * Implementation of the timeout.
 * Based on: https://github.com/github/fetch/issues/175#issuecomment-125779262
 */
export const timeout = (
	ms: number,
	promise: Promise<any>,
	controller?: AbortController
) => {
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
};

/**
 * Generates a unique identifier from a request, using the request data like
 * URL, body, headers... from an HTTP request.
 */
export const getIdentifier = (
	link: string,
	variables: Record<string, any> | null,
	options?: RequestInit
) => {
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
};
