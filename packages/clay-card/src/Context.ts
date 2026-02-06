/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
