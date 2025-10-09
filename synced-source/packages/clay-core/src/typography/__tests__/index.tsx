/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Heading, Text} from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

describe('Heading', () => {
	afterEach(cleanup);

	it('renders as h1 without style defined', () => {
		render(<Heading>This is a Heading</Heading>);

		expect(
			document.querySelector('.text-10.font-weight-bold')
		).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

	it('renders as h3 with semi-bold style', () => {
		render(
			<Heading level={3} weight="semi-bold">
				This is a Heading
			</Heading>
		);

		expect(
			document.querySelector('.text-8.font-weight-semi-bold')
		).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

	it('renders different font size than heading', () => {
		const {getByRole} = render(
			<Heading fontSize={4} level={1} weight="semi-bold">
				Heading
			</Heading>
		);

		const heading = getByRole('heading');

		expect(heading.classList).toContain('text-7');
		expect(heading.tagName).toBe('H1');
	});
});

describe('Text', () => {
	afterEach(cleanup);

	it('renders without style defined', () => {
		render(
			<Text>
				Single origin, extra id beans, eu to go, skinny americano ut
				aftertas te sugar. At americano, viennese variety iced grounds,
				grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
				grounds café au lait, skinny, blue mountain, in variety sugar
				shop roast. Wings, blue mountain affogato organic cappuccino
				java plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.
			</Text>
		);

		expect(document.querySelector('.text-4')).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

	it('renders as paragraph', () => {
		render(
			<Text as="p">
				Single origin, extra id beans, eu to go, skinny americano ut
				aftertas te sugar. At americano, viennese variety iced grounds,
				grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
				grounds café au lait, skinny, blue mountain, in variety sugar
				shop roast. Wings, blue mountain affogato organic cappuccino
				java plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.
			</Text>
		);

		expect(document.querySelector('p.text-4')).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

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

		expect(
			document.querySelector('.text-1.font-italic.font-weight-semi-bold')
		).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

	it('renders with size 2, truncate and light style', () => {
		render(
			<Text size={2} truncate weight="light">
				Single origin, extra id beans, eu to go, skinny americano ut
				aftertas te sugar. At americano, viennese variety iced grounds,
				grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
				grounds café au lait, skinny, blue mountain, in variety sugar
				shop roast. Wings, blue mountain affogato organic cappuccino
				java plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.
			</Text>
		);

		expect(
			document.querySelector('.text-2.text-truncate.font-weight-light')
		).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

	it('renders with size 2, monospace and bolder style', () => {
		render(
			<Text monospace size={2} weight="bolder">
				Single origin, extra id beans, eu to go, skinny americano ut
				aftertas te sugar. At americano, viennese variety iced grounds,
				grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
				grounds café au lait, skinny, blue mountain, in variety sugar
				shop roast. Wings, blue mountain affogato organic cappuccino
				java plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.
			</Text>
		);

		expect(
			document.querySelector('.text-2.text-monospace.font-weight-bolder')
		).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});

	it('renders with size 2, info color and lighter style', () => {
		render(
			<Text color="info" size={2} weight="lighter">
				Single origin, extra id beans, eu to go, skinny americano ut
				aftertas te sugar. At americano, viennese variety iced grounds,
				grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
				grounds café au lait, skinny, blue mountain, in variety sugar
				shop roast. Wings, blue mountain affogato organic cappuccino
				java plunger pot. Single shot variety pumpkin spice seasonal
				skinny barista carajillo robust cream.
			</Text>
		);

		expect(
			document.querySelector('.text-2.text-info.font-weight-lighter')
		).toBeTruthy();
		expect(document.body).toMatchSnapshot();
	});
});
