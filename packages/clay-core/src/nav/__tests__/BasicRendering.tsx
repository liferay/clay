/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {Nav} from '../';

describe('Nav basic rendering', () => {
	afterEach(() => cleanup());

	it('renders', () => {
		const {container} = render(
			<Nav>
				<Nav.Item>
					<Nav.Link active href="#">
						Active
					</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link href="#">Normal</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link disabled href="#">
						Disabled
					</Nav.Link>
				</Nav.Item>
			</Nav>
		);

		expect(container).toMatchSnapshot();
	});
});
