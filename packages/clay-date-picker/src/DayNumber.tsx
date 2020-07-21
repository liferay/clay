/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Keys} from '@clayui/shared';
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
	const {date, outside} = day;

	const classNames = classnames(
		'date-picker-date date-picker-calendar-item',
		{
			active: date.toDateString() === daySelected.toDateString(),
			disabled: outside || disabled,
		}
	);

	return (
		<button
			aria-label={formatDate(
				setDate(date, {
					hours: 12,
					milliseconds: 0,
					minutes: 0,
					seconds: 0,
				}),
				'yyyy MM dd'
			)}
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
	);
};

export default ClayDatePickerDayNumber;
