/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {Breadcrumb} from './Breadcrumb';

const ClayNavigation: React.FunctionComponent<any> & {
	Breadcrumb: typeof Breadcrumb;
} = ({children}) => {
	return children;
};

ClayNavigation.Breadcrumb = Breadcrumb;

export default ClayNavigation;
