/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

interface IProps {
	weekday: string;
}

const ClayDatePickerWeekday: React.FunctionComponent<IProps> = ({weekday}) => (
	<div className="date-picker-col">
		<div className="date-picker-calendar-item date-picker-day">
			<abbr>{weekday}</abbr>
		</div>
	</div>
);

export default ClayDatePickerWeekday;
