/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Keys} from '@clayui/shared';
import classnames from 'classnames';
import React from 'react';

import {IDay, setDate} from './Helpers';

interface IProps {
	day: IDay;
	daysSelected: readonly [Date, Date];
	disabled?: boolean;
	range?: boolean;
	onClick: (date: Date) => void;
}

const ClayDatePickerDayNumber: React.FunctionComponent<IProps> = ({
	day,
	daysSelected,
	disabled,
	onClick,
	range,
}) => {
	const {date, nextMonth, previousMonth} = day;
	const [startDate, endDate] = daysSelected;

	const hasEndDateSelected = date.toDateString() === endDate.toDateString();
	const hasStartDateSelected =
		date.toDateString() === startDate.toDateString();

	const classNames = classnames(
		'date-picker-date date-picker-calendar-item',
		{
			active: hasStartDateSelected || (range && hasEndDateSelected),
			disabled,
			'next-month-date': nextMonth,
			'previous-month-date': previousMonth,
		}
	);

	return (
		<div
			className={classnames(
				'date-picker-col',
				range && {
					'c-selected':
						startDate.toDateString() !== endDate.toDateString() &&
						isWithinInterval(date, daysSelected),
					'c-selected-end':
						hasEndDateSelected && !hasStartDateSelected,
					'c-selected-start':
						hasStartDateSelected && !hasEndDateSelected,
				}
			)}
		>
			<button
				aria-label={setDate(date, {
					hours: 12,
					milliseconds: 0,
					minutes: 0,
					seconds: 0,
				}).toDateString()}
				className={classNames}
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
				type="button"
			>
				{date.getDate()}
			</button>
		</div>
	);
};

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
