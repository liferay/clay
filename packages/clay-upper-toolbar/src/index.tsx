/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ClayUpperToolbar: React.FunctionComponent<Props> = ({
	className,
	...otherProps
}) => {
	return (
		<div {...otherProps} className={classNames(className)}>{'ClayUpperToolbar'}</div>
	);
};

export default ClayUpperToolbar;
