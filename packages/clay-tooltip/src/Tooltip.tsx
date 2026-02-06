/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export const ALIGN_POSITIONS = [
	'top',
	'top-left',
	'top-right',
	'bottom',
	'bottom-left',
	'bottom-right',
	'left',
	'right',
] as const;

interface IProps extends React.HTMLAttributes<HTMLDivElement> {

	/**
	 * Position in which the tooltip will be aligned to the element.
	 */
	alignPosition?: (typeof ALIGN_POSITIONS)[number];

	/**
	 * Flag to indicate if tooltip is displayed.
	 */
	show?: boolean;
}

export const Tooltip = React.forwardRef<HTMLElement, IProps>(
	(
		{
			alignPosition = 'bottom',
			children,
			className,
			show,
			...otherProps
		}: IProps,
		ref
	) => {
		return (
			<div
				className={classNames(
					className,
					'tooltip',
					`clay-tooltip-${alignPosition}`,
					{show}
				)}
				role="tooltip"
				{...otherProps}
				ref={ref as React.RefObject<HTMLDivElement>}
			>
				<div className="arrow" />

				<div className="tooltip-inner">{children}</div>
			</div>
		);
	}
);

Tooltip.displayName = 'ClayTooltip';
