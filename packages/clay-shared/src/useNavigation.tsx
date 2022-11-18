/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useCallback, useEffect, useRef} from 'react';

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
	 * Callback called to get the position of the selected element.
	 */
	getPosition?: (list: Array<HTMLElement>) => number;

	/**
	 * Flag to indicate if navigation should loop.
	 */
	loop?: boolean;

	/**
	 * Callback is called when the intent is to move to the element.
	 */
	onNavigate?: (element: HTMLElement, index: number) => void;

	/**
	 * Indicates whether the element's orientation is horizontal or vertical.
	 */
	orientation?: 'horizontal' | 'vertical';

	/**
	 * Flag to enable the possibility of moving the focus when typing values
	 * that correspond to some item in the menu.
	 */
	typeahead?: boolean;

	/**
	 * Flag to indicate list is visible.
	 */
	visible?: boolean;
};

const verticalKeys = [Keys.Up, Keys.Down, Keys.Home, Keys.End];
const horizontalKeys = [Keys.Left, Keys.Right, Keys.Home, Keys.End];

export function useNavigation<T extends HTMLElement | null>({
	activation = 'manual',
	containeRef,
	getPosition,
	loop = false,
	onNavigate,
	orientation = 'horizontal',
	typeahead = false,
	visible = false,
}: Props<T>) {
	const timeoutIdRef = useRef<any>();
	const stringRef = useRef('');
	const prevIndexRef = useRef<number | null>(-1);
	const matchIndexRef = useRef<number | null>(null);

	useEffect(() => {
		if (visible) {
			clearTimeout(timeoutIdRef.current);
			matchIndexRef.current = null;
			stringRef.current = '';
		}
	}, [visible]);

	const onKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLElement>) => {
			if (!containeRef.current) {
				return;
			}

			const keys =
				orientation === 'vertical' ? verticalKeys : horizontalKeys;
			const alternativeKeys =
				orientation === 'vertical' ? horizontalKeys : verticalKeys;

			if (
				keys.includes(event.key) ||
				(typeahead && !alternativeKeys.includes(event.key))
			) {
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
						const activeElement =
							document.activeElement as HTMLElement;

						let position = tabs.indexOf(activeElement);

						if (getPosition) {
							position = getPosition(tabs);
						}

						if (position === -1) {
							break;
						}

						const key =
							orientation === 'vertical' ? Keys.Up : Keys.Left;

						tab =
							tabs[
								event.key === key ? position - 1 : position + 1
							];

						if (loop && !tab) {
							tab = tabs[event.key === key ? tabs.length - 1 : 0];
						}

						break;
					}
					case Keys.Home:
					case Keys.End:
						tab =
							tabs[event.key === Keys.Home ? 0 : tabs.length - 1];
						break;
					default: {
						if (!typeahead) {
							return;
						}

						if (
							!event.currentTarget.contains(
								event.target as HTMLElement
							)
						) {
							return;
						}

						if (
							stringRef.current.length > 0 &&
							stringRef.current[0] !== Keys.Spacebar
						) {
							if (event.key === Keys.Spacebar) {
								event.preventDefault();
								event.stopPropagation();
							}
						}

						if (
							event.key.length !== 1 ||
							event.ctrlKey ||
							event.metaKey ||
							event.altKey
						) {
							return;
						}

						if (stringRef.current === event.key) {
							stringRef.current = '';
							prevIndexRef.current = matchIndexRef.current;
						}

						stringRef.current += event.key;

						clearTimeout(timeoutIdRef.current);

						timeoutIdRef.current = setTimeout(() => {
							stringRef.current = '';
							prevIndexRef.current = matchIndexRef.current;
						}, 1000);

						const prevIndex = prevIndexRef.current;

						const orderedList = [
							...tabs.slice((prevIndex ?? 0) + 1),
							...tabs.slice(0, (prevIndex ?? 0) + 1),
						];

						tab = orderedList.find(
							(element) =>
								element.innerText
									?.toLowerCase()
									.indexOf(
										stringRef.current.toLocaleLowerCase()
									) === 0
						);

						if (tab) {
							matchIndexRef.current = tabs.indexOf(tab);
						}
						break;
					}
				}

				if (tab) {
					if (onNavigate) {
						onNavigate(tab, tabs.indexOf(tab));
					} else {
						tab.focus();
					}

					if (activation === 'automatic') {
						tab.click();
					}
				}
			}
		},
		[getPosition]
	);

	return {onKeyDown};
}
