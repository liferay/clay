/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {createContext, useContext} from 'react';

interface IContext {

	/**
	 * Ref of the container to align the dropdown.
	 */
	containerElementRef: React.RefObject<HTMLElement>;

	/**
	 * Status of a data fetch is happening, this will help
	 * <ClayAutocomplete.Input /> add necessary markups.
	 */
	loading: boolean;

	/**
	 * Changes the loading status and causes a new rendering.
	 */
	onLoadingChange: (loading: boolean) => void;
}

export const LegacyContext = createContext({} as IContext);

LegacyContext.displayName = 'ClayAutocompleteLegacyContext';

type AutocompleteContext = {
	activeDescendant?: React.Key;
	onActiveDescendant: (value: React.Key) => void;
	onClick: (value: string) => void;
	selectedKeys?: Array<React.Key>;
};

export const AutocompleteContext = createContext({} as AutocompleteContext);

export function useAutocompleteState() {
	return useContext(AutocompleteContext);
}
