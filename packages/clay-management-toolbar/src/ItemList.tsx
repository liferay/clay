/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	expand?: boolean;
}

const ItemList: React.FunctionComponent<IProps> = ({children, expand}) => (
	<ul
		className={classNames('navbar-nav', {
			'navbar-nav-expand': expand,
		})}
	>
		{children}
	</ul>
);

export default ItemList;
