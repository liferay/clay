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
	onKeyUp?: (event: React.KeyboardEvent) => void;
	onKeyDown?: (event: React.KeyboardEvent) => void;
}

const noop = () => {};

const KEY_CODE_SPACE = 32;

const ClayDatePickerDayNumber: React.FunctionComponent<IProps> = ({
	day,
	daySelected,
	disabled,
	onClick = noop,
	onKeyDown = noop,
	onKeyUp = noop,
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
			onKeyDown={(event) => {
				// When tabbing and selecting a DayNumber using
				// SPACE key the active state it's not being removed.
				// See https://github.com/liferay/clay/issues/3374 for more details.
				if (event.keyCode === KEY_CODE_SPACE) {
					event.preventDefault();
				}

				onKeyDown(event);
			}}
			onKeyUp={(event) => {
				if (event.keyCode === KEY_CODE_SPACE) {
					onClick(day.date);
				}

				onKeyUp(event);
			}}
			type="button"
		>
			{day.date.getDate()}
		</button>
	);
};

export default ClayDatePickerDayNumber;
