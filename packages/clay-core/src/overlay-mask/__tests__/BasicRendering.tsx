/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {Button, OverlayMask} from '../../';

describe('OverlayMask basic rendering', () => {
	afterEach(cleanup);

	it('render highlight for the component', () => {
		const {container} = render(
			<OverlayMask visible>
				<Button>Button</Button>
			</OverlayMask>
		);

		expect(container).toMatchSnapshot();
	});

	it('render highlight for component via render props', () => {
		const {container} = render(
			<OverlayMask<HTMLButtonElement> visible>
				{(ref) => <Button ref={ref}>Button</Button>}
			</OverlayMask>
		);

		expect(container).toMatchSnapshot();
	});

	it("don't render highlighting for component when not visible", () => {
		const {container} = render(
			<OverlayMask>
				<Button>Button</Button>
			</OverlayMask>
		);

		expect(container).toMatchSnapshot();
	});

	it('render highlight to a specific area', () => {
		const {container} = render(
			<OverlayMask
				defaultBounds={{
					height: 100,
					width: 100,
					x: 50,
					y: 50,
				}}
				visible
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('render highlight for component with a custom padding', () => {
		const {container} = render(
			<OverlayMask padding={50} visible>
				<Button>Button</Button>
			</OverlayMask>
		);

		expect(container).toMatchSnapshot();
	});
});
