/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
