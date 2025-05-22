/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import React from 'react';

import {useSidePanel} from './context';

type Props = {
	/**
	 * Children content to render a content.
	 */
	children: React.ReactNode;
};

export function Header({children}: Props) {
	const {onOpenChange} = useSidePanel();

	return (
		<div className="sidebar-header">
			<div className="autofit-row sidebar-section">
				<div className="autofit-col autofit-col-expand">{children}</div>
				<div className="autofit-col">
					<button
						aria-label="Close"
						className="close"
						onClick={() => onOpenChange(false)}
						type="button"
					>
						<Icon symbol="times" />
					</button>
				</div>
			</div>
		</div>
	);
}
