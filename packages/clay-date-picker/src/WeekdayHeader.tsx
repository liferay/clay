/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {FirstDayOfWeek} from './types';

interface IChildrenProps {
	key: number;
	weekday: string;
}

interface IProps {
	children: (object: IChildrenProps) => React.ReactNode;
	firstDayOfWeek: FirstDayOfWeek;
	weekdaysShort: Array<string>;
}

const ClayDatePickerWeekdayHeader: React.FunctionComponent<IProps> = ({
	children,
	firstDayOfWeek = 0,
	weekdaysShort,
}) => (
	<div className="date-picker-days-row date-picker-row">
		{weekdaysShort.map((weekday, index) => {
			return React.Children.only(
				children({
					key: index,
					weekday: weekdaysShort[(index + firstDayOfWeek) % 7],
				})
			);
		})}
	</div>
);

export default ClayDatePickerWeekdayHeader;
