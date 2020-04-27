/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import classNames from 'classnames';
import React from 'react';

const ClayDropDownAction: React.FunctionComponent<React.HTMLAttributes<
	HTMLButtonElement
>> = ({children, className, ...otherProps}) => {
	return (
		<div className={classNames('dropdown-section', className)}>
			<ClayButton block {...otherProps}>
				{children}
			</ClayButton>
		</div>
	);
};

export default ClayDropDownAction;
