/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCard from '../../src/index';
import ClayCheckboxWithState from '../Checkbox';

import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';

import React from 'react';

const CardFolderSelectable = (props: any) => (
	<ClayCard displayType="directory" selectable>
		<ClayCheckboxWithState>
			<ClayCard.Body>
				<div className="autofit-col">
					<ClaySticker displayType="secondary" inline>
						<ClayIcon spritemap={props.spritemap} symbol="folder" />
					</ClaySticker>
				</div>
				<div className="autofit-col autofit-col-expand autofit-col-gutters">
					<ClayCard.Description type="title">
						{'Very Large Folder'}
					</ClayCard.Description>
				</div>
			</ClayCard.Body>
		</ClayCheckboxWithState>
	</ClayCard>
);

export default CardFolderSelectable;
