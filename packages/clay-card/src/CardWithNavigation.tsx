/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCard from './Card';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import React from 'react';

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
	onClick?: () => void;

	/**
	 * Path to spritemap for icon symbol.
	 */
	spritemap?: string;

	/**
	 * Value displayed for the card's title
	 */
	title: React.ReactText;
}

export const ClayCardWithNavigation: React.FunctionComponent<IProps> = ({
	children,
	description,
	horizontal = false,
	horizontalSymbol = '',
	href,
	onClick,
	spritemap,
	title,
}: IProps) => {
	return (
		<ClayCard
			horizontal={horizontal}
			href={href}
			interactive
			onClick={onClick}
			tabIndex={0}
		>
			{!horizontal && (
				<ClayCard.AspectRatio>
					<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
						{children}
					</span>
				</ClayCard.AspectRatio>
			)}

			<ClayCard.Body>
				{!horizontal && (
					<>
						<ClayCard.Description displayType="title" truncate>
							{title}
						</ClayCard.Description>
						<ClayCard.Description displayType="text" truncate>
							{description}
						</ClayCard.Description>
					</>
				)}

				{horizontal && (
					<>
						<span className="autofit-col">
							<ClaySticker inline>
								<ClayIcon
									spritemap={spritemap}
									symbol={horizontalSymbol}
								/>
							</ClaySticker>
						</span>
						<span className="autofit-col autofit-col-expand">
							<span className="autofit-section">
								<ClayCard.Description
									displayType="title"
									truncate
								>
									{title}
								</ClayCard.Description>
							</span>
						</span>
					</>
				)}
			</ClayCard.Body>
		</ClayCard>
	);
};
