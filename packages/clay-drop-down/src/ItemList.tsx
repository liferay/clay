/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classnames from 'classnames';

const DropDownItemList: React.FunctionComponent<
	React.HTMLAttributes<HTMLUListElement>
> = ({children, className, ...otherProps}) => {
	return (
		<ul {...otherProps} className={classnames('list-unstyled', className)}>
			{children}
		</ul>
	);
};

export default DropDownItemList;
