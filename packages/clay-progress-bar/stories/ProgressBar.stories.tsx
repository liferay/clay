/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import ClayProgressBar from '../src';

export default {
	component: ClayProgressBar,
	title: 'Design System/Components/ProgressBar',
};
export function Default(args: any) {
	return (
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
}

Default.args = {
	feedback: false,
	value: 50,
	warn: false,
};
