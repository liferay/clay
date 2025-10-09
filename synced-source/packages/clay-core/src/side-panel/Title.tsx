/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
