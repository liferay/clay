/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export enum FirstDayOfWeek {
	Sunday = 0,
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6,
}

export interface IAriaLabels {
	buttonChooseDate: string;
	buttonDot: string;
	buttonNextMonth: string;
	buttonPreviousMonth: string;
	input?: string;
	dialog?: string;
}

export interface IYears {
	end: number;
	start: number;
}
