/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React from 'react';

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
	 * Property to make the Footer sticky. Absolutely positioned SidePanel's
	 * should have the `sidebar-footer` `bottom` CSS property adjusted to
	 * account for any fixed or sticky footers on the page.
	 */
	sticky?: boolean;
};

export function Footer({children, className, sticky}: Props) {
	return (
		<div
			className={classnames(
				'sidebar-footer',
				{
					'sticky-bottom': sticky,
				},
				className
			)}
		>
			{children}
		</div>
	);
}
