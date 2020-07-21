/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import {Keys} from '@clayui/shared';
import ClaySticker from '@clayui/sticker';
import React from 'react';

import ClayCard from './Card';

interface IProps {
	children?: React.ReactNode;

	/**
	 * Value displayed that describes the card
	 */
	description?: React.ReactText;

	/**
	 * Path or url for click through
	 */
	href?: string;

	/**
	 * Flag to indicate if card should be the `horizontal` variant
	 */
	horizontal?: boolean;

	/**
	 * Icon to display when card is `horizontal`
	 */
	horizontalSymbol?: string;

	/**
	 * Callback for when card is clicked on
	 */
	onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;

	/**
	 * Callback for when a keyboard key pressed on a card
	 */
	onKeyDown?: (event: React.KeyboardEvent) => void;

	/**
	 * Path to spritemap for icon symbol.
	 */
	spritemap?: string;

	/**
	 * Value displayed for the card's title
	 */
	title?: React.ReactText;
}

const noop = () => {};

export const ClayCardWithNavigation: React.FunctionComponent<IProps> = ({
	children,
	description,
	horizontal = false,
	horizontalSymbol = '',
	href,
	onClick,
	onKeyDown = noop,
	spritemap,
	title,
}: IProps) => {
	return (
		<ClayCard
			horizontal={horizontal}
			href={href}
			interactive
			onClick={onClick}
			onKeyDown={(event: React.KeyboardEvent) => {
				if (
					(event && event.key === Keys.Enter) ||
					(event && event.key === Keys.Spacebar)
				) {
					event.preventDefault();

					if (onClick) {
						onClick(event);
					}
				}

				onKeyDown(event);
			}}
			tabIndex={0}
		>
			{!horizontal && (
				<ClayCard.AspectRatio>
					<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
						{children}
					</span>
				</ClayCard.AspectRatio>
			)}

			{(horizontal || title || description) && (
				<ClayCard.Body>
					{!horizontal && (
						<>
							{title && (
								<ClayCard.Description
									displayType="title"
									truncate
								>
									{title}
								</ClayCard.Description>
							)}

							{description && (
								<ClayCard.Description
									displayType="text"
									truncate
								>
									{description}
								</ClayCard.Description>
							)}
						</>
					)}

					{horizontal && (
						<ClayCard.Row>
							<ClayLayout.ContentCol>
								<ClaySticker inline>
									<ClayIcon
										spritemap={spritemap}
										symbol={horizontalSymbol}
									/>
								</ClaySticker>
							</ClayLayout.ContentCol>
							{title && (
								<ClayLayout.ContentCol expand>
									<ClayLayout.ContentSection>
										<ClayCard.Description
											displayType="title"
											truncate
										>
											{title}
										</ClayCard.Description>
									</ClayLayout.ContentSection>
								</ClayLayout.ContentCol>
							)}
						</ClayCard.Row>
					)}
				</ClayCard.Body>
			)}
		</ClayCard>
	);
};
