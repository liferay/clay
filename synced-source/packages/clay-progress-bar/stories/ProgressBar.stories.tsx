/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import ClayProgressBar from '../src';

export default {
	component: ClayProgressBar,
	title: 'Design System/Components/ProgressBar',
};

export const Default = (args: any) => (
	<div>
		<ClayProgressBar
			feedback={args.feedback}
			value={args.value}
			warn={args.warn}
		/>
		<ClayProgressBar value={100} />
		<ClayProgressBar value={55}>
			55 of 100
			<span className="sr-only">items loaded</span>
		</ClayProgressBar>
	</div>
);

Default.args = {
	feedback: false,
	value: 50,
	warn: false,
};
