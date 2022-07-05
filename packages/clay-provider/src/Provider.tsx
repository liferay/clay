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
	 * Determines whether a focus ring should be shown to indicate
	 * keyboard focus.
	 */
	focusRing?: boolean;

	/**
	 * The theme corresponds to a CSS class to scope the application.
	 */
	theme?: string;
}

const Context = React.createContext<IProviderContext>({});

Context.displayName = 'ClayProviderContext';

export const Provider = ({
	children,
	focusRing = false,
	spritemap,
	theme,
	...otherProps
}: IProviderProps) => (
	<Context.Provider value={{focusRing, theme, ...otherProps}}>
		<ClayIconSpriteContext.Provider value={spritemap}>
			{theme ? <div className={theme}>{children}</div> : children}
		</ClayIconSpriteContext.Provider>
	</Context.Provider>
);

export const useProvider = () => {
	return useContext(Context);
};
