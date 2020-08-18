/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const isSupported = () => {
	try {
		window.localStorage.setItem('_TEST_KEY_', '_TEST_KEY_');
		window.localStorage.removeItem('_TEST_KEY_');

		return true;
	} catch {
		return false;
	}
};

const localStorage = {
	getItem(name: string): string | null {
		if (isSupported()) {
			return window.localStorage.getItem(name);
		}

		return null;
	},

	setItem(name: string, value: string): void {
		if (isSupported()) {
			window.localStorage.setItem(name, value);
		}
	},
};

export default localStorage;
