/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';
import {QuickActionMenuItem} from './QuickActionMenuItem';

const QuickActionMenu: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> & {
	Item: typeof QuickActionMenuItem;
} = ({children, className, ...otherProps}) => {
	return (
		<div
			{...otherProps}
			className={classNames('quick-action-menu', className)}
		>
			{children}
		</div>
	);
};

QuickActionMenu.Item = QuickActionMenuItem;

export default QuickActionMenu;
