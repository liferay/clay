/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import ResultsBarItem from './ResultsBarItem';

const ClayResultsBar: React.FunctionComponent<
	React.HTMLAttributes<HTMLElement>
> & {
	Item: typeof ResultsBarItem;
} = ({children, ...otherProps}) => (
	<nav
		{...otherProps}
		className="tbar tbar-inline-xs-down subnav-tbar subnav-tbar-primary"
	>
		<div className="container-fluid container-fluid-max-xl">
			<ul className="tbar-nav tbar-nav-wrap">{children}</ul>
		</div>
	</nav>
);

ClayResultsBar.Item = ResultsBarItem;

export default ClayResultsBar;
