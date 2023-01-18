/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {hideOthers, supportsInert, suppressOthers} from 'aria-hidden';
import React, {useCallback, useEffect, useRef} from 'react';

import {Keys} from './Keys';
import {ClayPortal} from './Portal';
import {useInteractOutside} from './useInteractOutside';

import type {Undo} from 'aria-hidden';

type Props = {
	children: React.ReactElement;
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

/**
 * Overlay component is used for components like dialog and modal.
 * For example, Autocomplete, DatePicker, ColorPicker, DropDown are components
 * that can use and have the same consistent behavior.
 */
export function Overlay({
	children,
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
					onClose('blur');
				}
			},
			[onClose]
		),
		isOpen,
		true,
		[isOpen, onClose]
	);

	useEvent(
		'keydown',
		useCallback(
			(event: KeyboardEvent) => {
				if (event.key === Keys.Esc) {
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
		onInteract: () => {
			onClose('blur');
		},
		ref: portalRef ?? menuRef,
		triggerRef,
	});

	useEffect(() => {
		if (menuRef.current && isOpen) {
			const elements = suppress
				? suppress.map((ref) => ref.current!)
				: menuRef.current;

			// Inert is a new native feature to better handle DOM arias that are not
			// assertive to a SR or that should ignore any user interaction.
			// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert
			if (isModal && supportsInert()) {
				unsuppressCallbackRef.current = suppressOthers(elements);

				return () => {
					if (unsuppressCallbackRef.current) {
						unsuppressCallbackRef.current();
					}
					unsuppressCallbackRef.current = null;
				};
			} else {
				return hideOthers(elements);
			}
		}
	}, [isModal, isOpen]);

	return (
		<ClayPortal className={menuClassName} subPortalRef={portalRef}>
			{isModal && (
				<span
					aria-hidden="true"
					data-focus-scope-start="true"
					tabIndex={0}
				/>
			)}
			{children}
			{isModal && (
				<span
					aria-hidden="true"
					data-focus-scope-end="true"
					tabIndex={0}
				/>
			)}
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
