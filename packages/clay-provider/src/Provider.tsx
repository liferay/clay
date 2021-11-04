/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayIconSpriteContext} from '@clayui/icon';
import React, {useContext} from 'react';

interface IProviderProps extends IProviderContext {
	/**
	 * The content of the Provider.
	 */
	children: React.ReactNode;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap: string;
}

interface IProviderContext {
	/**
	 * The theme corresponds to a CSS class to scope the application.
	 */
	theme?: string;
}

const Context = React.createContext<IProviderContext>({});

Context.displayName = 'ClayProviderContext';

export const Provider = ({
	children,
	spritemap,
	theme,
	...otherProps
}: IProviderProps) => (
	<Context.Provider value={{theme, ...otherProps}}>
		<ClayIconSpriteContext.Provider value={spritemap}>
			{theme ? <div className={theme}>{children}</div> : children}
		</ClayIconSpriteContext.Provider>
	</Context.Provider>
);

export const useProvider = () => {
	return useContext(Context);
};
