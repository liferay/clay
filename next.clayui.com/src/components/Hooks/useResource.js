/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState, useEffect} from 'react';
import axios from 'axios';

/**
 * @param {!string} url
 * @param {!object} options
 * @return {object|array}
 */
function useResource(url, options) {
	const [state, setState] = useState([]);
	useEffect(() => {
		axios({
			url,
			...options,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.data)
			.then(setState);
	}, []);
	return state;
}

export default useResource;
