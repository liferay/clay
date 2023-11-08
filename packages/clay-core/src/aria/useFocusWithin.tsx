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

function getId(element: HTMLElement) {
	const [type, id] = element.getAttribute('data-id')!.split(',');

	return type === 'number' ? Number(id) : id!;
}

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

		setFocusId(getId(item));
	}, []);

	// Revalidates the focus if the item no longer exists in the list.
	useEffect(() => {
		if (!focusId) {
			return;
		}

		// TODO: Get this information using the collection API
		const items = getFocusableList(containerRef, focusableElements);

		const hasItem = items.find((item) => focusId === getId(item));

		if (!hasItem && items.length) {
			setFocusId(getId(items[0]!));
		}
	}, [children]);

	return (
		<FocusContext.Provider value={{focusId, onFocusChange: setFocusId}}>
			{children}
		</FocusContext.Provider>
	);
}

type FocusWithinProps = {
	id: React.Key;
	disabled: boolean;
	onFocusChange?: (isFocused: boolean) => void;
};

export function useFocusWithin({
	disabled,
	id,
	onFocusChange: onFocusChanged,
}: FocusWithinProps) {
	const {focusId, onFocusChange} = useContext(FocusContext);

	const onFocus = useCallback(
		function onFocusInner<T>(event: React.FocusEvent<T>) {
			if (focusId !== id) {
				event.stopPropagation();
				onFocusChange(id);

				if (onFocusChanged) {
					onFocusChanged(true);
				}
			}
		},
		[focusId]
	);

	const onBlur = useCallback(
		function onFocusInner() {
			if (onFocusChanged) {
				onFocusChanged(false);
			}
		},
		[focusId]
	);

	return useMemo(() => {
		if (disabled) {
			return {
				tabIndex: -1,
			};
		}

		return {
			onBlur,
			onFocus,
			tabIndex: focusId === id ? 0 : -1,
		};
	}, [focusId, onFocus, onBlur]);
}
