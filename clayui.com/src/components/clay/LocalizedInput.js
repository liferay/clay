/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLocalizedInput from '@clayui/localized-input';
import React, {useState} from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const localizableInputImports = `import ClayLocalizedInput from '@clayui/localized-input';
import React from 'react';`;

const localizableInputCode = `const Component = () => {
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
	const [translations, setTranslations] = useState({
		'en-US': 'Apple',
		'es-ES': 'Manzana',
    });
    
    return (
        <ClayLocalizedInput
            id="locale1"
            locales={locales}
            onSelectedLocaleChange={setSelectedLocale}
            onTranslationsChange={setTranslations}
            selectedLocale={selectedLocale}
            translations={translations}
        />
    )
};

render(<Component />);`;

export const LocalizableInput = () => {
	const scope = {
		ClayLocalizedInput,
		spritemap,
		useState,
	};

	return (
		<Editor
			code={localizableInputCode}
			imports={localizableInputImports}
			scope={scope}
		/>
	);
};

const localizableInputWithURLCode = `const Component = () => {
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
	const [translations, setTranslations] = useState({
		'en-US': 'Apple',
		'es-ES': 'Manzana',
    });

	const prepend = '/home/';
    
    return (
        <ClayLocalizedInput
            id="locale2"
            label="As a URL"
            locales={locales}
            onSelectedLocaleChange={setSelectedLocale}
            onTranslationsChange={setTranslations}
            prependContent={prepend}
            resultFormatter={val => "https://liferay.com" + prepend + val}
            selectedLocale={selectedLocale}
            translations={translations}
        />
    )
};

render(<Component />);`;

export const LocalizableInputWithURL = () => {
	const scope = {
		ClayLocalizedInput,
		spritemap,
		useState,
	};

	return (
		<Editor
			code={localizableInputWithURLCode}
			imports={localizableInputImports}
			scope={scope}
		/>
	);
};
