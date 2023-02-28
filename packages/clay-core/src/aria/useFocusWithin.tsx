/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {getFocusableList} from '@clayui/shared';
import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

type FocusContext = {
	focusId: React.Key | null;
	onFocusChange: (focusId: React.Key) => void;
};

const FocusContext = React.createContext<FocusContext>({} as FocusContext);

type Props<T> = {
	children: React.ReactNode;
	containerRef: React.RefObject<T>;
	focusableElements: Array<string>;
};

export function FocusWithinProvider<T extends HTMLElement>({
	children,
	containerRef,
	focusableElements,
}: Props<T>) {
	const [focusId, setFocusId] = useState<React.Key | null>(null);

	useEffect(() => {
		// TODO: Get this information using the collection API
		const item = getFocusableList(containerRef, focusableElements)[0];

		if (!item) {
			return;
		}

		const [type, id] = item.getAttribute('data-id')!.split(',');
		const key = type === 'number' ? Number(id) : id;

		setFocusId(key);
	}, []);

	return (
		<FocusContext.Provider value={{focusId, onFocusChange: setFocusId}}>
			{children}
		</FocusContext.Provider>
	);
}

type FocusWithinProps = {
	id: React.Key;
	disabled: boolean;
};

export function useFocusWithin({disabled, id}: FocusWithinProps) {
	const {focusId, onFocusChange} = useContext(FocusContext);

	const onFocus = useCallback(() => {
		if (focusId !== id) {
			onFocusChange(id);
		}
	}, [focusId]);

	return useMemo(() => {
		if (disabled) {
			return {
				tabIndex: -1,
			};
		}

		return {
			onFocus,
			tabIndex: focusId === id ? 0 : -1,
		};
	}, [focusId, onFocus]);
}
