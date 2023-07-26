/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayEmptyState from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('ClayEmptyState', () => {
	afterEach(cleanup);

	it('renders with default values', () => {
		const {container} = render(<ClayEmptyState />);

		expect(container).toMatchSnapshot();
	});

	it('renders with an image provided', () => {
		const {container} = render(
			<ClayEmptyState imgSrc="https://via.placeholder.com/256" />
		);

		expect(container).toMatchSnapshot();
	});

	it('does not render a reduced motion classes if imgSrcReducedMotion={null}', () => {
		const {container} = render(
			<ClayEmptyState
				imgSrc="https://via.placeholder.com/256"
				imgSrcReducedMotion={null}
			/>
		);

		expect(
			container.querySelector('.d-none-c-prefers-reduced-motion')
		).toBe(null);
	});

	it('renders with a reduced motion image provided', () => {
		const {container} = render(
			<ClayEmptyState
				imgSrc="https://via.placeholder.com/256"
				imgSrcReducedMotion="https://via.placeholder.com/256"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('when passing `title` property with null, render the title section', () => {
		const {queryByText} = render(<ClayEmptyState title={null} />);

		expect(queryByText('No results found')).toBeDefined();
	});

	it('renders with a children content', () => {
		const {container} = render(
			<ClayEmptyState>My Empty State</ClayEmptyState>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with different image props', () => {
		const {container} = render(
			<ClayEmptyState
				imgProps={{alt: 'hello world'}}
				imgSrc="https://via.placeholder.com/256"
			>
				My Empty State
			</ClayEmptyState>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with different reduced motion image props', () => {
		const {container} = render(
			<ClayEmptyState
				imgProps={{alt: 'hello world'}}
				imgPropsReducedMotion={{alt: 'hello world?'}}
				imgSrc="https://via.placeholder.com/256"
				imgSrcReducedMotion="https://via.placeholder.com/256"
			>
				My Empty State
			</ClayEmptyState>
		);

		expect(container).toMatchSnapshot();
	});
});
