/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Provider} from '@clayui/provider';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {SidePanel} from '../SidePanel';

describe('SidePanel basic rendering', () => {
	afterEach(cleanup);

	it('render basic content', () => {
		const {container} = render(
			<Provider spritemap="icons.svg">
				<SidePanel id="sidepanel">
					<SidePanel.Header>
						<SidePanel.Title>Title</SidePanel.Title>
					</SidePanel.Header>
					<SidePanel.Body>Body</SidePanel.Body>
					<SidePanel.Footer>Footer</SidePanel.Footer>
				</SidePanel>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('render component with open state', () => {
		const {container} = render(
			<Provider spritemap="icons.svg">
				<SidePanel defaultOpen id="sidepanel">
					<SidePanel.Header>
						<SidePanel.Title>Title</SidePanel.Title>
					</SidePanel.Header>
					<SidePanel.Body>Body</SidePanel.Body>
					<SidePanel.Footer>Footer</SidePanel.Footer>
				</SidePanel>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});

	it('render with custom aria-label', () => {
		const {container} = render(
			<Provider spritemap="icons.svg">
				<SidePanel aria-label="Custom Title" id="sidepanel">
					<SidePanel.Header>
						<SidePanel.Title>Title</SidePanel.Title>
					</SidePanel.Header>
					<SidePanel.Body>Body</SidePanel.Body>
					<SidePanel.Footer>Footer</SidePanel.Footer>
				</SidePanel>
			</Provider>
		);

		expect(container).toMatchSnapshot();
	});
});
