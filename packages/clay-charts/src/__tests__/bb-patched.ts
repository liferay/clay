/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {bb} from 'billboard.js';

import bbPatched from '../bb-patched';

// Mock the original bb.generate function to intercept calls

const originalGenerate = jest.spyOn(bb, 'generate');
const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

describe('bb-patched', () => {
	let pollutedProperty: any;

	beforeAll(() => {

		// Store the original value of a potential pollution target, if any

		pollutedProperty = (Object.prototype as any).polluted;
	});

	afterEach(() => {

		// Clean up any potential pollution after each test

		if (pollutedProperty === undefined) {
			delete (Object.prototype as any).polluted;
		}
		else {
			(Object.prototype as any).polluted = pollutedProperty;
		}

		originalGenerate.mockClear();
		warnSpy.mockClear();
	});

	it('exports all original bb properties', () => {
		expect(bbPatched.version).toBe(bb.version);
	});

	it('overrides the generate function', () => {
		expect(bbPatched.generate).not.toBe(bb.generate);
	});

	it('will not allow pollution of the prototype with __proto__', () => {
		const maliciousOptions = JSON.parse(
			`{"data":{"columns":[["data1",30,200,100,400,150,250],["data2",130,100,140,200,150,50]],"type":"bar"},"bar":{"width":{"ratio":0.5}},"bindto":"#chart","__proto__":{"polluted":"polutedValue"}}`
		);

		bbPatched.generate(maliciousOptions);

		expect(warnSpy).toHaveBeenCalledWith(
			expect.stringContaining('__proto__')
		);

		// @ts-ignore

		expect({}.__proto__.polluted).toBeUndefined();
		expect((Object.prototype as any).polluted).toBeUndefined();

		bb.generate(maliciousOptions);

		// @ts-ignore

		expect({}.__proto__.polluted).toBe('polutedValue');
		expect((Object.prototype as any).polluted).toBe('polutedValue');
	});

	it('will not allow pollution of the prototype with constructor', () => {
		const maliciousOptions = JSON.parse(
			`{"data":{"columns":[["data1",30,200,100,400,150,250],["data2",130,100,140,200,150,50]],"type":"bar"},"bar":{"width":{"ratio":0.5}},"bindto":"#chart","constructor": {"prototype": {"polluted":true}}}`
		);

		bbPatched.generate(maliciousOptions);

		expect(warnSpy).toHaveBeenCalledWith(
			expect.stringContaining('constructor')
		);

		// @ts-ignore

		expect({}.__proto__.polluted).toBeUndefined();
	});

	it('will not allow pollution of the prototype with prototype', () => {
		const maliciousOptions = JSON.parse(
			`{"data":{"columns":[["data1",30,200,100,400,150,250],["data2",130,100,140,200,150,50]],"type":"bar"},"bar":{"width":{"ratio":0.5}},"bindto":"#chart","prototype":{"polluted":true}}`
		);

		bbPatched.generate(maliciousOptions);

		// @ts-ignore

		expect({}.__proto__.polluted).toBeUndefined();
	});

	it('prevents prototype pollution in nested objects', () => {
		const maliciousOptions = {
			data: {
				__proto__: {polluted: true},
				columns: [['data1', 30, 200, 100]],
			},
		};

		bbPatched.generate(maliciousOptions);

		expect((Object.prototype as any).polluted).toBeUndefined();
		expect(originalGenerate).toHaveBeenCalledWith({
			data: {
				columns: [['data1', 30, 200, 100]],
			},
		});
	});

	it('prevents prototype pollution using "constructor" and "prototype"', () => {
		const maliciousOptions = JSON.parse(
			`{"data":{"columns":[["data1",30,200,100,400,150,250],["data2",130,100,140,200,150,50]],"type":"bar"},"bar":{"width":{"ratio":0.5}},"bindto":"#chart","constructor": {"prototype": {"polluted": true}}}`
		);

		bbPatched.generate(maliciousOptions);

		expect(warnSpy).toHaveBeenCalledWith(
			expect.stringContaining('constructor')
		);

		expect((Object.prototype as any).polluted).toBeUndefined();
		expect(originalGenerate).toHaveBeenCalledWith(
			JSON.parse(
				`{"data":{"columns":[["data1",30,200,100,400,150,250],["data2",130,100,140,200,150,50]],"type":"bar"},"bar":{"width":{"ratio":0.5}},"bindto":"#chart"}`
			)
		);
	});

	it('sanitizes objects within arrays', () => {
		const maliciousOptions = {
			data: {
				columns: [[{__proto__: {polluted: true}}, 'value']],
			},
		};

		// @ts-ignore

		bbPatched.generate(maliciousOptions);

		expect((Object.prototype as any).polluted).toBeUndefined();
		expect(originalGenerate).toHaveBeenCalledWith({
			data: {columns: [[{}, 'value']]},
		});
	});
});
