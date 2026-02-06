/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useRef} from 'react';

export function useIsFirstRender(): boolean {
	const isFirstRef = useRef(true);

	if (isFirstRef.current) {
		isFirstRef.current = false;

		return true;
	}

	return isFirstRef.current;
}
