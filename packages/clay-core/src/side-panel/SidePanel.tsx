/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Keys, useControlledState, useId} from '@clayui/shared';
import classnames from 'classnames';
import {animate} from 'motion/mini';
import React, {useEffect, useLayoutEffect, useRef} from 'react';

import {Body} from './Body';
import {Footer} from './Footer';
import {Header} from './Header';
import {Title} from './Title';
import {SidePanelContext} from './context';

type ControlledState = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

type UncontrolledState = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
};

export type Props = {
	/**
	 * The global `aria-describedby` attribute identifies the element that
	 * describes the component.
	 */
	'aria-describedby'?: string;

	/**
	 * The `aria-label` attribute defines a string value that labels an interactive
	 * element.
	 */
	'aria-label'?: string;

	/**
	 * The `aria-labelledby` attribute identifies the element (or elements) that
	 * labels the element it is applied to.
	 */
	'aria-labelledby'?: string;

	/**
	 * Custom component.
	 * `aside` - Secondary menus or filters, complementary information...
	 * (e.g product filters in an e-commerce site, related articles in a blog...).
	 * `nav` or `section` - If the ontent is essential for navigation, sidebar
	 * contains primary actions like important forms or sidebar is the
	 * only important content.
	 */
	as?: 'aside' | 'nav' | 'section';

	/**
	 * Sets the CSS className for the component.
	 */
	className?: string;

	/**
	 * Children content to render a content.
	 */
	children: React.ReactNode;

	/**
	 * Property to set the default value (uncontrolled).
	 */
	defaultOpen?: boolean;

	/**
	 * Direction the panel will render.
	 */
	direction?: 'left' | 'right';

	/**
	 * Flag to determine which style the SidePanel will display.
	 */
	displayType?: 'light' | 'dark';

	/**
	 * The id of the component.
	 */
	id?: string;

	/**
	 * Element reference to open the SidePanel.
	 * NOTE: SidePanel automatically identifies the trigger but it may not
	 * work in some cases when the element disappears from the DOM.
	 */
	triggerRef?: React.RefObject<HTMLElement>;
} & (UncontrolledState | ControlledState);

export function SidePanel({
	'aria-label': ariaLabel,
	'aria-labelledby': ariaLabelledby,
	as: As = 'aside',
	children,
	className,
	defaultOpen,
	direction = 'right',
	displayType = 'light',
	onOpenChange,
	open: externalOpen,
	triggerRef,
	...otherProps
}: Props) {
	const ref = useRef<HTMLElement | null>(null);

	const [open, setOpen] = useControlledState({
		defaultName: 'defaultOpen',
		defaultValue: defaultOpen,
		handleName: 'onOpenChange',
		name: 'open',
		onChange: onOpenChange,
		value: externalOpen,
	});

	useEffect(() => {
		if (open) {
			// Saves the last element that has focus before moving to the sidepanel to
			// regain focus when closing the sidepanel.
			const element =
				(document.activeElement as HTMLElement | null) ||
				triggerRef?.current ||
				null;

			return () => {
				element?.focus();
			};
		}
	}, [open]);

	useEffect(() => {
		if (open) {
			const onKeyDown = (event: KeyboardEvent) => {
				if (event.key === Keys.Esc) {
					event.stopImmediatePropagation();
					event.preventDefault();

					setOpen(false);
				}
			};

			// Add Side Panel content to DOM focus management
			ref.current?.removeAttribute('inert');

			// Move focus to sidepanel when opening
			ref.current?.focus();

			document.addEventListener('keydown', onKeyDown, true);

			return () => {
				document.removeEventListener('keydown', onKeyDown, true);
			};
		} else {
			// Remove Side Panel content from DOM focus management
			ref.current?.setAttribute('inert', '');
		}
	}, [open]);

	useLayoutEffect(() => {
		const performSlideout = (position: string | number) => {
			if (ref.current) {
				// Only use animate in the browser environment
				if ('animate' in ref.current) {
					animate(
						ref.current,
						{[direction]: position},
						{
							duration: 0.3,
							ease: 'easeInOut',
						}
					);
				} else {
					// @ts-ignore
					(ref.current as HTMLDivElement).style[direction] = position;
				}
			}
		};

		if (open && ref.current) {
			performSlideout(0);

			return () => {
				performSlideout('-360px');
			};
		}
	}, [open]);

	const titleId = useId();

	return (
		<div
			className={classnames(
				'c-slideout c-slideout-fixed c-slideout-shown',
				{
					'c-slideout-end': direction === 'right',
					'c-slideout-start': direction === 'left',
				}
			)}
		>
			<As
				{...otherProps}
				aria-label={ariaLabel}
				aria-labelledby={
					!ariaLabelledby && !ariaLabel ? titleId : ariaLabelledby
				}
				className={classnames(
					'sidebar c-slideout-active c-slideout-show',
					className,
					{
						'sidebar-dark': displayType === 'dark',
						'sidebar-light': displayType === 'light',
					}
				)}
				ref={ref}
				style={{
					[direction]: '-360px',
				}}
				tabIndex={-1}
			>
				<SidePanelContext.Provider
					value={{onOpenChange: setOpen, open, titleId}}
				>
					{children}
				</SidePanelContext.Provider>
			</As>
		</div>
	);
}

SidePanel.Header = Header;
SidePanel.Title = Title;
SidePanel.Body = Body;
SidePanel.Footer = Footer;
