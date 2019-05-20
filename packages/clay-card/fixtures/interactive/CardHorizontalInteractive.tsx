/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCard from '../../src/index';

import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';

import React from 'react';

const CardHorizontalInteractive = (props: any) => (
	<ClayCard displayType="horizontal interactive">
		<ClayCard.Body>
			<span className="autofit-col">
				<ClaySticker displayType="light" inline>
					<ClayIcon spritemap={props.spritemap} symbol="page" />
				</ClaySticker>
			</span>
			<span className="autofit-col autofit-col-expand">
				<span className="autofit-section">
					<ClayCard.Description truncate type="title">
						{'Full Page Application'}
					</ClayCard.Description>
				</span>
			</span>
		</ClayCard.Body>
	</ClayCard>
);

export default CardHorizontalInteractive;
