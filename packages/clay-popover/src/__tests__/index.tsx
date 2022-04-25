/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPopover from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayPopover', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayPopover header="Popover">
				{`Viennese flavour cup eu, percolator froth ristretto mazagran
					caffeine. White roast seasonal, mocha trifecta, dripper caffeine
					spoon acerbic to go macchiato strong.`}
			</ClayPopover>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders without scroll', () => {
		const {container} = render(
			<ClayPopover disableScroll header="Popover">
				{`Viennese flavour cup eu, percolator froth ristretto mazagran
					caffeine. White roast seasonal, mocha trifecta, dripper caffeine
					spoon acerbic to go macchiato strong.`}
			</ClayPopover>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with `show`', () => {
		const {container} = render(
			<ClayPopover defaultShow header="Popover">
				{`Viennese flavour cup eu, percolator froth ristretto mazagran
					caffeine. White roast seasonal, mocha trifecta, dripper caffeine
					spoon acerbic to go macchiato strong.`}
			</ClayPopover>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with trigger', () => {
		const {container} = render(
			<ClayPopover
				header="Popover"
				trigger={<button type="button">Logo</button>}
			>
				{`Viennese flavour cup eu, percolator froth ristretto mazagran
					caffeine. White roast seasonal, mocha trifecta, dripper caffeine
					spoon acerbic to go macchiato strong.`}
			</ClayPopover>
		);

		expect(container).toMatchSnapshot();
	});
});
