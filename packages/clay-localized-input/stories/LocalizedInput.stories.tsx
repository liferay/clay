/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayForm from '@clayui/form';
import React, {useState} from 'react';

import ClayLocalizedInput from '../src';

export default {
	component: ClayLocalizedInput,
	title: 'Design System/Components/LocalizedInput',
};
export function Default() {
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

	const [selectedLocaleError, setSelectedLocaleError] = useState(locales[0]);
	const [translationsError, setTranslationsError] = useState<any>({
		'en-US': 'Apple',
		'es-ES': 'Manzana',
	});

	const prepend = '/home/';

	return (
		<div className="sheet">
			<ClayForm.Group>
				<ClayLocalizedInput
					id="locale1"
					locales={locales}
					onSelectedLocaleChange={setSelectedLocale}
					onTranslationsChange={setTranslations}
					selectedLocale={selectedLocale}
					translations={translations}
				/>
			</ClayForm.Group>

			<ClayForm.Group>
				<ClayLocalizedInput
					id="locale2"
					label="As a URL"
					locales={locales}
					onSelectedLocaleChange={setSelectedLocaleURL}
					onTranslationsChange={setTranslationsURL}
					prependContent={prepend}
					resultFormatter={(val) =>
						`https://liferay.com${prepend}${val}`
					}
					selectedLocale={selectedLocaleURL}
					translations={translationsURL}
				/>
			</ClayForm.Group>

			<ClayForm.Group className="has-error">
				<ClayLocalizedInput
					id="locale3"
					label="Error State"
					locales={locales}
					onSelectedLocaleChange={setSelectedLocaleError}
					onTranslationsChange={setTranslationsError}
					selectedLocale={selectedLocaleError}
					translations={translationsError}
				/>

				<ClayForm.FeedbackGroup>
					<ClayForm.Text>Clay Form Text</ClayForm.Text>

					<ClayForm.FeedbackItem id="input-group-error">
						<ClayForm.FeedbackIndicator symbol="exclamation-full" />
						This is a description of the error!
					</ClayForm.FeedbackItem>
				</ClayForm.FeedbackGroup>
			</ClayForm.Group>
		</div>
	);
}
