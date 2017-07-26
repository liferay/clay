'use strict';

const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const clay = require('clay');

var clayJSPath = path.join(clay.srcDir, 'js');

var countries = require('countries-list').countries
var langs = require('languages')

var alternateCodes = {
	'in': 'id',
	'iw': 'he',
	'nb': 'no'
}

const mapSVG = function(item, index) {
	var iconName = path.basename(item, '.svg').toLowerCase();

	if (_.startsWith(iconName, 'flags-')) {
		iconName = iconName.replace(/^flags-/, '');
	}

	return iconName;
};

const getLangInfo = function(code) {
	var parts = code.split('-');
	var langCode = parts[0];
	var countryCode = parts[1];

	var lang = langs.getLanguageInfo(alternateCodes[langCode] || langCode).name;

	if(countryCode) {
		var country = countries[countryCode.toUpperCase()];

		if(country) {
			lang += ' (' + country.name + ')';
		}
	}

	return lang;
}

module.exports = {
	frontMatterHook: function(data) {
		var iconsDoc = _.get(data, 'index.children.docs.children.components.children.icons-lexicon');

		if (iconsDoc) {
			var iconsPath = path.join(clay.buildDir, 'images', 'icons');

			var files = fs.readdirSync(iconsPath);

			files = _.reject(
				files,
				file => file === 'icons.svg'
			);

			files = _.partition(
				files,
				file => !_.startsWith(file, 'flags-')
			);

			var icons = files[0];
			var flags = files[1];

			icons = icons.map(mapSVG);
			flags = flags.map(mapSVG);

			var flagData = flags.reduce(
				function(prev, item, index) {
					prev[item] = getLangInfo(item);

					return prev;
				},
				{}
			);

			iconsDoc.icons = icons;
			iconsDoc.flags = flags;
			iconsDoc.flagData = flagData;
		}

		return data;
	},
	metalComponents: ['electric-quartz-components'],
	sassOptions: {
		includePaths: ['node_modules', clay.includePaths]
	},
	vendorSrc: [
		{
			dest: 'dist/vendor/source-sans-pro',
			src: 'node_modules/source-sans-pro/**'
		},
		{
			dest: 'dist/vendor/lexicon',
			src: path.join(clay.buildDir, 'images', 'icons', '*')
		},
		{
			src: [
				path.join(clayJSPath, 'svg4everybody.js'),
				path.join(clayJSPath, 'bootstrap.js')
			]
		},
		{
			src: path.join(clayJSPath, 'svg4everybody.js')
		}
	]
};
