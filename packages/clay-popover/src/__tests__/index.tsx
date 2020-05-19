/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPopover from '..';
import React from 'react';
import {cleanup, render} from '@testing-library/react';

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
});
