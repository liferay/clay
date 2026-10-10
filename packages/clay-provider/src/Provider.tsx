/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayIconSpriteContext} from '@clayui/icon';
import React, {useContext, useMemo} from 'react';

import {DataClient} from './DataClient';
import {useReducedMotion} from './useReducedMotion';
import {useTabReturnFocusRingAnimation} from './useTabReturnFocusRingAnimation';

interface IProviderProps
	extends Omit<IProviderContext, 'client' | 'prefersReducedMotion'> {

	/**
	 * The content of the Provider.
	 */
	children: React.ReactNode;

	/**
	 * Defines the transition for the entire tree.
	 */
	reducedMotion?: 'user' | 'always' | 'never';

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
	 * Alerts with `autoClose` stay until dismissed. A nested Provider
	 * inherits the value of its parent when it does not set it.
	 */
	persistentAlerts?: boolean;

	prefersReducedMotion?: boolean;

	/**
	 * The theme corresponds to a CSS class to scope the application.
	 */
	theme?: string;
}

const Context = React.createContext<IProviderContext>({} as IProviderContext);

Context.displayName = 'ClayProviderContext';
export function Provider({
	children,
	persistentAlerts,
	reducedMotion = 'user',
	spritemap,
	storageMaxSize = 20,
	theme,
	...otherProps
}: IProviderProps) {

	// Use `useMemo` to instantiate the DataClient only once and when
	// updating the property.

	const client = useMemo(
		() => new DataClient({storageMaxSize}),
		[storageMaxSize]
	);

	const isReducedMotion = useReducedMotion(reducedMotion);

	useTabReturnFocusRingAnimation();

	const parentContext = useContext(Context);

	return (
		<Context.Provider
			value={{
				client,
				persistentAlerts:
					persistentAlerts ?? parentContext.persistentAlerts,
				prefersReducedMotion: isReducedMotion,
				theme,
				...otherProps,
			}}
		>
			<ClayIconSpriteContext.Provider value={spritemap}>
				{theme ? <div className={theme}>{children}</div> : children}
			</ClayIconSpriteContext.Provider>
		</Context.Provider>
	);
}
export function useProvider() {
	return useContext(Context);
}
