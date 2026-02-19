/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

import {useSidePanel} from './context';

export function Title({
	children,
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const {titleId} = useSidePanel();

	return (
		<span className={classNames('component-title', className)} id={titleId}>
			{children}
		</span>
	);
}
