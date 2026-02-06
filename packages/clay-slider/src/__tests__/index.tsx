/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClaySlider from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClaySlider', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClaySlider onChange={() => {}} value={10} />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a Slider disabled', () => {
		const {container} = render(
			<ClaySlider disabled onChange={() => {}} value={10} />
		);

		const input = container.querySelector(
			'.form-control-range'
		) as HTMLInputElement;
		const range = container.querySelector('.clay-range') as HTMLDivElement;

		expect(range.classList).toContain('disabled');
		expect(input.attributes.getNamedItem('disabled')).toBeTruthy();
	});

	it('renders a Slider with the tooltip position bottom', () => {
		const {container} = render(
			<ClaySlider defaultValue={10} tooltipPosition="bottom" />
		);

		expect(
			container.querySelector('.tooltip.clay-tooltip-bottom')
		).toBeTruthy();
	});
});
