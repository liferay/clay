/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import ClayTimePicker from '../src';

export default {
	component: ClayTimePicker,
	title: 'Design System/Components/TimePicker',
};

export const Default = (args: any) => (
	<div className="sheet">
		<div className="form-group">
			<label>Time Picker</label>
			<ClayTimePicker
				disabled={args.disabled}
				icon={args.showIcon}
				name={args.name}
				timezone={args.timezone}
				use12Hours={args.use12Hours}
			/>
		</div>
	</div>
);

Default.args = {
	disabled: false,
	name: 'time-picker',
	showIcon: false,
	timezone: 'GMT+01:00',
	use12Hours: false,
};
