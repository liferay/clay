/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import * as React from 'react';

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
	alignPosition?: typeof ALIGN_POSITIONS[number];

	/**
	 * Flag to indicate if container should not be scrollable
	 */
	disableScroll?: boolean;

	/**
	 * Flag to indicate if tooltip is displayed.
	 */
	show?: boolean;

	/**
	 * Content to display in the header of the popover.
	 */
	header?: React.ReactNode;
}

const ClayPopover = React.forwardRef<HTMLDivElement, IProps>(
	(
		{
			alignPosition = 'bottom',
			children,
			className,
			disableScroll = false,
			header,
			show,
			...otherProps
		}: IProps,
		ref
	) => {
		return (
			<div
				className={classNames(
					className,
					'popover',
					`clay-popover-${alignPosition}`,
					{show}
				)}
				{...otherProps}
				ref={ref as React.RefObject<HTMLDivElement>}
			>
				<div className="arrow" />

				<div
					className={classNames({'inline-scroller': !disableScroll})}
				>
					{header && <div className="popover-header">{header}</div>}

					<div className="popover-body">{children}</div>
				</div>
			</div>
		);
	}
);

export default ClayPopover;
