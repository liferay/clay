/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

type Props = {
	weekday: string;
};

function ClayDatePickerWeekday({weekday}: Props) {
	return (
		<div className="date-picker-col">
			<div className="date-picker-calendar-item date-picker-day">
				<abbr>{weekday}</abbr>
			</div>
		</div>
	);
}

export default ClayDatePickerWeekday;
