/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useRef, useState} from 'react';

import '@testing-library/jest-dom';

import {SidePanelWithDrilldown} from '../SidePanelWithDrilldown';

function Component({
	selectedPanelKey = 'x1',
}: {selectedPanelKey?: string} = {}) {
	const [panelKey, setPanelKey] = useState(selectedPanelKey);

	const ref = useRef<HTMLDivElement | null>(null);

	return (
		<SidePanelWithDrilldown
			containerRef={ref}
			onSelectedPanelKeyChange={setPanelKey}
			open
			panels={{
				x1: {
					component: (
						<button onClick={() => setPanelKey('x2')}>
							Next Panel
						</button>
					),
					title: 'Main Panel',
				},
				x2: {
					component: <div>Hello!</div>,
					headerProps: {
						messages: {
							backAriaLabel: 'Go to the main panel',
						},
					},
					parentKey: 'x1',
					title: 'Child Panel',
				},
			}}
			selectedPanelKey={panelKey}
		/>
	);
}

describe('SidePanelWithDrilldown', () => {
	it('shows the main panel as the active panel', () => {
		render(<Component />);

		const activePanel = document.querySelector('.drilldown-current');
		const nextPanelButton = screen.getByRole('button', {
			name: 'Next Panel',
		});
		const backButton = screen.getByLabelText('Go to the main panel');

		expect(activePanel).toHaveTextContent('Main Panel');
		expect(activePanel).toContainElement(nextPanelButton);
		expect(activePanel).not.toHaveTextContent('Child Panel');
		expect(activePanel).not.toContainElement(backButton);
	});

	it('shows the child panel through a drilldown when the Child Panel button is pressed', async () => {
		render(<Component />);

		const nextPanelButton = screen.getByRole('button', {
			name: 'Next Panel',
		});

		userEvent.click(nextPanelButton);

		await waitFor(() => {
			const activePanel = document.querySelector('.drilldown-current');
			const backButton = screen.getByLabelText('Go to the main panel');

			expect(activePanel).not.toHaveTextContent('Main Panel');
			expect(activePanel).not.toContainElement(nextPanelButton);
			expect(activePanel).toHaveTextContent('Child Panel');
			expect(activePanel).toContainElement(backButton);
		});
	});

	it('goes to the parent panel when the "Go Back" button is pressed', async () => {
		render(<Component selectedPanelKey="x2" />);

		const backButton = screen.getByLabelText('Go to the main panel');

		userEvent.click(backButton);

		await waitFor(() => {
			const activePanel = document.querySelector('.drilldown-current');
			const nextPanelButton = screen.getByRole('button', {
				name: 'Next Panel',
			});

			expect(activePanel).toHaveTextContent('Main Panel');
			expect(activePanel).toContainElement(nextPanelButton);
			expect(activePanel).not.toHaveTextContent('Child Panel');
			expect(activePanel).not.toContainElement(backButton);
		});
	});
});
