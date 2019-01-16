import * as Helpers from './Helpers';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, {useMemo} from 'react';

import Button from './Button';
import Select from './Select';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function DateNavigation({
	currentMonth,
	daySelected,
	months,
	onDotClicked,
	onMonthChange,
	spritemap,
	years,
}) {
	const memoizedYears = useMemo(
		() =>
			Helpers.range(years).map(elem => {
				return {
					label: elem,
					value: elem,
				};
			}),
		[years.start, years.end]
	);

	const memoizedMonths = useMemo(
		() =>
			months.map((month, index) => {
				return {
					label: month,
					value: index,
				};
			}),
		months
	);

	/**
	 * Handles the change of the month from the available
	 * years in the range
	 * @param {!number} month
	 */
	function handleChangeMonth(month) {
		const date = moment(currentMonth)
			.clone()
			.add(month, 'M')
			.toDate();

		if (memoizedYears.find(elem => elem.value === date.getFullYear())) {
			onMonthChange(date);
		}
	}

	/**
	 * Handles the previous month button
	 */
	function handlePreviousMonthClicked() {
		handleChangeMonth(-1);
	}

	/**
	 * Handles the click on the dot button.
	 * @param {!Event} event
	 */
	function handleDotClicked() {
		onDotClicked();
	}

	/**
	 * Handles the next month button
	 */
	function handleNextMonthClicked() {
		handleChangeMonth(1);
	}

	/**
	 * Handles the change of the year and month of the header
	 * @param {!Event} event
	 */
	function handleFormChange(event) {
		const {month, year} = event.target.form;
		onMonthChange(new Date(year.value, month.value));
	}

	return (
		<div className="datepicker-caption">
			<form className="datepicker-form">
				<div className="input-group input-datepicker-month">
					<Select
						name="month"
						onChange={handleFormChange}
						options={memoizedMonths}
						value={currentMonth.getMonth()}
					/>
				</div>
				<div className="input-group input-datepicker-year">
					<Select
						name="year"
						onChange={handleFormChange}
						options={memoizedYears}
						value={currentMonth.getFullYear()}
					/>
				</div>
			</form>
			<div className="datepicker-navigation">
				<Button
					icon="angle-left"
					monospaced={true}
					onClick={handlePreviousMonthClicked}
					size="sm"
					spritemap={spritemap}
					style="unstyled"
				/>
				<Button
					icon="live"
					monospaced={true}
					onClick={handleDotClicked}
					size="sm"
					spritemap={spritemap}
					style="unstyled"
				/>
				<Button
					icon="angle-right"
					monospaced={true}
					onClick={handleNextMonthClicked}
					size="sm"
					spritemap={spritemap}
					style="unstyled"
				/>
			</div>
		</div>
	);
}

DateNavigation.propTypes = {
	currentMonth: PropTypes.instanceOf(Date).isRequired,
	daySelected: PropTypes.instanceOf(Date),
	months: PropTypes.array,
	onDotClicked: PropTypes.func,
	onMonthChange: PropTypes.func,
	spritemap: PropTypes.string.isRequired,
	years: PropTypes.shape({
		start: PropTypes.number,
		end: PropTypes.number,
	}),
};

export {DateNavigation};
export default DateNavigation;
