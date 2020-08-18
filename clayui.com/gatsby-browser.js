/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import localStorage from './src/utils/localStorage';

// A stub function is needed because gatsby won't load this file otherwise
// (https://github.com/gatsbyjs/gatsby/issues/6759)
export const onClientEntry = () => {
	if (process.env.GATSBY_CLAY_NIGHTLY === 'true') {
		const isNullOrTrue = (val) => val === 'true' || val === null;

		const showAtlas = isNullOrTrue(localStorage.getItem('clay.showAtlas'));
		const showSiteCss = isNullOrTrue(
			localStorage.getItem('clay.showSiteCss')
		);

		if (showAtlas) {
			require('@clayui/css/src/scss/atlas.scss');
		} else {
			require('@clayui/css/src/scss/base.scss');
		}

		if (showSiteCss) {
			require('./src/styles/main.scss');
		}
	} else {
		require('@clayui/css/src/scss/atlas.scss');
		require('./src/styles/main.scss');
	}
};
