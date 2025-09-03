/**
 * SPDX-FileCopyrightText: © 2025 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useProvider} from '@clayui/provider';
import {Keys, useControlledState, useId} from '@clayui/shared';
import classnames from 'classnames';
import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';

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
	as?: 'aside' | 'div' | 'nav' | 'section';

	/**
	 * Sets the CSS className for the component.
	 */
	className?: string;

	/**
	 * Children content to render a content.
	 */
	children: React.ReactNode;

	/**
	 * Element reference to the container of the SidePanel and primary content.
	 * NOTE: The containerRef is needed to properly handle layout and
	 * transitions of the SidePanel.
	 */
	containerRef: React.RefObject<HTMLElement>;

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
	 * External reference for the side panel.
	 */

	externalSidePanelRef?: React.RefObject<HTMLDivElement>;

	/**
	 * Property to determine whether the panel behaves in a fluid manner.
	 */
	fluid?: boolean;

	/**
	 * The id of the component.
	 */
	id?: string;

	/**
	 * Sets a custom width on the sidebar panel.
	 */
	panelWidth?: number;

	/**
	 * Property to determine how the SidePanel will be positioned.
	 */
	position?: 'absolute' | 'fixed';

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
	as: As = 'div',
	children,
	className,
	containerRef,
	defaultOpen,
	direction = 'right',
	displayType = 'light',
	externalSidePanelRef,
	fluid = false,
	onOpenChange,
	open: externalOpen,
	panelWidth,
	position = 'absolute',
	triggerRef,
	...otherProps
}: Props) {
	const internalSidePanelRef = useRef<HTMLDivElement>(null);
	const slideoutRef = useRef<HTMLDivElement>(null);

	const sidePanelRef = externalSidePanelRef || internalSidePanelRef;

	const {prefersReducedMotion} = useProvider();

	const [open, setOpen] = useControlledState({
		defaultName: 'defaultOpen',
		defaultValue: defaultOpen,
		handleName: 'onOpenChange',
		name: 'open',
		onChange: onOpenChange,
		value: externalOpen,
	});

	useEffect(() => {
		// Ensures SidePanel is open when initial state is open.
		if (open) {
			containerRef.current?.classList.add(
				`c-slideout-push-${direction === 'left' ? 'start' : 'end'}`
			);
		}
	}, []);

	useEffect(() => {
		if (open) {
			// Saves the last element that has focus before moving to the
			// sidepanel to regain focus when closing the sidepanel.
			const element =
				(document.activeElement as HTMLElement | null) ||
				triggerRef?.current ||
				null;

			return () => {
				element?.focus();
			};
		}
	}, [open]);

	useLayoutEffect(() => {
		containerRef.current?.classList.add('c-slideout-container');
	}, [containerRef.current]);

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
			sidePanelRef.current?.removeAttribute('inert');

			document.addEventListener('keydown', onKeyDown, true);

			return () => {
				document.removeEventListener('keydown', onKeyDown, true);
			};
		} else {
			// Remove Side Panel content from DOM focus management
			sidePanelRef.current?.setAttribute('inert', '');
		}
	}, [open]);

	const titleId = useId();

	const offsetTop = useOffsetTop(containerRef);

	return (
		<div
			className={classnames(
				`c-slideout c-slideout-${position} c-slideout-push`,
				{
					'c-slideout-end': direction === 'right',
					'c-slideout-fluid': fluid,
					'c-slideout-start': direction === 'left',
				}
			)}
			ref={slideoutRef}
			style={position === 'fixed' ? {top: `${offsetTop}px`} : undefined}
		>
			<CSSTransition
				appear={open}
				className={classnames('sidebar', className, {
					'sidebar-dark': displayType === 'dark',
					'sidebar-light': displayType === 'light',
				})}
				classNames={{
					appearActive: 'c-slideout-show',
					appearDone: 'c-slideout-show',
					enter: 'c-slideout-transition c-slideout-transition-in',
					enterActive: 'c-slideout-show',
					enterDone: 'c-slideout-show',
					exit: 'c-slideout-transition c-slideout-transition-out',
					exitActive: '',
				}}
				in={open}
				onEnter={() => {
					containerRef.current?.classList.add(
						'c-slideout-transition',
						'c-slideout-transition-in',
						`c-slideout-push-${
							direction === 'left' ? 'start' : 'end'
						}`
					);
				}}
				onEntered={(_, isAppearing) => {
					slideoutRef.current?.classList.add('c-slideout-shown');

					containerRef.current?.classList.remove(
						'c-slideout-transition',
						'c-slideout-transition-in'
					);

					if (!isAppearing) {
						// Move focus to sidepanel when opening but not if
						// opened on first load.
						sidePanelRef.current?.focus({preventScroll: true});
					}
				}}
				onExit={() => {
					containerRef.current?.classList.add(
						'c-slideout-transition',
						'c-slideout-transition-out'
					);

					containerRef.current?.classList.remove(
						`c-slideout-push-${
							direction === 'left' ? 'start' : 'end'
						}`
					);
				}}
				onExited={() => {
					slideoutRef.current?.classList.remove('c-slideout-shown');

					containerRef.current?.classList.remove(
						'c-slideout-transition',
						'c-slideout-transition-out'
					);
				}}
				timeout={prefersReducedMotion ? 0 : open ? 200 : 300}
			>
				<As
					{...otherProps}
					aria-label={ariaLabel}
					aria-labelledby={
						!ariaLabelledby && !ariaLabel ? titleId : ariaLabelledby
					}
					ref={sidePanelRef}
					{...(!fluid && {style: {width: panelWidth}})}
					tabIndex={-1}
				>
					<SidePanelContext.Provider
						value={{onOpenChange: setOpen, open, titleId}}
					>
						{children}
					</SidePanelContext.Provider>
				</As>
			</CSSTransition>
		</div>
	);
}

function useOffsetTop(ref: React.RefObject<HTMLElement>) {
	const [offsetTop, setOffsetTop] = React.useState<Number>();

	const checkOffset = () => {
		const handleResize = () => {
			if (ref.current) {
				const offsetTop =
					ref.current?.getBoundingClientRect().top + window.scrollY;

				setOffsetTop(offsetTop);
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	};

	React.useLayoutEffect(() => {
		if (!ref.current) {
			return;
		}

		checkOffset();
	}, [ref.current]);

	React.useEffect(() => {
		checkOffset();
	}, []);

	return offsetTop;
}

SidePanel.Header = Header;
SidePanel.Title = Title;
SidePanel.Body = Body;
SidePanel.Footer = Footer;
