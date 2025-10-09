/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useEffect, useState} from 'react';

import {isMac} from './platform';

export type Interaction = 'keyboard' | 'pointer' | 'virtual';

let currentInteraction: any = null;
let hasSetupGlobalListeners = false;
let hasEventBeforeFocus = false;
let hasBlurredWindowRecently = false;

type Handler = (interaction: Interaction) => void;

const handlers = new Set<Handler>();

function isValidKey(event: KeyboardEvent) {
	// Control and Shift keys trigger when navigating back to the tab with keyboard.
	return !(
		event.metaKey ||
		(!isMac() && event.altKey) ||
		event.ctrlKey ||
		event.key === 'Control' ||
		event.key === 'Shift' ||
		event.key === 'Meta'
	);
}

function isVirtualClick(event: MouseEvent | PointerEvent) {
	if ((event as any).mozInputSource === 0 && event.isTrusted) {
		return true;
	}

	return event.detail === 0 && !(event as PointerEvent).pointerType;
}

function isFocusVisible(): boolean {
	return currentInteraction !== 'pointer';
}

function getInteraction(): Interaction {
	return currentInteraction;
}

function callHandlers(interaction: Interaction) {
	for (const handler of handlers) {
		handler(interaction);
	}
}

/**
 * Detects what type of interaction the user is doing with the page, using the
 * keyboard, pointer or using screen reader. This works like a singleton even
 * if it is declared more than once.
 *
 * This is inspired by the implementation:
 * https://github.com/adobe/react-spectrum/blob/d10f20a3f4ca7ffa807fcaceb944274da825a7b9/packages/%40react-aria/interactions/src/useFocusVisible.ts
 */
export function useInteractionFocus() {
	useEffect(() => {
		if (hasSetupGlobalListeners) {
			return;
		}

		const onKeyboard = (event: KeyboardEvent) => {
			hasEventBeforeFocus = true;

			if (isValidKey(event)) {
				currentInteraction = 'keyboard';
				callHandlers(currentInteraction);
			}
		};

		const onClick = (event: MouseEvent) => {
			if (isVirtualClick(event)) {
				hasEventBeforeFocus = true;
				currentInteraction = 'virtual';
				callHandlers(currentInteraction);
			}
		};

		const onFocus = (event: FocusEvent) => {
			if (event.target === window || event.target === document) {
				return;
			}

			if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
				currentInteraction = 'virtual';
				callHandlers(currentInteraction);
			}

			hasEventBeforeFocus = false;
			hasBlurredWindowRecently = false;
		};

		const onBlur = () => {
			hasEventBeforeFocus = false;
			hasBlurredWindowRecently = true;
		};

		const onPointer = (event: PointerEvent | MouseEvent) => {
			currentInteraction = 'pointer';

			if (event.type === 'mousedown' || event.type === 'pointerdown') {
				hasEventBeforeFocus = true;
				callHandlers(currentInteraction);
			}
		};

		document.addEventListener('keydown', onKeyboard, true);
		document.addEventListener('keyup', onKeyboard, true);
		document.addEventListener('click', onClick, true);

		window.addEventListener('focus', onFocus, true);
		window.addEventListener('blur', onBlur, false);

		if (typeof PointerEvent !== 'undefined') {
			document.addEventListener('pointerdown', onPointer, true);
			document.addEventListener('pointermove', onPointer, true);
			document.addEventListener('pointerup', onPointer, true);
		} else {
			document.addEventListener('mousedown', onPointer, true);
			document.addEventListener('mousemove', onPointer, true);
			document.addEventListener('mouseup', onPointer, true);
		}

		hasSetupGlobalListeners = true;

		return () => {
			document.removeEventListener('keydown', onKeyboard, true);
			document.removeEventListener('keyup', onKeyboard, true);
			document.removeEventListener('click', onClick, true);

			window.removeEventListener('focus', onFocus, true);
			window.removeEventListener('blur', onBlur, false);

			if (typeof PointerEvent !== 'undefined') {
				document.removeEventListener('pointerdown', onPointer, true);
				document.removeEventListener('pointermove', onPointer, true);
				document.removeEventListener('pointerup', onPointer, true);
			} else {
				document.removeEventListener('mousedown', onPointer, true);
				document.removeEventListener('mousemove', onPointer, true);
				document.removeEventListener('mouseup', onPointer, true);
			}

			hasSetupGlobalListeners = false;
		};
	}, []);

	return {getInteraction, isFocusVisible};
}

export function useFocusVisible() {
	useInteractionFocus();

	const [interaction, setInteraction] = useState(isFocusVisible());

	useEffect(() => {
		const handler = (interaction: Interaction) => {
			setInteraction(interaction !== 'pointer');
		};

		handlers.add(handler);

		return () => {
			handlers.delete(handler);
		};
	}, []);

	return interaction;
}
