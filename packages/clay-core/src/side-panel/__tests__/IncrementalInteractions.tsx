/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import {Provider} from '@clayui/provider';
import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';

import {SidePanel} from '../SidePanel';

function Example({defaultOpen = false}: {defaultOpen?: boolean}) {
	const [open, setOpen] = useState(defaultOpen);

	return (
		<Provider spritemap="icons.svg">
			<Button
				aria-controls="sidepanel"
				aria-pressed={open}
				onClick={() => setOpen(!open)}
			>
				Open
			</Button>

			<SidePanel id="sidepanel" onOpenChange={setOpen} open={open}>
				<SidePanel.Header>
					<SidePanel.Title>Title</SidePanel.Title>
				</SidePanel.Header>
				<SidePanel.Body>Body</SidePanel.Body>
				<SidePanel.Footer>Footer</SidePanel.Footer>
			</SidePanel>
		</Provider>
	);
}

describe('SidePanel incremental interactions', () => {
	afterEach(cleanup);

	it('when opening move focus to the root element', () => {
		const {getAllByRole, getByRole} = render(<Example />);

		const [button] = getAllByRole('button');
		const panel = getByRole('complementary');

		userEvent.tab();

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');

		userEvent.click(button!);

		expect(panel).toHaveFocus();
		expect(panel).not.toHaveAttribute('inert');
	});

	it('clicking the close button closes the side panel and moves the focus to the trigger', () => {
		const {getAllByRole, getByRole} = render(<Example />);

		const [button, close] = getAllByRole('button');
		const panel = getByRole('complementary');

		userEvent.tab();

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');

		userEvent.click(button!);

		expect(panel).toHaveFocus();
		expect(panel).not.toHaveAttribute('inert');

		userEvent.click(close!);

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');
	});

	it('pressing ESC closes and moves focus to the trigger', () => {
		const {getAllByRole, getByRole} = render(<Example />);

		const [button] = getAllByRole('button');
		const panel = getByRole('complementary');

		userEvent.tab();

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');

		userEvent.click(button!);

		expect(panel).toHaveFocus();
		expect(panel).not.toHaveAttribute('inert');

		userEvent.keyboard('[Escape]');

		expect(button).toHaveFocus();
		expect(panel).toHaveAttribute('inert');
	});
});
