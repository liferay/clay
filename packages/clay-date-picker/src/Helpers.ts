/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {default as formatDate} from 'date-fns/format';
import {default as parseDate} from 'date-fns/parse';

import type {ISelectOption} from './Select';

export {formatDate, parseDate};

export interface IDay {
	date: Date;
	nextMonth?: boolean;
	previousMonth?: boolean;
}

export type WeekDays = Array<IDay>;

export type Month = Array<WeekDays>;

/**
 * Clone a date object.
 */
export function clone(date: number | Date) {
	return new Date(date instanceof Date ? date.getTime() : date);
}

export function range({end, start}: {end: number; start: number}) {
	return Array.from(
		{
			length: end - start + 1,
		},
		(_v, k) => k + start
	);
}

export function addMonths(date: number | Date, months: number) {
	date = clone(date);

	date.setMonth(date.getMonth() + months);

	return date;
}

export function setDate(
	date: Date,
	options: {
		date?: number | string;
		hours?: number | string;
		milliseconds?: number | string;
		minutes?: number | string;
		seconds?: number | string;
		year?: number | string;
	}
) {
	date = clone(date);

	return Object.keys(options).reduce((acc, key) => {
		const method = `set${key.charAt(0).toUpperCase() + key.slice(1)}`;

		// @ts-ignore

		acc[method](options[key]);

		return acc;
	}, date);
}

export function isValid(date: Date) {
	return date instanceof Date && !isNaN(date.getTime());
}

export function setMonth(
	range: Array<ISelectOption>,
	month: number,
	currentMonth: Date
) {
	const date = addMonths(currentMonth, month);
	const year = date.getFullYear();

	if (range.find((elem) => elem.value === year)) {
		return date;
	}
}
