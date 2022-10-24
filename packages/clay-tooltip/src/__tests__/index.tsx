/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTooltip, {ClayTooltipProvider} from '..';
import {act, cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

describe('ClayTooltip', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayTooltip show>Tooltip</ClayTooltip>);

		expect(container).toMatchSnapshot();
	});

	it('displays on mouseover and hides on mouse out', () => {
		jest.useFakeTimers();

		const {getByTestId} = render(
			<ClayTooltipProvider>
				<button
					data-testid="button"
					data-tooltip-align="bottom"
					title="Bottom"
				>
					tooltip
				</button>
			</ClayTooltipProvider>
		);

		expect(document.querySelector('.tooltip')).toBeFalsy();

		fireEvent.mouseDown(document.body);

		fireEvent.mouseOver(getByTestId('button'));

		act(() => {
			jest.runAllTimers();
		});

		expect(document.querySelector('.tooltip')).toBeTruthy();

		fireEvent.mouseOut(getByTestId('button'));

		act(() => {
			jest.runAllTimers();
		});

		expect(document.querySelector('.tooltip')).toBeFalsy();
	});

	it('show tooltip on element focus and hide on blur', () => {
		const {getByTestId} = render(
			<ClayTooltipProvider>
				<button
					data-testid="button"
					data-tooltip-align="bottom"
					title="Bottom"
				>
					tooltip
				</button>
			</ClayTooltipProvider>
		);

		fireEvent.keyDown(document.body, {key: 'Tab'});

		expect(document.querySelector('.tooltip')).toBeFalsy();

		fireEvent.focus(getByTestId('button'));

		expect(document.querySelector('.tooltip')).toBeTruthy();

		fireEvent.blur(getByTestId('button'));

		expect(document.querySelector('.tooltip')).toBeFalsy();
	});
});
