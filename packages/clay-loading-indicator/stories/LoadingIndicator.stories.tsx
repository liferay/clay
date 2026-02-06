/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import ClayLoadingIndicator from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: [null, 'primary', 'secondary', 'light'],
		},
		shape: {
			control: {type: 'select'},
			options: ['circle', 'squares'],
		},
		size: {
			control: {type: 'select'},
			options: [null, 'xs', 'sm', 'md', 'lg'],
		},
	},
	component: ClayLoadingIndicator,
	title: 'Design System/Components/LoadingIndicator',
};
export function Default(args: any) {
	return (
		<ClayLoadingIndicator
			displayType={args.displayType}
			light={args.light}
			shape={args.shape}
			size={args.size}
			small={args.small}
		/>
	);
}

Default.args = {
	displayType: null,
	light: false,
	shape: 'circle',
	size: null,
	small: false,
};
