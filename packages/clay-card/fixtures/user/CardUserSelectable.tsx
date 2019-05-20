/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCard from '../../src/index';
import ClayCheckboxWithState from '../Checkbox';

import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';

import React from 'react';

const CardUserSelectable = (props: any) => (
	<ClayCard displayType="user" selectable>
		<ClayCard.Header>
			<ClayCheckboxWithState>
				<ClayCard.AspectRatio>
					<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
						<ClaySticker
							className="sticker-user-icon"
							displayType="secondary"
							shape="circle"
						>
							<ClayIcon
								spritemap={props.spritemap}
								symbol="user"
							/>
						</ClaySticker>
					</div>
				</ClayCard.AspectRatio>
			</ClayCheckboxWithState>
		</ClayCard.Header>

		<ClayCard.Body>
			<div className="autofit-col autofit-col-expand">
				<ClayCard.Description type="title">
					{'Adélaide'}
				</ClayCard.Description>
				<ClayCard.Description type="subtitle">
					{'Author Action'}
				</ClayCard.Description>
				<ClayCard.Detail>
					<ClayLabel displayType="warning">{'Rejected'}</ClayLabel>
				</ClayCard.Detail>
			</div>
		</ClayCard.Body>
	</ClayCard>
);

export default CardUserSelectable;
