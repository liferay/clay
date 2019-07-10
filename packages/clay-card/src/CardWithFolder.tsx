/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCard from './Card';
import ClayForm from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import React from 'react';

interface IProps {
	actions?: [];
	onSelectChange?: (val: boolean) => void;
	spritemap: string;
	selected?: boolean;
	title: string;
}

export const ClayCardWithFolder: React.FunctionComponent<IProps> = ({
	onSelectChange,
	selected = false,
	spritemap,
	title,
}) => {
	const content = (
		<ClayCard.Body>
			<div className="autofit-col">
				<ClaySticker inline>
					<ClayIcon spritemap={spritemap} symbol="folder" />
				</ClaySticker>
			</div>

			<div className="autofit-col autofit-col-expand autofit-col-gutters">
				<ClayCard.Description displayType="title" truncate>
					{title}
				</ClayCard.Description>
			</div>
		</ClayCard.Body>
	);

	return (
		<ClayCard horizontal selectable={!!onSelectChange}>
			{onSelectChange && (
				<ClayForm.Checkbox
					checked={selected}
					disabled={false}
					indeterminate={false}
					onChange={() => onSelectChange(!selected)}
				>
					{content}
				</ClayForm.Checkbox>
			)}

			{!onSelectChange && <ClayCard horizontal>{content}</ClayCard>}
		</ClayCard>
	);
};
