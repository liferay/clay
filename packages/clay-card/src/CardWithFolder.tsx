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
import {ClayDropDownWithBasicItems} from '@clayui/drop-down';

interface IProps {
	actions?: React.ComponentProps<typeof ClayDropDownWithBasicItems>['items'];
	/**
	 * Path or URL to folder
	 */
	href?: string;

	/**
	 * Name of the folder
	 */
	name: string;

	/**
	 * Callback for when item is selected
	 */
	onSelectChange?: (val: boolean) => void;

	/**
	 * Flag to indicate if card is selected
	 */
	selected?: boolean;

	/**
	 * Path to clay icon spritemap
	 */
	spritemap: string;
}

export const ClayCardWithFolder: React.FunctionComponent<IProps> = ({
	actions,
	href,
	name,
	onSelectChange,
	selected = false,
	spritemap,
}) => {
	const content = (
		<ClayCard.Body>
			<div className="autofit-col">
				<ClaySticker inline>
					<ClayIcon spritemap={spritemap} symbol="folder" />
				</ClaySticker>
			</div>

			<div className="autofit-col autofit-col-expand autofit-col-gutters">
				<ClayCard.Description displayType="title" href={href}>
					{name}
				</ClayCard.Description>
			</div>

			{actions && (
				<div className="autofit-col">
					<ClayDropDownWithBasicItems
						items={actions}
						spritemap={spritemap}
						trigger={
							<button className="component-action">
								<ClayIcon
									spritemap={spritemap}
									symbol="ellipsis-v"
								/>
							</button>
						}
					/>
				</div>
			)}
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

			{!onSelectChange && content}
		</ClayCard>
	);
};
