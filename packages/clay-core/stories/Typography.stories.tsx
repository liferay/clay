/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import {boolean, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import {Heading, Text} from '../src/typography';

storiesOf('Components|Typography', module)
	.add('Heading', () => (
		<Heading
			level={select(
				'Level Heading',
				{
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 6,
				},
				1
			)}
			weight={select(
				'Weight Font',
				{
					bold: 'bold',
					bolder: 'bolder',
					light: 'light',
					lighter: 'lighter',
					normal: 'normal',
					semibold: 'semi-bold',
				},
				'normal'
			)}
		>
			This is a Heading
		</Heading>
	))
	.add('Text', () => (
		<Text
			displayType={
				select(
					'Color',
					{
						danger: 'danger',
						info: 'info',
						muted: 'muted',
						none: null,
						primary: 'primary',
						secondary: 'secondary',
						success: 'success',
						warning: 'warning',
					},
					null    
				)
			}
			italic={boolean('Italic', false)}
			level={select(
				'Size Text',
				{
					1: 1,
					2: 2,
					3: 3,
					4: 4,
					5: 5,
					6: 6,
                    7: 7,
					8: 8,
					9: 9,
					10: 10,
					11: 11,
				},
				1
			)}
			truncate={boolean('Truncate', false)}
			weight={select(
				'Weight Font',
				{
					bold: 'bold',
					bolder: 'bolder',
					light: 'light',
					lighter: 'lighter',
					normal: 'normal',
					semibold: 'semi-bold',
				},
				'normal'
			)}
		>
			Single origin, extra id beans, eu to go, skinny americano ut
			aftertas te sugar. At americano, viennese variety iced grounds,
			grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
			grounds café au lait, skinny, blue mountain, in variety sugar shop
			roast. Wings, blue mountain affogato organic cappuccino java plunger
			pot. Single shot variety pumpkin spice seasonal skinny barista
			carajillo robust cream.
		</Text>
	));
