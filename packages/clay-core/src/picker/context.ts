/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createContext, useContext} from 'react';

import type {InternalDispatch} from '@clayui/shared';

type PickerContextProps = {
	onSelectionChange: InternalDispatch<React.Key>;
	selectedKey: React.Key;
	onItemRendered: (value: string) => void;
	activeDescendant: string;
	onActiveDescendant: (value: string) => void;
};

export const PickerContext = createContext({} as PickerContextProps);

export function usePickerState() {
	return useContext(PickerContext);
}
