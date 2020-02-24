/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import TestRenderer from 'react-test-renderer';

import ClayCheckbox from '../Checkbox';

describe('ClayCheckbox', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox checked={false} onChange={() => {}} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a label', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox
				checked={false}
				label="Unchecked"
				onChange={() => {}}
			/>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as checked', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox checked label="Checked" onChange={() => {}} />
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with an indeterminate value', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox
				checked
				indeterminate
				label="Indeterminate"
				onChange={() => {}}
			/>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as disabled', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox
				checked={false}
				disabled
				label="Unchecked disabled"
				onChange={() => {}}
			/>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as checked and disabled', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox
				checked
				disabled
				label="Checked disabled"
				onChange={() => {}}
			/>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with an indeterminate value and disabled', () => {
		const testRenderer = TestRenderer.create(
			<ClayCheckbox
				checked
				disabled
				indeterminate
				label="Indeterminate disabled"
				onChange={() => {}}
			/>
		);
		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
