/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {createContext, useContext} from 'react';

import type {InternalDispatch} from '@clayui/shared';

type PickerContextProps = {
	activeDescendant: React.Key;
	isMobile: boolean;
	onActiveDescendant: (value: React.Key) => void;
	onSelectionChange: InternalDispatch<React.Key>;
	selectedKey: React.Key;
};

export const PickerContext = createContext({} as PickerContextProps);

export function usePickerState() {
	return useContext(PickerContext);
}
