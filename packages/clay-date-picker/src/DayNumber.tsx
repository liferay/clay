/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Keys} from '@clayui/shared';
import classnames from 'classnames';
import React from 'react';

import {IDay, setDate} from './Helpers';
import {TDaysSelected} from './types';

interface IProps {
	day: IDay;
	daysSelected: TDaysSelected;
	disabled?: boolean;
	range?: boolean;
	onClick: (date: Date, range?: boolean) => void;
}

interface IInterval {
	start: Date;
	end: Date;
}

function isWithinInterval(dirtyDate: Date, dirtyInterval: IInterval) {
	const interval = dirtyInterval || {};
	const time = dirtyDate.getTime();
	const startTime = interval.start.getTime();
	const endTime = interval.end.getTime();

	if (!(startTime <= endTime)) {
		return false;
	}

	return time >= startTime && time <= endTime;
}

const ClayDatePickerDayNumber: React.FunctionComponent<IProps> = ({
	day,
	daysSelected,
	disabled,
	onClick,
	range,
}) => {
	const {date, outside} = day;
	const [startDate, endDate] = daysSelected;

	const isSelectedToDate = date.toDateString() === endDate.toDateString();
	const isSelectedFromDate = date.toDateString() === startDate.toDateString();

	const classNames = classnames(
		'date-picker-date date-picker-calendar-item',
		{
			active: isSelectedFromDate || (range && isSelectedToDate),
			disabled: outside || disabled,
		}
	);

	return (
		<div
			className={classnames(
				'date-picker-col',
				range && {
					'c-selected':
						!isSelectedFromDate &&
						!isSelectedToDate &&
						isWithinInterval(date, {
							end: endDate,
							start: startDate,
						}),
					'c-selected c-selected-end':
						isSelectedToDate &&
						!(isSelectedToDate && isSelectedFromDate),
					'c-selected c-selected-start':
						isSelectedFromDate &&
						!(isSelectedToDate && isSelectedFromDate),
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
				disabled={outside}
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

export default ClayDatePickerDayNumber;
