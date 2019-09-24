/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useCallback, useEffect, useRef} from 'react';

const TAB_KEY_CODE = 9;

// https://github.com/facebook/react/blob/master/packages/shared/ReactWorkTags.js#L39
const HostComponent = 5;

export function useFocusManagement(scope: React.RefObject<null | HTMLElement>) {
	const nextElementOutsideScopeRef = useRef<HTMLElement | null>(null);

	// https://github.com/facebook/react/pull/15849#diff-39a673d38713257d5fe7d90aac2acb5aR107
	const isFiberHostComponentFocusable = (fiber: any): boolean => {
		if (fiber.tag !== HostComponent) {
			return false;
		}

		const {memoizedProps, stateNode, type} = fiber;

		// Hack to check if element is visible
		if (!stateNode.offsetParent) {
			return false;
		}

		if (memoizedProps.disabled) {
			return false;
		}

		const minTabIndex = -1;

		if (
			(memoizedProps.tabIndex != null &&
				memoizedProps.tabIndex >= minTabIndex) ||
			memoizedProps.contentEditable === true
		) {
			return true;
		}

		if (type === 'a' || type === 'area') {
			return !!memoizedProps.href && memoizedProps.rel !== 'ignore';
		}

		if (type === 'input') {
			return (
				memoizedProps.type !== 'hidden' && memoizedProps.type !== 'file'
			);
		}

		return (
			type === 'button' ||
			type === 'textarea' ||
			type === 'object' ||
			type === 'select' ||
			type === 'iframe' ||
			type === 'embed'
		);
	};

	const collectFocusableElements = (
		node: any,
		focusableElements: Array<any>
	) => {
		if (isFiberHostComponentFocusable(node)) {
			focusableElements.push(node.stateNode);
		} else {
			const child = node.child;

			if (child !== null) {
				collectFocusableElements(child, focusableElements);
			}
		}

		const sibling = node.sibling;

		if (sibling) {
			collectFocusableElements(sibling, focusableElements);
		}
	};

	const getFiber = (scope: React.RefObject<HTMLElement | null>) => {
		if (!scope.current) {
			return null;
		}

		const internalKey = Object.keys(scope.current).find(
			key => key.indexOf('__reactInternalInstance') === 0
		);

		if (internalKey) {
			return (scope.current as any)[internalKey];
		}

		return null;
	};

	const getFocusableElementsInScope = (fiberNode: any) => {
		const focusableElements: Array<any> = [];
		const {child} = fiberNode;

		if (child !== null) {
			collectFocusableElements(child, focusableElements);
		}

		return focusableElements;
	};

	const handleNextElementOutsideScope = useCallback(
		(event: KeyboardEvent) => {
			if (nextElementOutsideScopeRef.current !== event.currentTarget) {
				(event.currentTarget as HTMLElement).removeEventListener(
					'keydown',
					handleNextElementOutsideScope
				);
				return;
			}

			if (event.keyCode === TAB_KEY_CODE && event.shiftKey) {
				const elements = getFocusableElementsInScope(getFiber(scope));

				if (elements.length === 0) {
					if (event.currentTarget) {
						(event.currentTarget as HTMLElement).removeEventListener(
							'keydown',
							handleNextElementOutsideScope
						);
					}
					return;
				}

				event.preventDefault();

				elements[elements.length - 1].focus();
			}
		}
	);

	const setInteractionObserver = (element: HTMLElement) => {
		if (nextElementOutsideScopeRef.current !== null) {
			nextElementOutsideScopeRef.current.removeEventListener(
				'keydown',
				handleNextElementOutsideScope
			);
		}

		nextElementOutsideScopeRef.current = element;
		nextElementOutsideScopeRef.current.addEventListener(
			'keydown',
			handleNextElementOutsideScope
		);
	};

	const getElementEdge = (
		fiberNode: any,
		backwards: boolean
	): Element | null => {
		const focusableElementsEdge: Array<Element> = [];
		const fiberNodeReturn = fiberNode.return;

		if (fiberNodeReturn !== null) {
			collectFocusableElements(fiberNodeReturn, focusableElementsEdge);
		}

		if (!focusableElementsEdge.length) {
			return null;
		}

		const nodePosition = focusableElementsEdge.findIndex(
			el => document.activeElement === el
		);
		let nextElement = null;

		if (backwards) {
			nextElement = focusableElementsEdge[nodePosition - 1];
		} else {
			nextElement = focusableElementsEdge[nodePosition + 1];
		}

		if (!nextElement && fiberNodeReturn.return) {
			return getElementEdge(fiberNodeReturn.return, backwards);
		}

		return nextElement;
	};

	const moveFocusInScope = (scope: any, backwards: boolean = false) => {
		const elements = getFocusableElementsInScope(scope);

		if (elements.length === 0) {
			return null;
		}

		const node = document.activeElement;

		if (!node) {
			return;
		}

		const position = elements.indexOf(node);
		const lastPosition = elements.length - 1;
		let nextElement = null;

		if (backwards) {
			if (position === 0) {
				// is out of scope, so we go back through the fiber to pick up the
				// focusable elements from the scopes edge.
				nextElement = getElementEdge(scope, backwards);
			} else {
				nextElement = elements[position - 1];
			}
		} else {
			if (position === lastPosition) {
				// is out of scope, so we go back through the fiber to pick up the
				// focusable elements from the scopes edge.
				nextElement = getElementEdge(scope, backwards) as HTMLElement;

				// Control the tab + shift keydown of the element next to the scope to
				// return the focus to the last scopo element, this is necessary for
				// when have React Portal.
				if (nextElement) {
					setInteractionObserver(nextElement);
				}
			} else {
				nextElement = elements[position + 1];
			}
		}

		if (nextElement) {
			nextElement.focus();
			return nextElement;
		}

		return null;
	};

	useEffect(() => {
		if (nextElementOutsideScopeRef.current) {
			nextElementOutsideScopeRef.current.removeEventListener(
				'keydown',
				handleNextElementOutsideScope
			);

			// Sets the value to null only to remove reference and prevent
			// memory leak cases.
			nextElementOutsideScopeRef.current = null;
		}
	}, [handleNextElementOutsideScope, scope]);

	return {
		focusNext: () => moveFocusInScope(getFiber(scope)),
		focusPrevious: () => moveFocusInScope(getFiber(scope), true),
	};
}
