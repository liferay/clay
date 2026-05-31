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

	it('is hidden from assistive technology as a purely visual hint', () => {
		const {container} = render(<KeyboardArrowsIndicator direction="all" />);

		const indicator = container.querySelector(
			'.clay-keyboard-arrows-indicator'
		);

		expect(indicator).toHaveAttribute('aria-hidden', 'true');
		expect(indicator).not.toHaveAttribute('role');
		expect(indicator).not.toHaveAttribute('aria-label');
	});

	it('forwards a custom className', () => {
		const {container} = render(
			<KeyboardArrowsIndicator className="my-hint" direction="all" />
		);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator')
		).toHaveClass('my-hint');
	});

	it('does not apply the floating modifier when no anchorRef is provided', () => {
		const {container} = render(<KeyboardArrowsIndicator direction="all" />);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator')
		).not.toHaveClass('clay-keyboard-arrows-indicator-floating');
	});

	it('applies the floating modifier when an anchorRef is provided', () => {
		function Harness() {
			const anchorRef = React.useRef<HTMLDivElement>(null);

			return (
				<>
					<div ref={anchorRef}>Anchor</div>

					<KeyboardArrowsIndicator
						anchorRef={anchorRef}
						direction="vertical"
					/>
				</>
			);
		}

		const {container} = render(<Harness />);

		expect(
			container.querySelector('.clay-keyboard-arrows-indicator')
		).toHaveClass('clay-keyboard-arrows-indicator-floating');
	});
});
