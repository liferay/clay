/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import {Position, ResizeHandle} from '../ResizeHandle';

import '@testing-library/jest-dom';

function renderComponent({
	onChange = jest.fn(),
	position = 'left',
}: {
	onChange?: () => void;
	position?: Position;
}) {
	return render(
		<ResizeHandle
			data-testid="resizer"
			maxWidth={600}
			minWidth={200}
			onWidthChange={onChange}
			position={position}
			width={500}
		/>
	);
}

describe('ResizeHandle', () => {
	test('uses the arrow keys, respecting left position', () => {
		const onChange = jest.fn();

		renderComponent({onChange});

		const resizer = screen.getByTestId('resizer');

		resizer.focus();

		userEvent.keyboard('{ArrowLeft}');

		expect(onChange).toHaveBeenLastCalledWith(499);

		userEvent.keyboard('{ArrowRight}');

		expect(onChange).toHaveBeenLastCalledWith(501);

		userEvent.keyboard('{ArrowUp}');

		expect(onChange).toHaveBeenLastCalledWith(501);

		userEvent.keyboard('{ArrowDown}');

		expect(onChange).toHaveBeenLastCalledWith(499);
	});

	test('uses the arrow keys, respecting right position', () => {
		const onChange = jest.fn();

		renderComponent({onChange, position: 'right'});

		const resizer = screen.getByTestId('resizer');

		resizer.focus();

		userEvent.keyboard('{ArrowLeft}');

		expect(onChange).toHaveBeenLastCalledWith(501);

		userEvent.keyboard('{ArrowRight}');

		expect(onChange).toHaveBeenLastCalledWith(499);
	});

	test('applies acceleration (delta 10) after > 7 presses', () => {
		const onChange = jest.fn();

		renderComponent({onChange});

		const resizer = screen.getByTestId('resizer');

		resizer.focus();

		for (let i = 0; i < 4; i++) {
			fireEvent.keyDown(resizer, {code: 'ArrowRight', key: 'ArrowRight'});
		}

		expect(onChange).toHaveBeenCalledTimes(4);
		expect(onChange).toHaveBeenLastCalledWith(501);

		for (let i = 0; i < 10; i++) {
			fireEvent.keyDown(resizer, {code: 'ArrowRight', key: 'ArrowRight'});
		}

		expect(onChange).toHaveBeenCalledTimes(14);
		expect(onChange).toHaveBeenLastCalledWith(510);
	});

	test('resizes to its minimum width', () => {
		const onChange = jest.fn();

		renderComponent({onChange});

		const resizer = screen.getByTestId('resizer');

		simulateMouseEvent(resizer, 'pointerdown', 500);
		simulateMouseEvent(document, 'pointermove', 150);

		expect(onChange).toHaveBeenLastCalledWith(200);
	});

	test('resizes to its maximum width', () => {
		const onChange = jest.fn();

		renderComponent({onChange});

		const resizer = screen.getByTestId('resizer');

		simulateMouseEvent(resizer, 'pointerdown', 500);
		simulateMouseEvent(document, 'pointermove', 650);

		expect(onChange).toHaveBeenLastCalledWith(600);
	});

	describe('c-horizontal-resizer-end modifier', () => {
		afterEach(() => {
			document.dir = '';
		});

		test('LTR: applied only when position="right"', () => {
			document.dir = 'ltr';

			const {unmount} = renderComponent({
				position: 'left',
			});

			expect(screen.getByTestId('resizer')).not.toHaveClass(
				'c-horizontal-resizer-end'
			);

			unmount();

			renderComponent({position: 'right'});

			expect(screen.getByTestId('resizer')).toHaveClass(
				'c-horizontal-resizer-end'
			);
		});

		test('RTL: inverted to compensate the converter flip (applied only when position="left")', () => {
			document.dir = 'rtl';

			const {unmount} = renderComponent({
				position: 'left',
			});

			expect(screen.getByTestId('resizer')).toHaveClass(
				'c-horizontal-resizer-end'
			);

			unmount();

			renderComponent({position: 'right'});

			expect(screen.getByTestId('resizer')).not.toHaveClass(
				'c-horizontal-resizer-end'
			);
		});
	});
});

function simulateMouseEvent(
	target: Element | Document,
	eventName: 'pointerdown' | 'pointermove',
	pageX?: number
) {
	const event = new MouseEvent(eventName, {
		bubbles: true,
		button: 0,
		cancelable: true,
	});

	if (pageX) {
		Object.defineProperty(event, 'pageX', {get: () => pageX});
	}

	fireEvent(target, event);
}
