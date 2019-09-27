/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCard from '@clayui/card';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import React, {useState} from 'react';

import Editor from './Editor';

const spritemap = '/images/icons/icons.svg';

const cardCode = `const Component = () => {
	const [active, setActive] = useState(false);

	return (
		<div className="col-md-4">
			<ClayCard displayType="file">
				<ClayCard.AspectRatio className="card-item-first">
					<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
						<ClayIcon spritemap={spritemap} symbol="documents-and-media" />
					</div>
					<ClaySticker displayType="danger" position="bottom-left">
						{'DOC'}
					</ClaySticker>
				</ClayCard.AspectRatio>
				<ClayCard.Body>
					<ClayCard.Row>
						<div className="autofit-col autofit-col-expand">
							<section className="autofit-section">
								<ClayCard.Description displayType="title">{'deliverable.doc'}</ClayCard.Description>
								<ClayCard.Description displayType="subtitle">{'Stevie Ray Vaughn'}</ClayCard.Description>
								<ClayCard.Caption>
									<ClayLabel displayType="success">{'Approved'}</ClayLabel>
								</ClayCard.Caption>
							</section>
						</div>
					</ClayCard.Row>
				</ClayCard.Body>
			</ClayCard>
		</div>
	);
}

render(<Component />)`;

const Card = () => {
	const scope = {
		ClayCard,
		ClayIcon,
		ClayLabel,
		ClaySticker,
		spritemap,
		useState,
	};
	return <Editor code={cardCode} scope={scope} />;
};

export {Card};
