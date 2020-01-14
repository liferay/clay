/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@testing-library/jest-dom/extend-expect';
import ClayNavigationBar from '..';
import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import {
	act,
	cleanup,
	fireEvent,
	render,
	waitForElement,
} from '@testing-library/react';
import React from 'react';

const spritemap = 'node_modules/clay-css/lib/images/icons/icons.svg';

describe('ClayNavigationBar', () => {
	afterEach(cleanup);

	it('renders', () => {
		const label = 'Item 1';

		const {container} = render(
			<ClayNavigationBar
				inverted
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.Item active>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{label}</span>
					</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#3"
					>
						<span className="navbar-text-truncate">{`Item 3`}</span>
					</ClayLink>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a dropdown when clicking the trigger element from NavigationBar', async () => {
		const {container, getByTestId, getByText} = render(
			<ClayNavigationBar
				inverted
				spritemap={spritemap}
				triggerLabel={`Trigger Label`}
			>
				<ClayNavigationBar.Item active>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{`Item 1`}</span>
					</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		fireEvent.click(getByText('Trigger Label'));
		fireEvent.transitionEnd(getByTestId('NavigationBarDropdown'));

		let navigationBarDropdown;

		await act(async () => {
			navigationBarDropdown = await waitForElement(() =>
				container.querySelector('.navbar-collapse.collapse.show')
			);
		});

		expect(navigationBarDropdown).toBeDefined();

		expect(navigationBarDropdown).toMatchSnapshot();
	});

	it('collapses the previously expanded dropdown when trigger element is clicked', async () => {
		const {container, getByTestId} = render(
			<ClayNavigationBar
				inverted
				spritemap={spritemap}
				triggerLabel={`Trigger Label`}
			>
				<ClayNavigationBar.Item active>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{`Item 1`}</span>
					</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		fireEvent.click(getByTestId('navbarToggler'), 'Trigger Label');
		fireEvent.transitionEnd(getByTestId('NavigationBarDropdown'));

		fireEvent.click(getByTestId('navbarToggler'), 'Trigger Label');
		fireEvent.transitionEnd(getByTestId('NavigationBarDropdown'));

		let navigationBarDropdown;

		await act(async () => {
			navigationBarDropdown = await waitForElement(() =>
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
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.Item>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{label}</span>
					</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item active>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#3"
					>
						<span className="navbar-text-truncate">{`Item 3`}</span>
					</ClayLink>
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
				spritemap={spritemap}
				triggerLabel={label}
			>
				<ClayNavigationBar.Item active>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#1"
					>
						<span className="navbar-text-truncate">{label}</span>
					</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item active>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						small
					>
						<span className="navbar-text-truncate">{`Item 2`}</span>
					</ClayButton>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);

		expect(mockWarnings).toBeCalled();
		expect(mockWarnings.mock.calls[0][0]).toBe(
			'Warning: ClayNavigationBar expects 0 or 1 active children, but received 2'
		);
		expect(container).toMatchSnapshot();
		jest.resetAllMocks();
	});
});
