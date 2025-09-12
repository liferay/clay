/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useRef, useState} from 'react';

import '@testing-library/jest-dom';

import {Button, FocusTrap} from '../../';

type Props = {
	active?: boolean;
	enableSecondButtonRef?: boolean;
};

const Component = ({
	active: initialActive = false,
	enableSecondButtonRef = false,
}: Props) => {
	const [active, setActive] = useState(initialActive);
	const secondButtonRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<Button onClick={() => setActive(true)}>Active Trap</Button>
			<FocusTrap active={active} focusElementRef={secondButtonRef}>
				<Button>First Button</Button>
				<Button {...(enableSecondButtonRef && {ref: secondButtonRef})}>
					Second Button
				</Button>
			</FocusTrap>
		</>
	);
};

describe('FocusTrap incremental interactions', () => {
	it('click trigger to activate the focus trap', async () => {
		render(<Component />);

		expect(
			document.querySelector('[data-focus-scope-start="true"]')
		).not.toBeInTheDocument();

		userEvent.click(screen.getByText('Active Trap'));

		expect(
			document.querySelector('[data-focus-scope-start="true"]')
		).toBeInTheDocument();
	});

	it('focus in the first focusable element when the focus trap is active', () => {
		render(<Component active />);

		expect(screen.getByText('First Button')).toHaveFocus();
	});

	it('focus an specific focusable element when the focus trap is active', () => {
		render(<Component active enableSecondButtonRef />);

		expect(screen.getByText('Second Button')).toHaveFocus();
	});
});
