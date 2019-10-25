/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAlert from '..';
import React from 'react';
import * as TestRenderer from 'react-test-renderer';

describe('ClayAlert', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayAlert spritemap="/foo/bar" title="Hello!" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as a different type', () => {
		const testRenderer = TestRenderer.create(
			<ClayAlert
				displayType="danger"
				spritemap="/foo/bar"
				title="Hello!"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as `stripe` variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayAlert spritemap="/foo/bar" title="Hello!" variant="stripe" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with an icon for closing', () => {
		const testRenderer = TestRenderer.create(
			<ClayAlert onClose={() => {}} spritemap="/foo/bar" title="Hello!" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a title and a message with markup', () => {
		const testRenderer = TestRenderer.create(
			<ClayAlert spritemap="/foo/bar" title="Hello!">
				<span>{'test'}</span>
			</ClayAlert>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with ToastContainer as a wrapper ', () => {
		const testRenderer = TestRenderer.create(
			<ClayAlert.ToastContainer>
				<ClayAlert spritemap="/foo/bar" title="One!" />
				<ClayAlert spritemap="/foo/bar" title="Two!" />
				<ClayAlert spritemap="/foo/bar" title="Three!" />
			</ClayAlert.ToastContainer>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
