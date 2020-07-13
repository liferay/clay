/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const KEY_CODE_ESC = 27;
const KEY_CODE_TAB = 9;
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
	const getFocusableNodes = () => {
		if (modalBodyElementRef.current) {
			const nodes = modalBodyElementRef.current.querySelectorAll(
				FOCUSABLE_ELEMENTS
			);

			return Object.keys(nodes).map((key) => nodes[key]);
		}

		return [];
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.keyCode === KEY_CODE_TAB) {
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
		if (event.keyCode === KEY_CODE_ESC) {
			onClick();
		}
	};

	const handleDocumentClick = (event: Event) => {
		if (event.defaultPrevented) {
			return;
		}

		if (event.target === modalElementRef.current) {
			onClick();
		}
	};

	/**
	 * Just listen for keyup, keydown, and click when
	 * changeAttachEvent is true.
	 */
	React.useEffect(() => {
		document.addEventListener('click', handleDocumentClick);
		document.addEventListener('keyup', handleKeyup);
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keyup', handleKeyup);
			document.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('click', handleDocumentClick);
		};
	}, []);
};

export {useUserInteractions};
