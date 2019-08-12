/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@testing-library/jest-dom/extend-expect';
import ClayTabs from '..';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

const ClayTabsWithItems = () => {
	const [activeTabKeyValue, setActiveTabKeyValue] = React.useState<number>(0);

	const onClick = (val: number) => setActiveTabKeyValue(val);

	return (
		<>
			<ClayTabs>
				<ClayTabs.Item
					active={activeTabKeyValue == 0}
					onClick={onClick}
					tabName="Dummy1"
					tabkey={0}
				/>
				<ClayTabs.Item
					active={activeTabKeyValue == 1}
					data-testid="tabItem2"
					onClick={onClick}
					tabName="Dummy2"
					tabkey={1}
				/>
				<ClayTabs.Item
					active={activeTabKeyValue == 2}
					onClick={onClick}
					tabName="Dummy3"
					tabkey={2}
				/>
			</ClayTabs>
			<ClayTabs.Content activeTabKey={activeTabKeyValue}>
				<ClayTabs.TabPane data-testid="tabPane1" tabkey={0}>
					{'Tab Content 1'}
				</ClayTabs.TabPane>
				<ClayTabs.TabPane data-testid="tabPane2" tabkey={1}>
					{'Tab Content 2'}
				</ClayTabs.TabPane>
				<ClayTabs.TabPane tabkey={2}>
					{'Tab Content 3'}
				</ClayTabs.TabPane>
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

		expect(container).toMatchSnapshot();
	});

	it('renders with modern style', () => {
		const {container} = render(<ClayTabs modern />);

		expect(container).toMatchSnapshot();
	});

	it('renders with items', () => {
		const {container} = render(<ClayTabsWithItems />);

		expect(container).toMatchSnapshot();
	});

	it('renders nav items as anchors', () => {
		const {container, getByTestId} = render(
			<>
				<ClayTabs>
					<ClayTabs.Item
						active
						component="a"
						tabName="One"
						tabkey={1}
					/>
					<ClayTabs.Item component="a" tabName="Two" tabkey={2} />
				</ClayTabs>
				<ClayTabs.Content activeTabKey={1}>
					<ClayTabs.TabPane tabkey={1}>
						{'Content One'}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabkey={2}>
						{'Content Two'}
					</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		);

		const tabItem = getByTestId('oneTabItem');

		expect(tabItem.nodeName).toBe('A');

		expect(container).toMatchSnapshot();
	});

	it('renders disabled nav items', () => {
		const {container} = render(
			<>
				<ClayTabs>
					<ClayTabs.Item active tabName="One" tabkey={1} />
					<ClayTabs.Item tabName="Two" tabkey={2} />
					<ClayTabs.Item disabled tabName="Three" tabkey={3} />
				</ClayTabs>
				<ClayTabs.Content activeTabKey={1}>
					<ClayTabs.TabPane tabkey={1}>
						{'Content One'}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabkey={2}>
						{'Content Two'}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabkey={3}>
						{'Content Three'}
					</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		);

		expect(container).toMatchSnapshot();
	});

	it('emits a number when clicking an item', () => {
		const onClick = jest.fn();

		const {container, getByTestId} = render(
			<>
				<ClayTabs>
					<ClayTabs.Item
						active
						onClick={onClick}
						tabName="One"
						tabkey={1}
					/>
					<ClayTabs.Item
						component="a"
						onClick={onClick}
						tabName="Two"
						tabkey={2}
					/>
				</ClayTabs>
				<ClayTabs.Content activeTabKey={1}>
					<ClayTabs.TabPane tabkey={1}>
						{'Content One'}
					</ClayTabs.TabPane>
					<ClayTabs.TabPane tabkey={2}>
						{'Content Two'}
					</ClayTabs.TabPane>
				</ClayTabs.Content>
			</>
		);

		fireEvent.click(getByTestId('oneTabItem'));
		expect(onClick).toBeCalled();
		expect(onClick).toBeCalledWith(1);

		fireEvent.click(getByTestId('twoTabItem'));
		expect(onClick).toBeCalled();
		expect(onClick).toBeCalledWith(2);

		expect(container).toMatchSnapshot();
	});
});
