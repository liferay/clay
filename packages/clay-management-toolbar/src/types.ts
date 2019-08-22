/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithItems} from '@clayui/drop-down';

export interface ITitles {
	creationMenu: string;
	infoButton: string;
	sorting: string;
	viewTypesTrigger: string;
}

export interface ILabel {
	allSelected: string;
	checkbox: string;
	clear: string;
	clearSelection: string;
	filterAndOrder: string;
	selectAll: string;
	selected: string;
	selectedItemsOfTotalItems: string;
	totalItems: string;
}

export type TClickEvent = (
	e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

export interface IPropsBase {
	/**
	 * Flag to identify the current state of the checkbox.
	 */
	checkboxChecked?: boolean;

	/**
	 * Flag that identifies when to disable all actions and features of the
	 * component.
	 */
	disabled?: boolean;

	/**
	 * Sets DropDown items will show Filter and Order in the component, see the
	 * ClayDropDownWithItems API for more details.
	 */
	filterItems?: React.ComponentProps<typeof ClayDropDownWithItems>['items'];

	/**
	 * Set the labels of the text visible by the component, use this to add
	 * support for i18n.
	 */
	labels?: ILabel;

	/**
	 * Callback will always be called when the user interacts with the checkbox.
	 */
	onCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

	/**
	 * Callback will always be called when the user clicks the info button,
	 * setting the callback will show the info button.
	 */
	onInfoButtonClick?: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;

	/**
	 * Callback will always be called when user interact with search, setting
	 * the callback will show the search input.
	 */
	onSearchValueChange?: (val: string) => void;

	/**
	 * Flag to show the current sort order, setting a value in conjunction with
	 * the prop `onSortingButtonClick` or `sortingURL` will show the button.
	 */
	sortingOrder?: 'asc' | 'desc';

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Set the titles that are visible in the tooltip, use this to add
	 * support for i18n.
	 */
	titlesLang?: ITitles;
}
