/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

function testPlatform(re: RegExp) {
	return typeof window !== 'undefined' && window.navigator !== null
		? re.test(

				// @ts-ignore

				window.navigator['userAgentData']?.platform ||
					window.navigator.platform
			)
		: false;
}

export function isMac() {
	return testPlatform(/^Mac/i);
}

export function isIPhone() {
	return testPlatform(/^iPhone/i);
}

export function isIPad() {
	return testPlatform(/^iPad/i) || (isMac() && navigator.maxTouchPoints > 1);
}

export function isIOS() {
	return isIPhone() || isIPad();
}

export function isAppleDevice() {
	return isMac() || isIOS();
}
