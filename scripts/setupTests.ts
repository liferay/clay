/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {GlobalWithFetchMock} from 'jest-fetch-mock';

const customGlobal: GlobalWithFetchMock =
	global as unknown as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

// Hack for jsdom. We check for offsetParent in our focusmanager to
// verify that the element is visible. This doesn't matter for jsdom.
// https://github.com/jsdom/jsdom/issues/1261#issuecomment-362928131

Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
	get() {
		return this.parentNode;
	},
});
