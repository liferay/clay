/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import {LinkOrButton, sub} from '@clayui/shared';
import React from 'react';

import Item from './Item';
import ItemList from './ItemList';
import {IPropsBase, TClickEvent} from './types';

type TItem = React.ComponentProps<
	typeof ClayDropDownWithItems
>['items'][number];

interface IActionItems extends TItem {
	quickAction?: boolean;
}

interface IProps extends IPropsBase {
	/**
	 * Set DropDown items to be shown in the active state of the component,
	 * setting quickAction to true will show the action in quick action mode.
	 *
	 * See the ClayDropDownWithItems API for more details.
	 */
	actionItems?: Array<IActionItems>;

	/**
	 * Setting the link will render a ClayLink to show the `clear selection`
	 * action.
	 */
	clearSelectionURL?: string;

	/**
	 * Callback will always be called when the user clicks the `Clear` button,
	 * this will render a ClayButton.
	 */
	onClearSelectionClick?: TClickEvent;

	/**
	 * Callback will always be called when the user clicks on some quick
	 * action button.
	 */
	onQuickActionClick?: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		item: IActionItems
	) => void;

	/**
	 * Callback will always be called when the user clicks the button and
	 * will render a Select All ClayButton.
	 */
	onSelectAllClick?: TClickEvent;

	/**
	 * Setting the link to Select All's action will render a ClayLink.
	 */
	selectAllURL?: string;

	/**
	 * Flag to show how many items are selected.
	 */
	selectedItems?: number;

	/**
	 * Flag to show total items.
	 */
	totalItems?: number;
}

const ActiveState: React.FunctionComponent<IProps> = ({
	actionItems = [],
	checkboxChecked = false,
	clearSelectionURL,
	disabled = false,
	labels = {
		allSelected: 'All Selected',
		checkbox: 'Select Items',
		clearSelection: 'Clear',
		selectAll: 'Select all',
		selected: 'Selected',
		selectedItemsOfTotalItems: '{0} of {1}',
	},
	onCheckboxChange,
	onClearSelectionClick,
	onInfoButtonClick,
	onQuickActionClick,
	onSelectAllClick,
	selectAllURL,
	selectedItems = 0,
	spritemap,
	titlesLang = {
		infoButton: 'Info',
	},
	totalItems = 0,
}) => {
	return (
		<>
			<ClayManagementToolbar.ItemList expand>
				{onCheckboxChange && (
					<ClayManagementToolbar.Item>
						<ClayCheckbox
							checked={checkboxChecked}
							disabled={disabled}
							onChange={onCheckboxChange}
							title={labels.checkbox}
						/>
					</ClayManagementToolbar.Item>
				)}
				<ClayManagementToolbar.Item>
					<span className="navbar-text">
						{selectedItems === totalItems ? (
							labels.allSelected
						) : (
							<>
								{sub(labels.selectedItemsOfTotalItems, [
									selectedItems,
									totalItems,
								])}{' '}
								<span className="navbar-breakpoint-down-d-none">
									{labels.selected}
								</span>
							</>
						)}
					</span>
				</ClayManagementToolbar.Item>

				{(onClearSelectionClick || clearSelectionURL) && (
					<ClayManagementToolbar.Item className="nav-item-shrink">
						<LinkOrButton
							buttonDisplayType="unstyled"
							buttonType="button"
							className="nav-link"
							disabled={disabled}
							href={clearSelectionURL}
							onClick={onClearSelectionClick}
						>
							<span className="text-truncate-inline">
								<span className="text-truncate">
									{labels.clearSelection}
								</span>
							</span>
						</LinkOrButton>
					</ClayManagementToolbar.Item>
				)}

				{(selectAllURL || onSelectAllClick) && (
					<ClayManagementToolbar.Item className="nav-item-shrink">
						<LinkOrButton
							buttonDisplayType="unstyled"
							buttonType="button"
							className="nav-link"
							disabled={disabled}
							href={selectAllURL}
							onClick={onSelectAllClick}
						>
							<span className="text-truncate-inline">
								<span className="text-truncate">
									{labels.selectAll}
								</span>
							</span>
						</LinkOrButton>
					</ClayManagementToolbar.Item>
				)}
			</ClayManagementToolbar.ItemList>

			{(actionItems.length > 0 || onInfoButtonClick) && (
				<>
					<ClayManagementToolbar.ItemList>
						{onInfoButtonClick && (
							<ClayManagementToolbar.Item>
								<ClayButton
									className="nav-link nav-link-monospaced"
									disabled={disabled}
									displayType="unstyled"
									onClick={onInfoButtonClick}
									title={titlesLang.infoButton}
								>
									<ClayIcon
										spritemap={spritemap}
										symbol="info-circle-open"
									/>
								</ClayButton>
							</ClayManagementToolbar.Item>
						)}
					</ClayManagementToolbar.ItemList>

					{actionItems.length > 0 && (
						<>
							{actionItems.map(
								({quickAction, ...item}, index) =>
									quickAction &&
									item.symbolLeft && (
										<ClayManagementToolbar.Item
											className="navbar-breakpoint-down-d-none"
											key={index}
										>
											<LinkOrButton
												buttonDisplayType="unstyled"
												className="nav-link nav-link-monospaced"
												disabled={item.disabled}
												href={item.href}
												onClick={(
													event: React.MouseEvent<
														HTMLButtonElement,
														MouseEvent
													>
												) =>
													onQuickActionClick &&
													onQuickActionClick(event, {
														quickAction,
														...item,
													})
												}
												title={item.label}
											>
												<ClayIcon
													spritemap={spritemap}
													symbol={item.symbolLeft}
												/>
											</LinkOrButton>
										</ClayManagementToolbar.Item>
									)
							)}

							<ClayManagementToolbar.Item>
								<ClayDropDownWithItems
									items={actionItems.map(
										// eslint-disable-next-line @typescript-eslint/no-unused-vars
										({quickAction, ...action}) => action
									)}
									spritemap={spritemap}
									trigger={
										<ClayButton
											className="nav-link nav-link-monospaced"
											disabled={disabled}
											displayType="unstyled"
										>
											<ClayIcon
												spritemap={spritemap}
												symbol="ellipsis-v"
											/>
										</ClayButton>
									}
								/>
							</ClayManagementToolbar.Item>
						</>
					)}
				</>
			)}
		</>
	);
};

export default ActiveState;
