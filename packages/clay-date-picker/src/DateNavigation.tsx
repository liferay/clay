/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import {Option, Picker} from '@clayui/core';
import Icon from '@clayui/icon';
import {Keys} from '@clayui/shared';
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

	return (
		<div className="date-picker-calendar-header">
			<div className="date-picker-nav">
				<div className="date-picker-nav-item input-date-picker-month">
					<Select
						disabled={disabled}
						name="month"
						onChange={(event) =>
							onMonthChange(
								new Date(
									currentMonth.getFullYear(),
									Number(event.target.value)
								)
							)
						}
						options={months}
						testId="month-select"
						value={currentMonth.getMonth()}
					/>
				</div>
				<div className="date-picker-nav-item input-date-picker-year">
					<Picker
						UNSAFE_behavior="secondary"
						className="form-control-sm"
						disabled={disabled}
						items={years}
						native
						onKeyDown={(
							event: React.KeyboardEvent<HTMLButtonElement>
						) => {
							if (
								event.shiftKey &&
								(event.key === Keys.Up ||
									event.key === Keys.Down)
							) {
								event.key =
									event.key === Keys.Up
										? 'PageUp'
										: 'PageDown';
							}
						}}
						onSelectionChange={(key: React.Key) => {
							if (!monthSelectorRef.current) {
								return;
							}

							onMonthChange(
								new Date(Number(key), currentMonth.getMonth())
							);
						}}
						selectedKey={String(currentMonth.getFullYear())}
					>
						{(item) => (
							<Option key={item.value}>
								{String(item.label)}
							</Option>
						)}
					</Picker>
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
