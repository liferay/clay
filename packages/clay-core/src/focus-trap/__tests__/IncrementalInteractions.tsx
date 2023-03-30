/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useRef, useState} from 'react';

import '@testing-library/jest-dom/extend-expect';

import {Button, FocusTrap} from '../../';

describe('FocusTrap incremental interactions', () => {
	afterEach(cleanup);

	it('click trigger to activate the focus trap', () => {
		function FocusTrapTrigger() {
			const [active, setActive] = useState(false);

			return (
				<>
					<Button
						data-testid="activeButton"
						onClick={() => setActive(true)}
					>
						Active Trap
					</Button>
					<FocusTrap active={active}>
						<Button data-testid="firstButton">Button</Button>
					</FocusTrap>
				</>
			);
		}

		const {container, getByTestId} = render(<FocusTrapTrigger />);

		expect(
			container.querySelector('[data-focus-scope-start="true"]')
		).not.toBeInTheDocument();

		userEvent.click(getByTestId('activeButton'));

		expect(
			container.querySelector('[data-focus-scope-start="true"]')
		).toBeInTheDocument();
	});

	it('focus in the first focusable element when the focus trap is active', () => {
		function FocusTrapTrigger() {
			return (
				<>
					<FocusTrap active>
						<Button data-testid="firstButton">Button</Button>
						<Button>Button</Button>
					</FocusTrap>
				</>
			);
		}

		const {getByTestId} = render(<FocusTrapTrigger />);

		expect(getByTestId('firstButton')).toHaveFocus();
	});

	it('focus an specific focusable element when the focus trap is active', () => {
		function FocusTrapTrigger() {
			const secondButtonRef = useRef(null);

			return (
				<>
					<FocusTrap active focusElementRef={secondButtonRef}>
						<Button>Button</Button>
						<Button
							data-testid="secondButton"
							ref={secondButtonRef}
						>
							Button
						</Button>
					</FocusTrap>
				</>
			);
		}

		const {getByTestId} = render(<FocusTrapTrigger />);

		expect(getByTestId('secondButton')).toHaveFocus();
	});
});
