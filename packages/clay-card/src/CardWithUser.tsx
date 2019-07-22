/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCard from './Card';
import ClayForm from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker, {DisplayType as StickerDisplayType} from '@clayui/sticker';
import React from 'react';

interface IProps {
	/**
	 * Value of the description of the user
	 */
	description: string;

	/**
	 * Path or URL to user
	 */
	href?: string;

	/**
	 * List of labels that are applied to the user
	 */
	labels: Array<
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
	description,
	href,
	labels,
	name,
	onSelectChange,
	selected = false,
	spritemap,
	userDisplayType,
	userImageSrc,
}) => {
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
					<ClayForm.Checkbox
						checked={selected}
						disabled={false}
						indeterminate={false}
						onChange={() => onSelectChange(!selected)}
					>
						{content}
					</ClayForm.Checkbox>
				)}

				{!onSelectChange && content}
			</ClayCard.AspectRatio>

			<ClayCard.Body>
				<div className="autofit-col autofit-col-expand">
					<ClayCard.Description displayType="title" href={href}>
						{name}
					</ClayCard.Description>
					<ClayCard.Description displayType="subtitle">
						{description}
					</ClayCard.Description>
					<ClayCard.Caption>
						{labels.map(({value, ...others}, i: number) => (
							<ClayLabel {...others} key={i}>
								{value}
							</ClayLabel>
						))}
					</ClayCard.Caption>
				</div>
			</ClayCard.Body>
		</ClayCard>
	);
};
