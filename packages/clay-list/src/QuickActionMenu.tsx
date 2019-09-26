/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import QuickActionMenuItem from './QuickActionMenuItem';

const ClayListQuickActionMenu: React.FunctionComponent<
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

ClayListQuickActionMenu.Item = QuickActionMenuItem;

export default ClayListQuickActionMenu;
