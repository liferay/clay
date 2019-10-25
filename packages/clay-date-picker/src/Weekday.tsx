/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {FunctionComponent} from 'react';

interface IProps {
	weekday: string;
}

const ClayDatePickerWeekday: FunctionComponent<IProps> = ({weekday}) => (
	<div className="date-picker-calendar-item date-picker-day">
		<abbr>{weekday}</abbr>
	</div>
);

export default ClayDatePickerWeekday;
