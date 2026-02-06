/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {createContext, useContext} from 'react';

type Context = {
	onOpenChange: (open: boolean) => void;
	open: boolean;
	titleId: string;
};

export const SidePanelContext = createContext<Context | null>(null);

export function useSidePanel() {
	const context = useContext(SidePanelContext);

	if (context === null) {
		throw new Error('useSidePanel must be used within SidePanel.');
	}

	return context;
}
