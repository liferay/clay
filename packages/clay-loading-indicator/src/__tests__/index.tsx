/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLoadingIndicator from '..';
import React from 'react';
import TestRenderer from 'react-test-renderer';

describe('ClayLoadingIndicator', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClayLoadingIndicator />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the small variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator small />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the light variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator light />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the small and light variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator light small />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
