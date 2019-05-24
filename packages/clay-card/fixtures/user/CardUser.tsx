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

const CardUser = (props: any) => (
	<ClayCard displayType="user">
		<ClayCard.AspectRatio className="card-item-first">
			<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
				<ClaySticker
					className="sticker-user-icon"
					displayType="secondary"
					shape="circle"
				>
					<ClayIcon spritemap={props.spritemap} symbol="user" />
				</ClaySticker>
			</div>
		</ClayCard.AspectRatio>

		<ClayCard.Body>
			<div className="autofit-col autofit-col-expand">
				<ClayCard.Description type="title">
					{'Adélaide'}
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

export default CardUser;
