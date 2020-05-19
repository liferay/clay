/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTooltip, {ClayTooltipProvider} from '..';
import React from 'react';
import {act, cleanup, fireEvent, render} from '@testing-library/react';

describe('ClayTooltip', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayTooltip show>{'Tooltip'}</ClayTooltip>);

		expect(container).toMatchSnapshot();
	});

	it('displays on mouseover', () => {
		jest.useFakeTimers();

		const {getByTestId} = render(
			<ClayTooltipProvider>
				<button
					data-testid="button"
					data-tooltip-align="bottom"
					title="Bottom"
				>
					{'tooltip'}
				</button>
			</ClayTooltipProvider>
		);

		expect(document.querySelector('.tooltip')).toBeFalsy();

		fireEvent.mouseOver(getByTestId('button'));

		act(() => {
			jest.runAllTimers();
		});

		expect(document.querySelector('.tooltip')).toBeTruthy();
	});
});
