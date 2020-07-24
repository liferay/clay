/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

function useStickyState(defaultValue, key, localStorage) {
	const [value, setValue] = React.useState(() => {
		const stickyValue = localStorage.getItem(key);

		return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
	});

	React.useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}

export default useStickyState;
