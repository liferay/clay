/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useMemo} from 'react';

let counter = 0;

export function useId() {
	return useMemo(() => {
		counter++;

		return `clay-id-${counter}`;
	}, []);
}
