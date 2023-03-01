/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useEffect, useRef} from 'react';

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
	 * The id of the currently active item that is highlighted.
	 * Typically used when navigation is not done via focus.
	 */
	active?: string;

	/**
	 * Reference of the parent element of the focusable elements.
	 */
	containerRef: React.MutableRefObject<T>;

	focusableElements?: Array<string>;

	/**
	 * Flag to indicate if navigation should loop.
	 */
	loop?: boolean;

	/**
	 * Callback is called when the intent is to move to the element.
	 */
	onNavigate?: (element: HTMLElement, index: number | null) => void;

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
	active,
	containerRef,
	focusableElements = FOCUSABLE_ELEMENTS,
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

	// An event can be scheduled when the content is not visible in the DOM, it
	// will be executed in sequence after the element is visible in the DOM.
	const pendingEventStack = useRef<Array<React.KeyboardEvent<HTMLElement>>>(
		[]
	);

	useEffect(() => {
		if (!visible) {
			clearTimeout(timeoutIdRef.current);
			matchIndexRef.current = null;
			stringRef.current = '';
		}
	}, [visible]);

	const accessibilityFocus = useCallback(
		(tab: HTMLElement, tabs?: Array<HTMLElement>) => {
			onNavigate!(tab, tabs ? tabs.indexOf(tab) : null);

			const child = containerRef.current!
				.firstElementChild as HTMLElement;

			if (isScrollable(child)) {
				maintainScrollVisibility(tab, child);
			}

			if (!isElementInView(tab)) {
				tab.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
				});
			}
		},
		[]
	);

	const onKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLElement>) => {
			if (!containerRef.current) {
				event.persist();
				pendingEventStack.current.push(event);

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
				const tabs = getFocusableList(containerRef, focusableElements);

				let tab: HTMLElement | undefined;

				switch (event.key) {
					case Keys.Left:
					case Keys.Right:
					case Keys.Down:
					case Keys.Up: {
						const activeElement =
							document.activeElement as HTMLElement;

						let position = tabs.indexOf(activeElement);

						if (typeof active === 'string') {
							position = tabs.findIndex(
								(element) =>
									element.getAttribute('id') === active
							);
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
						const target = event.target as HTMLElement;

						if (
							!typeahead ||
							target.tagName === 'INPUT' ||
							event.key === Keys.Tab
						) {
							return;
						}

						if (
							event.currentTarget &&
							!event.currentTarget.contains(target)
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

						event.stopPropagation();

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
								(element.innerText ?? element.textContent)
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
					event.preventDefault();
					if (onNavigate) {
						accessibilityFocus(tab, tabs);
					} else {
						tab.focus();
					}

					if (activation === 'automatic') {
						tab.click();
					}
				}
			}
		},
		[active]
	);

	useEffect(() => {
		// Moves the scroll to the element with visual "focus" if it exists.
		if (visible && containerRef.current && active && onNavigate) {
			const child = containerRef.current.firstElementChild as HTMLElement;
			const activeElement = document.getElementById(active);

			if (activeElement && isScrollable(child)) {
				maintainScrollVisibility(activeElement, child);
			}
		}
	}, [visible]);

	useEffect(() => {
		if (visible && pendingEventStack.current.length !== 0) {
			for (
				let index = 0;
				index < pendingEventStack.current.length;
				index++
			) {
				const event = pendingEventStack.current.shift();

				onKeyDown(event!);
			}
		}
	}, [visible]);

	const navigationProps = {onKeyDown};

	return {accessibilityFocus, navigationProps};
}

export function getFocusableList<T extends HTMLElement | null>(
	containeRef: React.MutableRefObject<T>,
	focusableElements: Array<string> = FOCUSABLE_ELEMENTS
) {
	if (!containeRef.current) {
		return [];
	}

	return Array.from<HTMLElement>(
		containeRef.current.querySelectorAll(focusableElements.join(','))
	).filter((element) =>
		isFocusable({
			contentEditable: element.contentEditable,
			disabled: element.getAttribute('disabled') !== null,
			offsetParent: element.offsetParent,
			tabIndex: 0,
			tagName: element.tagName,
		})
	);
}

export function isTypeahead(event: React.KeyboardEvent<HTMLElement>) {
	return (
		event.key.length === 1 &&
		!event.ctrlKey &&
		!event.metaKey &&
		!event.altKey
	);
}

function isElementInView(element: HTMLElement) {
	var bounding = element.getBoundingClientRect();

	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	);
}

function isScrollable(element: HTMLElement) {
	return element && element.clientHeight < element.scrollHeight;
}

function maintainScrollVisibility(
	activeElement: HTMLElement,
	scrollParent: HTMLElement
) {
	const {offsetHeight, offsetTop} = activeElement;
	const {offsetHeight: parentOffsetHeight, scrollTop} = scrollParent;

	const isAbove = offsetTop < scrollTop;
	const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;

	if (isAbove) {
		scrollParent.scrollTo(0, offsetTop);
	} else if (isBelow) {
		scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
	}
}
