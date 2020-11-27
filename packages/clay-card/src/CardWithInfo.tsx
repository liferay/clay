/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClayLayout from '@clayui/layout';
import ClaySticker, {IClayStickerProps} from '@clayui/sticker';
import classNames from 'classnames';
import React from 'react';

import ClayCard from './Card';

type CardWithInfoDisplayType = 'file' | 'image';

interface IProps extends React.BaseHTMLAttributes<HTMLDivElement> {
	/**
	 * List of actions in the dropdown menu
	 */
	actions?: React.ComponentProps<typeof ClayDropDownWithItems>['items'];

	/**
	 * Props to add to the checkbox element
	 */
	checkboxProps?: React.HTMLAttributes<HTMLInputElement>;

	/**
	 * Description of the file
	 */
	description?: React.ReactText;

	/**
	 * Flag to indicate that all interactions on the card will be disabled.
	 */
	disabled?: boolean;

	/**
	 * Determines the style of the card
	 */
	displayType?: CardWithInfoDisplayType;

	/**
	 * Props to add to the dropdown trigger element
	 */
	dropDownTriggerProps?: React.HTMLAttributes<HTMLButtonElement>;

	/**
	 * Flag to indicate if `aspect-ratio-item-flush` class should be
	 * applied to the image.
	 */
	flushHorizontal?: boolean;

	/**
	 * Flag to indicate if `aspect-ratio-item-vertical-flush` class should be
	 * applied to the image.
	 */
	flushVertical?: boolean;

	/**
	 * Path or URL to file
	 */
	href?: string;

	/**
	 * Object of props for `<img />` or string path to image
	 */
	imgProps?: React.ImgHTMLAttributes<HTMLImageElement> | string;

	/**
	 * List of labels that are applied to the file
	 */
	labels?: Array<
		React.ComponentProps<typeof ClayLabel> & {value: React.ReactText}
	>;

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
	spritemap: string;

	/**
	 * Values used in displaying bottom-left icon
	 */
	stickerProps?: IClayStickerProps & {
		content?: React.ReactNode;
	};

	/**
	 * Name of icon
	 */
	symbol?: string;

	/**
	 * Name of the file
	 */
	title: string;
}

export const ClayCardWithInfo: React.FunctionComponent<IProps> = ({
	actions,
	checkboxProps = {},
	description,
	disabled,
	displayType,
	dropDownTriggerProps = {},
	flushHorizontal,
	flushVertical,
	href,
	imgProps,
	labels,
	onSelectChange,
	selected = false,
	spritemap,
	stickerProps,
	symbol,
	title,
	...otherProps
}: IProps) => {
	const isCardType = {
		file: displayType === 'file' && !imgProps,
		image: displayType === 'image' || imgProps,
	};

	const headerContent = (
		<ClayCard.AspectRatio className="card-item-first">
			{!imgProps && (
				<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
					<ClayIcon
						spritemap={spritemap}
						symbol={
							symbol
								? symbol
								: isCardType.image
								? 'camera'
								: 'documents-and-media'
						}
					/>
				</div>
			)}

			{imgProps && (
				<img
					className={classNames(
						'aspect-ratio-item aspect-ratio-item-center-middle',
						typeof imgProps !== 'string' && imgProps.className,
						{
							['aspect-ratio-item-fluid']:
								!flushHorizontal && !flushVertical,
							['aspect-ratio-item-flush']: flushHorizontal,
							['aspect-ratio-item-vertical-flush']: flushVertical,
						}
					)}
					{...(typeof imgProps === 'string'
						? {src: imgProps}
						: imgProps)}
				/>
			)}

			{stickerProps && (
				<ClaySticker
					displayType={
						stickerProps && stickerProps.displayType
							? stickerProps.displayType
							: 'primary'
					}
					position="bottom-left"
					{...stickerProps}
				>
					{stickerProps ? (
						stickerProps.children ? (
							stickerProps.children
						) : (
							stickerProps.content
						)
					) : (
						<ClayIcon
							spritemap={spritemap}
							symbol={
								isCardType.image
									? 'document-image'
									: 'document-default'
							}
						/>
					)}
				</ClaySticker>
			)}
		</ClayCard.AspectRatio>
	);

	return (
		<ClayCard
			{...otherProps}
			displayType={isCardType.image ? 'image' : 'file'}
			selectable={!!onSelectChange}
		>
			{onSelectChange && (
				<ClayCheckbox
					{...checkboxProps}
					checked={selected}
					disabled={disabled}
					onChange={() => onSelectChange(!selected)}
				>
					{headerContent}
				</ClayCheckbox>
			)}

			{!onSelectChange && headerContent}

			<ClayCard.Body>
				<ClayCard.Row>
					<ClayLayout.ContentCol expand>
						<ClayCard.Description
							disabled={disabled}
							displayType="title"
							href={href}
						>
							{title}
						</ClayCard.Description>

						{description && (
							<ClayCard.Description displayType="subtitle">
								{description}
							</ClayCard.Description>
						)}

						{labels && (
							<ClayCard.Caption>
								{labels.map(({value, ...others}, i: number) => (
									<ClayLabel {...others} key={i}>
										{value}
									</ClayLabel>
								))}
							</ClayCard.Caption>
						)}
					</ClayLayout.ContentCol>

					{actions && (
						<ClayLayout.ContentCol>
							<ClayDropDownWithItems
								items={actions}
								spritemap={spritemap}
								trigger={
									<ClayButtonWithIcon
										{...dropDownTriggerProps}
										className="component-action"
										disabled={disabled}
										displayType="unstyled"
										spritemap={spritemap}
										symbol="ellipsis-v"
									/>
								}
							/>
						</ClayLayout.ContentCol>
					)}
				</ClayCard.Row>
			</ClayCard.Body>
		</ClayCard>
	);
};
