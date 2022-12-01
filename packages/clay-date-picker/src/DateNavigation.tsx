/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import Icon from '@clayui/icon';
import React from 'react';

import {setMonth} from './Helpers';
import Select, {ISelectOption} from './Select';
import {IAriaLabels} from './types';

type Props = {
	ariaLabels: IAriaLabels;
	currentMonth: Date;
	disabled?: boolean;
	months: Array<ISelectOption>;
	onDotClicked: () => void;
	onMonthChange: (date: Date) => void;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	years: Array<ISelectOption>;
};

const ClayDatePickerDateNavigation = ({
	ariaLabels,
	currentMonth,
	disabled,
	months,
	onDotClicked,
	onMonthChange,
	spritemap,
	years,
}: Props) => {
	const monthSelectorRef = React.useRef<HTMLSelectElement | null>(null);

	const yearSelectorRef = React.useRef<HTMLSelectElement | null>(null);

	/**
	 * Handles the change of the month from the available
	 * years in the range
	 */
	function handleChangeMonth(month: number) {
		const date = setMonth(years, month, currentMonth);

		if (date) {
			onMonthChange(date);
		}
	}

	/**
	 * Handles the previous month button
	 */
	const handlePreviousMonthClicked = () => handleChangeMonth(-1);

	/**
	 * Handles the next month button
	 */
	const handleNextMonthClicked = () => handleChangeMonth(1);

	/**
	 * Handles the change of the year and month of the header
	 */
	function handleFormChange() {
		if (monthSelectorRef.current && yearSelectorRef.current) {
			const year = Number(yearSelectorRef.current.value);
			const month = Number(monthSelectorRef.current.value);
			onMonthChange(new Date(year, month));
		}
	}

	return (
		<div className="date-picker-calendar-header">
			<div className="date-picker-nav">
				<div className="date-picker-nav-item input-date-picker-month">
					<Select
						disabled={disabled}
						name="month"
						onChange={() => handleFormChange()}
						options={months}
						ref={monthSelectorRef}
						testId="month-select"
						value={currentMonth.getMonth()}
					/>
				</div>
				<div className="date-picker-nav-item input-date-picker-year">
					<Select
						disabled={disabled}
						name="year"
						onChange={() => handleFormChange()}
						options={years}
						ref={yearSelectorRef}
						testId="year-select"
						value={currentMonth.getFullYear()}
					/>
				</div>

				<div className="date-picker-nav-controls date-picker-nav-item date-picker-nav-item-expand">
					<Button
						aria-label={ariaLabels.buttonPreviousMonth}
						className="nav-btn nav-btn-monospaced"
						disabled={disabled}
						displayType={null}
						onClick={handlePreviousMonthClicked}
						title={ariaLabels.buttonPreviousMonth}
					>
						<Icon spritemap={spritemap} symbol="angle-left" />
					</Button>
					<Button
						aria-label={ariaLabels.buttonDot}
						className="nav-btn nav-btn-monospaced"
						disabled={disabled}
						displayType={null}
						onClick={onDotClicked}
						title={ariaLabels.buttonDot}
					>
						<Icon spritemap={spritemap} symbol="simple-circle" />
					</Button>
					<Button
						aria-label={ariaLabels.buttonNextMonth}
						className="nav-btn nav-btn-monospaced"
						disabled={disabled}
						displayType={null}
						onClick={handleNextMonthClicked}
						title={ariaLabels.buttonNextMonth}
					>
						<Icon spritemap={spritemap} symbol="angle-right" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ClayDatePickerDateNavigation;
