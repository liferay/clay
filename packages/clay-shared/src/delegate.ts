/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

function isDisabled(node: Element & {disabled?: boolean}) {
	return !!(node.disabled || node.closest('[disabled]'));
}

function delegate(
	element: HTMLElement,
	eventName: keyof GlobalEventHandlersEventMap,
	selector: string,
	callback: (event: any) => void
) {
	const eventHandler = (event: {
		delegateTarget?: Element;
		defaultPrevented?: boolean;
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

	element.addEventListener(eventName, eventHandler as any);

	return {
		dispose() {
			element.removeEventListener(eventName, eventHandler as any);
		},
	};
}

export {delegate};
export default delegate;
