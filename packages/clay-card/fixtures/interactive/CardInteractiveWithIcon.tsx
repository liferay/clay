/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCard from '../../src/index';

import ClayIcon from '@clayui/icon';

import React from 'react';

const CardInteractiveWithIcon = (props: any) => (
	<ClayCard displayType="interactive">
		<ClayCard.AspectRatio>
			<span className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-flush">
				<ClayIcon spritemap={props.spritemap} symbol="page-template" />
			</span>
		</ClayCard.AspectRatio>
		<ClayCard.Body>
			<ClayCard.Description type="title">{'Blog'}</ClayCard.Description>
		</ClayCard.Body>
	</ClayCard>
);

export default CardInteractiveWithIcon;
