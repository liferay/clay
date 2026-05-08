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

	it('renders four keys in inverted-T layout', () => {
		const {container} = render(<KeyboardArrowsIndicator direction="all" />);

		const keys = container.querySelectorAll(
			'.clay-keyboard-arrows-indicator-key'
		);

		expect(keys).toHaveLength(4);
		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-key-up')
		).toBeInTheDocument();
		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-key-down')
		).toBeInTheDocument();
		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-key-left')
		).toBeInTheDocument();
		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-key-right')
		).toBeInTheDocument();
	});

	it('marks no key inactive when direction is "all"', () => {
		const {container} = render(<KeyboardArrowsIndicator direction="all" />);

		expect(
			container.querySelectorAll(
				'.clay-keyboard-arrows-indicator-key-inactive'
			)
		).toHaveLength(0);
	});

	it('mutes up and down keys when direction is "horizontal"', () => {
		const {container} = render(
			<KeyboardArrowsIndicator direction="horizontal" />
		);

		expect(
			container.querySelector(
				'.clay-keyboard-arrows-indicator-key-up.clay-keyboard-arrows-indicator-key-inactive'
			)
		).toBeInTheDocument();
		expect(
			container.querySelector(
				'.clay-keyboard-arrows-indicator-key-down.clay-keyboard-arrows-indicator-key-inactive'
			)
		).toBeInTheDocument();
		expect(
			container.querySelector(
				'.clay-keyboard-arrows-indicator-key-left.clay-keyboard-arrows-indicator-key-inactive'
			)
		).not.toBeInTheDocument();
		expect(
			container.querySelector(
				'.clay-keyboard-arrows-indicator-key-right.clay-keyboard-arrows-indicator-key-inactive'
			)
		).not.toBeInTheDocument();
	});

	it('mutes left and right keys when direction is "vertical"', () => {
		const {container} = render(
			<KeyboardArrowsIndicator direction="vertical" />
		);

		expect(
			container.querySelector(
				'.clay-keyboard-arrows-indicator-key-left.clay-keyboard-arrows-indicator-key-inactive'
			)
		).toBeInTheDocument();
		expect(
			container.querySelector(
				'.clay-keyboard-arrows-indicator-key-right.clay-keyboard-arrows-indicator-key-inactive'
			)
		).toBeInTheDocument();
		expect(
			container.querySelector(
				'.clay-keyboard-arrows-indicator-key-up.clay-keyboard-arrows-indicator-key-inactive'
			)
		).not.toBeInTheDocument();
		expect(
			container.querySelector(
				'.clay-keyboard-arrows-indicator-key-down.clay-keyboard-arrows-indicator-key-inactive'
			)
		).not.toBeInTheDocument();
	});

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

	it('applies the size modifier class', () => {
		const {container, rerender} = render(
			<KeyboardArrowsIndicator direction="all" />
		);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-md')
		).toBeInTheDocument();

		rerender(<KeyboardArrowsIndicator direction="all" size="sm" />);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-sm')
		).toBeInTheDocument();
	});

	it('forwards a custom className', () => {
		const {container} = render(
			<KeyboardArrowsIndicator className="my-hint" direction="all" />
		);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator')
		).toHaveClass('my-hint');
	});

	it('omits the floating class by default and applies it for placement="floating"', () => {
		const {container, rerender} = render(
			<KeyboardArrowsIndicator direction="all" />
		);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-floating')
		).not.toBeInTheDocument();

		rerender(
			<KeyboardArrowsIndicator direction="all" placement="floating" />
		);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-floating')
		).toBeInTheDocument();
	});

	it('omits the on-focus class by default and applies it for visibility="on-focus"', () => {
		const {container, rerender} = render(
			<KeyboardArrowsIndicator direction="all" />
		);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-on-focus')
		).not.toBeInTheDocument();

		rerender(
			<KeyboardArrowsIndicator direction="all" visibility="on-focus" />
		);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator-on-focus')
		).toBeInTheDocument();
	});
});
