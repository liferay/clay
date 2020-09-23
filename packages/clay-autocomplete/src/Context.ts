/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

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

const context = React.createContext({} as IContext);

context.displayName = 'ClayAutocompleteContext';

export default context;
