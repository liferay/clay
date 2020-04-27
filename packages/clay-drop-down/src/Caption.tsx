/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React from 'react';

const ClayDropDownCaption: React.FunctionComponent<React.HTMLAttributes<
	HTMLDivElement
>> = ({children, className, ...otherProps}) => {
	return (
		<div
			{...otherProps}
			className={classnames('dropdown-caption', className)}
		>
			{children}
		</div>
	);
};

export default ClayDropDownCaption;
