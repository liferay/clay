/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayEmptyState from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayEmptyState', () => {
	afterEach(cleanup);

	it('renders with default values', () => {
		const {container} = render(<ClayEmptyState />);

		expect(container).toMatchSnapshot();
	});

	it('renders with an image provided', () => {
		const {container} = render(
			<ClayEmptyState imageSrc="https://via.placeholder.com/256" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with a children content', () => {
		const {container} = render(
			<ClayEmptyState>{'My Empty State'}</ClayEmptyState>
		);

		expect(container).toMatchSnapshot();
	});
});
