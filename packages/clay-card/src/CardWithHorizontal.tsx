/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import ClaySticker from '@clayui/sticker';
import React from 'react';

import ClayCard from './Card';
import {ClayCardHorizontal} from './CardHorizontal';

import type {ButtonWithIconProps} from '@clayui/button';

export interface IProps extends React.BaseHTMLAttributes<HTMLDivElement> {
	actions?: React.ComponentProps<typeof ClayDropDownWithItems>['items'];

	/**
	 * Props to add to the checkbox element
	 */
	checkboxProps?: React.HTMLAttributes<HTMLInputElement>;

	/**
	 * Flag to indicate that all interactions on the card will be disabled.
	 */
	disabled?: boolean;

	/**
	 * Props to add to the dropdown trigger element
	 */
	dropDownTriggerProps?: Omit<
		ButtonWithIconProps,
		'symbol' | 'spritemap' | 'displayType' | 'className'
	>;

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
	spritemap?: string;

	/**
	 * Name of icon symbol
	 */
	symbol?: string;

	/**
	 * Name of the item
	 */
	title: string;
}

export const ClayCardWithHorizontal = ({
	actions,
	checkboxProps = {},
	disabled,
	dropDownTriggerProps = {
		'aria-label': 'More actions',
	},
	href,
	onSelectChange,
	selected = false,
	spritemap,
	symbol = 'folder',
	title,
	...otherProps
}: IProps) => {
	const content = (
		<ClayCard.Body>
			<ClayCard.Row>
				<ClayLayout.ContentCol>
					<ClaySticker inline>
						<ClayIcon spritemap={spritemap} symbol={symbol} />
					</ClaySticker>
				</ClayLayout.ContentCol>

				<ClayLayout.ContentCol expand gutters>
					<ClayCard.Description
						disabled={disabled}
						displayType="title"
						href={href}
					>
						{title}
					</ClayCard.Description>
				</ClayLayout.ContentCol>

				{actions && (
					<ClayLayout.ContentCol>
						<ClayDropDownWithItems
							items={actions}
							spritemap={spritemap}
							trigger={
								<ClayButtonWithIcon
									{...(dropDownTriggerProps as ButtonWithIconProps)}
									className="component-action"
									disabled={disabled}
									displayType="unstyled"
									spritemap={spritemap}
									symbol="ellipsis-v"
								/>
							}
						/>
					</ClayLayout.ContentCol>
				)}
			</ClayCard.Row>
		</ClayCard.Body>
	);

	return (
		<ClayCardHorizontal
			{...otherProps}
			active={selected}
			selectable={!!onSelectChange}
		>
			{onSelectChange && (
				<ClayCheckbox
					{...checkboxProps}
					checked={selected}
					disabled={disabled}
					onChange={() => onSelectChange(!selected)}
				>
					<ClayCardHorizontal.Body>{content}</ClayCardHorizontal.Body>
				</ClayCheckbox>
			)}

			{!onSelectChange && content}
		</ClayCardHorizontal>
	);
};
