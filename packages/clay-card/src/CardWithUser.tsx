/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker, {DisplayType as StickerDisplayType} from '@clayui/sticker';
import React from 'react';

import ClayCard from './Card';

interface IProps {
	/**
	 * List of actions in the dropdown menu
	 */
	actions?: React.ComponentProps<typeof ClayDropDownWithItems>['items'];

	/**
	 * Labels for the aria attributes
	 */
	ariaLabels?: {
		cardCheckbox: string;
		dropDownTrigger: string;
	};

	/**
	 * Value of the description of the user
	 */
	description: string;

	/**
	 * Flag to indicate that all interactions on the card will be disabled.
	 */
	disabled?: boolean;

	/**
	 * Path or URL to user
	 */
	href?: string;

	/**
	 * List of labels that are applied to the user
	 */
	labels?: Array<
		React.ComponentProps<typeof ClayLabel> & {value: React.ReactText}
	>;

	/**
	 * Name of the user
	 */
	name: string;

	/**
	 * Callback for when item is selected
	 */
	onSelectChange?: (val: boolean) => void;

	/**
	 * Flag to indicate if card is selected
	 */
	selected?: boolean;

	/**
	 * Path to clay icon spritemap
	 */
	spritemap?: string;

	/**
	 * Displays the color of the user icon
	 */
	userDisplayType?: StickerDisplayType;

	/**
	 * Path to the user's image
	 */
	userImageSrc?: string;
}

export const ClayCardWithUser: React.FunctionComponent<IProps> = ({
	actions,
	ariaLabels = {
		cardCheckbox: 'Card Checkbox',
		dropDownTrigger: 'Open Dropdown',
	},
	description,
	disabled,
	href,
	labels,
	name,
	onSelectChange,
	selected = false,
	spritemap,
	userDisplayType,
	userImageSrc,
}: IProps) => {
	const content = (
		<div className="aspect-ratio-item-center-middle card-type-asset-icon">
			<ClaySticker
				className="sticker-user-icon"
				displayType={userDisplayType}
				shape="circle"
			>
				{userImageSrc && (
					<img
						alt="thumbnail"
						className="aspect-ratio-item-fluid"
						src={userImageSrc}
					/>
				)}
				{!userImageSrc && (
					<ClayIcon spritemap={spritemap} symbol="user" />
				)}
			</ClaySticker>
		</div>
	);

	return (
		<ClayCard displayType="user" selectable={!!onSelectChange}>
			<ClayCard.AspectRatio className="card-item-first">
				{onSelectChange && (
					<ClayCheckbox
						aria-label={ariaLabels.cardCheckbox}
						checked={selected}
						disabled={disabled}
						onChange={() => onSelectChange(!selected)}
					>
						{content}
					</ClayCheckbox>
				)}

				{!onSelectChange && content}
			</ClayCard.AspectRatio>

			<ClayCard.Body>
				<ClayCard.Row>
					<div className="autofit-col autofit-col-expand">
						<ClayCard.Description
							disabled={disabled}
							displayType="title"
							href={href}
						>
							{name}
						</ClayCard.Description>
						<ClayCard.Description displayType="subtitle">
							{description}
						</ClayCard.Description>
						{labels && (
							<ClayCard.Caption>
								{labels.map(({value, ...others}, i: number) => (
									<ClayLabel {...others} key={i}>
										{value}
									</ClayLabel>
								))}
							</ClayCard.Caption>
						)}
					</div>

					{actions && (
						<div className="autofit-col">
							<ClayDropDownWithItems
								items={actions}
								spritemap={spritemap}
								trigger={
									<button
										aria-label={ariaLabels.dropDownTrigger}
										className="component-action"
										disabled={disabled}
									>
										<ClayIcon
											spritemap={spritemap}
											symbol="ellipsis-v"
										/>
									</button>
								}
							/>
						</div>
					)}
				</ClayCard.Row>
			</ClayCard.Body>
		</ClayCard>
	);
};
