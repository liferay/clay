/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useEffect, useRef} from 'react';

export function usePrevious<T>(value: T) {
	const ref = useRef<T>(value);

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
}
