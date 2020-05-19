/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import Icon from '@clayui/icon';
import moment from 'moment';
import React, {FunctionComponent, HTMLAttributes, useMemo, useRef} from 'react';

import * as Helpers from './Helpers';
import Select, {ISelectOption} from './Select';
import {IAriaLabels, IYears} from './types';

interface IProps extends HTMLAttributes<HTMLDivElement> {
	ariaLabels: IAriaLabels;
	currentMonth: Date;
	months: Array<string>;
	onDotClicked: () => void;
	onMonthChange: (date: Date) => void;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	years: IYears;
}

const ClayDatePickerDateNavigation: FunctionComponent<IProps> = ({
	ariaLabels,
	currentMonth,
	months,
	onDotClicked,
	onMonthChange,
	spritemap,
	years,
}) => {
	const memoizedYears: Array<ISelectOption> = useMemo(
		() =>
			Helpers.range(years).map(elem => {
				return {
					label: elem,
					value: elem,
				};
			}),
		[years]
	);

	const memoizedMonths: Array<ISelectOption> = useMemo(
		() =>
			months.map((month, index) => {
				return {
					label: month,
					value: index,
				};
			}),
		[months]
	);

	const monthSelectorRef = useRef<HTMLSelectElement | null>(null);

	const yearSelectorRef = useRef<HTMLSelectElement | null>(null);

	/**
	 * Handles the change of the month from the available
	 * years in the range
	 */
	function handleChangeMonth(month: number) {
		const date = moment(currentMonth)
			.clone()
			.add(month, 'M')
			.toDate();
		const year = date.getFullYear();

		if (memoizedYears.find(elem => elem.value === year)) {
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
						name="month"
						onChange={handleFormChange}
						options={memoizedMonths}
						ref={monthSelectorRef}
						testId="month-select"
						value={currentMonth.getMonth()}
					/>
				</div>
				<div className="date-picker-nav-item input-date-picker-year">
					<Select
						name="year"
						onChange={handleFormChange}
						options={memoizedYears}
						ref={yearSelectorRef}
						testId="year-select"
						value={currentMonth.getFullYear()}
					/>
				</div>

				<div className="date-picker-nav-controls date-picker-nav-item date-picker-nav-item-expand">
					<Button
						aria-label={ariaLabels.buttonPreviousMonth}
						displayType="unstyled"
						monospaced
						onClick={handlePreviousMonthClicked}
						small
					>
						<Icon spritemap={spritemap} symbol="angle-left" />
					</Button>
					<Button
						aria-label={ariaLabels.buttonDot}
						displayType="unstyled"
						monospaced
						onClick={onDotClicked}
						small
					>
						<Icon spritemap={spritemap} symbol="simple-circle" />
					</Button>
					<Button
						aria-label={ariaLabels.buttonNextMonth}
						displayType="unstyled"
						monospaced
						onClick={handleNextMonthClicked}
						small
					>
						<Icon spritemap={spritemap} symbol="angle-right" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ClayDatePickerDateNavigation;
