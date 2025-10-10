/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {VerticalNav} from '../';

describe('VerticalNav basic rendering', () => {
	afterEach(() => cleanup());

	it('render static content', () => {
		const {container} = render(
			<VerticalNav aria-label="vertical navbar">
				<VerticalNav.Item active key="home">
					Home
				</VerticalNav.Item>
				<VerticalNav.Item key="about">About</VerticalNav.Item>
				<VerticalNav.Item key="contact">Contact</VerticalNav.Item>
			</VerticalNav>
		);

		expect(container).toMatchSnapshot();
	});

	it('render dynamic content', () => {
		const {container} = render(
			<VerticalNav
				aria-label="vertical navbar"
				items={[
					{
						id: 1,
						items: [
							{
								active: true,
								href: '#',
								id: 2,
								label: 'Nested1',
							},
						],
						label: 'Home',
					},
					{
						href: '#',
						id: 3,
						label: 'About',
					},
					{
						href: '#',
						id: 4,
						label: 'Contact',
					},
				]}
			>
				{(item: any) => (
					<VerticalNav.Item active={item.active} items={item.items}>
						{item.label}
					</VerticalNav.Item>
				)}
			</VerticalNav>
		);

		expect(container).toMatchSnapshot();
	});
});
