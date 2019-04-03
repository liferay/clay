/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayProgressBar from '../ClayProgressBar';

describe('ClayProgressBar', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayProgressBar value={50} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with additional content', () => {
		const testRenderer = TestRenderer.create(
			<ClayProgressBar value={50}>{'50%'}</ClayProgressBar>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('wraps content in feedback classname', () => {
		const testRenderer = TestRenderer.create(
			<ClayProgressBar feedback value={50}>
				{'50%'}
			</ClayProgressBar>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as a different status', () => {
		const testRenderer = TestRenderer.create(
			<ClayProgressBar status="warning" value={50}>
				{'50%'}
			</ClayProgressBar>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
