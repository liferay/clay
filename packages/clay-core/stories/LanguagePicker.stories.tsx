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

const localesLong = [
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
		id: 'cs-CZ',
		label: 'cs-CZ',
		name: 'Czech (Czech Republic)',
		symbol: 'cs-cz',
	},
	{
		id: 'da-DK',
		label: 'da-DK',
		name: 'Danish (Denmark)',
		symbol: 'da-dk',
	},
	{
		id: 'de-AT',
		label: 'de-AT',
		name: 'Geman (Austria)',
		symbol: 'de-at',
	},
	{
		id: 'de-CH',
		label: 'de-CH',
		name: 'German (Switzerland)',
		symbol: 'de-ch',
	},
	{
		id: 'de-DE',
		label: 'de-DE',
		name: 'German (Germany)',
		symbol: 'de-de',
	},
	{
		id: 'el-GR',
		label: 'el-GR',
		name: 'Greek (Greece)',
		symbol: 'el-gr',
	},
	{
		id: 'en-AU',
		label: 'en-AU',
		name: 'English (Australia)',
		symbol: 'en-au',
	},
	{
		id: 'nl_NL',
		label: 'nl-NL',
		name: 'Dutch (Netherlands)',
		symbol: 'nl-nl',
	},
];

export const LanguagePickerWithTranslations = (args: any) => {
	const [selectedLocaleId, setSelectedLocaleId] = useState<any>(
		localesLong[0]!.id
	);
	const translations = {
		'ca-ES': {total: 4, translated: 2},
		'nl-NL': {total: 4, translated: 4},
	};

	return (
		<LanguagePicker
			hideTriggerText={args.hideTriggerText}
			id="languagePicker"
			locales={localesLong}
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
