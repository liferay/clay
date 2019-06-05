/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

type DataType = Array<any> | Function | RequestInfo;

export default function resolveData(data: DataType): Promise<DataType> {
	return new Promise((resolve, reject) => {
		if (Array.isArray(data) || (typeof data === "object" && data !== null && typeof data !== 'function')) {
			resolve(data);
		} else if (data instanceof Function) {
			data().then((val: any) => resolve(val));
		} else if (typeof data === 'string') {
			fetch(data, { mode: 'cors' })
				.then(res => res.json())
				.then((res: any) => {
					if (!res) {
						return reject(res);
					}
					if (res.data) {
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
