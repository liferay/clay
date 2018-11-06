import {isDefAndNotNull, isFunction, isObject, isString} from 'metal';

/**
 * @param {Array|Function|Object} data
 * @return {Promise}
 */
export function resolveData(data) {
	return new Promise((resolve, reject) => {
		if (Array.isArray(data) || (isObject(data) && !isFunction(data))) {
			resolve(data);
		} else if (isFunction(data)) {
			data().then(val => resolve(val));
		} else if (isString(data)) {
			fetch(data, {cors: 'cors'})
				.then(res => res.json())
				.then(res => {
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
