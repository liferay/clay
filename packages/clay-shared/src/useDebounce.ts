/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useEffect, useState} from 'react';

// Credits to Gabe Ragland
// (https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci)
const useDebounce = (value: any, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	return debouncedValue;
};

export {useDebounce};
