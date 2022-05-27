/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

const fs = require('fs');
const path = require('path');

const tokenCategories = require('./token-categories');

const atlascss = path.join('lib', 'css', 'atlas.css');

const css = fs.readFileSync(atlascss).toString();

const REGEX_CSSVAR_AND_VALUE = /\s\s--(.+?)(?=;\n)/g;
const REGEX_CSSVAR_AND_VALUE_NAME = /--(.+?)(?=:)/g;
const REGEX_CSSVAR_AND_VALUE_VALUE = /\s(?!-)(?!\s)(.+?)$/gm;

const REGEX_CSSVAR_WITH_FALLBACK =
	/var\(--(.+?),\s*var\(--(.+?),\s*var\(--(.+?),\s*var\(--(.+?),\s*var\(--(.+?),\s*var\(--(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))|var\(--(.+?),\s*var\(--(.+?),\s*var\(--(.+?),\s*var\(--(.+?),\s*var\(--(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))|var\(--(.+?),\s*var\(--(.+?),\s*var\(--(.+?),\s*var\(--(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))|var\(--(.+?),\s*var\(--(.+?),\s*var\(--(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))|var\(--(.+?),\s*var\(--(\)|(.+?)\))(\)|(.+?)\))|var\(--(.+?)calc(.+?)(?=;)|var\(--(.+?)\)/gm;
const REGEX_CSSVAR_WITH_FALLBACK_NAME = /^var\(--(.+?)((?=,)|(?=\)))/gm;
const REGEX_CSSVAR_WITH_FALLBACK_VALUE = /,(.+?)$/gm;

const cssvarAndValue = css.match(REGEX_CSSVAR_AND_VALUE);
const cssvarWithFallback = css.match(REGEX_CSSVAR_WITH_FALLBACK);

const propArray = [];
const valArray = [];

// Gets variables from :root{}

for (let i = 0; i < cssvarAndValue.length; i++) {
	const property = cssvarAndValue[i].match(REGEX_CSSVAR_AND_VALUE_NAME)[0];
	const value = cssvarAndValue[i]
		.match(REGEX_CSSVAR_AND_VALUE_VALUE)[0]
		.trim();

	propArray.push(property);
	valArray.push(value);
}

// Gets variables from the component selectors

for (let i = 0; i < cssvarWithFallback.length; i++) {
	// Removes `var(` from property name

	const property = [
		cssvarWithFallback[i]
			.match(REGEX_CSSVAR_WITH_FALLBACK_NAME)[0]
			.replace('var(', ''),
	];

	let value = '';

	propArray.push(property[0]);

	// There is a fallback value

	if (cssvarWithFallback[i].match(REGEX_CSSVAR_WITH_FALLBACK_VALUE)) {
		// Removes `, ` from fallback value

		const stripCommaSpace = cssvarWithFallback[i]
			.match(REGEX_CSSVAR_WITH_FALLBACK_VALUE)[0]
			.replace(/^,\s/gm, '');

		// one:   ^(.+?)(\(|(.+?)\()(\)|(.+?)\))
		// two:   ^(.+?)(\(|(.+?)\()(\(|(.+?)\()(\)|(.+?)\))(\)|(.+?)\))
		// three: ^(.+?)(\(|(.+?)\()(\(|(.+?)\()(\(|(.+?)\()(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))
		// four: ^(.+?)(\(|(.+?)\()(\(|(.+?)\()(\(|(.+?)\()(\(|(.+?)\()(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))
		value = stripCommaSpace.match(
			/^(.+?)(\(|(.+?)\()(\(|(.+?)\()(\(|(.+?)\()(\(|(.+?)\()(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))|^(.+?)(\(|(.+?)\()(\(|(.+?)\()(\(|(.+?)\()(\)|(.+?)\))(\)|(.+?)\))(\)|(.+?)\))|^(.+?)(\(|(.+?)\()(\(|(.+?)\()(\)|(.+?)\))(\)|(.+?)\))|^(.+?)(\(|(.+?)\()(\)|(.+?)\))|(.+\b)/gm
		);

		// The fallback value is invalid e.g., `var(--the-variable, );` or ""

		if (value === null) {
			value = '';
		}
	}

	valArray.push(value[0]);
}

let uniqueValArray = [];
let uniquePropArray = propArray.filter(function (item, pos, self) {
	if (self.indexOf(item) === pos) {
		uniqueValArray.push(valArray[pos]);

		return true;
	}

	return false;
});

let frontendToken = {
	frontendTokenCategories: [],
};

let tokenCategoriesIndex = 0;

for (const cat in tokenCategories) {
	let feTokenCategoriesObj = {
		label: '',
		name: '',
		frontendTokenSets: [],
	};

	feTokenCategoriesObj.label = cat;
	feTokenCategoriesObj.name = cat;

	for (let i = 0; i < uniquePropArray.length; i++) {
		let feTokenSetsObj = {
			frontendTokens: [
				{
					defaultValue: '',
					editorType: '',
					label: '',
					mappings: [
						{
							type: 'cssVariable',
							value: '',
						},
					],
					name: '',
					type: 'String',
				},
			],
		};

		if (uniquePropArray[i].match(tokenCategories[cat].regex)) {
			let property = uniquePropArray[i];
			let value = uniqueValArray[i];

			let frontendTokens = feTokenSetsObj.frontendTokens[0];

			if (
				property.match(
					/--(?!(.+?)rgb)(primary|secondary|success|info|warning|danger|dark|light|white|gray|black|blue|indigo|purple|pink|red|orange|yellow|green|teal|cyan|(.+?)-color$)/gm
				)
			) {
				// frontendTokens.editorType = 'ColorPicker';
			}

			const label = property.replace('--', '');

			frontendTokens.name = label;
			frontendTokens.defaultValue = value;
			frontendTokens.label = label;
			frontendTokens.mappings[0].value = label;

			feTokenCategoriesObj.frontendTokenSets.push(feTokenSetsObj);
		}
	}

	frontendToken.frontendTokenCategories.push(feTokenCategoriesObj);

	tokenCategoriesIndex++;
}

fs.writeFileSync(
	path.join('frontend-token-definition.json'),
	JSON.stringify(frontendToken, null, 2)
);
