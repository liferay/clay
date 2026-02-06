/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {hideOthers, supportsInert, suppressOthers} from 'aria-hidden';
import React, {useCallback, useEffect, useRef} from 'react';

import {Keys} from './Keys';
import {ClayPortal} from './Portal';
import {useInteractOutside} from './useInteractOutside';

import type {Undo} from 'aria-hidden';

type Props = {
	children: React.ReactElement;
	inert?: boolean;
	isCloseOnInteractOutside?: boolean;
	isKeyboardDismiss?: boolean;
	isModal?: boolean;
	isOpen: boolean;
	menuClassName?: string;
	menuRef: React.RefObject<HTMLElement>;
	onClose: (action: 'escape' | 'blur') => void;
	portalRef?: React.RefObject<HTMLElement>;
	suppress?: Array<React.RefObject<HTMLElement>>;
	triggerRef: React.RefObject<HTMLElement>;
};

const overlayStack: Array<{
	inert: boolean | undefined;
	menu: React.RefObject<Element>;
}> = [];

/**
 * Overlay component is used for components like dialog and modal.
 * For example, Autocomplete, DatePicker, ColorPicker, DropDown are components
 * that can use and have the same consistent behavior.
 */
export function Overlay({
	children,
	inert,
	isCloseOnInteractOutside = false,
	isKeyboardDismiss = false,
	isModal = false,
	isOpen = false,
	menuClassName,
	menuRef,
	onClose,
	portalRef,
	suppress,
	triggerRef,
}: Props) {
	const unsuppressCallbackRef = useRef<Undo | null>(null);

	const isInert = (isModal || inert) && supportsInert();

	const onHide = useCallback(
		(action: 'escape' | 'blur') => {
			if (overlayStack[overlayStack.length - 1]?.menu === menuRef) {
				onClose(action);
			}
		},
		[onClose]
	);

	useEvent(
		'focus',
		useCallback(
			(event: FocusEvent) => {
				if (
					portalRef &&
					!portalRef.current?.contains(event.target as Node) &&
					triggerRef.current &&
					!triggerRef.current.contains(event.target as Node)
				) {
					onHide('blur');
				}
			},
			[onHide]
		),
		isOpen,
		true,
		[isOpen, onHide]
	);

	useEvent(
		'keydown',
		useCallback(
			(event: KeyboardEvent) => {
				if (
					event.key === Keys.Esc &&
					overlayStack[overlayStack.length - 1]?.menu === menuRef
				) {
					event.stopImmediatePropagation();
					event.preventDefault();

					if (triggerRef.current) {

						// When inert is used to suppress user interaction with the rest of
						// the document, to retrieve the focus in the trigger we need to
						// first undo and then move the focus.

						if (unsuppressCallbackRef.current) {
							unsuppressCallbackRef.current();
							unsuppressCallbackRef.current = null;
						}

						triggerRef.current.focus();
					}

					onClose('escape');
				}
			},
			[onClose]
		),
		isOpen && isKeyboardDismiss,
		true,
		[isOpen, onClose]
	);

	useInteractOutside({
		isDisabled: isOpen ? !isCloseOnInteractOutside : true,
		onInteract: (event) => {

			// @ts-ignore

			if (event.button === 0) {
				onHide('blur');
			}
		},
		onInteractStart: (event) => {
			if (overlayStack[overlayStack.length - 1]?.menu === menuRef) {
				if (unsuppressCallbackRef.current) {
					unsuppressCallbackRef.current();
					unsuppressCallbackRef.current = null;
				}

				if (isModal) {
					event.stopPropagation();
					event.preventDefault();
				}
			}
		},
		ref: portalRef ?? menuRef,
		triggerRef,
	});

	useEffect(() => {
		if (isOpen) {
			overlayStack.push({
				inert: isInert,
				menu: menuRef,
			});
		}

		return () => {
			const index = overlayStack.findIndex(
				(object) => object.menu === menuRef
			);

			if (index >= 0) {
				overlayStack.splice(index, 1);
			}
		};
	}, [isOpen, menuRef]);

	useEffect(() => {
		const currentMenuRef = menuRef?.current;

		const previousOverlayStacks = overlayStack.slice(0, -1);

		const previouslyHidden =
			previousOverlayStacks.findIndex(
				(object) => object.inert === undefined
			) >= 0;
		const previouslyInert =
			previousOverlayStacks.findIndex(
				(object) => object.inert === true
			) >= 0;

		if (currentMenuRef && isOpen) {
			const elements = suppress
				? suppress.map((ref) => ref.current!)
				: [currentMenuRef];

			const hiddenElement =
				currentMenuRef.closest('[aria-hidden]') ||
				currentMenuRef.closest('[inert]');

			hiddenElement?.removeAttribute('data-suppressed');
			hiddenElement?.removeAttribute('data-aria-hidden');
			hiddenElement?.removeAttribute('aria-hidden');
			hiddenElement?.removeAttribute('inert');

			// Inert is a new native feature to better handle DOM arias that are not
			// assertive to a SR or that should ignore any user interaction.
			// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert

			if (isInert) {
				unsuppressCallbackRef.current = suppressOthers(elements);
			}
			else {
				unsuppressCallbackRef.current = hideOthers(elements);
			}

			return () => {
				if (unsuppressCallbackRef.current) {
					unsuppressCallbackRef.current();
				}

				if (isInert && !previouslyInert) {
					document.querySelectorAll('[inert]').forEach((element) => {
						element.removeAttribute('inert');
					});
				}
				else if (!isInert && !previouslyHidden) {
					document
						.querySelectorAll('[aria-hidden]')
						.forEach((element) => {
							element.removeAttribute('aria-hidden');
						});
				}

				unsuppressCallbackRef.current = null;
			};
		}
	}, [isModal, inert, isOpen]);

	return (
		<ClayPortal className={menuClassName} subPortalRef={portalRef}>
			{isModal && <span data-focus-scope-start="true" />}

			{children}

			{isModal && <span data-focus-scope-end="true" />}
		</ClayPortal>
	);
}

function useEvent<T extends keyof DocumentEventMap>(
	name: T,
	onEvent: (event: DocumentEventMap[T]) => void,
	conditional: boolean,
	capture: boolean,
	deps: Array<any> = []
) {
	useEffect(() => {

		// This check should go away when the Overlay is shown using conditional
		// instead of class CSS.

		if (conditional) {
			document.addEventListener(name, onEvent, capture);

			return () => {
				document.removeEventListener(name, onEvent, capture);
			};
		}
	}, deps);
}
