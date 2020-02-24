/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm, {ClayInput} from '..';
import React from 'react';
import TestRenderer from 'react-test-renderer';

describe('ClayForm', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClayForm />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('FeedbackGroup renders', () => {
		const testRenderer = TestRenderer.create(<ClayForm.FeedbackGroup />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('FeedbackIndicator renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayForm.FeedbackIndicator spritemap="/some/path" symbol="test" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('FeedbackItem renders', () => {
		const testRenderer = TestRenderer.create(<ClayForm.FeedbackItem />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('Group renders', () => {
		const testRenderer = TestRenderer.create(<ClayForm.Group />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('Text renders', () => {
		const testRenderer = TestRenderer.create(<ClayForm.Text />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('Input.Group renders', () => {
		const testRenderer = TestRenderer.create(<ClayInput.Group />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('Input.GroupItem renders', () => {
		const testRenderer = TestRenderer.create(<ClayInput.GroupItem />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
