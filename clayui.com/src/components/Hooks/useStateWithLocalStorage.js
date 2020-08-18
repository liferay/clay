/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import localStorage from '../../utils/localStorage';

function useStateWithLocalStorage(defaultValue, key) {
	const [value, setValue] = React.useState(() => {
		const stickyValue = localStorage.getItem(key);

		return stickyValue === null ? defaultValue : JSON.parse(stickyValue);
	});

	React.useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export default useStateWithLocalStorage;
