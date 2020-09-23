/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLayout from '@clayui/layout';
import React from 'react';

import ResultsBarItem from './ResultsBarItem';

const ClayResultsBar: React.FunctionComponent<
	React.HTMLAttributes<HTMLElement>
> & {
	Item: typeof ResultsBarItem;
} = ({children, ...otherProps}) => (
	<nav
		{...otherProps}
		className="subnav-tbar subnav-tbar-primary tbar tbar-inline-xs-down"
	>
		<ClayLayout.ContainerFluid>
			<ul className="tbar-nav tbar-nav-wrap">{children}</ul>
		</ClayLayout.ContainerFluid>
	</nav>
);

ClayResultsBar.Item = ResultsBarItem;

export default ClayResultsBar;
