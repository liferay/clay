/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import Icon from '@clayui/icon';

type DisplayType = `secondary` | `info` | `warning` | `danger` | `success`;

interface Props
	extends React.BaseHTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
	/**
	 * HTML properties that are applied to the 'x' button.
	 */
	closeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;

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
}

const ClayLabel: React.FunctionComponent<Props> = ({
	children,
	className,
	closeButtonProps,
	displayType = `secondary`,
	href,
	large = false,
	spritemap,
	...otherProps
}) => {
	const TagName = href ? `a` : `span`;

	return (
		<span
			{...otherProps}
			className={classNames(`label`, className, {
				'label-dismissible': closeButtonProps,
				'label-lg': large,
				[`label-${displayType}`]: displayType,
			})}
		>
			<TagName className="label-item label-item-expand" href={href}>
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
};

export default ClayLabel;
