/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCard from '../../src/index';

import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';

import React from 'react';

const CardFolder = (props: any) => (
	<ClayCard displayType="horizontal">
		<ClayCard.Body>
			<div className="flex-col">
				<ClaySticker displayType="secondary" inline>
					<ClayIcon spritemap={props.spritemap} symbol="folder" />
				</ClaySticker>
			</div>
			<div className="autofit-col autofit-col-expand autofit-col-gutters">
				<div className="autofit-section">
					<ClayCard.Description type="title">
						{'Very Large Folder'}
					</ClayCard.Description>
				</div>
			</div>
		</ClayCard.Body>
	</ClayCard>
);

export default CardFolder;
