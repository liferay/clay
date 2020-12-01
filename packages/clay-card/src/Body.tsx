/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import Context from './Context';

const ClayCardBody: React.FunctionComponent<React.HTMLAttributes<
	HTMLDivElement
>> = ({children, className, ...otherProps}) => {
	const {interactive} = React.useContext(Context);

	const TagName = interactive ? 'span' : 'div';

	return (
		<TagName className={classNames('card-body', className)} {...otherProps}>
			{children}
		</TagName>
	);
};

export default ClayCardBody;
