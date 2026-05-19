/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, render} from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';

import {KeyboardArrowsIndicator} from '../../';

describe('KeyboardArrowsIndicator', () => {
	afterEach(cleanup);

	it('always renders the arrows-all composite icon', () => {
		const {container} = render(<KeyboardArrowsIndicator direction="all" />);

		const use = container.querySelector('svg use');

		expect(use).toBeInTheDocument();
		expect(
			use!.getAttribute('href') ?? use!.getAttribute('xlink:href')
		).toContain('#arrows-all');
	});

	it.each(['all', 'horizontal', 'vertical'] as const)(
		'applies the matching state class for direction "%s"',
		(direction) => {
			const {container} = render(
				<KeyboardArrowsIndicator direction={direction} />
			);

			expect(
				container.querySelector('.clay-keyboard-arrows-indicator')
			).toHaveClass(`clay-keyboard-arrows-${direction}`);
		}
	);

	it.each([
		['all', 'Use arrow keys to navigate'],
		['horizontal', 'Use left and right arrow keys to navigate'],
		['vertical', 'Use up and down arrow keys to navigate'],
	] as const)(
		'sets the default aria-label for direction "%s"',
		(direction, expected) => {
			const {container} = render(
				<KeyboardArrowsIndicator direction={direction} />
			);

			expect(
				container.querySelector('.clay-keyboard-arrows-indicator')
			).toHaveAttribute('aria-label', expected);
		}
	);

	it('honors a custom label override', () => {
		const {container} = render(
			<KeyboardArrowsIndicator
				direction="all"
				label="Press the arrow keys to move focus"
			/>
		);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator')
		).toHaveAttribute('aria-label', 'Press the arrow keys to move focus');
	});

	it('exposes the indicator as an image to assistive technology', () => {
		const {container} = render(<KeyboardArrowsIndicator direction="all" />);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator')
		).toHaveAttribute('role', 'img');
	});

	it('forwards a custom className', () => {
		const {container} = render(
			<KeyboardArrowsIndicator className="my-hint" direction="all" />
		);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator')
		).toHaveClass('my-hint');
	});
});
