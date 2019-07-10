/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCard from './Card';
import ClaySticker from '@clayui/sticker';
import React from 'react';

interface IProps {
	actions?: [];
	description?: string;
	horizontal?: boolean;
	href?: string;
	image?: string | React.ReactElement;
	onClick?: () => void;
	title?: string;
}

export const ClayCardWithNavigation: React.FunctionComponent<IProps> = ({
	description,
	horizontal = false,
	href,
	image,
	onClick,
	title,
}) => {
	return (
		<ClayCard
			horizontal={horizontal}
			href={href}
			interactive
			onClick={onClick}
		>
			{!horizontal && (
				<ClayCard.AspectRatio>
					<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
						{typeof image === 'string' && <img src={image} />}

						{typeof image !== 'string' && image}
					</span>
				</ClayCard.AspectRatio>
			)}

			<ClayCard.Body>
				{horizontal && (
					<>
						<span className="autofit-col">
							<ClaySticker inline>{image}</ClaySticker>
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

				{!horizontal && (
					<>
						<ClayCard.Description displayType="title">
							{title}
						</ClayCard.Description>
						<ClayCard.Description displayType="text">
							{description}
						</ClayCard.Description>
					</>
				)}
			</ClayCard.Body>
		</ClayCard>
	);
};
