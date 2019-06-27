/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const ClayTableHead: React.FunctionComponent<
	React.TableHTMLAttributes<HTMLTableSectionElement>
> = ({children, ...otherProps}) => {
	return <thead {...otherProps}>{children}</thead>;
};

export default ClayTableHead;
