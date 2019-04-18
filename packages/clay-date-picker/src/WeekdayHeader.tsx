/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {FunctionComponent, ReactNode} from 'react';
import {firstDayOfWeek} from './types';

interface IChildrenProps {
	key: number;
	weekday: string;
}

interface Props {
	children: (object: IChildrenProps) => ReactNode;
	firstDayOfWeek: firstDayOfWeek;
	weekdaysShort: Array<string>;
}

const WeekdayHeader: FunctionComponent<Props> = ({
	children,
	firstDayOfWeek = 0,
	weekdaysShort,
}) => (
	<div className="date-picker-days-row date-picker-row">
		{weekdaysShort.map((weekday, index) => {
			return React.Children.only(
				children({
					key: index,
					weekday: weekdaysShort[(index + firstDayOfWeek) % 7],
				})
			);
		})}
	</div>
);

export default WeekdayHeader;
