/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLLIElement> {

	/**
	 * Flag to indicate the Management Toolbar Results Bar Item should fit the width of the parent container.
	 */
	expand?: boolean;
}

function ResultsBarItem({
	children,
	className,
	expand = false,
	...otherProps
}: IProps) {
	return (
		<li
			{...otherProps}
			className={classNames('tbar-item', className, {
				'tbar-item-expand': expand,
			})}
		>
			<div className="tbar-section">{children}</div>
		</li>
	);
}

export default ResultsBarItem;
