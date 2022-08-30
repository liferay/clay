/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayIconSpriteContext} from '@clayui/icon';
import React, {useContext, useMemo} from 'react';

import {DataClient} from './DataClient';

interface IProviderProps extends Omit<IProviderContext, 'client'> {
	/**
	 * The content of the Provider.
	 */
	children: React.ReactNode;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap: string;

	/**
	 * Set the amount of items that can be cached, set to zero will be
	 * treated as infinite, be aware to set an ideal size to offer a
	 * positive experience for your user but not use a large amount of memory.
	 */
	storageMaxSize?: number;
}

interface IProviderContext {
	client: DataClient;

	/**
	 * The theme corresponds to a CSS class to scope the application.
	 */
	theme?: string;
}

const Context = React.createContext<IProviderContext>({} as IProviderContext);

Context.displayName = 'ClayProviderContext';

export const Provider = ({
	children,
	spritemap,
	storageMaxSize = 20,
	theme,
	...otherProps
}: IProviderProps) => {
	// Use `useMemo` to instantiate the DataClient only once and when
	// updating the property.
	const client = useMemo(
		() => new DataClient({storageMaxSize}),
		[storageMaxSize]
	);

	return (
		<Context.Provider value={{client, theme, ...otherProps}}>
			<ClayIconSpriteContext.Provider value={spritemap}>
				{theme ? <div className={theme}>{children}</div> : children}
			</ClayIconSpriteContext.Provider>
		</Context.Provider>
	);
};

export const useProvider = () => {
	return useContext(Context);
};
