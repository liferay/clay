/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useEffect, useRef} from 'react';

import {Keys} from './Keys';
import {FOCUSABLE_ELEMENTS, isFocusable} from './useFocusManagement';

import type {Virtualizer} from '@tanstack/react-virtual';

// TODO: To avoid circular dependency we are just copying but we must remove this
// when moving this into the core package.
type CollectionState = {
	UNSAFE_virtualizer?: Virtualizer<HTMLElement, Element>;
	collection: JSX.Element;
	getFirstItem: () => {key: React.Key; value: string; index: number};
	getItem: (key: React.Key) => {value: string; index: number};
	getItems: () => Array<React.Key>;
	getLastItem: () => {key: React.Key; value: string; index: number};
	size?: number;
	virtualize: boolean;
};

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
	active?: React.Key;

	/**
	 * Reference of the parent element of the focusable elements.
	 */
	containerRef: React.MutableRefObject<T>;

	/**
	 * Defines that the navigation is done with the collection API when
	 * it's declared.
	 */
	collection?: CollectionState;

	focusableElements?: Array<string>;

	/**
	 * Flag to indicate if navigation should loop.
	 */
	loop?: boolean;

	/**
	 * Callback is called when the intent is to move to the element.
	 */
	onNavigate?: (item: HTMLElement | React.Key, index: number | null) => void;

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
	collection,
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
		(
			item: HTMLElement | React.Key,
			items?: Array<HTMLElement> | Array<React.Key>
		) => {
			const index = items ? items.indexOf(item as any) : null;
			const element =
				item instanceof HTMLElement
					? item
					: document.getElementById(String(item))!;

			if (onNavigate) {
				onNavigate(item, index);
			}

			if (collection?.virtualize) {
				const isEnd =
					collection.UNSAFE_virtualizer!.options.count - 1 === index;
				const isStart = index === 0;

				collection.UNSAFE_virtualizer!.scrollToIndex(index!, {
					align: 'auto',
					behavior: isStart || isEnd ? 'auto' : 'smooth',
				});

				if (!onNavigate && !element) {
					setTimeout(() => {
						const nextFocus = containerRef.current!.querySelector(
							`[data-focus="${item}"]`
						) as HTMLElement;

						if (nextFocus) {
							nextFocus.focus();
						}
					}, 20);
				}

				return;
			}

			const child = isScrollable(containerRef.current!)
				? (containerRef.current as HTMLElement)
				: (containerRef.current!.firstElementChild as HTMLElement);

			if (isScrollable(child)) {
				maintainScrollVisibility(element, child);
			}

			if (!isElementInView(element)) {
				element.scrollIntoView({
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
				const items = collection
					? collection.getItems()
					: getFocusableList(containerRef, focusableElements);

				let item: HTMLElement | React.Key | undefined;

				switch (event.key) {
					case Keys.Left:
					case Keys.Right:
					case Keys.Down:
					case Keys.Up: {
						let position: number;

						const key =
							orientation === 'vertical' ? Keys.Up : Keys.Left;

						if (collection && typeof active === 'string') {
							position = (items as Array<React.Key>).indexOf(
								active!
							);
						} else if (collection) {
							const activeElement =
								document.activeElement as HTMLElement;

							const focusKey =
								activeElement.getAttribute('data-focus');

							position = (items as Array<React.Key>).indexOf(
								focusKey!
							);

							if (position === -1) {
								item =
									event.key === key
										? collection.getLastItem().key
										: collection.getFirstItem().key;
							}
						} else {
							const activeElement =
								document.activeElement as HTMLElement;

							position = (items as Array<HTMLElement>).indexOf(
								activeElement
							);

							if (typeof active === 'string') {
								position = (
									items as Array<HTMLElement>
								).findIndex(
									(element) =>
										element.getAttribute('id') === active
								);
							}
						}

						if (position === -1) {
							break;
						}

						item =
							items[
								event.key === key ? position - 1 : position + 1
							];

						if (loop && !item) {
							item =
								items[event.key === key ? items.length - 1 : 0];
						}

						break;
					}
					case Keys.Home:
					case Keys.End:
						item =
							items[
								event.key === Keys.Home ? 0 : items.length - 1
							];
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
							...items.slice((prevIndex ?? 0) + 1),
							...items.slice(0, (prevIndex ?? 0) + 1),
						];

						item = orderedList.find((item) => {
							const value =
								item instanceof HTMLElement
									? item.innerText ?? item.textContent
									: collection?.getItem(item).value;

							return (
								value
									?.toLowerCase()
									.indexOf(
										stringRef.current.toLocaleLowerCase()
									) === 0
							);
						});

						if (item) {
							// @ts-ignore
							matchIndexRef.current = items.indexOf(item);
						}
						break;
					}
				}

				if (item) {
					event.preventDefault();
					const element =
						item instanceof HTMLElement
							? item
							: document.getElementById(String(item))!;

					if (onNavigate || !element) {
						accessibilityFocus(item, items);
					} else {
						element.focus();
					}

					if (activation === 'automatic') {
						element.click();
					}
				}
			}
		},
		[active]
	);

	useEffect(() => {
		// Moves the scroll to the element with visual "focus" if it exists.
		if (
			visible &&
			containerRef.current &&
			active &&
			onNavigate &&
			!collection?.virtualize
		) {
			const child = isScrollable(containerRef.current)
				? containerRef.current!
				: (containerRef.current.firstElementChild as HTMLElement);
			const activeElement = document.getElementById(String(active));

			if (activeElement && isScrollable(child)) {
				maintainScrollVisibility(activeElement, child);
			}
		} else if (visible && active && collection?.virtualize) {
			collection.UNSAFE_virtualizer!.scrollToIndex(
				collection.getItem(active).index,
				{align: 'center', behavior: 'auto'}
			);
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
	containeRef: React.MutableRefObject<T> | React.RefObject<T>,
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
	const bounding = element.getBoundingClientRect();

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
