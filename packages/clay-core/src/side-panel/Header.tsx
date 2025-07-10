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
	 * Messages for the Side Panel Header.
	 */
	messages?: {
		closeAriaLabel?: string;
	};

	/**
	 * Property to make the Header sticky. Absolutely positioned SidePanel's
	 * should have the `sidebar-header` `top` CSS property adjusted to account
	 * for any fixed or sticky navigation bars on the page.
	 */
	sticky?: boolean;
};

export const Header = ({
	children,
	className,
	messages = {
		closeAriaLabel: 'Close the sidebar',
	},
	sticky,
}: Props) => {
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
						aria-label={messages.closeAriaLabel}
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
};
