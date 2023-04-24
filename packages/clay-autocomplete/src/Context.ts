/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createContext, useContext} from 'react';

interface IContext {
	/**
	 * Status of a data fetch is happening, this will help
	 * <ClayAutocomplete.Input /> add necessary markups.
	 */
	loading: boolean;

	/**
	 * Changes the loading status and causes a new rendering.
	 */
	onLoadingChange: (loading: boolean) => void;

	/**
	 * Ref of the container to align the dropdown.
	 */
	containerElementRef: React.RefObject<HTMLElement>;
}

export const LegacyContext = createContext({} as IContext);

LegacyContext.displayName = 'ClayAutocompleteLegacyContext';

type AutocompleteContext = {
	activeDescendant?: React.Key;
	onActiveDescendant: (value: React.Key) => void;
	onClick: (value: string) => void;
};

export const AutocompleteContext = createContext({} as AutocompleteContext);

export function useAutocompleteState() {
	return useContext(AutocompleteContext);
}
