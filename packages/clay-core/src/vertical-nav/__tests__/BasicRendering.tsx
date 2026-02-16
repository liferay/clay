/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {VerticalNav} from '../';

describe('VerticalNav basic rendering', () => {
	afterEach(() => cleanup());

	function renderStaticWithProps(props: any = {}) {
		return render(
			<VerticalNav active="home" aria-label="vertical navbar" {...props}>
				<VerticalNav.Item key="home">Home</VerticalNav.Item>

				<VerticalNav.Item key="about">About</VerticalNav.Item>

				<VerticalNav.Item key="contact">Contact</VerticalNav.Item>
			</VerticalNav>
		);
	}

	it('render static content', () => {
		const {container} = renderStaticWithProps();

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

	describe('VerticalNav displayType', () => {
		it('render menubar-transparent by default', () => {
			const {container} = renderStaticWithProps();

			expect(
				container.querySelector('.menubar-transparent')
			).toBeInTheDocument();
		});

		it('render menubar-primary', () => {
			const {container} = renderStaticWithProps({displayType: 'primary'});

			expect(
				container.querySelector('.menubar-transparent')
			).not.toBeInTheDocument();

			expect(
				container.querySelector('.menubar-primary')
			).toBeInTheDocument();
		});
	});

	describe('VerticalNav collapse', () => {
		it('render menubar-collapse whenever the collapse prop is provided', () => {
			const {container} = renderStaticWithProps({collapse: true});

			expect(
				container.querySelector('.menubar-collapse')
			).toBeInTheDocument();
		});
	});

	describe('VerticalNav size', () => {
		it('render expand classes according to the size prop', () => {
			const sizes = ['lg', 'md'];

			for (const size of sizes) {
				const {container} = renderStaticWithProps({size});

				expect(
					container.querySelector(`.menubar-vertical-expand-${size}`)
				).toBeInTheDocument();
			}
		});
	});
});
