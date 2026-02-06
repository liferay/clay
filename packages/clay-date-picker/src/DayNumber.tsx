/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Keys} from '@clayui/shared';
import classnames from 'classnames';
import React from 'react';

import {IDay, setDate} from './Helpers';

type Props = {
	day: IDay;
	daysSelected: readonly [Date, Date];
	disabled?: boolean;
	index: number;
	isFocused: boolean;
	onClick: (date: Date) => void;
	range?: boolean;
};

function ClayDatePickerDayNumber({
	day,
	daysSelected,
	disabled,
	index,
	isFocused,
	onClick,
	range,
}: Props) {
	const {date, nextMonth, previousMonth} = day;
	const [startDate, endDate] = daysSelected;
	const isStartAndEndDateRange =
		startDate.toDateString() !== endDate.toDateString() &&
		isWithinInterval(date, daysSelected);
	const hasEndDateSelected = date.toDateString() === endDate.toDateString();
	const hasStartDateSelected =
		date.toDateString() === startDate.toDateString();

	return (
		<div
			aria-selected={
				isStartAndEndDateRange || hasStartDateSelected
					? true
					: undefined
			}
			className={classnames(
				'date-picker-col',
				range && {
					'c-selected': isStartAndEndDateRange,
					'c-selected-end':
						hasEndDateSelected && !hasStartDateSelected,
					'c-selected-start':
						hasStartDateSelected && !hasEndDateSelected,
				}
			)}
			role="gridcell"
		>
			<button
				aria-label={setDate(date, {
					hours: 12,
					milliseconds: 0,
					minutes: 0,
					seconds: 0,
				}).toDateString()}
				className={classnames(
					'date-picker-date date-picker-calendar-item',
					{
						'active':
							hasStartDateSelected ||
							(range && hasEndDateSelected),
						disabled,
						'next-month-date': nextMonth,
						'previous-month-date': previousMonth,
					}
				)}
				data-index={index}
				disabled={disabled}
				onClick={() => onClick(date)}
				onKeyDown={(event) => {

					// When tabbing and selecting a DayNumber using
					// SPACE key the active state it's not being removed.
					// See https://github.com/liferay/clay/issues/3374 for more details.

					if (event.key === Keys.Spacebar) {
						event.preventDefault();
					}
				}}
				onKeyUp={(event) => {
					if (event.key === Keys.Spacebar) {
						onClick(date);
					}
				}}
				tabIndex={isFocused ? undefined : -1}
				type="button"
			>
				{date.getDate()}
			</button>
		</div>
	);
}

function isWithinInterval(date: Date, interval: readonly [Date, Date]) {
	const [start, end] = interval;

	const time = date.getTime();
	const startTime = start.getTime();
	const endTime = end.getTime();

	if (startTime > endTime) {
		return false;
	}

	return time >= startTime && time <= endTime;
}

export default ClayDatePickerDayNumber;
