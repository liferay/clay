/**
 * © 2020 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
export type TDisplay = 'dark' | 'light';

export type TSidebarPosition = 'left' | 'right';

export interface ISidebarItem {
	label: string;
	icon: string;
	items?: Array<ISidebarItem>;
	href?: string;
	renderIcon?: Function;
}
