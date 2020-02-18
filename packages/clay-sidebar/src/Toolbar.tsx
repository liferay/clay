/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

interface IToolbarProps extends React.HTMLAttributes<HTMLElement> {}

const Toolbar: React.FunctionComponent<IToolbarProps> = ({
	children,
	...otherProps
}) => {
	return (
		<nav className="tbar tbar-dark-l2 tbar-stacked" {...otherProps}>
			{children}
		</nav>
	);
};

Toolbar.displayName = 'Toolbar';

export default Toolbar;
