/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {LanguagePicker} from '@clayui/core';
import React from 'react';

const exampleImports = `import {LanguagePicker} from '@clayui/core';
import React from 'react';`;

const exampleCode = `const SelectLanguage = () => {
  return (
    <div style={{width: 'fit-content'}}>
        <LanguagePicker locales={[
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
            {
                id: 'fi_FI',
                label: 'fi-FI',
                name: 'Finnish (Finland)',
                symbol: 'fi-fi',
            },
            {
                id: 'fr_FR',
                label: 'fr-FR',
                name: 'French (France)',
                symbol: 'fr-fr',
            },
            {
                id: 'de_DE',
                label: 'de-DE',
                name: 'German (Germany)',
                symbol: 'de-de',
            },
            {
                id: 'hu_HU',
                label: 'hu-HU',
                name: 'Hungarian (Hungary)',
                symbol: 'hu-hu',
            },
        ]} />
    </div>
  );
};

render(<SelectLanguage />)`;

const LanguagePickerExample = () => {
	const scope = {LanguagePicker};

	return <Editor code={exampleCode} imports={exampleImports} scope={scope} />;
};

const exampleLanguagesImports = `import {LanguagePicker} from '@clayui/core';
import React from 'react';`;

const exampleLanguagesCode = `const SelectLanguage = () => {
  return (
    <div style={{width: 'fit-content'}}>
        <LanguagePicker locales={[
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
            }
        ]} />
    </div>
  );
};

render(<SelectLanguage />)`;

const LanguagePickerLanguagesExample = () => {
	const scope = {LanguagePicker};

	return (
		<Editor
			code={exampleLanguagesCode}
			imports={exampleLanguagesImports}
			scope={scope}
		/>
	);
};

const exampleTranslationsImports = `import {LanguagePicker} from '@clayui/core';
import React from 'react';`;

const exampleTranslationsCode = `const SelectLanguage = () => {
    const translations = {
		'ca-ES': {total: 4, translated: 2},
		'nl-NL': {total: 4, translated: 4},
	};

    return (
        <div style={{width: 'fit-content'}}>
            <LanguagePicker 
                locales={[
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
                    }
                ]}
                translations={translations}
            />
        </div>
  );
};

render(<SelectLanguage />)`;

const LanguagePickerTranslationsExample = () => {
	const scope = {LanguagePicker};

	return (
		<Editor
			code={exampleTranslationsCode}
			imports={exampleTranslationsImports}
			scope={scope}
		/>
	);
};

const exampleSmallImports = `import {LanguagePicker} from '@clayui/core';
import React from 'react';`;

const exampleSmallCode = `const SelectLanguage = () => {
    return (
        <div style={{width: 'fit-content'}}>
            <LanguagePicker 
                locales={[
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
                    }
                ]}
                small
            />
        </div>
  );
};

render(<SelectLanguage />)`;

const LanguagePickerSmallExample = () => {
	const scope = {LanguagePicker};

	return (
		<Editor
			code={exampleSmallCode}
			imports={exampleSmallImports}
			scope={scope}
		/>
	);
};

const exampleOnlyIconImports = `import {LanguagePicker} from '@clayui/core';
import React from 'react';`;

const exampleOnlyIconCode = `const SelectLanguage = () => {
    return (
        <div style={{width: 'fit-content'}}>
            <LanguagePicker 
                hideTriggerText
                locales={[
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
                    }
                ]}
            />
        </div>
  );
};

render(<SelectLanguage />)`;

const LanguagePickerOnlyIconExample = () => {
	const scope = {LanguagePicker};

	return (
		<Editor
			code={exampleOnlyIconCode}
			imports={exampleOnlyIconImports}
			scope={scope}
		/>
	);
};

export {
	LanguagePickerExample,
	LanguagePickerLanguagesExample,
	LanguagePickerOnlyIconExample,
	LanguagePickerSmallExample,
	LanguagePickerTranslationsExample,
};
