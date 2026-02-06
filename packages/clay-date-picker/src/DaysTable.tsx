/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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

function ClayDatePickerDaysTable({children, weeks}: Props) {
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
}

export default ClayDatePickerDaysTable;
