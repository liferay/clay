/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useEffect, useRef} from 'react';

type Props = {
	isDisabled?: boolean;
	onInteract?: (event: Event) => void;
	onInteractStart?: (event: Event) => void;
	ref: React.RefObject<HTMLElement>;
	triggerRef: React.RefObject<HTMLElement>;
};

/**
 * Code ported with some minor modifications
 * https://github.com/adobe/react-spectrum/blob/810579b671791f1593108f62cdc1893de3a220e3/packages/%40react-aria/interactions/src/useInteractOutside.ts
 */
export function useInteractOutside({
	isDisabled = false,
	onInteract,
	onInteractStart,
	ref,
	triggerRef,
}: Props) {
	const stateRef = useRef({
		ignoreEmulatedMouseEvents: false,
		isPointerDown: false,
		onInteract,
	});

	const state = stateRef.current;

	state.onInteract = onInteract;

	useEffect(() => {
		if (isDisabled) {
			return;
		}

		const onPointerDown = (event: Event) => {
			if (isValidEvent(event, ref, triggerRef) && state.onInteract) {
				if (onInteractStart) {
					onInteractStart(event);
				}
				state.isPointerDown = true;
			}
		};

		// Use pointer events if available. Otherwise, fall back to mouse and touch events.
		if (typeof PointerEvent !== 'undefined') {
			const onPointerUp = (event: Event) => {
				if (
					state.isPointerDown &&
					state.onInteract &&
					isValidEvent(event, ref, triggerRef)
				) {
					state.isPointerDown = false;
					state.onInteract(event);
				}
			};

			document.addEventListener('pointerdown', onPointerDown, true);
			document.addEventListener('pointerup', onPointerUp, true);

			return () => {
				document.removeEventListener(
					'pointerdown',
					onPointerDown,
					true
				);
				document.removeEventListener('pointerup', onPointerUp, true);
			};
		} else {
			const onMouseUp = (event: Event) => {
				if (state.ignoreEmulatedMouseEvents) {
					state.ignoreEmulatedMouseEvents = false;
				} else if (
					state.isPointerDown &&
					state.onInteract &&
					isValidEvent(event, ref, triggerRef)
				) {
					state.isPointerDown = false;
					state.onInteract(event);
				}
			};

			const onTouchEnd = (event: Event) => {
				state.ignoreEmulatedMouseEvents = true;

				if (
					state.onInteract &&
					state.isPointerDown &&
					isValidEvent(event, ref, triggerRef)
				) {
					state.isPointerDown = false;
					state.onInteract(event);
				}
			};

			document.addEventListener('mousedown', onPointerDown, true);
			document.addEventListener('mouseup', onMouseUp, true);
			document.addEventListener('touchstart', onPointerDown, true);
			document.addEventListener('touchend', onTouchEnd, true);

			return () => {
				document.removeEventListener('mousedown', onPointerDown, true);
				document.removeEventListener('mouseup', onMouseUp, true);
				document.removeEventListener('touchstart', onPointerDown, true);
				document.removeEventListener('touchend', onTouchEnd, true);
			};
		}
	}, [ref, state, isDisabled]);
}

function isValidEvent(
	event: Event,
	ref: React.RefObject<HTMLElement>,
	trigger: React.RefObject<HTMLElement>
) {
	// @ts-ignore
	if (event.button > 0) {
		return false;
	}

	// if the event target is no longer in the document
	if (event.target) {
		// @ts-ignore
		const ownerDocument = event.target.ownerDocument;

		if (
			!ownerDocument ||
			!ownerDocument.documentElement.contains(event.target)
		) {
			return false;
		}
	}

	// We disregard the trigger click because we already have an event that
	// toggles the state of the overlay on the trigger.
	if (
		trigger.current &&
		trigger.current.contains(event.target as HTMLElement)
	) {
		return false;
	}

	return ref.current && !ref.current.contains(event.target as HTMLElement);
}
