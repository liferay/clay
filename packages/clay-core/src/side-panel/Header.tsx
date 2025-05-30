/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import classnames from 'classnames';
import React from 'react';

import {useSidePanel} from './context';

type Props = {
	/**
	 * Children content to render a content.
	 */
	children: React.ReactNode;

	/**
	 * Sets the CSS className for the component.
	 */
	className?: string;

	/**
	 * Property to make the Header sticky.
	 */
	sticky?: boolean;
};

export function Header({children, className, sticky}: Props) {
	const {onOpenChange} = useSidePanel();

	return (
		<div
			className={classnames(
				'sidebar-header',
				{
					'sticky-top': sticky,
				},
				className
			)}
		>
			<div className="autofit-row">
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
