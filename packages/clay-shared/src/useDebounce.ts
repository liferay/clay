/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

// Credits to Gabe Ragland
// (https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci)

export function useDebounce(value: any, delay: number) {
	const [debouncedValue, setDebouncedValue] = React.useState(value);

	React.useEffect(
		() => {
			const handler = setTimeout(() => {
				setDebouncedValue(value);
			}, delay);

			return () => {
				clearTimeout(handler);
			};
		},

		// This is required when the `object` has lost the
		// reference plus the values are the same, `React.useEffect`
		// uses `Object.is` or equivalent under the covers.
		// For some reason the reference is being lost.

		typeof value === 'object' && value !== null
			? [...Object.keys(value), ...Object.values(value)]
			: [value]
	);

	return debouncedValue;
}
