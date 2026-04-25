/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {act, cleanup, renderHook} from '@testing-library/react';

import {
	FOCUS_RING_ANIMATION_CLASS,
	TAB_RETURNING_CLASS,
	useTabReturnFocusRingAnimation,
} from '../useTabReturnFocusRingAnimation';

function enableFocusRing() {
	document.body.classList.add(FOCUS_RING_ANIMATION_CLASS);
}

function hasReturningClass() {
	return document.body.classList.contains(TAB_RETURNING_CLASS);
}

function clear() {
	document.body.classList.remove(
		FOCUS_RING_ANIMATION_CLASS,
		TAB_RETURNING_CLASS
	);
}

function dispatchVisibilityChange(hidden: boolean) {
	Object.defineProperty(document, 'hidden', {
		configurable: true,
		get: () => hidden,
	});

	act(() => {
		document.dispatchEvent(new Event('visibilitychange'));
	});
}

describe('useTabReturnFocusRingAnimation', () => {
	let addEventListenerSpy: jest.SpyInstance;
	let removeEventListenerSpy: jest.SpyInstance;

	beforeEach(() => {
		addEventListenerSpy = jest.spyOn(document, 'addEventListener');
		removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
	});

	afterEach(() => {
		cleanup();
		jest.restoreAllMocks();
		clear();
	});

	describe('BasicRendering', () => {
		it('registers a visibilitychange listener on mount', () => {
			renderHook(() => useTabReturnFocusRingAnimation());

			expect(addEventListenerSpy).toHaveBeenCalledWith(
				'visibilitychange',
				expect.any(Function)
			);
		});

		it('removes listener on unmount when no other instances remain', () => {
			const {unmount} = renderHook(() =>
				useTabReturnFocusRingAnimation()
			);

			unmount();

			expect(removeEventListenerSpy).toHaveBeenCalledWith(
				'visibilitychange',
				expect.any(Function)
			);
		});
	});

	describe('IncrementalInteractions', () => {
		it('registers listener only once for multiple mounted instances', () => {
			const {unmount: unmount1} = renderHook(() =>
				useTabReturnFocusRingAnimation()
			);
			const {unmount: unmount2} = renderHook(() =>
				useTabReturnFocusRingAnimation()
			);

			expect(addEventListenerSpy).toHaveBeenCalledTimes(1);

			unmount1();
			unmount2();
		});

		it('keeps listener alive while any instance remains mounted', () => {
			const {unmount: unmount1} = renderHook(() =>
				useTabReturnFocusRingAnimation()
			);
			const {unmount: unmount2} = renderHook(() =>
				useTabReturnFocusRingAnimation()
			);

			unmount1();

			expect(removeEventListenerSpy).not.toHaveBeenCalled();

			unmount2();

			expect(removeEventListenerSpy).toHaveBeenCalledTimes(1);
		});

		it('adds c-tab-returning when tab becomes visible with focus ring active', () => {
			enableFocusRing();

			renderHook(() => useTabReturnFocusRingAnimation());

			dispatchVisibilityChange(false);

			expect(hasReturningClass()).toBe(true);
		});

		it('does not add c-tab-returning when c-prefers-focus-ring is absent', () => {
			renderHook(() => useTabReturnFocusRingAnimation());

			dispatchVisibilityChange(false);

			expect(hasReturningClass()).toBe(false);
		});

		it('does not add c-tab-returning when tab becomes hidden', () => {
			enableFocusRing();

			renderHook(() => useTabReturnFocusRingAnimation());

			dispatchVisibilityChange(true);

			expect(hasReturningClass()).toBe(false);
		});
	});
});
