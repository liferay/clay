/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const DEFAULT_MAX_SIZE = 20;

export class LRUCache<K, V> {
	_maxSize: number;
	_storage: Map<K, V>;

	constructor(maxSize: number = DEFAULT_MAX_SIZE) {
		if (maxSize <= 0) {
			throw new TypeError('LRUCache: max must be a non-negative number');
		}

		this._maxSize = maxSize;
		this._storage = new Map();
	}

	reset() {
		this._storage = new Map();

		return this._storage;
	}

	has(key: K) {
		return this._storage.has(key);
	}

	get(key: K) {
		if (this._storage.has(key)) {
			const value = this._storage.get(key);
			this._storage.delete(key);
			this._storage.set(key, value as V);

			return value;
		}
	}

	set(key: K, value: V) {
		if (this._storage.size >= this._maxSize) {
			const iterator = this._storage.keys();
			let count = this._maxSize - (this._storage.size - 1);
			while (count) {
				const {value} = iterator.next();
				this._storage.delete(value);
				count--;
			}
		}

		this._storage.set(key, value);
	}
}
