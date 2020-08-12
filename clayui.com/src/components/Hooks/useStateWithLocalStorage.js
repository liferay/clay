/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const inBrowser = typeof window !== 'undefined';

const localStorage = {
	getItem(key) {
		try {
			return inBrowser ? window.localStorage.getItem(key) : null;
		} catch {
			return null;
		}
	},

	setItem(key, value) {
		if (inBrowser) {
			try {
				window.localStorage.setItem(key, value);
			} catch {
				return;
			}
		}
	},
};

function useStateWithLocalStorage(defaultValue, key) {
	const [value, setValue] = React.useState(() => {
		try {
			const stickyValue = localStorage.getItem(key);

			return stickyValue === null
				? defaultValue
				: JSON.parse(stickyValue);
		} catch {
			return defaultValue;
		}
	});

	React.useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch {}
	}, [key, value]);

	return [value, setValue];
}

export default useStateWithLocalStorage;
