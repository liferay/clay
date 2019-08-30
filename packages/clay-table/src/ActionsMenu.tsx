/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import React from 'react';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {LinkOrButton} from '@clayui/shared';

interface IActionItem {
	href?: string;
	onClick?: (event: React.SyntheticEvent) => void;
	symbol: string;
}

interface IActionItemsProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * List of actions to include in actions items.
	 */
	actionItems: Array<IActionItem>;

	/**
	 * List of actions to include in dropdown.
	 */
	dropdownActions?: React.ComponentProps<
		typeof ClayDropDownWithItems
	>['items'];

	spritemap?: string;
}

const ClayTableActionsMenu: React.FunctionComponent<IActionItemsProps> = ({
	actionItems,
	dropdownActions,
	spritemap,
	...otherProps
}: IActionItemsProps) => (
	<>
		<div className="quick-action-menu" {...otherProps}>
			{actionItems.map(({href, onClick, symbol}, index) => (
				<LinkOrButton
					buttonDisplayType="unstyled"
					className="component-action quick-action-item"
					href={href}
					key={index}
					onClick={onClick}
				>
					<ClayIcon spritemap={spritemap} symbol={symbol} />
				</LinkOrButton>
			))}
		</div>
		{dropdownActions && (
			<ClayDropDownWithItems
				items={dropdownActions}
				spritemap={spritemap}
				trigger={
					<ClayButton className="component-action" monospaced>
						<ClayIcon spritemap={spritemap} symbol="ellipsis-v" />
					</ClayButton>
				}
			/>
		)}
	</>
);

export default ClayTableActionsMenu;
