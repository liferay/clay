/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button';
import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLElement> {
	spritemap?: string;
	undo?: boolean;
}

const Header: React.FunctionComponent<IProps> = ({
	children,
	className,
	spritemap,
	undo = false,
	...otherProps
}) => {
	return (
		<header
			{...otherProps}
			className={classNames('align-items-center d-flex', className)}
		>
			{undo && (
				<ClayButtonWithIcon
					displayType="unstyled"
					spritemap={spritemap}
					symbol="angle-left"
				/>
			)}

			<span className="px-3 py-2 small text-truncate text-uppercase">
				{children}
			</span>
		</header>
	);
};

Header.displayName = 'ClayDropDownHeader';

export default Header;
