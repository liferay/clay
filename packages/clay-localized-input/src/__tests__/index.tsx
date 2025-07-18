/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLocalizedInput from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

const locales = [
	{
		label: 'en-US',
		symbol: 'en-us',
	},
	{
		label: 'es-ES',
		symbol: 'es-es',
	},
	{
		label: 'fr-FR',
		symbol: 'fr-fr',
	},
	{
		label: 'hr-HR',
		symbol: 'hr-hr',
	},
];

describe('ClayLocalizedInput', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayLocalizedInput
				id="locale1"
				locales={locales}
				onSelectedLocaleChange={() => {}}
				onTranslationsChange={() => {}}
				selectedLocale={locales[0]!}
				spritemap="/path/to/svg"
				translations={{
					'en-US': 'Apple',
					'es-ES': 'Manzana',
				}}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with prepend content and result formatter', () => {
		const prepend = '/home/';

		const {container} = render(
			<ClayLocalizedInput
				id="locale1"
				locales={locales}
				onSelectedLocaleChange={() => {}}
				onTranslationsChange={() => {}}
				prependContent={prepend}
				resultFormatter={(val) => `https://liferay.com${prepend}${val}`}
				selectedLocale={locales[0]!}
				spritemap="/path/to/svg"
				translations={{
					'en-US': 'Apple',
					'es-ES': 'Manzana',
				}}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it("displays empty if translation doesn't exist", () => {
		const onSelectedChangeFn = jest.fn();
		const {container} = render(
			<ClayLocalizedInput
				id="input1"
				locales={locales}
				onSelectedLocaleChange={onSelectedChangeFn}
				onTranslationsChange={() => {}}
				selectedLocale={locales[0]!}
				spritemap="/path/to/svg"
				translations={{
					'en-US': 'Apple',
					'es-ES': 'Manzana',
				}}
			/>
		);

		fireEvent.click(
			container.querySelector('.dropdown-toggle') as HTMLButtonElement,
			{}
		);

		fireEvent.click(
			document.querySelectorAll('.dropdown-item')[1] as HTMLButtonElement,
			{}
		);

		expect(onSelectedChangeFn).toBeCalledWith({
			label: 'es-ES',
			symbol: 'es-es',
		});
	});
});
