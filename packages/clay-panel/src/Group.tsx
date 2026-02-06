/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * Flag to signify that `panel-group-fluid` class should be added.
	 * This class generally should be used inside card or sheet
	 */
	fluid?: boolean;

	/**
	 * Flag to signify that `panel-group-fluid-first` class should be added.
	 * This class generally should be used inside card or sheet
	 */
	fluidFirst?: boolean;

	/**
	 * Flag to signify that `panel-group-fluid-last` class should be added.
	 * This class generally should be used inside card or sheet
	 */
	fluidLast?: boolean;

	/**
	 * Flag to signify that `panel-group-flush` class should be added.
	 * This class generally should be used inside card, sheet, or a type of padded container.
	 */
	flush?: boolean;

	/**
	 * Flag to enable the small variation for panels within a group of panels.
	 */
	small?: boolean;
}

export function Group({
	children,
	className,
	fluid,
	fluidFirst,
	fluidLast,
	flush,
	small,
	...otherProps
}: IProps) {
	return (
		<div
			{...otherProps}
			className={classNames('panel-group', className, {
				'panel-group-fluid': fluid,
				'panel-group-fluid-first': fluidFirst,
				'panel-group-fluid-last': fluidLast,
				'panel-group-flush': flush,
				'panel-group-sm': small,
			})}
		>
			{children}
		</div>
	);
}
