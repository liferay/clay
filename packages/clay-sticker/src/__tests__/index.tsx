/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClaySticker from '..';
import React from 'react';
import * as TestRenderer from 'react-test-renderer';

describe('ClaySticker', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker>{'A'}</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a display type', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker displayType="danger">{'B'}</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a size', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker size="xl">{'B'}</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a shape circle', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker shape="circle">{'B'}</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a outside', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker outside position="top-left">
				{'B'}
			</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a position', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker position="bottom-left">{'B'}</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
