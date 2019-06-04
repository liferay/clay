/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import {isDefAndNotNull, isFunction, isObject, isString} from 'metal';

type DataType = Array<any> | Function | RequestInfo;

export default function resolveData(data: DataType): Promise<DataType> {
	return new Promise((resolve, reject) => {
		if (Array.isArray(data) || (isObject(data) && !isFunction(data))) {
			resolve(data);
		} else if (data instanceof Function) {
			data().then((val: any) => resolve(val));
		} else if (isString(data)) {
			fetch(data, {mode: 'cors'})
				.then(res => res.json())
				.then((res: any) => {
					if (!isDefAndNotNull(res)) {
						return reject(res);
					}
					if (isDefAndNotNull(res.data)) {
						return resolve(res.data);
					} else {
						return resolve(res);
					}
				});
		} else {
			reject(`Could not resolve data: ${data}`);
		}
	});
}
