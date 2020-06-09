/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const Section: React.FunctionComponent<React.HTMLAttributes<
	HTMLDivElement
>> = ({children, className, ...otherProps}) => (
	<div className={classNames(className, 'tbar-section')} {...otherProps}>
		{children}
	</div>
);

Section.displayName = 'ClayToolbarSection';

export default Section;
