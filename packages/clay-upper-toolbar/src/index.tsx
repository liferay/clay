/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayInput} from '@clayui/form';
import ClayLayout from '@clayui/layout';
import classNames from 'classnames';
import React from 'react';

export interface IInputProps extends React.ComponentProps<typeof ClayInput> {}
export function Input({className, ...otherProps}: IInputProps) {
	return (
		<Item expand>
			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayInput
						className={classNames(className, 'form-control-inline')}
						type="text"
						{...otherProps}
					/>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</Item>
	);
}

Input.displayName = 'ClayUpperToolbarInput';

interface IItemProps extends React.HTMLAttributes<HTMLLIElement> {

	/**
	 * Flag to indicate if Item should auto expand to fill the remaining width.
	 */
	expand?: boolean;
}
export function Item({children, className, expand, ...otherProps}: IItemProps) {
	return (
		<li
			className={classNames(className, 'tbar-item', {
				'tbar-item-expand': expand,
			})}
			{...otherProps}
		>
			<div className="tbar-section">{children}</div>
		</li>
	);
}

Item.displayName = 'ClayUpperToolbarItem';

function UpperToolbar({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={classNames(
				className,
				'component-tbar',
				'subnav-tbar-light',
				'tbar'
			)}
			{...otherProps}
		>
			<ClayLayout.ContainerFluid>
				<ul className="tbar-nav">{children}</ul>
			</ClayLayout.ContainerFluid>
		</nav>
	);
}

UpperToolbar.displayName = 'ClayUpperToolbar';

UpperToolbar.Item = Item;
UpperToolbar.Input = Input;

export default UpperToolbar;
