/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import {useId} from '@clayui/shared';
import ClaySticker from '@clayui/sticker';
import classNames from 'classnames';
import React from 'react';

import ClayList from './List';

export interface IListItem {

	/**
	 * Description of item.
	 */
	description?: string;

	/**
	 * Props to add to the dropdown trigger element
	 */
	dropDownTriggerProps?: React.HTMLAttributes<HTMLButtonElement>;

	/**
	 * List of actions to include in dropdown.
	 */
	dropdownActions?: React.ComponentProps<
		typeof ClayDropDownWithItems
	>['items'];

	/**
	 * Value to display if item is a header.
	 */
	header?: string;

	/**
	 * Click through url for item.
	 */
	href?: string;

	/**
	 * List of items to display below header.
	 */
	items?: Array<IListItem>;

	/**
	 * List of labels to display for item.
	 */
	labels?: Array<any>;

	/**
	 * List of actions to display as hoverable actions.
	 */
	quickActions?: Array<any>;

	/**
	 * Name of icon symbol.
	 */
	symbol?: string;

	/**
	 * Title of item.
	 */
	title?: string;

	/**
	 * Optional properties that an item can include for callback purposes.
	 */
	[s: string]: any;
}

interface IBooleanMap {
	[s: string]: boolean;
}

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * Property of item that makes it unique from other items.
	 * Defaults to 'id'.
	 */
	itemIdentifier?: string | 'id';

	/**
	 * Items to show in list.
	 */
	items?: Array<IListItem>;

	/**
	 * Callback for when selected items change.
	 */
	onSelectedItemsChange?: (map: IBooleanMap) => void;

	/**
	 * Map of items that are currently selected.
	 */
	selectedItemsMap?: IBooleanMap;

	/**
	 * Path to spritemap for icon symbol.
	 */
	spritemap?: string;
}

function ListItem({
	description,
	dropDownTriggerProps,
	dropdownActions,
	href,
	labels,
	onSelectChange,
	quickActions,
	selected = false,
	spritemap,
	title,
}: IListItem & {
	onSelectChange?: any;
	selected?: boolean;
	spritemap?: string;
}) {
	const titleId = useId();

	return (
		<ClayList.Item active={selected} flex>
			{onSelectChange && (
				<ClayList.ItemField>
					<ClayCheckbox
						aria-labelledby={titleId}
						checked={selected}
						onChange={() => {
							onSelectChange(!selected);
						}}
					/>
				</ClayList.ItemField>
			)}

			<ClayList.ItemField>
				<ClaySticker displayType="secondary">
					<ClayIcon spritemap={spritemap} symbol="folder" />
				</ClaySticker>
			</ClayList.ItemField>

			<ClayList.ItemField expand>
				<ClayList.ItemTitle
					href={href}
					id={onSelectChange ? titleId : undefined}
				>
					{title}
				</ClayList.ItemTitle>

				<ClayList.ItemText>{description}</ClayList.ItemText>

				{labels && (
					<div className="list-group-detail">
						{labels.map(({value, ...others}, j) => (
							<ClayLabel {...others} key={j}>
								{value}
							</ClayLabel>
						))}
					</div>
				)}
			</ClayList.ItemField>

			<ClayList.ItemField>
				{quickActions && (
					<ClayList.QuickActionMenu>
						{quickActions.map((action, j) => (
							<ClayList.QuickActionMenu.Item
								key={j}
								onClick={action.onClick}
								spritemap={spritemap}
								symbol={action.symbol}
							/>
						))}
					</ClayList.QuickActionMenu>
				)}

				{dropdownActions && (
					<ClayDropDownWithItems
						items={dropdownActions}
						spritemap={spritemap}
						trigger={
							<button
								type="button"
								{...dropDownTriggerProps}
								className="component-action"
							>
								<ClayIcon
									spritemap={spritemap}
									symbol="ellipsis-v"
								/>
							</button>
						}
					/>
				)}
			</ClayList.ItemField>
		</ClayList.Item>
	);
}

export function ListWithItems({
	className,
	itemIdentifier = 'id',
	items = [],
	selectedItemsMap = {},
	onSelectedItemsChange,
	spritemap,
	...otherProps
}: IProps) {
	return (
		<div {...otherProps} className={classNames(className)}>
			<ClayList>
				{items.map((item, i) => {
					if (item.items) {
						return (
							<React.Fragment key={`headerGroup${i}`}>
								<ClayList.Header>{item.header}</ClayList.Header>

								{item.items.map((subItem) => {
									const key = subItem[itemIdentifier];

									return (
										<ListItem
											{...subItem}
											key={key}
											onSelectChange={
												onSelectedItemsChange
													? () => {
															onSelectedItemsChange(
																{
																	...selectedItemsMap,
																	[key]: !selectedItemsMap[
																		key
																	],
																}
															);
														}
													: undefined
											}
											selected={selectedItemsMap[key]}
											spritemap={spritemap}
										/>
									);
								})}
							</React.Fragment>
						);
					}
					const key = item[itemIdentifier];

					return (
						<ListItem
							{...item}
							key={key}
							onSelectChange={
								onSelectedItemsChange
									? () => {
											onSelectedItemsChange({
												...selectedItemsMap,
												[key]: !selectedItemsMap[key],
											});
										}
									: undefined
							}
							selected={selectedItemsMap[key]}
							spritemap={spritemap}
						/>
					);
				})}
			</ClayList>
		</div>
	);
}
