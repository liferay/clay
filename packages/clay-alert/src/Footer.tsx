/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const ClayAlertFooter: React.FunctionComponent<React.HTMLAttributes<
	HTMLDivElement
>> = ({children, className, ...otherProps}) => {
	return (
		<div className={classNames(className, 'alert-footer')} {...otherProps}>
			{children}
		</div>
	);
};

export default ClayAlertFooter;
