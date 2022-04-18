/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';

import ClayLocalizedInput from '../src';

export default {
	component: ClayLocalizedInput,
	title: 'Design System/Components/LocalizedInput',
};

export const Default = () => {
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

	const [selectedLocale, setSelectedLocale] = useState(locales[0]);
	const [translations, setTranslations] = useState<any>({
		'en-US': 'Apple',
		'es-ES': 'Manzana',
	});

	const [selectedLocaleURL, setSelectedLocaleURL] = useState(locales[0]);
	const [translationsURL, setTranslationsURL] = useState<any>({
		'en-US': 'Apple',
		'es-ES': 'Manzana',
	});

	const prepend = '/home/';

	return (
		<div className="sheet">
			<ClayLocalizedInput
				id="locale1"
				locales={locales}
				onSelectedLocaleChange={setSelectedLocale}
				onTranslationsChange={setTranslations}
				selectedLocale={selectedLocale}
				translations={translations}
			/>

			<br />

			<ClayLocalizedInput
				id="locale2"
				label="As a URL"
				locales={locales}
				onSelectedLocaleChange={setSelectedLocaleURL}
				onTranslationsChange={setTranslationsURL}
				prependContent={prepend}
				resultFormatter={(val) => `https://liferay.com${prepend}${val}`}
				selectedLocale={selectedLocaleURL}
				translations={translationsURL}
			/>
		</div>
	);
};
