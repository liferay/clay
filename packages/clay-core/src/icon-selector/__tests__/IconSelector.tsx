/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import '@testing-library/jest-dom';

import {IconSelector} from '../';

describe('IconSelector keyboard arrows indicator', () => {
	afterEach(cleanup);

	// `IconSelector` fetches the spritemap on mount to extract the
	// available icon names. The shared Jest setup replaces `global.fetch`
	// with a throw-stub in its own `beforeEach`, so the override has to
	// happen per-test (after that setup runs) rather than once in
	// `beforeAll`. A no-op SVG keeps `DOMParser` and the icon list path
	// happy without affecting what these tests assert.

	beforeEach(() => {
		(global.fetch as jest.Mock).mockImplementation(() =>
			Promise.resolve({
				text: () => Promise.resolve('<svg></svg>'),
			})
		);
	});

	it('does not render the indicator by default', async () => {
		const {getByRole} = render(<IconSelector spritemap="/foo/bar.svg" />);

		await userEvent.click(getByRole('button'));

		expect(
			document.body.querySelector('.clay-keyboard-arrows-indicator')
		).not.toBeInTheDocument();
	});

	it('renders the floating indicator with direction "vertical" when enabled', async () => {
		const {getByRole} = render(
			<IconSelector
				displayKeyboardArrowsIndicator
				spritemap="/foo/bar.svg"
			/>
		);

		await userEvent.click(getByRole('button'));

		const indicator = document.body.querySelector(
			'.clay-keyboard-arrows-indicator'
		);

		expect(indicator).toBeInTheDocument();
		expect(indicator).toHaveClass('clay-keyboard-arrows-vertical');
		expect(indicator).toHaveClass(
			'clay-keyboard-arrows-indicator-floating'
		);
	});
});
