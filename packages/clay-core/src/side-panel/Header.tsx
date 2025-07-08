/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import {sub} from '@clayui/shared';
import classnames from 'classnames';
import React, {useEffect, useRef, useState} from 'react';

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
	 * Aria labels for the Side Panel Header
	 */
	messages?: {
		closeAriaLabel?: string;
	};

	/**
	 * Callback function for when the close button is clicked
	 */
	onClose?: () => void;

	/**
	 * Property to make the Header sticky. Absolutely positioned SidePanel's
	 * should have the `sidebar-header` `top` CSS property adjusted to account
	 * for any fixed or sticky navigation bars on the page.
	 */
	sticky?: boolean;
};

export const Header = React.forwardRef<HTMLDivElement, Props>(
	({
		children,
		className,
		messages = {
			closeAriaLabel: 'Close the {0} sidebar',
		},
		onClose,
		sticky
	}: Props, ref) => {
		const {onOpenChange} = useSidePanel();

		const headerInternalRef = useRef<HTMLDivElement | null>(null);

		let headerRef = headerInternalRef;

		if (!onClose) {
			onClose = () => onOpenChange(false);
		}

		if (ref) {
			headerRef = ref as React.MutableRefObject<HTMLDivElement | null>;
		}

		const [panelTitle, setPanelTitle] = useState('');

		useEffect(() => {
			setPanelTitle(headerRef.current?.innerText!);
		}, [headerRef.current]);

		return (
			<div
				className={classnames(
					'sidebar-header',
					{
						'sticky-top': sticky,
					},
					className
				)}
				ref={headerRef}
			>
				<div className="autofit-row">
					<div className="autofit-col autofit-col-expand">
						{children}
					</div>
					<div className="autofit-col">
						<button
							aria-label={
								panelTitle ? sub(messages.closeAriaLabel!, [panelTitle]) : 'Close the sidebar'
							}
							className="close"
							onClick={onClose}
							type="button"
						>
							<Icon symbol="times" />
						</button>
					</div>
				</div>
			</div>
		);
	}
);

Header.displayName = 'Header';
