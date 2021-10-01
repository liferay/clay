/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayManagementToolbar, {ClayResultsBar} from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('BasicRendering', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(<ClayManagementToolbar />);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with only search', () => {
		const {container} = render(
			<ClayManagementToolbar>
				<ClayManagementToolbar.Search />
			</ClayManagementToolbar>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with groups', () => {
		const {container} = render(
			<ClayManagementToolbar>
				<ClayManagementToolbar.ItemList>
					<ClayManagementToolbar.Item>
						Element 1
					</ClayManagementToolbar.Item>
					<ClayManagementToolbar.Item>
						Element 2
					</ClayManagementToolbar.Item>
				</ClayManagementToolbar.ItemList>
				<ClayManagementToolbar.ItemList>
					<ClayManagementToolbar.Item>
						Element 3
					</ClayManagementToolbar.Item>
				</ClayManagementToolbar.ItemList>
			</ClayManagementToolbar>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar in active state', () => {
		const {container} = render(<ClayManagementToolbar active />);

		expect(container).toMatchSnapshot();
	});

	describe('Results Bar', () => {
		it('renders', () => {
			const {container} = render(
				<ClayResultsBar>
					<ClayResultsBar.Item>
						2 results for "Red"
					</ClayResultsBar.Item>
					<ClayResultsBar.Item expand>Filter</ClayResultsBar.Item>
					<ClayResultsBar.Item>Clear</ClayResultsBar.Item>
				</ClayResultsBar>
			);

			expect(container).toMatchSnapshot();
		});
	});
});
