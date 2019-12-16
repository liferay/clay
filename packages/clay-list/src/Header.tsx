/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import * as React from 'react';

const ClayListHeader: React.FunctionComponent<
	React.HTMLAttributes<HTMLLIElement>
> = ({children, className, ...otherProps}) => {
	return (
		<li
			{...otherProps}
			className={classNames('list-group-header', className)}
		>
			<p className="list-group-header-title">{children}</p>
		</li>
	);
};

export default ClayListHeader;
