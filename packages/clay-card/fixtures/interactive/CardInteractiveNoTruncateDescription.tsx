/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayCard from '../../src/index';

import React from 'react';

const CardInteractiveNoTruncateDescription = (props: any) => (
	<ClayCard displayType="interactive">
		<ClayCard.Header>
			<img alt="content image" src={props.image} />
		</ClayCard.Header>
		<ClayCard.Body>
			<ClayCard.Description type="title">
				Content Page
			</ClayCard.Description>
			<ClayCard.Description truncate={false} type="text">
				This is an example of card-type-template using an anchor tag.
			</ClayCard.Description>
		</ClayCard.Body>
	</ClayCard>
);

export default CardInteractiveNoTruncateDescription;
