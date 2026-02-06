/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

type Context = {
	close: () => void;
	closeOnClick: boolean;
	filterKey?: string;
	onSearch: (value: string) => void;
	search: string;
	tabFocus: boolean;
};

export const DropDownContext = React.createContext<Context>({
	close: () => {},
	closeOnClick: false,
	tabFocus: true,
} as Context);
