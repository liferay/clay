/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React from 'react';

const ClayDropDownItemList: React.FunctionComponent<React.HTMLAttributes<
	HTMLUListElement
>> = ({children, className, ...otherProps}) => {
	return (
		<ul {...otherProps} className={classnames('list-unstyled', className)}>
			{children}
		</ul>
	);
};

export default ClayDropDownItemList;
