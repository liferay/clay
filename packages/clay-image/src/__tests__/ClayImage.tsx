/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayImage from '../ClayImage';

describe('ClayImage', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayImage alt="user image" src="avatar.png" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with className', () => {
		const testRenderer = TestRenderer.create(
			<ClayImage
				alt="user image"
				className="sticker-img"
				src="avatar.png"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
