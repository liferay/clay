/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import {Text, TextHighlight} from '../src/typography';

export default {
	argTypes: {
		as: {
			control: {type: 'select'},
			options: ['p', 'span'],
		},
		color: {
			control: {type: 'select'},
			options: [
				null,
				'primary',
				'secondary',
				'muted',
				'success',
				'warning',
				'danger',
				'info',
			],
		},

		size: {
			control: {type: 'select'},
			options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		},
		weight: {
			control: {type: 'select'},
			options: [
				'lighter',
				'light',
				'normal',
				'semi-bold',
				'bold',
				'bolder',
			],
		},
	},
	component: Text,
	title: 'Design System/Components/Typography',
};
export function TextTypography(args: any) {
	return (
		<Text
			as={args.as}
			color={args.color}
			italic={args.italic}
			monospace={args.monospace}
			size={args.size}
			truncate={args.truncate}
			weight={args.weight}
		>
			Single origin, extra id beans, eu to go, skinny americano ut
			aftertas te sugar. At americano, viennese variety iced grounds,
			grinder froth and pumpkin spice aromatic. Cultivar aged lungo,
			grounds café au lait, skinny, blue mountain, in variety sugar shop
			roast. Wings, blue mountain affogato organic cappuccino java plunger
			pot. Single shot variety pumpkin spice seasonal skinny barista
			carajillo robust cream.
		</Text>
	);
}

TextTypography.args = {
	as: 'span',
	italic: false,
	monospace: false,
	truncate: false,
};
export function TextHighlightTypography(args: any) {
	return <TextHighlight match={args.match}>{args.value}</TextHighlight>;
}

TextHighlightTypography.args = {
	match: 'Ri s',
	value: 'Rick Sanchez',
};
