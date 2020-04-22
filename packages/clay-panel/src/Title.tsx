/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const ClayPanelTitle: React.FunctionComponent<React.HTMLAttributes<
	HTMLDivElement
>> = ({children, className, ...otherProps}) => {
	return (
		<div {...otherProps} className={className}>
			{children}
		</div>
	);
};

export default ClayPanelTitle;
