/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayModal, {useModal} from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

const spritemap = 'icons.svg';

describe('ClayModal custom opener', () => {
	afterEach(() => {
		cleanup();
	});

	it('renders inside a container element', () => {
		const ModalWithState = () => {
			const {observer} = useModal({onClose: () => {}});
			const containerRef = React.useRef<HTMLDivElement | null>(null);

			return (
				<>
					<div id="container" ref={containerRef}>
						container
					</div>

					<ClayModal
						containerElementRef={containerRef}
						observer={observer}
						spritemap={spritemap}
					/>
				</>
			);
		};

		render(<ModalWithState />);

		expect(document.body).toMatchSnapshot();
	});

	it('does not close automatically with disableAutoClose', () => {
		const handleOnClose = jest.fn();

		const ModalWithState = () => {
			const [visibleModal] = React.useState(true);

			const {observer} = useModal({onClose: handleOnClose});

			return (
				<>
					{visibleModal && (
						<ClayModal
							disableAutoClose
							observer={observer}
							spritemap={spritemap}
						/>
					)}
				</>
			);
		};

		const handleKeyDown = jest.fn();

		document.body.addEventListener('keydown', handleKeyDown);

		render(<ModalWithState />);

		fireEvent.keyDown(document.body, {
			charCode: 0,
			code: 'Escape',
			key: 'Escape',
		});

		expect(document.body).toMatchSnapshot();

		expect(handleKeyDown).toHaveBeenCalled();

		expect(handleOnClose).not.toHaveBeenCalled();

		document.body.removeEventListener('keydown', handleKeyDown);
	});
});
