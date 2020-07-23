/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '..';
import React from 'react';
import TestRenderer from 'react-test-renderer';

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

	it('renders borderless', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton borderless displayType="primary" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders block', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton block displayType="primary" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders outline', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton displayType="primary" outline />
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

	it('renders a ButtonGroup with spaced', () => {
		const testRenderer = TestRenderer.create(
			<ClayButton.Group spaced>
				<ClayButton />
				<ClayButton />
			</ClayButton.Group>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders ButtonWithIcon', () => {
		const testRenderer = TestRenderer.create(
			<ClayButtonWithIcon spritemap="/some/path" symbol="trash" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders ButtonWithIcon without monospaced', () => {
		const testRenderer = TestRenderer.create(
			<ClayButtonWithIcon
				monospaced={false}
				spritemap="/some/path"
				symbol="trash"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
