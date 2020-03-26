/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import classNames from 'classnames';
import React from 'react';

import ClayCard from './Card';

interface IProps {
	/**
	 * List of actions in the dropdown menu
	 */
	actions?: React.ComponentProps<typeof ClayDropDownWithItems>['items'];

	/**
	 * Description of the file
	 */
	description?: React.ReactText;

	/**
	 * Flag to indicate that all interactions on the card will be disabled.
	 */
	disabled?: boolean;

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
	stickerProps?: {
		content: React.ReactNode;
		displayType: React.ComponentProps<typeof ClaySticker>['displayType'];
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
	description,
	disabled,
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
	symbol = 'documents-and-media',
	title,
}: IProps) => {
	const headerContent = (
		<ClayCard.AspectRatio className="card-item-first">
			{!imgProps && (
				<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
					<ClayIcon spritemap={spritemap} symbol={symbol} />
				</div>
			)}

			{imgProps && (
				<img
					className={classNames(
						'aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid',
						typeof imgProps !== 'string' && imgProps.className,
						{
							['aspect-ratio-item-flush']: flushHorizontal,
							['aspect-ratio-item-vertical-flush']: flushVertical,
						}
					)}
					{...(typeof imgProps === 'string'
						? {src: imgProps}
						: imgProps)}
				/>
			)}

			<ClaySticker
				displayType={
					stickerProps ? stickerProps.displayType : 'primary'
				}
				position="bottom-left"
			>
				{stickerProps ? (
					stickerProps.content
				) : (
					<ClayIcon spritemap={spritemap} symbol="document-text" />
				)}
			</ClaySticker>
		</ClayCard.AspectRatio>
	);

	return (
		<ClayCard
			displayType={imgProps ? 'image' : 'file'}
			selectable={!!onSelectChange}
		>
			{onSelectChange && (
				<ClayCheckbox
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
					<div className="autofit-col autofit-col-expand">
						<ClayCard.Description
							disabled={disabled}
							displayType="title"
							href={href}
						>
							{title}
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
										{...dropDownTriggerProps}
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
