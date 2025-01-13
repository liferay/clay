/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';

import ClayLanguagePicker from '../src';

export default {
	component: ClayLanguagePicker,
	title: 'Design System/Components/LanguagePicker',
};

const locales = [
	{
		displayName: 'English (United States)',
		id: 'en_US',
		label: 'en-US',
		symbol: 'en-us',
	},
	{
		displayName: 'Arabic (Saudi Arabia)',
		id: 'ar_SA',
		label: 'ar-SA',
		symbol: 'ar-sa',
	},
	{
		displayName: 'Catalan (Spain)',
		id: 'ca_ES',
		label: 'ca-ES',
		symbol: 'ca-es',
	},
	{
		displayName: 'Dutch (Netherlands)',
		id: 'nl_NL',
		label: 'nl-NL',
		symbol: 'nl-nl',
	},
];

export const Default = (args: any) => {
	const [selectedLocale, setSelectedLocale] = useState<any>(locales[0]);

	return (
		<ClayLanguagePicker
			hideTriggerText={args.hideTriggerText}
			id="languagePicker"
			locales={locales}
			onSelectedLocaleChange={(id) => {
				const locale = locales.find((locale) => locale.id === id);

				if (locale) {
					setSelectedLocale(locale);
				}
			}}
			selectedLocale={selectedLocale}
			small={args.small}
		/>
	);
};

Default.args = {
	hideTriggerText: false,
	small: false,
};

export const LanguagePickerWithTranslations = (args: any) => {
	const [selectedLocale, setSelectedLocale] = useState<any>(locales[0]);
	const translations = {
		'en-US': 'Apple',
		'es-ES': 'Manzana',
	};

	return (
		<ClayLanguagePicker
			hideTriggerText={args.hideTriggerText}
			id="languagePicker"
			locales={locales}
			onSelectedLocaleChange={(id) => {
				const locale = locales.find((locale) => locale.id === id);

				if (locale) {
					setSelectedLocale(locale);
				}
			}}
			selectedLocale={selectedLocale}
			small={args.small}
			translations={translations}
		/>
	);
};

LanguagePickerWithTranslations.args = {
	hideTriggerText: false,
	small: false,
};
