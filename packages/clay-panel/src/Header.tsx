/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const ClayPanelHeader: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children, className, ...otherProps}) => {
	return (
		<div {...otherProps} className={classNames('panel-header', className)}>
			{children}
		</div>
	);
};

export default ClayPanelHeader;
