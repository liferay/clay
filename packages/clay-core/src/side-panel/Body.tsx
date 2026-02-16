/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classnames from 'classnames';
import React from 'react';

type Props = {

	/**
	 * Children content to render a content.
	 */
	children: React.ReactNode;

	/**
	 * Additional class name to be added to the root element.
	 */
	className?: string;
};

export function Body({children, className}: Props) {
	return (
		<div className={classnames('sidebar-body', className)}>{children}</div>
	);
}
