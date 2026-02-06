/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import {useSidePanel} from './context';

export function Title({children}: React.HTMLAttributes<HTMLDivElement>) {
	const {titleId} = useSidePanel();

	return (
		<span className="component-title" id={titleId}>
			{children}
		</span>
	);
}
