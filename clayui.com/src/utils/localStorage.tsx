/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const isSupported = () => {
	try {
		window.localStorage.setItem('_TEST_KEY_', '_TEST_KEY_');

		return true;
	} catch {
		return false;
	}
};

const getItem = (name: string): string | null => {
	if (isSupported()) {
		return window.localStorage.getItem(name);
	}

	return null;
};

const setItem = (name: string, value: string): void => {
	if (isSupported()) {
		window.localStorage.setItem(name, value);
	}
};

const localStorage = {
	getItem,
	setItem,
};

export default localStorage;
