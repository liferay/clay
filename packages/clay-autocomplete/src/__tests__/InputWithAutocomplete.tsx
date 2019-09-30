/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import * as React from 'react';

import {ClayInputWithAutocomplete} from '../InputWithAutocomplete';

describe('InputWithAutocomplete', () => {
	afterEach(cleanup);

	it('hitting enter calls onItemSelect', () => {
		const itemSelectFn = jest.fn();
		const valueChangeFn = jest.fn();

		const {container} = render(
			<ClayInputWithAutocomplete
				autoFocus
				items={['one', 'two', 'three']}
				onItemSelect={itemSelectFn}
				onValueChange={valueChangeFn}
				value="one"
			/>
		);

		fireEvent.keyDown(
			container.querySelector('input') as HTMLInputElement,
			{
				keyCode: 40,
			}
		);

		fireEvent.keyDown(
			document.querySelector('.dropdown-item') as HTMLButtonElement,
			{
				keyCode: 13,
			}
		);

		expect(itemSelectFn).toHaveBeenCalledWith('one');
	});

	it('clicking item calls onItemSelect', () => {
		const itemSelectFn = jest.fn();
		const valueChangeFn = jest.fn();

		const {container} = render(
			<ClayInputWithAutocomplete
				autoFocus
				items={['one']}
				onItemSelect={itemSelectFn}
				onValueChange={valueChangeFn}
				value="one"
			/>
		);

		fireEvent.keyDown(
			container.querySelector('input') as HTMLInputElement,
			{
				keyCode: 40,
			}
		);

		fireEvent.click(
			document.querySelector('.dropdown-item') as HTMLElement,
			{}
		);

		expect(itemSelectFn).toHaveBeenCalledWith('one');
	});
});
