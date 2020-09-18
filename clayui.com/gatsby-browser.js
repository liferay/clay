/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import localStorage from './src/utils/localStorage';

// A stub function is needed because gatsby won't load this file otherwise
// (https://github.com/gatsbyjs/gatsby/issues/6759)
export const onClientEntry = () => {
	const isNullOrTrue = (val) => val === 'true' || val === null;

	const showAtlas = isNullOrTrue(localStorage.getItem('clay.showAtlas'));

	const clayCSSFile = document.getElementById('clayCSSFile');
	const clayuiCSSFile = document.getElementById('clayuiCSSFile');

	clayCSSFile.setAttribute(
		'href',
		showAtlas ? '/css/atlas.css' : '/css/base.css'
	);
	clayuiCSSFile.setAttribute(
		'href',
		showAtlas ? '/css/colors.css' : '/css/colors-base.css'
	);

	require('./src/styles/main.scss');
};
