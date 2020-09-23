/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

export type Status = 'danger' | 'info' | 'success' | 'warning';

export type Size = 'full-screen' | 'lg' | 'sm';

export enum ObserverType {
	Close = 0,
	Open = 1,
}

export type Observer = {
	dispatch: (type: ObserverType) => void;
	mutation: [boolean, boolean];
};
