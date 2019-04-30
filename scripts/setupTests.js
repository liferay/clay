/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

global.fetch = require('jest-fetch-mock');

if (typeof window !== 'undefined') {
	global.window.resizeTo = (width, height) => {
		global.window.innerWidth = width || global.window.innerWidth;
		global.window.innerHeight = height || global.window.innerHeight;
		global.window.dispatchEvent(new Event('resize'));
	};
	global.window.scrollTo = () => {};
}
