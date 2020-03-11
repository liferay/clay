/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayLocalizedInput from '../src';

storiesOf('Components|ClayLocalizedInput', module).add('default', () => {
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

	const [selectedLocale, setSelectedLocale] = React.useState(locales[0]);
	const [translations, setTranslations] = React.useState<any>({
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
				onSelectedLocaleChange={setSelectedLocale}
				onTranslationsChange={setTranslations}
				prependContent={prepend}
				resultFormatter={val => `https://liferay.com${prepend}${val}`}
				selectedLocale={selectedLocale}
				translations={translations}
			/>
		</div>
	);
});
