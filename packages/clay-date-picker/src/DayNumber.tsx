/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import moment from 'moment';
import React, {FunctionComponent} from 'react';
import {IDay} from './Helpers';

interface IProps {
	day: IDay;
	daySelected: Date;
	onClick: (date: Date) => void;
}

const ClayDatePickerDayNumber: FunctionComponent<IProps> = ({
	day,
	daySelected,
	onClick,
}) => {
	const classNames = classnames(
		'date-picker-date date-picker-calendar-item',
		{
			active:
				moment(day.date).format('YYYY-MM-DD') ===
				moment(daySelected).format('YYYY-MM-DD'),
			disabled: day.outside,
		}
	);

	const handleClick = () => onClick(day.date);

	return (
		<button
			aria-label={moment(day.date)
				.clone()
				.set('hour', 12)
				.set('minute', 0)
				.set('second', 0)
				.set('millisecond', 0)
				.format('YYYY MM DD')}
			className={classNames}
			disabled={day.outside}
			onClick={handleClick}
			type="button"
		>
			{day.date.getDate()}
		</button>
	);
};

export default ClayDatePickerDayNumber;
