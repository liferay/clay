/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Provider} from '@clayui/provider';
import {cleanup, render} from '@testing-library/react';
import React, {useRef} from 'react';

import '@testing-library/jest-dom';

import {SidePanel} from '../SidePanel';

function SidePanelExample(props: any) {
	const ref = useRef(null);

	return (
		<Provider spritemap="icons.svg">
			<div ref={ref}>
				<SidePanel containerRef={ref} id="sidepanel" {...props}>
					<SidePanel.Header
						messages={{
							closeAriaLabel: 'Close the Title side panel.',
						}}
					>
						<SidePanel.Title>Title</SidePanel.Title>
					</SidePanel.Header>

					<SidePanel.Body>Body</SidePanel.Body>

					<SidePanel.Footer>Footer</SidePanel.Footer>
				</SidePanel>
			</div>
		</Provider>
	);
}

describe('SidePanel basic rendering', () => {
	afterEach(cleanup);

	it('render basic content', () => {
		const {container} = render(<SidePanelExample />);

		expect(container).toMatchSnapshot();
	});

	it('render component with open state', () => {
		const {container} = render(<SidePanelExample defaultOpen />);

		expect(container).toMatchSnapshot();
	});

	it('render with custom aria-label', () => {
		const {container} = render(
			<SidePanelExample aria-label="Custom Title" />
		);

		expect(container).toMatchSnapshot();
	});

	it('render with custom width', () => {
		const {container} = render(<SidePanelExample panelWidth={500} />);

		expect(container).toMatchSnapshot();
	});

	it('render with fluid width', () => {
		const {container} = render(<SidePanelExample fluid />);

		expect(container).toMatchSnapshot();
	});

	it('does not allow setting a custom width less than 280px', () => {
		render(<SidePanelExample panelWidth={100} />);

		const sidebar = document.getElementById('sidepanel')!;

		expect(sidebar).toHaveStyle({width: '280px'});
	});

	describe('Focus trap rendering', () => {
		let clientWidthSpy: jest.SpyInstance;

		const setClientWidth = (value: number) =>
			jest
				.spyOn(HTMLElement.prototype, 'clientWidth', 'get')
				.mockReturnValue(value);

		afterEach(() => {
			clientWidthSpy.mockRestore();
		});

		it('renders focus trap on mobile devices', () => {
			clientWidthSpy = setClientWidth(767);

			render(<SidePanelExample defaultOpen />);

			expect(
				document.querySelector('[data-focus-scope-start="true"]')
			).toBeInTheDocument();
		});

		it('does not render focus trap on non-mobile devices', () => {
			clientWidthSpy = setClientWidth(768);

			render(<SidePanelExample />);

			expect(
				document.querySelector('[data-focus-scope-start="true"]')
			).not.toBeInTheDocument();
		});
	});
});
