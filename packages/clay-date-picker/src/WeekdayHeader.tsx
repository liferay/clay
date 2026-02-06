/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import {FirstDayOfWeek} from './types';

type ChildrenProps = {
	key: number;
	weekday: string;
};

type Props = {
	children: (object: ChildrenProps) => React.ReactNode;
	firstDayOfWeek: FirstDayOfWeek;
	weekdaysShort: Array<string>;
};

function ClayDatePickerWeekdayHeader({
	children,
	firstDayOfWeek = 0,
	weekdaysShort,
}: Props) {
	return (
		<div
			aria-hidden="true"
			className="date-picker-days-row date-picker-row"
			role="presentation"
		>
			{weekdaysShort.map((_weekday, index) => {
				return React.Children.only(
					children({
						key: index,
						weekday: weekdaysShort[(index + firstDayOfWeek) % 7]!,
					})
				);
			})}
		</div>
	);
}

export default ClayDatePickerWeekdayHeader;
