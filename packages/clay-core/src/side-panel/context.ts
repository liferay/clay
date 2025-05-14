/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createContext, useContext} from 'react';

type Context = {
	onOpenChange: (open: boolean) => void;
	open: boolean;
};

export const SidePanelContext = createContext<Context | null>(null);

export function useSidePanel() {
	const context = useContext(SidePanelContext);

	if (context === null) {
		throw new Error('useSidePanel must be used within SidePanel.');
	}

	return context;
}
