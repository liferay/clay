/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayLink from '@clayui/link';
import React from 'react';

import {ITitles} from './types';

type Items = React.ComponentProps<typeof ClayDropDownWithItems>['items'];

interface IProps {
	/**
	 * Flag show the creation menu button.
	 *
	 * - Setting to true will render a button.
	 * - Setting a link will render a ClayLink.
	 * - Passing the ClayDropDownWithItems API will render a DropDown.
	 */
	creationMenu?: boolean | string | Items;

	/**
	 * Flag that identifies when to disable all actions and features of the
	 * component.
	 */
	disabled?: boolean;

	/**
	 * Callback will always be called when the user clicks the
	 * creation menu button.
	 */
	onCreationMenuClick?: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Set the titles that are visible in the tooltip, use this to add
	 * support for i18n.
	 */
	titlesLang: ITitles;
}

const CreationMenu: React.FunctionComponent<IProps> = ({
	creationMenu,
	disabled,
	onCreationMenuClick,
	spritemap,
	titlesLang,
}) => {
	if (Array.isArray(creationMenu)) {
		return (
			<ClayDropDownWithItems
				items={creationMenu as Items}
				spritemap={spritemap}
				trigger={
					<ClayButton
						className="nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none"
						disabled={disabled}
						onClick={onCreationMenuClick}
					>
						<ClayIcon spritemap={spritemap} symbol="plus" />
					</ClayButton>
				}
			/>
		);
	}

	if (creationMenu && typeof creationMenu === 'string') {
		return (
			<ClayLink
				className="nav-btn nav-btn-monospaced"
				href={creationMenu}
				title={titlesLang.creationMenu}
			>
				<ClayIcon spritemap={spritemap} symbol="plus" />
			</ClayLink>
		);
	}

	if (creationMenu && typeof creationMenu === 'boolean') {
		return (
			<ClayButtonWithIcon
				className="nav-btn nav-btn-monospaced navbar-breakpoint-down-d-none"
				disabled={disabled}
				onClick={onCreationMenuClick}
				spritemap={spritemap}
				symbol="plus"
			/>
		);
	}

	return null;
};

export default CreationMenu;
