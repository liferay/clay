/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayPortal, observeRect} from '@clayui/shared';
import classNames from 'classnames';
import domAlign from 'dom-align';
import React, {useCallback, useEffect, useRef, useState} from 'react';

export const ALIGN_POSITIONS = [
	'top',
	'top-left',
	'top-right',
	'bottom',
	'bottom-left',
	'bottom-right',
	'left',
	'left-top',
	'left-bottom',
	'right',
	'right-top',
	'right-bottom',
] as const;

const ALIGNMENTS_MAP = {
	bottom: ['tc', 'bc'],
	'bottom-left': ['tl', 'bl'],
	'bottom-right': ['tr', 'br'],
	left: ['cr', 'cl'],
	'left-bottom': ['br', 'bl'],
	'left-top': ['tr', 'tl'],
	right: ['cl', 'cr'],
	'right-bottom': ['bl', 'br'],
	'right-top': ['tl', 'tr'],
	top: ['bc', 'tc'],
	'top-left': ['bl', 'tl'],
	'top-right': ['br', 'tr'],
} as const;

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Position in which the tooltip will be aligned to the element.
	 */
	alignPosition?: typeof ALIGN_POSITIONS[number];

	/**
	 * Flag to indicate if container should not be scrollable
	 */
	disableScroll?: boolean;

	/**
	 * Flag to indicate if tooltip is displayed.
	 */
	show?: boolean;

	/**
	 * Callback for when the `show` prop changes.
	 */
	onShowChange?: (val: boolean) => void;

	/**
	 * React element that the popover will align to when clicked.
	 */
	trigger?: React.ReactElement & {
		ref?: (node: HTMLButtonElement | null) => void;
	};

	/**
	 * Content to display in the header of the popover.
	 */
	header?: React.ReactNode;
}

const ClayPopover = React.forwardRef<HTMLDivElement, IProps>(
	(
		{
			alignPosition = 'bottom',
			children,
			className,
			disableScroll = false,
			header,
			onShowChange,
			show: externalShow = false,
			trigger,
			...otherProps
		}: IProps,
		ref
	) => {
		const [internalShow, internalSetShow] = useState(externalShow);

		const triggerRef = useRef<HTMLElement | null>(null);
		const popoverRef = useRef<HTMLElement | null>(null);
		const popoverScrollerRef = useRef<HTMLDivElement | null>(null);

		if (!ref) {
			ref = popoverRef as React.Ref<HTMLDivElement>;
		}

		const show = externalShow ? externalShow : internalShow;
		const setShow = onShowChange ? onShowChange : internalSetShow;

		const align = useCallback(() => {
			if (
				(ref as React.RefObject<HTMLElement>).current &&
				triggerRef.current
			) {
				const points = ALIGNMENTS_MAP[alignPosition] as [
					string,
					string
				];

				domAlign(
					(ref as React.RefObject<HTMLElement>).current!,
					triggerRef.current as HTMLElement,
					{
						points,
					}
				);
			}
		}, [alignPosition, triggerRef, ref]);

		useEffect(() => {
			if (trigger) {
				align();
			}
		}, [align, show]);

		useEffect(() => {
			if (trigger && triggerRef.current) {
				return observeRect(triggerRef.current, align);
			}
		}, [align]);

		useEffect(() => {
			if (!disableScroll && popoverScrollerRef.current && show) {
				popoverScrollerRef.current.focus();
			}
		}, [disableScroll, popoverScrollerRef, show]);

		let content = (
			<div
				className={classNames(
					className,
					'popover',
					`clay-popover-${alignPosition}`,
					{show}
				)}
				ref={ref as React.RefObject<HTMLDivElement>}
				{...otherProps}
			>
				<div className="arrow" />

				<div
					className={classNames({
						'inline-scroller': !disableScroll,
					})}
					ref={popoverScrollerRef}
					tabIndex={!disableScroll ? -1 : undefined}
				>
					{header && <div className="popover-header">{header}</div>}

					<div className="popover-body">{children}</div>
				</div>
			</div>
		);

		if (trigger) {
			content = (
				<>
					{React.cloneElement(trigger, {
						onClick: (e: any) => {
							if (trigger.props.onClick) {
								trigger.props.onClick(e);
							}

							setShow(!show);
						},
						ref: (node: HTMLButtonElement) => {
							if (node) {
								triggerRef.current = node;
								// Call the original ref, if any.
								const {ref} = trigger;
								if (typeof ref === 'function') {
									ref(node);
								}
							}
						},
					})}

					{show && <ClayPortal>{content}</ClayPortal>}
				</>
			);
		}

		return content;
	}
);

ClayPopover.displayName = 'ClayPopover';

export default ClayPopover;
