/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';

import {LanguagePicker} from '../src/language-picker';

export default {
	component: LanguagePicker,
	title: 'Design System/Components/LanguagePicker',
};

const locales = [
	{
		id: 'en_US',
		label: 'en-US',
		name: 'English (United States)',
		symbol: 'en-us',
	},
	{
		id: 'ar_SA',
		label: 'ar-SA',
		name: 'Arabic (Saudi Arabia)',
		symbol: 'ar-sa',
	},
	{
		id: 'ca_ES',
		label: 'ca-ES',
		name: 'Catalan (Spain)',
		symbol: 'ca-es',
	},
	{
		id: 'nl_NL',
		label: 'nl-NL',
		name: 'Dutch (Netherlands)',
		symbol: 'nl-nl',
	},
];

export const Default = (args: any) => {
	const [selectedLocaleId, setSelectedLocaleId] = useState<any>(
		locales[0]!.id
	);

	return (
		<LanguagePicker
			hideTriggerText={args.hideTriggerText}
			id="languagePicker"
			locales={locales}
			onSelectedLocaleChange={setSelectedLocaleId}
			selectedLocaleId={selectedLocaleId}
			small={args.small}
		/>
	);
};

Default.args = {
	hideTriggerText: false,
	small: false,
};

export const LanguagePickerWithTranslations = (args: any) => {
	const [selectedLocaleId, setSelectedLocaleId] = useState<any>(
		locales[0]!.id
	);
	const translations = {
		'ca-ES': {total: 4, translated: 2},
		'nl-NL': {total: 4, translated: 4},
	};

	return (
		<LanguagePicker
			hideTriggerText={args.hideTriggerText}
			id="languagePicker"
			locales={locales}
			onSelectedLocaleChange={setSelectedLocaleId}
			selectedLocaleId={selectedLocaleId}
			small={args.small}
			translations={translations}
		/>
	);
};

LanguagePickerWithTranslations.args = {
	hideTriggerText: false,
	small: false,
};
