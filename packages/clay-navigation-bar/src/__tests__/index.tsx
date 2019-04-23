/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayNavigationBar from '..';

const spritemap = 'node_modules/clay-css/lib/images/icons/icons.svg';

describe('ClayNavigationBar', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayNavigationBar items={[]} spritemap={spritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with id', () => {
		const testRenderer = TestRenderer.create(
			<ClayNavigationBar id="test" items={[]} spritemap={spritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with inverted', () => {
		const testRenderer = TestRenderer.create(
			<ClayNavigationBar inverted items={[]} spritemap={spritemap} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with items', () => {
		const testRenderer = TestRenderer.create(
			<ClayNavigationBar
				items={[
					{
						active: true,
						href: '#1',
						label: 'Test 1',
					},
					{
						active: false,
						href: '#2',
						label: 'Test 2',
					},
					{
						active: false,
						href: '#3',
						label: 'Test 3',
					},
				]}
				spritemap={spritemap}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders items as buttons', () => {
		const testRenderer = TestRenderer.create(
			<ClayNavigationBar
				items={[
					{
						active: true,
						label: 'Test 1',
					},
					{
						active: false,
						label: 'Test 2',
					},
					{
						active: false,
						label: 'Test 3',
					},
				]}
				spritemap={spritemap}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders items as anchor', () => {
		const testRenderer = TestRenderer.create(
			<ClayNavigationBar
				items={[
					{
						active: true,
						href: '#1',
						label: 'Test 1',
					},
					{
						active: false,
						href: '#2',
						label: 'Test 2',
					},
					{
						active: false,
						href: '#3',
						label: 'Test 3',
					},
				]}
				spritemap={spritemap}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});
