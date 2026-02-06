/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {PanelResizer, Position} from '..';
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom';

function renderComponent({
	onChange,
	position = 'left',
}: {
	onChange: () => void;
	position?: Position;
}) {
	return render(
		<PanelResizer
			data-testid="resizer"
			onPanelWidthChange={onChange}
			panelWidth={500}
			panelWidthMax={600}
			panelWidthMin={200}
			position={position}
		/>
	);
}

describe('PanelResizer', () => {
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

		userEvent.keyboard('{ArrowRight>4}');

		expect(onChange).toHaveBeenCalledTimes(4);
		expect(onChange).toHaveBeenLastCalledWith(501);

		userEvent.keyboard('{ArrowRight>10}');

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
