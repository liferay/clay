/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithItems} from '..';
import ClayButton from '@clayui/button';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

const spritemap = 'icons.svg';

describe('ClayDropDownWithItems', () => {
	afterEach(cleanup);

	it('renders a DropDownWithItems', () => {
		render(
			<ClayDropDownWithItems
				items={[
					{
						label: 'clickable',
						onClick: () => {
							alert('you clicked!');
						},
					},
					{
						type: 'divider' as const,
					},
					{
						href: '#',
						label: 'linkable',
					},
				]}
				spritemap={spritemap}
				trigger={<ClayButton>{'Click Me'}</ClayButton>}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders a DropDownWithItems with radio group', () => {
		render(
			<ClayDropDownWithItems
				items={[
					{
						items: [
							{
								label: 'one',
								type: 'radio' as const,
								value: 'one',
							},
							{
								label: 'two',
								type: 'radio' as const,
								value: 'two',
							},
						],
						label: 'radio',
						name: 'radio',
						type: 'radiogroup' as const,
					},
				]}
				spritemap={spritemap}
				trigger={<ClayButton>{'Click Me'}</ClayButton>}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders a DropDownWithItems with checkbox', () => {
		render(
			<ClayDropDownWithItems
				items={[
					{
						items: [
							{
								checked: true,
								label: 'checkbox',
								type: 'checkbox' as const,
							},
							{
								checked: false,
								label: 'checkbox 1',
								type: 'checkbox' as const,
							},
						],
						label: 'checkbox',
						type: 'group' as const,
					},
				]}
				spritemap={spritemap}
				trigger={<ClayButton>{'Click Me'}</ClayButton>}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders a DropDownWithItems with caption', () => {
		render(
			<ClayDropDownWithItems
				caption="Showing 7 of 203 Structures"
				items={[
					{
						href: '#',
						label: 'linkable',
					},
				]}
				spritemap={spritemap}
				trigger={<ClayButton>{'Click Me'}</ClayButton>}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders a DropDownWithItems with footer content', () => {
		render(
			<ClayDropDownWithItems
				footerContent={<ClayButton>{'Done'}</ClayButton>}
				items={[
					{
						href: '#',
						label: 'linkable',
					},
				]}
				spritemap={spritemap}
				trigger={<ClayButton>{'Click Me'}</ClayButton>}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders a DropDownWithItems with help text', () => {
		render(
			<ClayDropDownWithItems
				helpText="Help Text"
				items={[
					{
						href: '#',
						label: 'linkable',
					},
				]}
				spritemap={spritemap}
				trigger={<ClayButton>{'Click Me'}</ClayButton>}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders a DropDownWithItems with search', () => {
		render(
			<ClayDropDownWithItems
				items={[
					{
						href: '#',
						label: 'linkable',
					},
				]}
				onSearchValueChange={() => {}}
				searchValue="Search"
				searchable
				spritemap={spritemap}
				trigger={<ClayButton>{'Click Me'}</ClayButton>}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});
});
