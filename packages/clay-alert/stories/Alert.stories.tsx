/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import ClayAlert from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: ['danger', 'info', 'success', 'warning'],
		},
		variant: {
			control: {type: 'select'},
			options: ['feedback', 'stripe', undefined],
		},
	},
	component: ClayAlert,
	title: 'Design System/Components/Alert',
};

export const Default = (args: any) => (
	<ClayAlert
		displayType={args.displayType}
		title={args.title}
		variant={args.variant}
	>
		{args.content}
	</ClayAlert>
);

Default.args = {
	content: 'This is an alert!',
	displayType: 'info',
	title: 'Info',
	variant: undefined,
};
