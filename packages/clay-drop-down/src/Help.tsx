/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React from 'react';

const ClayDropDownHelp: React.FunctionComponent<React.HTMLAttributes<
	HTMLDivElement
>> = ({children, className, ...otherProps}) => {
	return (
		<div
			{...otherProps}
			className={classnames('alert alert-fluid alert-info', className)}
			role="alert"
		>
			{children}
		</div>
	);
};

export default ClayDropDownHelp;
