/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayCheckbox from '../ClayCheckbox';

describe('ClayCheckbox', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClayCheckbox />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a label', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox label="Unchecked" />
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as checked', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox checked label="Checked" />
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with an indeterminate value', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox indeterminate label="Indeterminate" />
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as disabled', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox disabled label="Unchecked disabled" />
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as checked and disabled', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox checked disabled label="Checked disabled" />
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with an indeterminate value and disabled', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox
				disabled
				indeterminate
				label="Indeterminate disabled"
			/>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
