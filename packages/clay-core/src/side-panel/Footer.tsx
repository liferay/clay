/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

type Props = {
	/**
	 * Children content to render a content.
	 */
	children: React.ReactNode;
};

export function Footer({children}: Props) {
	return <div className="sidebar-footer">{children}</div>;
}
