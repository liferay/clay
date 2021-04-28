/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

// https://github.com/facebook/react/blob/master/packages/shared/ReactWorkTags.js#L39
const HostComponent = 5;

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
	tabIndex?: string | number;
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

	const minTabIndex = 0;

	if (
		(tabIndex != null && tabIndex >= minTabIndex) ||
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

export const FOCUSABLE_ELEMENTS = [
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

function collectDocumentFocusableElements() {
	return Array.from<HTMLElement>(
		document.querySelectorAll(FOCUSABLE_ELEMENTS.join(','))
	).filter((element) => isFocusable(element));
}

// https://github.com/facebook/react/pull/15849#diff-39a673d38713257d5fe7d90aac2acb5aR107
const isFiberHostComponentFocusable = (fiber: any): boolean => {
	if (fiber.tag !== HostComponent) {
		return false;
	}

	const {memoizedProps, stateNode, type} = fiber;

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
};

const collectFocusableElements = (node: any, focusableElements: Array<any>) => {
	if (isFiberHostComponentFocusable(node)) {
		focusableElements.push(node.stateNode);
	}

	const child = node.child;

	if (child !== null) {
		collectFocusableElements(child, focusableElements);
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
		(key) => key.indexOf('__reactInternalInstance') === 0
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

export function useFocusManagement(scope: React.RefObject<null | HTMLElement>) {
	const nextFocusInDocRef = React.useRef<HTMLElement | null>(null);
	const prevFocusInDocRef = React.useRef<HTMLElement | null>(null);

	const moveFocusInScope = (scope: any, backwards: boolean = false) => {
		const fiberFocusElements = getFocusableElementsInScope(scope);

		if (fiberFocusElements.length === 0) {
			return null;
		}

		const activeElement = document.activeElement as HTMLElement;

		if (!activeElement) {
			return;
		}

		const docFocusElements = collectDocumentFocusableElements();

		const docPosition = docFocusElements.indexOf(activeElement);
		const reactFiberPosition = fiberFocusElements.indexOf(activeElement);

		// Ignore when the active element is not in the scope.
		if (reactFiberPosition < 0) {
			return null;
		}

		const nextFocusInDoc = docFocusElements[docPosition + 1];
		const prevFocusInDoc = docFocusElements[docPosition - 1];

		const nextFocusInFiber = fiberFocusElements[reactFiberPosition + 1];
		const prevFocusInFiber = fiberFocusElements[reactFiberPosition - 1];

		// If these two nodes are not equal, that means React is likely using
		// a portal to render the node in a different part of the DOM. When
		// this happens, we want to track where the next node is in case we
		// reach the end of the list of focusable nodes.
		if (nextFocusInFiber !== nextFocusInDoc) {
			nextFocusInDocRef.current = nextFocusInDoc;
		}

		// Same as above, except we track the previous node for tabbing backwards.
		if (prevFocusInFiber !== prevFocusInDoc) {
			prevFocusInDocRef.current = prevFocusInDoc;
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
		// list of focusable elements in the React Tree. So we go back to the flow of the
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
		focusNext: () => moveFocusInScope(getFiber(scope)),
		focusPrevious: () => moveFocusInScope(getFiber(scope), true),
	};
}
