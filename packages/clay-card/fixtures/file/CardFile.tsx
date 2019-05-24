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

const CardFile = (props: any) => (
	<ClayCard displayType="file">
		<ClayCard.AspectRatio className="card-item-first">
			<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
				<ClayIcon
					spritemap={props.spritemap}
					symbol="documents-and-media"
				/>
			</div>
			<ClaySticker displayType="danger" position="bottom-left">
				{'DOC'}
			</ClaySticker>
		</ClayCard.AspectRatio>
		<ClayCard.Body>
			<div className="autofit-col autofit-col-expand">
				<section className="autofit-section">
					<ClayCard.Description type="title">
						{'deliverable.doc'}
					</ClayCard.Description>
					<ClayCard.Description type="subtitle">
						{'Stevie Ray Vaughn'}
					</ClayCard.Description>
					<ClayCard.Detail>
						<ClayLabel displayType="success">
							{'Approved'}
						</ClayLabel>
					</ClayCard.Detail>
				</section>
			</div>
		</ClayCard.Body>
	</ClayCard>
);

export default CardFile;
