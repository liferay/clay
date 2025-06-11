/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
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
	 * Prop to pass DOM element attributes to DropDown.Menu.
	 */
	closeElementAttrs?: React.HTMLAttributes<HTMLButtonElement>;

	/**
	 * Property to make the Header sticky. Absolutely positioned SidePanel's
	 * should have the `sidebar-header` `top` CSS property adjusted to account
	 * for any fixed or sticky navigation bars on the page.
	 */
	sticky?: boolean;
};

export const Header = React.forwardRef<HTMLDivElement, Props>(
	({children, className, closeElementAttrs, sticky}: Props, ref) => {
		const {onOpenChange} = useSidePanel();

		const headerInternalRef = useRef<HTMLDivElement | null>(null);

		let headerRef = headerInternalRef;

		if (ref) {
			headerRef = ref as React.MutableRefObject<HTMLDivElement | null>;
		}

		const [panelTitle, setPanelTitle] = useState('');

		useEffect(() => {
			setPanelTitle(headerRef.current?.innerText!);
		}, []);

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
							{...closeElementAttrs}
							aria-label={
								closeElementAttrs?.['aria-label'] ||
								`Close the ${panelTitle} sidebar`
							}
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
);

Header.displayName = 'Header';
