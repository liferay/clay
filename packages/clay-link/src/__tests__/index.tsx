/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink, {ClayLinkContext} from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayLink', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayLink />);

		expect(container).toMatchSnapshot();
	});

	it('renders with href', () => {
		const {container} = render(<ClayLink href="#links" />);

		expect(container).toMatchSnapshot();
	});

	it('renders with a children content', () => {
		const {container} = render(<ClayLink>My Link</ClayLink>);

		expect(container).toMatchSnapshot();
	});

	it('renders with a display type', () => {
		const {container} = render(<ClayLink displayType="secondary" />);

		expect(container).toMatchSnapshot();
	});

	it('renders with monospaced', () => {
		const {container} = render(
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

		expect(container).toMatchSnapshot();
	});

	it('renders outline links', () => {
		const {container} = render(
			<ClayLink displayType="primary" href="#1" outline>
				Outline
			</ClayLink>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders borderless links', () => {
		const {container} = render(
			<ClayLink borderless href="#1">
				Borderless
			</ClayLink>
		);

		expect(container).toMatchSnapshot();
	});

	it('uses custom link component via context', () => {
		const BoldLink = ({children, ...otherProps}: any) => (
			<a {...otherProps}>
				<strong>{children}</strong>
			</a>
		);
		const {container} = render(
			<ClayLinkContext.Provider value={BoldLink}>
				<ClayLink displayType="secondary" href="#1">
					I am Bold!
				</ClayLink>
			</ClayLinkContext.Provider>
		);

		expect(container).toMatchSnapshot();
	});

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

	it('add extra aria-label when target is `_blank`', () => {
		const {getByText} = render(<ClayLink target="_blank">Page</ClayLink>);

		expect(getByText('(Opens a new window)')).toBeTruthy();
	});
});
