/* eslint-disable no-console */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IToolbarItemProps
	extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
	active?: boolean;
	expand?: boolean;
}

const ToolbarItem: React.FunctionComponent<IToolbarItemProps> = ({
	active,
	children,
	expand = false,
}) => {
	return (
		<li
			className={classNames('tbar-item', {
				active,
				'tbar-item-expand': expand,
			})}
		>
			{children}
		</li>
	);
};

ToolbarItem.displayName = 'ToolbarItem';

export default ToolbarItem;
