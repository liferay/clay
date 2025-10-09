/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createContext} from 'react';

type ValueContext = {
	ariaCurrent: 'page' | null;
};

export const NavigationBarContext = createContext<ValueContext>({
	ariaCurrent: 'page',
});
