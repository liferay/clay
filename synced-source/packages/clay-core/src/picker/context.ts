/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
