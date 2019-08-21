/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLLIElement> {
	expand?: boolean;
}

const ResultsBarItem: React.FunctionComponent<IProps> = ({
	children,
	className,
	expand = false,
	...otherProps
}) => (
	<li
		{...otherProps}
		className={classNames('tbar-item', className, {
			'tbar-item-expand': expand,
		})}
	>
		<div className="tbar-section">{children}</div>
	</li>
);

export default ResultsBarItem;
