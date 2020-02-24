/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {IDay, Month} from './Helpers';

interface IChildrenFn {
	day: IDay;
	key: number;
}

interface IProps {
	children: (object: IChildrenFn) => React.ReactNode;
	weeks: Month;
}

const ClayDatePickerDaysTable: React.FunctionComponent<IProps> = ({
	children,
	weeks,
}) => {
	return (
		<>
			{weeks.map((days, index) => (
				<div
					className="date-picker-date-row date-picker-row"
					key={index}
				>
					{days.map((day, index) => {
						return React.Children.only(children({day, key: index}));
					})}
				</div>
			))}
		</>
	);
};

export default ClayDatePickerDaysTable;
