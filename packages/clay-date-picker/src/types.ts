/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
	chooseDate?: string;
	dialog?: string;
	input?: string;
	openCalendar?: string;
	selectMonth: string;
	selectYear: string;
}

export interface IYears {
	end: number;
	start: number;
}
