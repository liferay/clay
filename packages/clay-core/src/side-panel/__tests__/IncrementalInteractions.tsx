/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Button from '@clayui/button';
import {Provider} from '@clayui/provider';
import {cleanup, render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useRef, useState} from 'react';

import '@testing-library/jest-dom';

import {SidePanel} from '../SidePanel';

// FocusTrap is mocked in this test because JSDOM does not fully simulate
// browser focus behavior. In a real browser, closing the panel would
// unmount the trap and restore focus to the trigger element. Mocking
// FocusTrap prevents false negatives in tests caused by JSDOM's limitations.

jest.mock('../../focus-trap/FocusTrap', () => {
	const MockFocusTrap = ({children}: any) => <>{children}</>;

	return {
		FocusTrap: MockFocusTrap,
	};
});

function Example({defaultOpen = false}: {defaultOpen?: boolean}) {
	const [open, setOpen] = useState(defaultOpen);

	const ref = useRef(null);

	return (
		<Provider spritemap="icons.svg">
			<Button
				aria-controls="sidepanel"
				aria-pressed={open}
				onClick={() => setOpen(!open)}
			>
				Open
			</Button>

			<div ref={ref}>
				<SidePanel
					as="aside"
					containerRef={ref}
					id="sidepanel"
					onOpenChange={setOpen}
					open={open}
				>
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

describe('SidePanel incremental interactions', () => {
	afterEach(cleanup);

	it('when opening move focus to the root element', async () => {
		const {getAllByRole, getByRole} = render(<Example />);

		const [button] = getAllByRole('button');
		const panel = getByRole('complementary');

		userEvent.tab();

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');

		userEvent.click(button!);

		await waitFor(() => {
			expect(panel).toHaveFocus();
			expect(panel).not.toHaveAttribute('inert');
		});
	});

	it('clicking the close button closes the side panel and moves the focus to the trigger', async () => {
		const {getAllByRole, getByRole} = render(<Example />);

		const [button, close] = getAllByRole('button');
		const panel = getByRole('complementary');

		userEvent.tab();

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');

		userEvent.click(button!);

		await waitFor(() => {
			expect(panel).toHaveFocus();
			expect(panel).not.toHaveAttribute('inert');
		});

		userEvent.click(close!);

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');
	});

	it('pressing ESC closes and moves focus to the trigger', async () => {
		const {getAllByRole, getByRole} = render(<Example />);

		const [button] = getAllByRole('button');
		const panel = getByRole('complementary');

		userEvent.tab();

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');

		userEvent.click(button!);

		await waitFor(() => {
			expect(panel).toHaveFocus();
			expect(panel).not.toHaveAttribute('inert');
		});

		userEvent.keyboard('[Escape]');

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');
	});
});
