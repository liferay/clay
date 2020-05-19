/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@testing-library/jest-dom/extend-expect';
import ClayTabs from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

const ClayTabsWithItems = () => {
	const [activeTabKeyValue, setActiveTabKeyValue] = React.useState<number>(0);

	return (
		<>
			<ClayTabs>
				<ClayTabs.Item
					active={activeTabKeyValue == 0}
					onClick={() => setActiveTabKeyValue(0)}
				>
					{'Dummy1'}
				</ClayTabs.Item>
				<ClayTabs.Item
					active={activeTabKeyValue == 1}
					data-testid="tabItem2"
					onClick={() => setActiveTabKeyValue(1)}
				>
					{'Dummy2'}
				</ClayTabs.Item>
				<ClayTabs.Item
					active={activeTabKeyValue == 2}
					onClick={() => setActiveTabKeyValue(2)}
				>
					{'Dummy3'}
				</ClayTabs.Item>
			</ClayTabs>
			<ClayTabs.Content activeIndex={activeTabKeyValue}>
				<ClayTabs.TabPane data-testid="tabPane1">
					{'Tab Content 1'}
				</ClayTabs.TabPane>
				<ClayTabs.TabPane data-testid="tabPane2">
					{'Tab Content 2'}
				</ClayTabs.TabPane>
				<ClayTabs.TabPane>{'Tab Content 3'}</ClayTabs.TabPane>
			</ClayTabs.Content>
		</>
	);
};

describe('ClayTabs', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayTabs />);

		expect(container).toMatchSnapshot();
	});

	it('renders justifying nav items', () => {
		const {container} = render(<ClayTabs justified />);

		expect(container.querySelector('.nav.nav-justified')).toBeTruthy();
	});

	it('renders with modern style', () => {
		const {container} = render(<ClayTabs modern />);

		expect(container.querySelector('.nav.nav-underline')).toBeTruthy();
	});

	it('renders with items', () => {
		const {container} = render(<ClayTabsWithItems />);

		expect(container).toMatchSnapshot();
	});

	it('renders nav items as anchors', () => {
		const {getAllByTestId} = render(
			<>
				<ClayTabs>
					<ClayTabs.Item active href="https://clay.dev/foo" />
					{'One'}
					<ClayTabs.Item href="https://clay.dev/bar">
						{'Two'}
					</ClayTabs.Item>
				</ClayTabs>
				<ClayTabs.Content activeIndex={1}>
					<ClayTabs.TabPane>{'Content One'}</ClayTabs.TabPane>
					<ClayTabs.TabPane>{'Content Two'}</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		);

		const tabItems = getAllByTestId('tabItem');

		expect(tabItems[0].nodeName).toBe('A');
		expect(tabItems[1].nodeName).toBe('A');
	});

	it('renders disabled nav items', () => {
		const {getAllByTestId} = render(
			<>
				<ClayTabs>
					<ClayTabs.Item active>{'One'}</ClayTabs.Item>
					<ClayTabs.Item>{'Two'}</ClayTabs.Item>
					<ClayTabs.Item disabled>{'Three'}</ClayTabs.Item>
				</ClayTabs>
				<ClayTabs.Content activeIndex={1}>
					<ClayTabs.TabPane>{'Content One'}</ClayTabs.TabPane>
					<ClayTabs.TabPane>{'Content Two'}</ClayTabs.TabPane>
					<ClayTabs.TabPane>{'Content Three'}</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		);

		const tabItems = getAllByTestId('tabItem');

		expect(tabItems[2].classList).toContain('disabled');
		expect(tabItems[2].attributes.getNamedItem('disabled')).toBeTruthy();
	});

	it('emits a number when clicking an item', () => {
		const onClick = jest.fn();

		const {getAllByTestId} = render(
			<>
				<ClayTabs>
					<ClayTabs.Item active onClick={onClick}>
						{'One'}
					</ClayTabs.Item>
					<ClayTabs.Item onClick={onClick}>{'Two'}</ClayTabs.Item>
				</ClayTabs>
				<ClayTabs.Content activeIndex={1}>
					<ClayTabs.TabPane>{'Content One'}</ClayTabs.TabPane>
					<ClayTabs.TabPane>{'Content Two'}</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		);

		const tabItems = getAllByTestId('tabItem');

		fireEvent.click(tabItems[0]);
		expect(onClick).toBeCalled();

		fireEvent.click(tabItems[1]);
		expect(onClick).toBeCalled();
	});
});
