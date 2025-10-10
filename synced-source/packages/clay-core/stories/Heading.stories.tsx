/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {Heading} from '../src/typography';

export default {
	argTypes: {
		fontSize: {
			control: {type: 'select'},
			options: [1, 2, 3, 4, 5, 6],
		},
		level: {
			control: {type: 'select'},
			options: [1, 2, 3, 4, 5, 6],
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
	component: Heading,
	title: 'Design System/Components/Typography',
};

export const HeadingTypography = (args: any) => {
	return (
		<Heading
			fontSize={args.fontSize}
			level={args.level}
			weight={args.weight}
		>
			This is a Heading
		</Heading>
	);
};
