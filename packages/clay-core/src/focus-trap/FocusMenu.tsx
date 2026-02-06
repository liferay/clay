/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {
	FOCUSABLE_ELEMENTS,
	getFocusableList,
	useInteractionFocus,
} from '@clayui/shared';
import React, {useEffect} from 'react';

type FocusMenuProps<T, E extends HTMLElement> = {
	children: T;
	focusableElements?: Array<string>;
	menuRef: React.MutableRefObject<E> | React.RefObject<E>;
};

/**
 * TODO: Move the implementation to be part of the useNavigation hook so that
 * it is an internal function that can be called to focus on the first item.
 */
export function FocusMenu<T, E extends HTMLElement>({
	children,
	menuRef,
	focusableElements = FOCUSABLE_ELEMENTS,
}: FocusMenuProps<T, E>): JSX.Element {
	const {isFocusVisible} = useInteractionFocus();

	useEffect(() => {
		if (!isFocusVisible()) {
			return;
		}

		// After a few milliseconds querying the elements in the DOM
		// inside the menu. This especially when the menu is not
		// rendered yet only after the menu is opened, React needs
		// to commit the changes to the DOM so that the elements are
		// visible and we can move the focus.

		setTimeout(() => {
			const list = getFocusableList(menuRef, focusableElements);

			if (list.length) {
				list[0]!.focus();
			}
		}, 10);
	}, []);

	return <>{children}</>;
}
