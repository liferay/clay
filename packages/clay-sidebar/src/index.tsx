/* eslint-disable no-console */
/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import Divider from './Divider';
import Panel from './Panel';
import Search from './Search';
import Toolbar from './Toolbar';
import ToolbarItem from './ToolbarItem';

type TDirection = 'left' | 'right';

type TDisplayType = 'dark' | 'light';

type TOpeningMode = 'overlay' | 'hover';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	direction?: TDirection;
	displayType?: TDisplayType;
	openingMode?: TOpeningMode;
}

const ClaySidebar: React.FunctionComponent<IProps> = ({
	children,
	direction = 'left',
	displayType = 'light',
	openingMode = 'overlay',
	...otherProps
}) => {
	console.log({direction, displayType, openingMode});

	return (
		<div className="sidenav-fixed sidenav-fixed-end" {...otherProps}>
			<ul className="tbar-nav">{children}</ul>
		</div>
	);
};

export default Object.assign(ClaySidebar, {
	Divider,
	Panel,
	Search,
	Toolbar,
	ToolbarItem,
});
