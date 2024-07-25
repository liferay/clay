/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@testing-library/jest-dom/extend-expect';
import ClayNavigationBar from '..';
import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import {act, cleanup, fireEvent, render, waitFor} from '@testing-library/react';
import React from 'react';

const spritemap = 'node_modules/clay-css/lib/images/icons/icons.svg';

describe('ClayNavigationBar', () => {
	afterEach(cleanup);

	it('renders', () => {
		const label = 'Item 1';

		const {container} = render(
			<ClayNavigationBar
				inverted
				messages={{
					close: 'Close',
					open: 'Open',
					trigger: '{0} Menu, Current Page: {1}',
				}}
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.Item active>
					<ClayLink href="#1">{label}</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayButton>Item 2</ClayButton>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayLink href="#3">Item 3</ClayLink>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a custom item', () => {
		const label = 'Item 1';

		const {container} = render(
			<ClayNavigationBar
				inverted
				messages={{
					close: 'Close',
					open: 'Open',
					trigger: '{0} Menu, Current Page: {1}',
				}}
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.Item active>
					<a className="my-custom-class" href="#1">
						{label}
					</a>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a dropdown when clicking the trigger element from NavigationBar', async () => {
		jest.useFakeTimers();

		const {container, getByText} = render(
			<ClayNavigationBar
				inverted
				messages={{
					close: 'Close',
					open: 'Open',
					trigger: '{0} Menu, Current Page: {1}',
				}}
				spritemap={spritemap}
				triggerLabel="Trigger Label"
			>
				<ClayNavigationBar.Item active>
					<ClayLink href="#1">Item 1</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayButton>Item 2</ClayButton>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		fireEvent.click(getByText('Trigger Label'));

		jest.runAllTimers();

		let navigationBarDropdown;

		await act(async () => {
			navigationBarDropdown = await waitFor(() =>
				container.querySelector('.navbar-collapse')
			);
		});

		expect(navigationBarDropdown).toBeDefined();

		expect(navigationBarDropdown).toMatchSnapshot();
	});

	it('collapses the previously expanded dropdown when trigger element is clicked', async () => {
		jest.useFakeTimers();

		const {container, getByTestId} = render(
			<ClayNavigationBar
				inverted
				messages={{
					close: 'Close',
					open: 'Open',
					trigger: '{0} Menu, Current Page: {1}',
				}}
				spritemap={spritemap}
				triggerLabel="Trigger Label"
			>
				<ClayNavigationBar.Item active>
					<ClayLink href="#1">Item 1</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayButton>Item 2</ClayButton>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		fireEvent.click(getByTestId('navbarToggler'), 'Trigger Label');

		act(() => {
			jest.runAllTimers();
		});

		fireEvent.click(getByTestId('navbarToggler'), 'Trigger Label');

		act(() => {
			jest.runAllTimers();
		});

		let navigationBarDropdown;

		await act(async () => {
			navigationBarDropdown = await waitFor(() =>
				container.querySelector('.navbar-collapse.collapse')
			);
		});

		expect(navigationBarDropdown).toBeDefined();

		expect(navigationBarDropdown).not.toHaveClass('show');

		expect(navigationBarDropdown).toMatchSnapshot();
	});

	it('renders when passing more than one active item', () => {
		const label = 'Item 1';

		const {container} = render(
			<ClayNavigationBar
				inverted
				messages={{
					close: 'Close',
					open: 'Open',
					trigger: '{0} Menu, Current Page: {1}',
				}}
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.Item>
					<ClayLink href="#1">{label}</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item active>
					<ClayButton>Item 2</ClayButton>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayLink href="#3">Item 3</ClayLink>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		expect(container).toMatchSnapshot();
	});

	it('throws a warning when passing more than one active prop to child', () => {
		const mockWarnings = jest
			.spyOn(global.console, 'error')
			.mockImplementation(() => null);

		const label = 'Item 1';

		const {container} = render(
			<ClayNavigationBar
				inverted
				messages={{
					close: 'Close',
					open: 'Open',
					trigger: '{0} Menu, Current Page: {1}',
				}}
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.Item active>
					<ClayLink href="#1">{label}</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item active>
					<ClayButton>Item 2</ClayButton>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		expect(mockWarnings).toBeCalled();
		expect(mockWarnings.mock.calls[0]![0]).toBe(
			'Warning: ClayNavigationBar expects 0 or 1 active children, but received 2'
		);
		expect(container).toMatchSnapshot();
		jest.resetAllMocks();
	});

	it('renders with a single item', () => {
		const label = 'Item 1';

		const {container} = render(
			<ClayNavigationBar
				inverted
				messages={{
					close: 'Close',
					open: 'Open',
					trigger: '{0} Menu, Current Page: {1}',
				}}
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.Item active>
					<ClayLink href="#1">{label}</ClayLink>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		expect(container).toMatchSnapshot();
	});
});
