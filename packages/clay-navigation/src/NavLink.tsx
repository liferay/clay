/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import ClayLink from '@clayui/link';
import React from 'react';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	/**
	 * Flag to indicate if `active` class should be applied.
	 */
	active?: boolean;

	/**
	 * Flag to indicate if `collapsed` class should be applied.
	 */
	collapsed?: boolean;

	/**
	 * Flag to indicate if icon should be shown.
	 */
	showIcon?: boolean;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

export const NavLink: React.FunctionComponent<IProps> = ({
	active,
	children,
	className,
	collapsed,
	showIcon,
	spritemap,
	...otherProps
}) => {
	return (
		<ClayLink
			{...otherProps}
			className={classNames('nav-link', className, {
				active,
				['collapse-icon']: showIcon,
				collapsed,
			})}
		>
			{children}

			{showIcon && (
				<>
					<span className="collapse-icon-closed">
						<ClayIcon
							focusable="false"
							role="presentation"
							spritemap={spritemap}
							symbol="caret-right"
						/>
					</span>

					<span className="collapse-icon-open">
						<ClayIcon
							focusable="false"
							role="presentation"
							spritemap={spritemap}
							symbol="caret-bottom"
						/>
					</span>
				</>
			)}
		</ClayLink>
	);
};
