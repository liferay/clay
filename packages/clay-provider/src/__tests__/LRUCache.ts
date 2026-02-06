/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {LRUCache} from '../LRUCache';

let cache: LRUCache<string, {}>;

describe('LRUCache', () => {
	beforeEach(() => {
		cache = new LRUCache(3);
	});

	it('throws an error if initialized with maxSize 0', () => {
		expect(() => new LRUCache(0)).toThrow(/non-negative number/);
	});

	it('throws an error if initialized with a negative maxSize', () => {
		expect(() => new LRUCache(-10)).toThrow(/non-negative number/);
	});

	it('returns new storage when cache is reset', () => {
		expect(cache.reset().size).toBe(0);
	});

	it('returns undefined for undefined key', () => {
		expect(cache.get('foo')).toBe(undefined);
	});

	it('returns value for present value', () => {
		cache.set('foo', 'f');
		expect(cache.get('foo')).toBe('f');
	});

	it('returns undefined for key less used beyond cache capacity', () => {
		cache.set('foo', 'f');
		cache.set('bar', 'b');
		cache.set('baz', 'bz');
		cache.get('foo');
		cache.set('qux', 'q');
		expect(cache.get('qux')).toBe('q');
		expect(cache.get('baz')).toBe('bz');
		expect(cache.get('bar')).toBe(undefined);
		expect(cache.get('foo')).toBe('f');
	});
});
