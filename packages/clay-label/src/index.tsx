/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

type DisplayType =
	| 'secondary'
	| 'info'
	| 'warning'
	| 'danger'
	| 'success'
	| 'unstyled';

interface IProps
	extends React.BaseHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
	/**
	 * HTML properties that are applied to the 'x' button.
	 */
	closeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement> & {
		ref?: (instance: HTMLButtonElement | null) => void;
	};

	/**
	 * Determines the style of the label.
	 */
	displayType?: DisplayType;

	/**
	 * Flag to indicate if the label should be of the `large` variant.
	 */
	large?: boolean;

	/**
	 * Path to the location of the spritemap resource used for Icon.
	 */
	spritemap?: string;

	/**
	 * Truncates the text inside the label.
	 */
	truncate?: boolean;
}

const ClayLabel = React.forwardRef<HTMLAnchorElement | HTMLSpanElement, IProps>(
	(
		{
			children,
			className,
			closeButtonProps,
			displayType = 'secondary',
			href,
			large = false,
			spritemap,
			truncate,
			...otherProps
		}: IProps,
		ref
	) => {
		const TagName = href ? ClayLink : 'span';

		return (
			<span
				{...otherProps}
				className={classNames('label', className, {
					'label-dismissible': closeButtonProps,
					'label-lg': large,
					[`label-${displayType}`]: displayType,
					'text-truncate-inline': truncate,
				})}
				ref={ref}
			>
				<TagName
					className={classNames('label-item label-item-expand', {
						'text-truncate': truncate,
					})}
					href={href}
				>
					{children}
				</TagName>

				{closeButtonProps && (
					<span className="label-item label-item-after">
						<button
							{...closeButtonProps}
							className="close"
							type="button"
						>
							<Icon spritemap={spritemap} symbol="times" />
						</button>
					</span>
				)}
			</span>
		);
	}
);

export default ClayLabel;
