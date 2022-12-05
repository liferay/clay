/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {FOCUSABLE_ELEMENTS, Keys} from '@clayui/shared';
import React from 'react';

/**
 * A hook that takes care of controlling click, keyup and keydown events
 * respectively close the modal after a click on the overlay, close the
 * modal by pressing the ESC key and control the focus within the Modal.
 */
const useUserInteractions = (
	modalElementRef: React.MutableRefObject<any>,
	modalBodyElementRef: React.MutableRefObject<any>,
	onClick: () => void
) => {
	const mouseEventTargetRef = React.useRef<EventTarget | null>(null);

	const getFocusableNodes = () => {
		if (modalBodyElementRef.current) {
			const nodes =
				modalBodyElementRef.current.querySelectorAll(
					FOCUSABLE_ELEMENTS
				);

			return Object.keys(nodes).map((key) => nodes[key]);
		}

		return [];
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === Keys.Tab) {
			if (
				modalElementRef.current &&
				event.target !== null &&
				!modalElementRef.current.contains(event.target)
			) {
				modalBodyElementRef.current.focus();
			} else {
				const focusableNodes = getFocusableNodes();
				const focusedItemIndex = focusableNodes.indexOf(
					document.activeElement
				);

				if (event.shiftKey && focusedItemIndex === 0) {
					focusableNodes[focusableNodes.length - 1].focus();
					event.preventDefault();
				}

				if (
					!event.shiftKey &&
					focusedItemIndex === focusableNodes.length - 1
				) {
					focusableNodes[0].focus();
					event.preventDefault();
				}
			}
		}
	};

	const handleKeyup = (event: KeyboardEvent) => {
		if (event.key === Keys.Esc) {
			onClick();
		}
	};

	const handleDocumentMouseDown = (event: Event) => {
		// We keep the `event.target` to check later in the click event if
		// the target is the same, otherwise, we are assuming that the element
		// has been removed from the DOM.

		mouseEventTargetRef.current = event.target;
	};

	const handleDocumentMouseUp = (event: Event) => {
		if (event.defaultPrevented) {
			mouseEventTargetRef.current = null;

			return;
		}

		if (
			event.target === modalElementRef.current &&
			mouseEventTargetRef.current === event.target
		) {
			mouseEventTargetRef.current = null;
			onClick();
		}

		mouseEventTargetRef.current = null;
	};

	/**
	 * Just listen for keyup, keydown, and click when
	 * changeAttachEvent is true.
	 */
	React.useEffect(() => {
		document.addEventListener('keydown', handleKeydown);
		document.addEventListener('keyup', handleKeyup);
		document.addEventListener('mousedown', handleDocumentMouseDown);
		document.addEventListener('mouseup', handleDocumentMouseUp);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('keyup', handleKeyup);
			document.removeEventListener('mousedown', handleDocumentMouseDown);
			document.removeEventListener('mouseup', handleDocumentMouseUp);
		};
	}, []);
};

export {useUserInteractions};
