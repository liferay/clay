/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
export function Default(args: any) {
	return (
		<ClayBadge
			displayType={args.displayType}
			label={args.label}
			translucent={args.translucent}
		/>
	);
}

Default.args = {
	displayType: 'primary',
	label: '100',
	translucent: false,
};
