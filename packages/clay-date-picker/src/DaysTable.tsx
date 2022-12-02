/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {IDay, Month} from './Helpers';

type ChildrenFunction = {
	day: IDay;
	key: number;
};

type Props = {
	children: (object: ChildrenFunction) => React.ReactNode;
	weeks: Month;
};

const ClayDatePickerDaysTable = ({children, weeks}: Props) => {
	return (
		<>
			{weeks.map((days, index) => (
				<div
					className="date-picker-date-row date-picker-row"
					data-index={index}
					key={index}
					role="row"
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
