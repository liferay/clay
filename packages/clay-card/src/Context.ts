/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

export interface IContext {
	/**
	 * Flag to indicate whether to use card as a horizontal/folder card.
	 * See the following documenation:
	 * https://liferay.design/lexicon/core-components/cards/cards-variation/
	 */
	horizontal?: boolean;

	/**
	 * Flag to indicate whether to use card as a navigation card.
	 * See the following documenation:
	 * https://liferay.design/lexicon/core-components/cards/cards-navigation/
	 */
	interactive?: boolean;
}

const context = React.createContext({} as IContext);

context.displayName = 'ClayCardContext';

export default context;
