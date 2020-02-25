/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useEffect, useState} from 'react';

/**
 * @param {!string} url
 * @param {!object} options
 * @return {object|array}
 */
function useResource(url, options) {
	const [state, setState] = useState([]);

	useEffect(() => {
		fetch(url, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			...options,
		})
			.then(res => res.json())
			.then(setState);
	}, []);

	return state;
}

export default useResource;
