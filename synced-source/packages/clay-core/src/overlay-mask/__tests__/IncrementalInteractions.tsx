/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import React, {useState} from 'react';

import {Button, OverlayMask} from '../../';

describe('OverlayMask incremental interactions', () => {
	afterEach(cleanup);

	it('render highlight for component when clicking a button', () => {
		function OverlayTrigger() {
			const [visible, setVisible] = useState(false);

			return (
				<>
					<Button monospaced onClick={() => setVisible(!visible)}>
						Dot
					</Button>
					<OverlayMask visible={visible}>
						<Button>Button</Button>
					</OverlayMask>
				</>
			);
		}

		const {container, getByText} = render(<OverlayTrigger />);

		expect(container.querySelector('svg')).not.toBeTruthy();

		const dot = getByText('Dot') as HTMLButtonElement;

		fireEvent.click(dot);

		expect(container.querySelector('svg')).toBeTruthy();

		fireEvent.click(dot);

		expect(container.querySelector('svg')).not.toBeTruthy();
	});

	it('render highlight for non reactjs component', () => {
		const button = document.createElement('button');
		button.setAttribute('id', 'button');
		button.setAttribute('type', 'button');
		button.setAttribute('style', 'margin-top: 100px;margin-left: 100px;');

		document.body.appendChild(button);

		const {container} = render(
			<OverlayMask
				defaultBounds={{
					height: 100,
					width: 100,
					x: 0,
					y: 0,
				}}
				visible
			/>
		);

		const mask = container.querySelector('path') as SVGPathElement;

		expect(mask.getAttribute('d')).toBe(
			'M 0 0 L 0 0 L 0 0 L 0 0 z M -10 -10 L -10 110 A 0,0 0 0 0 -10,110 L 110 110 A 0,0 0 0 0 110,110 L 110 -10 A 0,0 0 0 0 110,-10 L -10 -10 A 0,0 0 0 0 -10,-10'
		);

		document.body.removeChild(button);
	});

	it('changing the visibility of the highlight area must be consistent', () => {
		function OverlayTrigger() {
			const [visible, setVisible] = useState(false);

			return (
				<>
					<Button monospaced onClick={() => setVisible(!visible)}>
						Dot
					</Button>
					<OverlayMask visible={visible}>
						<Button>Button</Button>
					</OverlayMask>
				</>
			);
		}

		const {container, getByText} = render(<OverlayTrigger />);

		const dot = getByText('Dot') as HTMLButtonElement;

		fireEvent.click(dot);

		const mask = container.querySelector('path') as SVGPathElement;

		expect(mask.getAttribute('d')).toBe(
			'M 0 0 L 0 0 L 0 0 L 0 0 z M -10 -10 L -10 10 A 0,0 0 0 0 -10,10 L 10 10 A 0,0 0 0 0 10,10 L 10 -10 A 0,0 0 0 0 10,-10 L -10 -10 A 0,0 0 0 0 -10,-10'
		);

		fireEvent.click(dot);

		expect(container.querySelector('path')).not.toBeTruthy();

		fireEvent.click(dot);

		expect(mask.getAttribute('d')).toBe(
			'M 0 0 L 0 0 L 0 0 L 0 0 z M -10 -10 L -10 10 A 0,0 0 0 0 -10,10 L 10 10 A 0,0 0 0 0 10,10 L 10 -10 A 0,0 0 0 0 10,-10 L -10 -10 A 0,0 0 0 0 -10,-10'
		);
	});
});
