/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCard from '../../src/index';

import React from 'react';

const CardInteractive = (props: any) => (
	<ClayCard displayType="interactive">
		<ClayCard.Header>
			<img alt="portlet image" src={props.image} />
		</ClayCard.Header>
		<ClayCard.Body>
			<ClayCard.Description type="title">
				{'Widget Page'}
			</ClayCard.Description>
			<ClayCard.Description type="text">
				{'Build a page by adding widgets and content.'}
			</ClayCard.Description>
		</ClayCard.Body>
	</ClayCard>
);

export default CardInteractive;
