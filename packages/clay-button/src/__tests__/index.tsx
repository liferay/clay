/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayButton from '..';

describe('ClayButton', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClayButton />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a different display type', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton displayType="link" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders disabled', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton disabled displayType="primary" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders block', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton block displayType="primary" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders monospaced', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton displayType="primary" monospaced />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders small', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton displayType="primary" small />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a ButtonGroup', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton.Group>
				<ClayButton />
			</ClayButton.Group>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
