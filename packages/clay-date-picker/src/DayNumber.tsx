/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React from 'react';

import {IDay, formatDate, setDate} from './Helpers';

interface IProps {
	day: IDay;
	daySelected: Date;
	disabled?: boolean;
	onClick: (date: Date) => void;
}

const ClayDatePickerDayNumber: React.FunctionComponent<IProps> = ({
	day,
	daySelected,
	disabled,
	onClick,
}) => {
	const classNames = classnames(
		'date-picker-date date-picker-calendar-item',
		{
			active: day.date.toDateString() === daySelected.toDateString(),
			disabled: day.outside || disabled,
		}
	);

	return (
		<button
			aria-label={formatDate(
				setDate(day.date, {
					hours: 12,
					milliseconds: 0,
					minutes: 0,
					seconds: 0,
				}),
				'yyyy MM dd'
			)}
			className={classNames}
			disabled={day.outside}
			onClick={() => onClick(day.date)}
			type="button"
		>
			{day.date.getDate()}
		</button>
	);
};

export default ClayDatePickerDayNumber;
