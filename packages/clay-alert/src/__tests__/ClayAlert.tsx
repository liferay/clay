/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAlert from '..';
import ClayButton from '@clayui/button';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayAlert', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayAlert spritemap="/foo/bar" title="Hello!" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders as a different type', () => {
		const {container} = render(
			<ClayAlert
				displayType="danger"
				spritemap="/foo/bar"
				title="Hello!"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders as `stripe` variant', () => {
		const {container} = render(
			<ClayAlert spritemap="/foo/bar" title="Hello!" variant="stripe" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders as `feedback` variant', () => {
		const {container} = render(
			<ClayAlert spritemap="/foo/bar" title="Hello!" variant="feedback" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with an icon for closing', () => {
		const {container} = render(
			<ClayAlert onClose={() => {}} spritemap="/foo/bar" title="Hello!" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with a title and a message with markup', () => {
		const {container} = render(
			<ClayAlert spritemap="/foo/bar" title="Hello!">
				<span>test</span>
			</ClayAlert>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with a footer and button', () => {
		const {container} = render(
			<ClayAlert spritemap="/foo/bar" title="Hello!">
				<span>test</span>

				<ClayAlert.Footer>
					<ClayButton.Group>
						<ClayButton alert>View</ClayButton>
					</ClayButton.Group>
				</ClayAlert.Footer>
			</ClayAlert>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with ToastContainer as a wrapper ', () => {
		const {container} = render(
			<ClayAlert.ToastContainer>
				<ClayAlert spritemap="/foo/bar" title="One!" />
				<ClayAlert spritemap="/foo/bar" title="Two!" />
				<ClayAlert spritemap="/foo/bar" title="Three!" />
			</ClayAlert.ToastContainer>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with an icon for closing with autoClose', () => {
		const {container} = render(
			<ClayAlert
				autoClose
				onClose={() => {}}
				spritemap="/foo/bar"
				title="Hello!"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with autoClose and without icon', () => {
		const {container} = render(
			<ClayAlert
				autoClose
				hideCloseIcon
				onClose={() => {}}
				spritemap="/foo/bar"
				title="Hello!"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders alert inline with action', () => {
		const {container} = render(
			<ClayAlert
				actions={<ClayButton small>Baz</ClayButton>}
				spritemap="/foo/bar"
				title="Foo:"
				variant="inline"
			>
				Bar!
			</ClayAlert>
		);

		expect(container).toMatchSnapshot();
	});

	it('render toast alert with stacked action', () => {
		const {container} = render(
			<ClayAlert
				actions={
					<ClayButton alert small>
						Baz
					</ClayButton>
				}
				spritemap="/foo/bar"
				title="Foo:"
			>
				Bar!
			</ClayAlert>
		);

		expect(container).toMatchSnapshot();
	});
});
