/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import React from 'react';

import ClayButton from './Button';

interface IProps extends React.ComponentProps<typeof ClayButton> {
	/**
	 * Label to be displayed within the button, alongside the icon.
	 */
	label?: string;

	/**
	 * Position of the icon inside the button.
	 */
	iconPosition?: 'after' | 'before';

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * The id of the icon in the spritemap.
	 */
	symbol: string;
}

const ClayButtonWithIcon = React.forwardRef<HTMLButtonElement, IProps>(
	(
		{
			iconPosition = 'before',
			label,
			spritemap,
			symbol,
			...otherProps
		}: IProps,
		ref
	) => (
		<ClayButton {...otherProps} monospaced={!label} ref={ref}>
			{label ? (
				<>
					{iconPosition === 'before' && (
						<span className="inline-item inline-item-before">
							<ClayIcon spritemap={spritemap} symbol={symbol} />
						</span>
					)}

					{label}

					{iconPosition === 'after' && (
						<span className="inline-item inline-item-after">
							<ClayIcon spritemap={spritemap} symbol={symbol} />
						</span>
					)}
				</>
			) : (
				<ClayIcon spritemap={spritemap} symbol={symbol} />
			)}
		</ClayButton>
	)
);

export default ClayButtonWithIcon;
