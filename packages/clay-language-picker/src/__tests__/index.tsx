/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLanguagePicker from '..';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import React from 'react';

const locales = [
	{
		displayName: 'English (United States)',
		id: 'en_US',
		label: 'en-US',
		symbol: 'en-us',
	},
	{
		displayName: 'Spanish (Spain)',
		id: 'es_ES',
		label: 'es-ES',
		symbol: 'es-es',
	},
	{
		displayName: 'French (France)',
		id: 'fr_FR',
		label: 'fr-FR',
		symbol: 'fr-fr',
	},
	{
		displayName: 'Dutch (Netherlands)',
		id: 'nl_NL',
		label: 'nl-NL',
		symbol: 'nl-nl',
	},
];

const onSelectedLocaleChange = jest.fn(() => null);

describe('ClayLanguagePicker', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayLanguagePicker
				locales={locales}
				onSelectedLocaleChange={onSelectedLocaleChange}
				selectedLocale={locales[0]!}
				spritemap="/path/to/svg"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a class name for the trigger', () => {
		const {container} = render(
			<ClayLanguagePicker
				classNamesTrigger="trigger-class"
				locales={locales}
				onSelectedLocaleChange={onSelectedLocaleChange}
				selectedLocale={locales[0]!}
				spritemap="/path/to/svg"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders the picker with id', () => {
		const {container} = render(
			<ClayLanguagePicker
				id="pickerId"
				locales={locales}
				onSelectedLocaleChange={onSelectedLocaleChange}
				selectedLocale={locales[0]!}
				spritemap="/path/to/svg"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with custom labels', () => {
		const {container} = render(
			<ClayLanguagePicker
				labels={{
					default: 'Default Label',
					translated: 'Translated Label',
					trigger: 'Trigger Label',
					untranslated: 'Untranslated Label',
				}}
				locales={locales}
				onSelectedLocaleChange={onSelectedLocaleChange}
				selectedLocale={locales[0]!}
				spritemap="/path/to/svg"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a small picker', () => {
		const {container} = render(
			<ClayLanguagePicker
				locales={locales}
				onSelectedLocaleChange={onSelectedLocaleChange}
				selectedLocale={locales[0]!}
				small
				spritemap="/path/to/svg"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('calls onSelectedLocaleChange when a language is selected', () => {
		render(
			<ClayLanguagePicker
				locales={locales}
				onSelectedLocaleChange={onSelectedLocaleChange}
				selectedLocale={locales[0]!}
				spritemap="/path/to/svg"
			/>
		);

		fireEvent.click(screen.getByRole('combobox'));

		fireEvent.click(screen.getByText('es-ES'));

		expect(onSelectedLocaleChange).toHaveBeenCalled();
	});

	it('calls onActiveChange when the trigger clicked', () => {
		const onActiveChange = jest.fn(() => null);

		render(
			<ClayLanguagePicker
				locales={locales}
				onActiveChange={onActiveChange}
				onSelectedLocaleChange={onSelectedLocaleChange}
				selectedLocale={locales[0]!}
				spritemap="/path/to/svg"
			/>
		);

		fireEvent.click(screen.getByRole('combobox'));

		expect(onActiveChange).toHaveBeenCalled();
	});
});
