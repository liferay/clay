/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayLoadingIndicator from '..';
import React from 'react';
import TestRenderer from 'react-test-renderer';

describe('ClayLoadingIndicator', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClayLoadingIndicator />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the deprecated small variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator small />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the deprecated light variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator light />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the deprecated small and the deprecated light variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator light small />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the circle shape', () => {
		const testRenderer = TestRenderer.create(<ClayLoadingIndicator />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the squares shape', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator shape="squares" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the extra small variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator size="xs" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the small variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator size="sm" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the medium variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator size="md" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the large variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator size="lg" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the primary variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator displayType="primary" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the secondary variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator displayType="secondary" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as the light variant', () => {
		const testRenderer = TestRenderer.create(
			<ClayLoadingIndicator displayType="light" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
