/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ChartOptions, bb} from 'billboard.js';

/**
 * Sanitizes the first level of an object to prevent prototype pollution.
 * It removes keys that match '__proto__', 'constructor', or 'prototype'.
 * @param object The object to sanitize.
 * @returns A new object with problematic keys.
 */
function sanitizeObject(object: any): any {
	if (typeof object !== 'object' || object === null) {
		return object;
	}

	if (Array.isArray(object)) {
		return object.map((item) => sanitizeObject(item));
	}

	const newObj: {[key: string]: any} = {};
	for (const key in object) {

		// Ensure the key is an own property to avoid iterating prototype chain

		if (Object.prototype.hasOwnProperty.call(object, key)) {
			if (!/^(__proto__|constructor|prototype)$/i.test(key)) {
				newObj[key] = object[key];
			}
			else {
				console.warn(
					`<ClayChart />: The key "${key}" has been removed from an object passed to a Clay Chart because it may be an attempted prototype pollution attack. Please update the data removing the key: "${key}".`
				);
			}
		}
	}

	return newObj;
}

function patchedGenerate(options: ChartOptions) {

	// @ts-ignore

	return bb.generate(sanitizeObject(options));
}

export default {
	...bb,
	generate: patchedGenerate,
};
