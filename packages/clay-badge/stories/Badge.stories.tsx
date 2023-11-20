/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import ClayBadge from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: [
				'danger',
				'info',
				'primary',
				'secondary',
				'success',
				'warning',
			],
		},
	},
	component: ClayBadge,
	title: 'Design System/Components/Badge',
};

export const Default = (args: any) => (
	<ClayBadge
		displayType={args.displayType}
		label={args.label}
		translucent={args.translucent}
	/>
);

Default.args = {
	displayType: 'primary',
	label: '100',
	translucent: false,
};
