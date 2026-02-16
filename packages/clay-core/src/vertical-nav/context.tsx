/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

import type {ChildrenFunction} from '../collection';

type VerticalNavContextProps = {
	activeKey?: React.Key | null;
	ariaCurrent?: 'page' | null;
	childrenRoot: React.MutableRefObject<
		React.ReactNode | ChildrenFunction<Object, null>
	>;
	close: (key: React.Key) => void;
	expandedKeys: Set<React.Key>;
	firstKey: React.Key;
	focusedElement?: HTMLElement | null;
	open: (key: React.Key) => void;
	spritemap?: string;
	toggle: (key: React.Key) => void;
};

const VerticalNavContext = createContext<
	VerticalNavContextProps & {
		setManualFocusedElement: Dispatch<SetStateAction<HTMLElement | null>>;
	}
>({
	activeKey: null,
	ariaCurrent: null,
	childrenRoot: {current: null},
	close: () => false,
	expandedKeys: new Set(),
	firstKey: '',
	focusedElement: null,
	open: () => false,
	setManualFocusedElement: () => null,
	spritemap: '',
	toggle: () => null,
});

function VerticalNavContextProvider({
	activeKey,
	ariaCurrent,
	children,
	childrenRoot,
	close,
	expandedKeys,
	firstKey,
	focusedElement,
	open,
	spritemap,
	toggle,
}: VerticalNavContextProps & {children: ReactNode}) {
	const [manualFocusedElement, setManualFocusedElement] =
		useState<HTMLElement | null>(null);

	useEffect(() => {
		if (focusedElement) {
			setManualFocusedElement(focusedElement);
		}
	}, [focusedElement]);

	return (
		<VerticalNavContext.Provider
			value={{
				activeKey,
				ariaCurrent,
				childrenRoot,
				close,
				expandedKeys,
				firstKey,
				focusedElement: manualFocusedElement,
				open,
				setManualFocusedElement,
				spritemap,
				toggle,
			}}
		>
			{children}
		</VerticalNavContext.Provider>
	);
}

function useVerticalNavContext() {
	return useContext(VerticalNavContext);
}

function useSetManualFocus() {
	const {setManualFocusedElement} = useContext(VerticalNavContext);

	return useCallback(
		(element: HTMLElement | null) => {
			setManualFocusedElement(element);

			element?.focus();
		},
		[setManualFocusedElement]
	);
}

export {VerticalNavContextProvider, useSetManualFocus, useVerticalNavContext};
