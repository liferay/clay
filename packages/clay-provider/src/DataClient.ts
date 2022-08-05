/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LRUCache} from './LRUCache';

type Options = {
	storageMaxSize?: number;
};

export class DataClient {
	cache: LRUCache<string, any>;
	currentPromises: Record<string, Promise<any> | Error>;
	cursors: Record<string, string | undefined>;

	constructor({storageMaxSize}: Options = {}) {
		this.cache = new LRUCache(storageMaxSize);
		this.currentPromises = {};
		this.cursors = {};
	}

	public read(key: string | null) {
		if (!key) {
			return null;
		}

		return this.cache.get(key);
	}

	public update(key: string | null, value: any) {
		if (!key) {
			return null;
		}

		if (value instanceof Promise || value instanceof Error) {
			this.currentPromises[key] = value;
		} else {
			this.cache.set(key, value);
		}
	}

	public isFetching(key: string | null) {
		if (!key) {
			return;
		}

		return this.currentPromises[key];
	}

	public getCursor(key: string | null) {
		if (!key) {
			return null;
		}

		return this.cursors[key];
	}

	public setCursor(key: string | null, value: string) {
		if (!key) {
			return null;
		}

		this.cursors[key] = value;
	}
}
