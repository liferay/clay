/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayModal, {useModal} from '..';
import {cleanup, render} from '@testing-library/react';
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
						{'container'}
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
});
