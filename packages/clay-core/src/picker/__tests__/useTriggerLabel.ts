/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {renderHook} from '@testing-library/react';

import {useTriggerLabel} from '../useTriggerLabel';

type Item = {value: string} | undefined;

type HookProps = {
	selectedItem: Item;
	selectedKey: React.Key;
};

describe('useTriggerLabel', () => {
	it('returns undefined when selectedKey is undefined', () => {
		const {result} = renderHook(() =>
			useTriggerLabel(undefined, undefined)
		);

		expect(result.current).toBeUndefined();
	});

	it('returns the selected item value when both are provided', () => {
		const {result} = renderHook(() =>
			useTriggerLabel('mango', {value: 'Mango'})
		);

		expect(result.current).toBe('Mango');
	});

	it('returns the cached value when the selected item is later excluded', () => {
		const {rerender, result} = renderHook(
			({selectedItem, selectedKey}) =>
				useTriggerLabel(selectedKey, selectedItem),
			{
				initialProps: <HookProps>{
					selectedItem: undefined,
					selectedKey: 'mango',
				},
			}
		);

		expect(result.current).toBe(undefined);

		rerender({selectedItem: {value: 'Mango'}, selectedKey: 'mango'});

		expect(result.current).toBe('Mango');

		rerender({selectedItem: undefined, selectedKey: 'mango'});

		expect(result.current).toBe('Mango');
	});

	it('discards the cached value when the selected key changes to an unresolved key', () => {
		const {rerender, result} = renderHook(
			({selectedItem, selectedKey}) =>
				useTriggerLabel(selectedKey, selectedItem),
			{
				initialProps: <HookProps>{
					selectedItem: {value: 'Mango'},
					selectedKey: 'mango',
				},
			}
		);

		expect(result.current).toBe('Mango');

		rerender({selectedItem: undefined, selectedKey: 'apple'});

		expect(result.current).toBeUndefined();
	});

	it('refreshes the cache when the selection changes to a new resolvable item', () => {
		const {rerender, result} = renderHook(
			({selectedItem, selectedKey}) =>
				useTriggerLabel(selectedKey, selectedItem),
			{
				initialProps: <HookProps>{
					selectedItem: {value: 'Mango'},
					selectedKey: 'mango',
				},
			}
		);

		expect(result.current).toBe('Mango');

		rerender({selectedItem: {value: 'Apple'}, selectedKey: 'apple'});

		expect(result.current).toBe('Apple');

		rerender({selectedItem: undefined, selectedKey: 'apple'});

		expect(result.current).toBe('Apple');
	});
});
