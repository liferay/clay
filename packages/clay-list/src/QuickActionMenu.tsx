/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import QuickActionMenuItem from './QuickActionMenuItem';

const QuickActionMenuComponent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => {
	return (
		<div
			{...otherProps}
			className={classNames('quick-action-menu', className)}
			ref={ref}
		>
			{children}
		</div>
	);
});

QuickActionMenuComponent.displayName = 'ClayListQuickActionMenu';

const QuickActionMenu = Object.assign(QuickActionMenuComponent, {
	Item: QuickActionMenuItem,
});

export default QuickActionMenu;
