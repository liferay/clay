/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayNav, {ClayVerticalNav} from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

describe('ClayNav', () => {
	afterEach(() => cleanup());

	it('renders', () => {
		const {container} = render(
			<ClayNav>
				<div />
			</ClayNav>
		);

		expect(container).toMatchSnapshot();
	});
});

describe('ClayVerticalNav', () => {
	afterEach(() => cleanup());

	const items = [
		{
			initialExpanded: false,
			items: [
				{
					href: '#nested1',
					label: 'Nested1',
				},
			],
			label: 'Home',
		},
	];

	it('renders', () => {
		const {container} = render(
			<ClayVerticalNav
				activeLabel="Home"
				items={items}
				spritemap="/path/to"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('expands items when clicked', () => {
		const {container, getByText} = render(
			<ClayVerticalNav
				activeLabel="foo"
				items={items}
				spritemap="/path/to"
			/>
		);

		expect(
			container.querySelector('.collapsing.show .nav-item')
		).toBeFalsy();

		fireEvent.click(getByText('Home'));

		expect(
			container.querySelector('.collapsing.show .nav-item')
		).toBeTruthy();
	});
});
