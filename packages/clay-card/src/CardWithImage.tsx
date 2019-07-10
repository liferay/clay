/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCard from './Card';
import ClayForm from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel, {DisplayType as LabelDisplayType} from '@clayui/label';
import ClaySticker from '@clayui/sticker';
import React from 'react';

interface IProps {
	actions?: [];
	description: string;
	imageSrc: string;
	label: {
		displayType: LabelDisplayType;
		value: string;
	};
	onSelectChange?: (val: boolean) => void;
	spritemap: string;
	selected?: boolean;
	title: string;
}

export const ClayCardWithImage: React.FunctionComponent<IProps> = ({
	description,
	imageSrc,
	label,
	onSelectChange,
	selected = false,
	spritemap,
	title,
}) => {
	return (
		<ClayCard displayType="image" selectable={!!onSelectChange}>
			<ClayCard.AspectRatio className="card-item-first">
				{onSelectChange && (
					<ClayForm.Checkbox
						checked={selected}
						disabled={false}
						indeterminate={false}
						onChange={() => onSelectChange(!selected)}
					/>
				)}

				<img
					alt="thumbnail"
					className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid"
					src={imageSrc}
				/>

				<ClaySticker
					displayType="danger"
					position="bottom-left"
					shape="rounded"
				>
					<ClayIcon spritemap={spritemap} symbol="document-image" />
				</ClaySticker>
			</ClayCard.AspectRatio>

			<ClayCard.Body>
				<div className="autofit-col autofit-col-expand">
					<ClayCard.Description displayType="title">
						{title}
					</ClayCard.Description>
					<ClayCard.Description displayType="subtitle">
						{description}
					</ClayCard.Description>
					<ClayCard.Caption>
						<ClayLabel displayType={label.displayType}>
							{label.value}
						</ClayLabel>
					</ClayCard.Caption>
				</div>
			</ClayCard.Body>
		</ClayCard>
	);
};
