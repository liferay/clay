/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClaySelect, ClaySelectWithOption} from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

const options = [
	{
		label: 'Option 1',
		value: '1',
	},
	{
		label: 'Option 2',
		value: '2',
	},
	{
		label: 'Option 3',
		value: '3',
	},
];

describe('Rendering', () => {
	afterEach(cleanup);

	it('renders ClaySelect', () => {
		const {container} = render(
			<ClaySelect aria-label="Select Label" id="mySelectId" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders ClaySelect.Option', () => {
		const {container} = render(
			<>
				{options.map((item) => (
					<ClaySelect.Option {...item} key={item.label} />
				))}
			</>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders ClaySelect with Option', () => {
		const {container} = render(
			<ClaySelect aria-label="Select Label" id="mySelectId">
				{options.map((item) => (
					<ClaySelect.Option {...item} key={item.label} />
				))}
			</ClaySelect>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders ClaySelectWithOption', () => {
		const {container} = render(
			<ClaySelectWithOption
				aria-label="Select Label"
				id="mySelectId"
				options={options}
			/>
		);

		expect(container).toMatchSnapshot();
	});
});
