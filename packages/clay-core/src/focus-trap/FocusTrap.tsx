/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {FOCUSABLE_ELEMENTS, FocusScope} from '@clayui/shared';
import {hideOthers, supportsInert, suppressOthers} from 'aria-hidden';
import React, {useEffect, useRef} from 'react';

type Props = {

	/**
	 * Flag to indicate if the focus trap is activated.
	 */
	active: boolean;

	/**
	 * The elements that will receive the focus within the focus trap.
	 */
	children: React.ReactNode;

	/**
	 * Ref of the element that receives the focus when the focus trap is activated.
	 */
	focusElementRef?: React.RefObject<HTMLElement>;
};

function getFocusableElements(childrenRef: React.RefObject<HTMLDivElement>) {
	if (!childrenRef.current) {
		return null;
	}

	return [
		...childrenRef.current.querySelectorAll(FOCUSABLE_ELEMENTS.join(',')),
	].filter((element) => !element.getAttribute('aria-hidden'));
}

export function FocusTrap({active = false, children, focusElementRef}: Props) {
	const childrenRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (active) {
			if (focusElementRef?.current) {
				focusElementRef.current.focus();

				return;
			}

			const focusableElements = getFocusableElements(childrenRef);

			if (focusableElements?.length) {
				(focusableElements[0] as HTMLDivElement).focus();
			}
		}
	}, [active]);

	useEffect(() => {
		if (childrenRef.current && active) {

			// Inert is a new native feature to better handle DOM arias that are not
			// assertive to a SR or that should ignore any user interaction.
			// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert

			if (supportsInert()) {
				return suppressOthers(childrenRef.current);
			}
			else {
				return hideOthers(childrenRef.current);
			}
		}
	}, [active]);

	return (
		<FocusScope
			arrowKeysLeftRight={false}
			arrowKeysUpDown={false}
			stopPropagation={false}
		>
			<div className="c-focus-trap" ref={childrenRef}>
				{active ? <span data-focus-scope-start="true" /> : null}

				{children}

				{active ? <span data-focus-scope-end="true" /> : null}
			</div>
		</FocusScope>
	);
}
