/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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

const ClayDatePickerWeekdayHeader = ({
	children,
	firstDayOfWeek = 0,
	weekdaysShort,
}: Props) => (
	<div
		aria-hidden="true"
		className="date-picker-days-row date-picker-row"
		role="presentation"
	>
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
