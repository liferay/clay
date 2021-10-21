/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink, {ClayLinkContext} from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';
import TestRenderer from 'react-test-renderer';

describe('ClayLink', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(<ClayLink />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with href', () => {
		const testRenderer = TestRenderer.create(<ClayLink href="#links" />);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a children content', () => {
		const testRenderer = TestRenderer.create(<ClayLink>My Link</ClayLink>);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with a display type', () => {
		const testRenderer = TestRenderer.create(
			<ClayLink displayType="secondary" />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with monospaced', () => {
		const testRenderer = TestRenderer.create(
			<ClayLink
				borderless
				displayType="primary"
				href="#1"
				monospaced
				outline
			>
				M
			</ClayLink>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders outline links', () => {
		const testRenderer = TestRenderer.create(
			<ClayLink displayType="primary" href="#1" outline>
				Outline
			</ClayLink>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders borderless links', () => {
		const testRenderer = TestRenderer.create(
			<ClayLink borderless href="#1">
				Borderless
			</ClayLink>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('uses custom link component via context', () => {
		const BoldLink: React.FunctionComponent<any> = ({
			children,
			...otherProps
		}) => (
			<a {...otherProps}>
				<strong>{children}</strong>
			</a>
		);
		const testRenderer = TestRenderer.create(
			<ClayLinkContext.Provider value={BoldLink}>
				<ClayLink displayType="secondary" href="#1">
					I am Bold!
				</ClayLink>
			</ClayLinkContext.Provider>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

describe('ClayCard w/ @testing-library/react', () => {
	afterEach(cleanup);

	it('adds rel="noreferrer noopener" if target exists', () => {
		const {container} = render(<ClayLink target="_blank" />);

		expect((container.firstChild as HTMLAnchorElement).rel).toEqual(
			'noreferrer noopener'
		);
	});

	it('override rel if provided', () => {
		const {container} = render(<ClayLink rel="foo bar" target="_blank" />);

		expect((container.firstChild as HTMLAnchorElement).rel).toEqual(
			'foo bar'
		);
	});
});
