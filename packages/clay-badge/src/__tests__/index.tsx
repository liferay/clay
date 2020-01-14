/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayBadge from '..';
import React from 'react';
import TestRenderer from 'react-test-renderer';

describe('ClayBadge', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayBadge displayType="primary" label="4" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('applies custom className', () => {
		const testRenderer = TestRenderer.create(
			<ClayBadge className="bar foo" displayType="primary" label="4" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
