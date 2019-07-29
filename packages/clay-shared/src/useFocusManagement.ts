/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useEffect, useRef} from 'react';

type FocusManager = {
	identifier: string;
	portal?: boolean;
	value: HTMLElement;
};

const TAB_KEY_CODE = 9;
const FOCUSABLE_ELEMENTS = [
	'a[href]',
	'[contenteditable]',
	'[tabindex]:not([tabindex^="-"])',
	'area[href]',
	'button:not([disabled]):not([aria-hidden])',
	'embed',
	'iframe',
	'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
	'object',
	'select:not([disabled]):not([aria-hidden])',
	'textarea:not([disabled]):not([aria-hidden])',
];

export function useFocusManagement(loop: boolean = false) {
	const focusManagerRef = useRef<Array<FocusManager>>([]);
	const lastPositionRef = useRef<number | null>(null);
	const nextElementOutsideScopeRef = useRef<HTMLElement | null>(null);

	const createScope = (
		ref: any,
		identifier: string,
		portal: boolean = false
	) => {
		const elementIndex = focusManagerRef.current.findIndex(
			el => (el && el.identifier) === identifier
		);
		const schema = {
			identifier,
			portal,
			value: ref,
		};

		if (ref) {
			if (elementIndex === -1) {
				focusManagerRef.current.push(schema);
			} else {
				focusManagerRef.current[elementIndex] = schema;
			}
		} else {
			focusManagerRef.current.splice(elementIndex, 1);
		}
	};

	const getFocusableElementOutsideScope = (
		element: HTMLElement,
		backwards: boolean
	) => {
		const firstElement = element;

		element = element.parentNode as HTMLElement;

		const match = () => {
			if (!element || element.nodeType !== 1) {
				return false;
			}

			const focusableElements = Array.prototype.slice.call(
				element.querySelectorAll(FOCUSABLE_ELEMENTS as any)
			);
			const activeElementFocus = focusableElements.findIndex(
				el => el === firstElement
			);
			const item = backwards
				? activeElementFocus - 1
				: activeElementFocus + 1;

			if (focusableElements[item]) {
				element = focusableElements[item];

				return true;
			}

			return false;
		};

		while (element && !match()) {
			element = element.parentNode as HTMLElement;
		}

		return element;
	};

	const getElementOutsidePortal = (element: FocusManager) => {
		while (element && !element.portal === false) {
			const index = focusManagerRef.current.findIndex(
				el => el.identifier === element.identifier
			);
			element = focusManagerRef.current[index - 1];
		}

		return element;
	};

	const handleNextElementOutsideScope = (event: KeyboardEvent) => {
		if (event.keyCode === TAB_KEY_CODE && event.shiftKey) {
			event.preventDefault();
			lastPositionRef.current = focusManagerRef.current.length;
			moveFocusInScope(true);
		}
	};

	const moveFocusInScope = (
		backwards: boolean = false,
		sequence: number = 0
	) => {
		const size = focusManagerRef.current.length - 1;
		const activeNode = document.activeElement;
		const firstPosition = lastPositionRef.current === 0;
		const endPosition =
			lastPositionRef.current !== null &&
			size === lastPositionRef.current;
		const firstPositionOrNullWithMoveBackwards =
			(lastPositionRef.current === null || firstPosition) && backwards;
		const endPositionWithMoveForward = endPosition && !backwards;

		// Get the parent elements or focusable children of the
		// non-portal element to move focus.
		if (
			!loop &&
			(firstPositionOrNullWithMoveBackwards || endPositionWithMoveForward)
		) {
			const elementOutsidePortal = getElementOutsidePortal(
				focusManagerRef.current[
					firstPosition || lastPositionRef.current === null ? 0 : size
				]
			);
			const elementOutsideScope = getFocusableElementOutsideScope(
				elementOutsidePortal.value,
				backwards
			);

			// If can not find some element that is focusable in the DOM,
			// continue with the focus loop.
			if (
				elementOutsideScope &&
				(elementOutsideScope as any) !== document &&
				focusManagerRef.current.findIndex(
					el => el.value === elementOutsideScope
				) === -1
			) {
				elementOutsideScope.focus();
				lastPositionRef.current = null;

				// Control the tab + shift keydown of the element next to the scopo to
				// return the focus to the last scopo element, this is necessary for
				// when have React Portal.
				if (!backwards) {
					if (
						nextElementOutsideScopeRef.current !== null &&
						nextElementOutsideScopeRef.current !==
							elementOutsideScope
					) {
						nextElementOutsideScopeRef.current.removeEventListener(
							'keydown',
							handleNextElementOutsideScope
						);
					}

					elementOutsideScope.addEventListener(
						'keydown',
						handleNextElementOutsideScope
					);
					nextElementOutsideScopeRef.current = elementOutsideScope;
				}

				return null;
			}
		}

		if (
			lastPositionRef.current === null ||
			(firstPosition && backwards) ||
			endPositionWithMoveForward
		) {
			if (backwards) {
				lastPositionRef.current = size;
			} else {
				// Causes interaction not to start from the first item in the queue
				// and continues to focus regardless of where it is.
				const activeElementIndex = focusManagerRef.current.findIndex(el => el.value === activeNode);

				// Fixes the last position, this can happen in cases where list
				// elements have been deleted but the lastPosition has not been reset or when
				// the active element is the last in the queue.
				if ((activeElementIndex + 1) > size) {
					// If there is no element outside the scope focusable,
					// then go back to the beginning.
					if (sequence === 1) {
						lastPositionRef.current = 0;
					} else {
						lastPositionRef.current = activeElementIndex;

						// Call `moveFocusInScope` to check for any out-of-scope
						// elements that can be focused.
						moveFocusInScope(backwards, sequence + 1);
						return;
					}
				} else {
					lastPositionRef.current = activeElementIndex !== -1 ? activeElementIndex + 1 : 0;
				}
			}
		} else {
			lastPositionRef.current = backwards
				? lastPositionRef.current - 1
				: lastPositionRef.current + 1;
		}

		const {value} = focusManagerRef.current[lastPositionRef.current];

		// Hack to check if element is visible
		if (!value.offsetParent) {
			// Prevent falling into an infinite loop. It's rare but it could happen.
			if (sequence !== size) {
				moveFocusInScope(backwards, sequence + 1);
			}
		} else {
			value.focus();
		}
	};

	// Should reset the last positon when any click on the screen occurs.
	const handleDocumentClick = () => {
		if (lastPositionRef.current !== null) {
			lastPositionRef.current = null;
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleDocumentClick);

		return () => {
			document.removeEventListener('click', handleDocumentClick);
			focusManagerRef.current = [];
			if (nextElementOutsideScopeRef.current) {
				nextElementOutsideScopeRef.current.removeEventListener(
					'keydown',
					handleNextElementOutsideScope
				);

				// Sets the value to null only to remove reference and prevent
				// memory leak cases.
				nextElementOutsideScopeRef.current = null;
			}
		};
	}, []);

	return {
		createScope,
		focusNext: () => moveFocusInScope(),
		focusPrevious: () => moveFocusInScope(true),
	};
}
