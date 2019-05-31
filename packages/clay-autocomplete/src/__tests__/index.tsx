/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '..';
import React from 'react';
import {cleanup, render} from 'react-testing-library';

describe('ClayAutocomplete', () => {
	afterEach(cleanup);

	it('renders', () => {
		render(<ClayAutocomplete />);

		expect(document.body).toMatchSnapshot();
	});

	it('renders Autocomplete with other markup component', () => {
		const MyMarkup = React.forwardRef<
			HTMLDivElement,
			React.HTMLAttributes<HTMLDivElement>
		>(({children, ...otherProps}, ref) => (
			<div
				{...otherProps}
				className="form-control form-control-tag-group"
				ref={ref}
			>
				{children}
			</div>
		));

		render(<ClayAutocomplete component={MyMarkup} />);

		expect(document.body).toMatchSnapshot();
	});
});
