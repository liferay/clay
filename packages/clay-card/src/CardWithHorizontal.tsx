/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayCard from './Card';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import React from 'react';
import {ClayCheckbox} from '@clayui/form';
import {ClayDropDownWithItems} from '@clayui/drop-down';

interface IProps {
	actions?: React.ComponentProps<typeof ClayDropDownWithItems>['items'];
	/**
	 * Path or URL to item
	 */
	href?: string;

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

	/**
	 * Name of icon symbol
	 */
	symbol?: string;

	/**
	 * Name of the item
	 */
	title: string;
}

export const ClayCardWithHorizontal: React.FunctionComponent<IProps> = ({
	actions,
	href,
	onSelectChange,
	selected = false,
	spritemap,
	symbol = 'folder',
	title,
}: IProps) => {
	const content = (
		<ClayCard.Body>
			<div className="autofit-col">
				<ClaySticker inline>
					<ClayIcon spritemap={spritemap} symbol={symbol} />
				</ClaySticker>
			</div>

			<div className="autofit-col autofit-col-expand autofit-col-gutters">
				<ClayCard.Description displayType="title" href={href}>
					{title}
				</ClayCard.Description>
			</div>

			{actions && (
				<div className="autofit-col">
					<ClayDropDownWithItems
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
				<ClayCheckbox
					checked={selected}
					disabled={false}
					indeterminate={false}
					onChange={() => onSelectChange(!selected)}
				>
					{content}
				</ClayCheckbox>
			)}

			{!onSelectChange && content}
		</ClayCard>
	);
};
