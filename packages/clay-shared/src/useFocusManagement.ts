/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

// https://github.com/facebook/react/blob/master/packages/shared/ReactWorkTags.js#L39

const HostComponent = 5;

let minimalTabIndex = 0;

export function isFocusable({
	contentEditable,
	disabled,
	href,
	offsetParent,
	rel,
	tabIndex,
	tagName,
	type,
}: {
	contentEditable?: string | boolean;
	disabled?: string | boolean;
	href?: string;
	offsetParent?: Element | null;
	rel?: string;
	tabIndex?: number;
	tagName?: string;
	type?: string;
}) {

	// Normalize casing

	tagName = tagName?.toLowerCase();

	// Hack to check if element is visible

	if (!offsetParent) {
		return false;
	}

	if (disabled) {
		return false;
	}

	if (
		tabIndex !== null &&
		tabIndex !== undefined &&
		tabIndex < minimalTabIndex
	) {
		return false;
	}

	if (
		(tabIndex !== null &&
			tabIndex !== undefined &&
			tabIndex >= minimalTabIndex) ||
		contentEditable === true ||
		contentEditable === 'true'
	) {
		return true;
	}

	if (tagName === 'a' || tagName === 'area') {
		return !!href && rel !== 'ignore';
	}

	if (tagName === 'input') {
		return type !== 'file' && type !== 'hidden';
	}

	return (
		tagName === 'button' ||
		tagName === 'embed' ||
		tagName === 'iframe' ||
		tagName === 'object' ||
		tagName === 'select' ||
		tagName === 'textarea'
	);
}

const FOCUS_SCOPE_MARKERS = [
	'span[data-focus-scope-end="true"]',
	'span[data-focus-scope-start="true"]',
];

export const FOCUSABLE_ELEMENTS = [
	'a[href]',
	'[contenteditable]',
	'[tabindex]:not([tabindex^="-"])',
	'area[href]',
	'button:not([disabled])',
	'embed',
	'iframe',
	'input:not([disabled]):not([type="hidden"])',
	'object',
	'select:not([disabled]):not([aria-hidden])',
	'textarea:not([disabled]):not([aria-hidden])',
];

// A switcher that helps define which fiber to use to navigate, the
// component's current fiber or the fiber in progress.

let hasSibling = false;

function collectDocumentFocusTargets() {
	const focusTargets = [...FOCUSABLE_ELEMENTS, ...FOCUS_SCOPE_MARKERS];

	return Array.from<HTMLElement>(
		document.querySelectorAll(focusTargets.join(','))
	).filter((element) => {
		const isFocusScopeMarker =
			element.dataset['focusScopeEnd'] ||
			element.dataset['focusScopeStart'];

		if (isFocusable(element) || isFocusScopeMarker) {
			return window.getComputedStyle(element).visibility !== 'hidden';
		}

		return false;
	});
}

// https://github.com/facebook/react/pull/15849#diff-39a673d38713257d5fe7d90aac2acb5aR107

function isFiberFocusable(fiber: any): boolean {
	const {memoizedProps, stateNode, type} = fiber;

	// The element may be having an update in progress.

	if (memoizedProps === null) {
		return false;
	}

	return isFocusable({
		contentEditable: memoizedProps.contentEditable,
		disabled: memoizedProps.disabled,
		href: memoizedProps.href,
		offsetParent: stateNode.offsetParent,
		rel: memoizedProps.rel,
		tabIndex: memoizedProps.tabIndex,
		tagName: type,
		type: memoizedProps.type,
	});
}

function isFiberFocusScopeMarker(fiber: any): boolean {
	return (
		fiber.stateNode.dataset['focusScopeEnd'] ||
		fiber.stateNode.dataset['focusScopeStart']
	);
}

function collectFocusTargets(node: any, focusTargets: Array<any>) {
	const isFiberFocusTarget =
		node.tag === HostComponent &&
		(isFiberFocusable(node) || isFiberFocusScopeMarker(node));
	if (isFiberFocusTarget) {
		focusTargets.push(node.stateNode);
	}
	const child = node.child;
	if (child !== null) {
		collectFocusTargets(child, focusTargets);
	}
	const sibling = node.sibling;
	if (sibling) {
		hasSibling = true;
		collectFocusTargets(sibling, focusTargets);
	}
}

function getFiber(scope: React.RefObject<HTMLElement | null>) {
	if (!scope.current) {
		return null;
	}
	const internalKey = Object.keys(scope.current).find(
		(key) =>
			key.indexOf('__reactInternalInstance') === 0 ||
			key.indexOf('__reactFiber') === 0
	);
	if (internalKey) {
		return (scope.current as any)[internalKey];
	}

	return null;
}

function getFocusTargetsInScope(fiberNode: any) {
	const focusTargets: Array<any> = [];
	const {child} = fiberNode;
	if (child !== null) {
		collectFocusTargets(child, focusTargets);
	}

	return focusTargets;
}

export function useFocusManagement(scope: React.RefObject<null | HTMLElement>) {
	const nextFocusInDocRef = React.useRef<HTMLElement | null>(null);
	const prevFocusInDocRef = React.useRef<HTMLElement | null>(null);

	const moveFocusInScope = (
		scope: any,
		backwards: boolean = false,
		persistOnScope: boolean = false
	) => {
		let fiberFocusTargets = getFocusTargetsInScope(
			scope.alternate ?? scope
		);

		// When browsing the alternate/in progress fiber if don't find sibling
		// elements that might correspond to a React.Portal try searching for
		// focus targets using the current fiber.

		if (!hasSibling) {
			fiberFocusTargets = getFocusTargetsInScope(scope);
		}
		else {

			// Just resets the value for the next focus iteration.

			hasSibling = false;
		}

		if (!fiberFocusTargets.length) {
			return null;
		}

		const activeElement = document.activeElement as HTMLElement;

		if (!activeElement) {
			return;
		}

		const docFocusTargets = collectDocumentFocusTargets();

		const docPosition = docFocusTargets.indexOf(activeElement);
		const reactFiberPosition = fiberFocusTargets.indexOf(activeElement);

		const startFocusTrap = fiberFocusTargets.find(
			(element) =>
				element.getAttribute('data-focus-scope-start') === 'true'
		);
		const endFocusTrap = fiberFocusTargets.find(
			(element) => element.getAttribute('data-focus-scope-end') === 'true'
		);

		const nextFocusInDoc = docFocusTargets[docPosition + 1];
		const prevFocusInDoc = docFocusTargets[docPosition - 1];

		// Ignore when the active element is not in the scope.

		if (
			reactFiberPosition < 0 &&
			!prevFocusInDocRef.current &&
			!nextFocusInDocRef.current &&
			nextFocusInDoc !== endFocusTrap &&
			prevFocusInDoc !== startFocusTrap
		) {
			return null;
		}

		let nextFocusInFiber = fiberFocusTargets[reactFiberPosition + 1];
		let prevFocusInFiber = fiberFocusTargets[reactFiberPosition - 1];

		// If the focus is moving within the focus trap, let the browser handle
		// navigation and focus order.

		if (
			startFocusTrap &&
			endFocusTrap &&
			startFocusTrap !== prevFocusInDoc &&
			endFocusTrap !== nextFocusInDoc
		) {
			return null;
		}

		// Checks if the focus has reached the end of the scope and should
		// go back to the beginning.

		if (endFocusTrap && endFocusTrap === nextFocusInDoc) {
			nextFocusInFiber = docFocusTargets.find(
				(_, index, array) => array[index - 1] === startFocusTrap
			);
		}

		// Checks if the focus has arrived at the beginning of the scope and is
		// returning moves the focus to the end of the scope.

		if (startFocusTrap && startFocusTrap === prevFocusInDoc) {
			prevFocusInFiber = docFocusTargets.find(
				(_, index, array) => array[index + 1] === endFocusTrap
			);
		}

		// Only moves to the next element if it is in scope.

		if (
			persistOnScope &&
			(!nextFocusInFiber || (backwards && !prevFocusInFiber))
		) {
			return null;
		}

		// If these two nodes are not equal, that means React is likely using
		// a portal to render the node in a different part of the DOM. When
		// this happens, we want to track where the next node is in case we
		// reach the end of the list of focus targets.

		if (nextFocusInFiber !== nextFocusInDoc) {
			nextFocusInDocRef.current = nextFocusInDoc!;
		}

		// Same as above, except we track the previous node for tabbing backwards.

		if (prevFocusInFiber !== prevFocusInDoc) {
			prevFocusInDocRef.current = prevFocusInDoc!;
		}

		let nextActive = backwards ? prevFocusInFiber : nextFocusInFiber;

		// We track the previous and next elements in the document flow due to React portals.
		//
		// Consider the following structure of dom elements and where a React Tree is:
		//
		// <HtmlFocusElement1>
		// <ReactTree>
		// <HtmlFocusElement2>
		//
		// When our focus gets to the end of the React Tree, we want to focus HtmlFocusElement2
		// When we are at the beginning of the React Tree and want to go backwards with
		// SHIFT + TAB, we want to focus HtmlFocusElement1. This allows the React Tree to
		// render nodes whereever it would like in the document.
		//
		// If there is no `nextActive`, that means we are either at the beginning or end of the
		// list of focus targets in the React Tree. So we go back to the flow of the
		// document instead of the flow of the React Tree.

		if (!nextActive) {
			nextActive = backwards
				? prevFocusInDocRef.current
				: nextFocusInDocRef.current;
		}

		if (nextActive) {
			nextActive.focus();

			if (
				nextActive === prevFocusInDocRef.current ||
				nextActive === nextFocusInDocRef.current
			) {
				nextFocusInDocRef.current = null;
				prevFocusInDocRef.current = null;
			}

			return nextActive;
		}

		return null;
	};

	return {
		focusFirst: () => {

			// eslint-disable-next-line react-compiler/react-compiler
			minimalTabIndex = -1;
			const next = moveFocusInScope(getFiber(scope), false, true);
			minimalTabIndex = 0;

			return next;
		},
		focusNext: (persistOnScope?: boolean) =>
			moveFocusInScope(getFiber(scope), false, persistOnScope),
		focusPrevious: (persistOnScope?: boolean) =>
			moveFocusInScope(getFiber(scope), true, persistOnScope),
	};
}
