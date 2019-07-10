/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCard from './Card';
import ClayForm from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel, {DisplayType as LabelDisplayType} from '@clayui/label';
import ClaySticker, {DisplayType as StickerDisplayType} from '@clayui/sticker';
import React from 'react';

interface IProps {
	actions?: [];
	description: string;
	label: {
		displayType: LabelDisplayType;
		value: string;
	};
	onSelectChange?: (val: boolean) => void;
	spritemap: string;
	selected?: boolean;
	userDisplayType?: StickerDisplayType;
	name: string;
}

export const ClayCardWithUser: React.FunctionComponent<IProps> = ({
	description,
	label,
	name,
	onSelectChange,
	selected = false,
	spritemap,
	userDisplayType = 'primary',
}) => {
	return (
		<ClayCard displayType="user" selectable={!!onSelectChange}>
			<ClayCard.AspectRatio className="card-item-first">
				{onSelectChange && (
					<ClayForm.Checkbox
						checked={selected}
						disabled={false}
						indeterminate={false}
						onChange={() => onSelectChange(!selected)}
					/>
				)}

				<div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
					<ClaySticker
						className="sticker-user-icon"
						displayType={userDisplayType}
						shape="circle"
					>
						<ClayIcon spritemap={spritemap} symbol="user" />
					</ClaySticker>
				</div>
			</ClayCard.AspectRatio>

			<ClayCard.Body>
				<div className="autofit-col autofit-col-expand">
					<ClayCard.Description displayType="title">
						{name}
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
