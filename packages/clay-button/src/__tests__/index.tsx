/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayButton', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayButton />);

		expect(container).toMatchSnapshot();
	});

	it('renders with a different display type', () => {
		const {container} = render(<ClayButton displayType="link" />);

		expect(container).toMatchSnapshot();
	});

	it('renders disabled', () => {
		const {container} = render(
			<ClayButton disabled displayType="primary" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders borderless', () => {
		const {container} = render(
			<ClayButton borderless displayType="primary" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders block', () => {
		const {container} = render(<ClayButton block displayType="primary" />);

		expect(container).toMatchSnapshot();
	});

	it('renders outline', () => {
		const {container} = render(
			<ClayButton displayType="primary" outline />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders monospaced', () => {
		const {container} = render(
			<ClayButton displayType="primary" monospaced />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders small', () => {
		const {container} = render(<ClayButton displayType="primary" small />);

		expect(container).toMatchSnapshot();
	});

	it('renders with a ButtonGroup', () => {
		const {container} = render(
			<ClayButton.Group>
				<ClayButton />
			</ClayButton.Group>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ButtonGroup with spaced', () => {
		const {container} = render(
			<ClayButton.Group spaced>
				<ClayButton />
				<ClayButton />
			</ClayButton.Group>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders ButtonWithIcon', () => {
		const {container} = render(
			<ClayButtonWithIcon
				aria-label="Delete"
				spritemap="/some/path"
				symbol="trash"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders ButtonWithIcon without monospaced', () => {
		const {container} = render(
			<ClayButtonWithIcon
				aria-label="Delete"
				monospaced={false}
				spritemap="/some/path"
				symbol="trash"
			/>
		);

		expect(container).toMatchSnapshot();
	});
});
