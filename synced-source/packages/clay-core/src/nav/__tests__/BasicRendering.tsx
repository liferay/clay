/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
