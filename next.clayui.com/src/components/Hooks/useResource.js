/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import axios from 'axios';
import {useEffect, useState} from 'react';

/**
 * @param {!string} url
 * @param {!object} options
 * @return {object|array}
 */
function useResource(url, options) {
	const [state, setState] = useState([]);
	useEffect(() => {
		axios({
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			url,
			...options,
		})
			.then(res => res.data)
			.then(setState);
	}, []);
	return state;
}

export default useResource;
