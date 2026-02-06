/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

function isDisabled(node: Element & {disabled?: boolean}) {
	return !!(node.disabled || node.closest('[disabled]'));
}

function delegate(
	element: HTMLElement,
	eventName: keyof GlobalEventHandlersEventMap,
	selector: string,
	callback: (event: any) => void,
	capture?: boolean
) {
	const eventHandler = (event: {
		defaultPrevented?: boolean;
		delegateTarget?: Element;
		target?: HTMLElement;
	}) => {
		const {defaultPrevented, target} = event;

		if (target) {
			if (
				defaultPrevented ||
				(eventName === 'click' && isDisabled(target))
			) {
				return;
			}

			const delegateTarget = target.closest(selector);

			if (delegateTarget) {
				event.delegateTarget = delegateTarget;

				callback(event);
			}
		}
	};

	element.addEventListener(eventName, eventHandler as any, capture);

	return {
		dispose() {
			element.removeEventListener(
				eventName,
				eventHandler as any,
				capture
			);
		},
	};
}

export {delegate};
export default delegate;
