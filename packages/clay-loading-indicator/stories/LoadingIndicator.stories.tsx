/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import ClayLoadingIndicator from '../src';

export default {
	component: ClayLoadingIndicator,
	title: 'Design System/Components/LoadingIndicator',
};

export const Default = (args: any) => (
	<ClayLoadingIndicator light={args.light} small={args.small} />
);

Default.args = {
	light: false,
	small: false,
};
