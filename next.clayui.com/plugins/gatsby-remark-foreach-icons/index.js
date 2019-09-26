/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {countries} = require('countries-list');
const globby = require('globby');
const langs = require('languages');
const {resolve} = require('path');
const visit = require('unist-util-visit');

const alternateCodes = {
	in: 'id',
	iw: 'he',
	nb: 'no',
};

const replaceValue = array => {
	const htmlValue = array.map(
		item => `<li>
        <svg class="lexicon-icon lexicon-icon-${item.icon}">
            <use xlink:href="/images/icons/icons.svg#${item.icon}" />
        </svg>
        <span>${item.name}</span>
    </li>`
	);

	return htmlValue.join(' ');
};

const getFiles = (dir, glob) => {
	const files = globby.sync(dir, {
		expandDirectories: {
			extensions: ['svg'],
			files: glob || [],
		},
	});
	const filelist = [];

	files.forEach(file => {
		const name = file.replace(/\.svg$/, '');
		const nameWithoutExtension = name.replace(`${dir}/`, '');

		filelist.push({
			icon: nameWithoutExtension,
			name: nameWithoutExtension,
		});
	});

	return filelist;
};

module.exports = ({markdownAST}) => {
	visit(markdownAST, 'html', node => {
		const foreachFlags = '[foreach Flags]';
		const foreachIcons = '[foreach Icons]';
		const path = resolve(__dirname, '../../static/images/icons');

		if (node.value.includes(foreachFlags)) {
			let dataFlags = getFiles(path, ['flags-*']);

			dataFlags = dataFlags.map(item => {
				const parts = item.name.split('-');

				const langCode = parts[1];
				const countryCode = parts[2];

				let lang = langs.getLanguageInfo(
					alternateCodes[langCode] || langCode
				).name;

				if (countryCode) {
					const country = countries[countryCode.toUpperCase()];

					if (country) {
						lang += ` (${country.name})`;
					}
				}

				const icon = `${langCode}-${countryCode}`;

				return {
					icon: icon.toLowerCase(),
					name: `${lang} (${icon.toLowerCase()})`,
				};
			});

			node.value = node.value.replace(
				foreachFlags,
				replaceValue(dataFlags)
			);
		}

		if (node.value.includes(foreachIcons)) {
			let dataIcons = getFiles(path, ['*']);

			dataIcons = dataIcons
				.map(item => {
					if (!item.name.includes('flags') && item.name !== 'icons') {
						return item;
					}
				})
				.filter(value => typeof value !== 'undefined');

			node.value = node.value.replace(
				foreachIcons,
				replaceValue(dataIcons)
			);
		}
	});
};
