/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

export const DropDownContext = React.createContext({
	close: () => {},
	closeOnClick: false,
});
