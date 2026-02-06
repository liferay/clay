/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClaySticker from '..';
import React from 'react';
import TestRenderer from 'react-test-renderer';

describe('ClaySticker', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClaySticker>A</ClaySticker>);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a display type', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker displayType="danger">B</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a size', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker size="xl">B</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a shape circle', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker shape="circle">B</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a outside', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker outside position="top-left">
				B
			</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a position', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker position="bottom-left">B</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with an overlay', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker>
				<ClaySticker.Overlay>
					<ClaySticker.Image alt="" src="#" />
				</ClaySticker.Overlay>

				<ClaySticker.Overlay>BC</ClaySticker.Overlay>
			</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with an image', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker>
				<ClaySticker.Image alt="placeholder" src="#" />
			</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a user icon', () => {
		const testRenderer = TestRenderer.create(
			<ClaySticker shape="user-icon">
				<ClaySticker.Image alt="placeholder" src="#" />
			</ClaySticker>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
