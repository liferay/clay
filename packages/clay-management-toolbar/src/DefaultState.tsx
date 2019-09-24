/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import CreationMenu from './CreationMenu';
import Item from './Item';
import ItemList from './ItemList';
import React, {useState} from 'react';
import SearchForm from './SearchForm';
import SearchInput from './SearchInput';
import {ClayCheckbox} from '@clayui/form';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {IPropsBase, TClickEvent} from './types';
import {LinkOrButton} from '@clayui/shared';

interface IProps extends IPropsBase {
	/**
	 * Flag show the creation menu button.
	 *
	 * - Setting to true will render a button.
	 * - Setting a link will render a ClayLink.
	 * - Passing the ClayDropDownWithItems API will render a DropDown.
	 */
	creationMenu?: React.ComponentProps<typeof CreationMenu>['creationMenu'];

	/**
	 * Callback will always be called when the user clicks the
	 * creation menu button.
	 */
	onCreationMenuClick?: TClickEvent;

	/**
	 * Callback will always be called when click the sorting order action button,
	 * this will render a ClayButton and show the action only when the
	 * `sortingOrder` prop is also set.
	 */
	onSortingButtonClick?: TClickEvent;

	/**
	 * Callback will always be called when the user clicks the search button
	 * or press enter.
	 */
	onValueSubmit?: React.ComponentProps<typeof SearchInput>['onValueSubmit'];

	/**
	 * Set the value the user entered in search.
	 */
	searchValue?: string;

	/**
	 * Props to add to the form.
	 */
	searchFormProps?: Omit<
		React.ComponentProps<typeof SearchForm>,
		'onlySearch'
	>;

	/**
	 * Placeholder value for search input.
	 */
	searchPlaceholder?: string;

	/**
	 * Set the link to the sorting order action, this will render a ClayLink
	 * and show the action only when the `sortingOrder` prop is also set.
	 */
	sortingURL?: string;

	/**
	 * Define the visualization possibilities of your items using the props from
	 * ClayDropDownWithItems component.
	 */
	viewTypes?: React.ComponentProps<typeof ClayDropDownWithItems>['items'];
}

const DefaultState: React.FunctionComponent<IProps> = ({
	checkboxChecked = false,
	creationMenu = false,
	disabled = false,
	filterItems,
	labels = {
		checkbox: 'Select Items',
		filterAndOrder: 'Filter and Order',
	},
	onCheckboxChange,
	onCreationMenuClick,
	onInfoButtonClick,
	onSearchValueChange,
	onSortingButtonClick,
	onValueSubmit,
	searchFormProps,
	searchPlaceholder,
	searchValue = '',
	sortingOrder,
	sortingURL,
	spritemap,
	titlesLang = {
		creationMenu: 'Creation Menu',
		infoButton: 'Info',
		sorting: 'Reverse Sort Direction',
		viewTypesTrigger: 'Display Style',
	},
	viewTypes = [],
}) => {
	const [searchMobile, setSearchMobile] = useState<boolean>(false);
	const viewTypeActive = viewTypes.find(type => type.active);
	const onlySearch =
		onSearchValueChange &&
		!creationMenu &&
		!onCheckboxChange &&
		!filterItems &&
		!sortingOrder &&
		!viewTypes;

	return (
		<>
			<ItemList>
				{onCheckboxChange && (
					<Item>
						<ClayCheckbox
							checked={checkboxChecked}
							disabled={disabled}
							label={
								!filterItems &&
								!sortingOrder &&
								!onSearchValueChange
									? labels.checkbox
									: undefined
							}
							onChange={onCheckboxChange}
						/>
					</Item>
				)}

				{filterItems && (
					<ClayDropDownWithItems
						items={filterItems}
						spritemap={spritemap}
						trigger={
							<ClayButton
								className="nav-link"
								disabled={disabled}
								displayType="unstyled"
							>
								<span className="navbar-breakpoint-down-d-none">
									<span className="navbar-text-truncate">
										{labels.filterAndOrder}
									</span>

									<ClayIcon
										className="inline-item inline-item-after"
										spritemap={spritemap}
										symbol="caret-bottom"
									/>
								</span>
								<span className="navbar-breakpoint-d-none">
									<ClayIcon
										spritemap={spritemap}
										symbol="filter"
									/>
								</span>
							</ClayButton>
						}
					/>
				)}

				{sortingOrder && (onSortingButtonClick || sortingURL) && (
					<Item>
						<LinkOrButton
							buttonDisplayType="unstyled"
							className={classNames(
								'nav-link nav-link-monospaced',
								{
									'order-arrow-down-active':
										sortingOrder === 'desc',
									'order-arrow-up-active':
										sortingOrder === 'asc',
								}
							)}
							disabled={disabled}
							href={sortingURL}
							onClick={onSortingButtonClick}
							title={titlesLang.sorting}
						>
							<ClayIcon
								spritemap={spritemap}
								symbol="order-arrow"
							/>
						</LinkOrButton>
					</Item>
				)}
			</ItemList>

			{onSearchValueChange && onValueSubmit && (
				<div
					className={classNames('navbar-form navbar-form-autofit', {
						'navbar-overlay navbar-overlay-sm-down': !onlySearch,
						show: searchMobile,
					})}
				>
					<SearchForm {...searchFormProps} onlySearch={onlySearch}>
						<SearchInput
							disabled={disabled}
							onCloseButtonClick={() => setSearchMobile(false)}
							onlySearch={onlySearch}
							onValueChange={onSearchValueChange}
							onValueSubmit={onValueSubmit}
							placeholder={searchPlaceholder}
							spritemap={spritemap}
							value={searchValue}
						/>
					</SearchForm>
				</div>
			)}

			<ItemList>
				{onSearchValueChange && !onlySearch && (
					<Item className="navbar-breakpoint-d-none">
						<ClayButton
							className="nav-link nav-link-monospaced"
							disabled={disabled}
							displayType="unstyled"
							onClick={() => setSearchMobile(true)}
						>
							<ClayIcon spritemap={spritemap} symbol="search" />
						</ClayButton>
					</Item>
				)}

				{onInfoButtonClick && (
					<Item>
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
					</Item>
				)}

				{viewTypes && viewTypes.length > 0 && (
					<Item>
						<ClayDropDownWithItems
							items={viewTypes}
							spritemap={spritemap}
							trigger={
								<ClayButton
									className="nav-link-monospaced nav-link"
									disabled={disabled}
									displayType="unstyled"
									title={titlesLang.viewTypesTrigger}
								>
									<ClayIcon
										spritemap={spritemap}
										symbol={
											viewTypeActive
												? (viewTypeActive.symbolLeft as string)
												: ''
										}
									/>
								</ClayButton>
							}
						/>
					</Item>
				)}

				{(onCreationMenuClick || creationMenu) && (
					<Item>
						<CreationMenu
							creationMenu={creationMenu}
							disabled={disabled}
							onCreationMenuClick={onCreationMenuClick}
							spritemap={spritemap}
							titlesLang={titlesLang}
						/>
					</Item>
				)}
			</ItemList>
		</>
	);
};

export default DefaultState;
