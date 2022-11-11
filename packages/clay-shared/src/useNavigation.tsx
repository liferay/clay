/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useCallback} from 'react';

import {Keys} from './Keys';
import {FOCUSABLE_ELEMENTS, isFocusable} from './useFocusManagement';

type Props<T> = {
	/**
	 * Flag to indicate the navigation behavior in the tab.
	 *
	 * - manual - it will just move the focus and tab activation is done just
	 * by pressing space or enter.
	 * - automatic - moves the focus to the tab and activates the tab.
	 */
	activation?: 'manual' | 'automatic';

	/**
	 * Reference of the parent element of the focusable elements.
	 */
	containeRef: React.MutableRefObject<T>;

	/**
	 * Flag to indicate if navigation should loop.
	 */
	loop?: boolean;

	/**
	 * Indicates whether the element's orientation is horizontal or vertical.
	 */
	orientation?: 'horizontal' | 'vertical';
};

const verticalKeys = [Keys.Up, Keys.Down, Keys.Home, Keys.End];
const horizontalKeys = [Keys.Left, Keys.Right, Keys.Home, Keys.End];

export function useNavigation<T extends HTMLElement | null>({
	activation = 'manual',
	containeRef,
	loop = false,
	orientation = 'horizontal',
}: Props<T>) {
	const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLElement>) => {
		if (!containeRef.current) {
			return;
		}

		const keys = orientation === 'vertical' ? verticalKeys : horizontalKeys;

		if (keys.includes(event.key)) {
			const tabs = Array.from<HTMLElement>(
				containeRef.current.querySelectorAll(
					FOCUSABLE_ELEMENTS.join(',')
				)
			).filter((element) =>
				isFocusable({
					contentEditable: element.contentEditable,
					disabled: element.getAttribute('disabled') !== null,
					offsetParent: element.offsetParent,
					tabIndex: 0,
					tagName: element.tagName,
				})
			);

			let tab: HTMLElement | undefined;

			switch (event.key) {
				case Keys.Left:
				case Keys.Right:
				case Keys.Down:
				case Keys.Up: {
					const activeElement = document.activeElement as HTMLElement;

					const position = tabs.indexOf(activeElement);
					const key =
						orientation === 'vertical' ? Keys.Up : Keys.Left;

					tab = tabs[event.key === key ? position - 1 : position + 1];

					if (loop && !tab) {
						tab = tabs[event.key === key ? tabs.length - 1 : 0];
					}

					break;
				}
				default:
					tab = tabs[event.key === Keys.Home ? 0 : tabs.length - 1];
					break;
			}

			if (tab) {
				tab.focus();

				if (activation === 'automatic') {
					tab.click();
				}
			}
		}
	}, []);

	return {onKeyDown};
}
