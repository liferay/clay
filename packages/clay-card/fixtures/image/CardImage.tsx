/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCard from '../../src/index';

import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';

import React from 'react';

const CardImage = (props: any) => (
	<ClayCard displayType="image">
		<ClayCard.AspectRatio className="card-item-first">
			<img
				alt="thumbnail"
				className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
				src="https://via.placeholder.com/256"
			/>
			<ClaySticker
				displayType="danger"
				position="bottom-left"
				shape="rounded"
			>
				<ClayIcon spritemap={props.spritemap} symbol="document-image" />
			</ClaySticker>
		</ClayCard.AspectRatio>

		<ClayCard.Body>
			<div className="autofit-col autofit-col-expand">
				<ClayCard.Description type="title">
					{'thumbnail_coffee.jpg'}
				</ClayCard.Description>
				<ClayCard.Description type="subtitle">
					{'Author Action'}
				</ClayCard.Description>
				<ClayCard.Detail>
					<ClayLabel displayType="success">{'Approved'}</ClayLabel>
				</ClayCard.Detail>
			</div>
		</ClayCard.Body>
	</ClayCard>
);

export default CardImage;
