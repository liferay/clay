/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Provider} from '@clayui/provider';
import {cleanup, render} from '@testing-library/react';
import React, {useRef} from 'react';

import {SidePanel} from '../SidePanel';

const SidePanelExample = (props: any) => {
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
};

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
});
