/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Heading, Text} from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('Heading', () => {
	afterEach(cleanup);

	it('renders as h1 with normal style', () => {
		render(
			<Heading level={1} weight="normal">
				This is a Heading
			</Heading>
		);

		expect(document.querySelector('.font-weight-normal')).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

	it('renders as h3 with semi-bold style', () => {
		render(
			<Heading level={3} weight="semi-bold">
				This is a Heading
			</Heading>
		);

		expect(document.querySelector('.font-weight-semi-bold')).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});
});

describe('Text', () => {
	afterEach(cleanup);

	it('renders with normal style', () => {
		render(
			<Text size={1} weight="normal">
				Single origin, extra id beans, eu to go, skinny americano ut
				aftertas te sugar. At americano, viennese variety iced grounds,
				grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
				grounds café au lait, skinny, blue mountain, in variety sugar
				shop roast. Wings, blue mountain affogato organic cappuccino
				java plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.
			</Text>
		);

		expect(document.querySelector('.font-weight-normal')).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

	it('renders with italic and semi-bold style', () => {
		render(
			<Text italic size={1} weight="semi-bold">
				Single origin, extra id beans, eu to go, skinny americano ut
				aftertas te sugar. At americano, viennese variety iced grounds,
				grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
				grounds café au lait, skinny, blue mountain, in variety sugar
				shop roast. Wings, blue mountain affogato organic cappuccino
				java plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.
			</Text>
		);

		expect(document.querySelector('.font-weight-semi-bold')).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});
});
