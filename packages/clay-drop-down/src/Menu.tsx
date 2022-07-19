/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
	ClayPortal,
	IPortalBaseProps,
	Keys,
	doAlign,
	observeRect,
} from '@clayui/shared';
import classNames from 'classnames';
import React, {useEffect, useLayoutEffect, useRef} from 'react';

export const Align = {
	BottomCenter: 4,
	BottomLeft: 5,
	BottomRight: 3,
	LeftBottom: 11,
	LeftCenter: 6,
	LeftTop: 10,
	RightBottom: 9,
	RightCenter: 2,
	RightTop: 8,
	TopCenter: 0,
	TopLeft: 7,
	TopRight: 1,
} as const;

const ALIGN_INVERSE = {
	0: 'TopCenter',
	1: 'TopRight',
	2: 'RightCenter',
	3: 'BottomRight',
	4: 'BottomCenter',
	5: 'BottomLeft',
	6: 'LeftCenter',
	7: 'TopLeft',
	8: 'RightTop',
	9: 'RightBottom',
	10: 'LeftTop',
	11: 'LeftBottom',
} as const;

const ALIGN_MAP = {
	BottomCenter: ['tc', 'bc'],
	BottomLeft: ['tl', 'bl'],
	BottomRight: ['tr', 'br'],
	LeftBottom: ['br', 'bl'],
	LeftCenter: ['cr', 'cl'],
	LeftTop: ['tr', 'tl'],
	RightBottom: ['bl', 'br'],
	RightCenter: ['cl', 'cr'],
	RightTop: ['tl', 'tr'],
	TopCenter: ['bc', 'tc'],
	TopLeft: ['bl', 'tl'],
	TopRight: ['br', 'tr'],
} as const;

type TPointOptions = typeof ALIGN_MAP[keyof typeof ALIGN_MAP];

/**
 * For backwards compatability, we are creating a util here so that `metal-position`
 * number values are used in the same manner and result in the same alignment direction.
 */
const getAlignPoints = (val: keyof typeof ALIGN_INVERSE) =>
	ALIGN_MAP[ALIGN_INVERSE[val]];

const BOTTOM_OFFSET = [0, 4] as const;
const LEFT_OFFSET = [-4, 0] as const;
const RIGHT_OFFSET = [4, 0] as const;
const TOP_OFFSET = [0, -4] as const;

const OFFSET_MAP = {
	bctc: TOP_OFFSET,
	blbr: RIGHT_OFFSET,
	bltl: TOP_OFFSET,
	brbl: LEFT_OFFSET,
	brtr: TOP_OFFSET,
	clcr: RIGHT_OFFSET,
	crcl: LEFT_OFFSET,
	tcbc: BOTTOM_OFFSET,
	tlbl: BOTTOM_OFFSET,
	tltr: RIGHT_OFFSET,
	trbr: BOTTOM_OFFSET,
	trtl: LEFT_OFFSET,
};

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if menu is showing or not.
	 */
	active?: boolean;

	/**
	 * HTML element that the menu should be aligned to
	 */
	alignElementRef: React.RefObject<HTMLElement>;

	/**
	 * Flag to align the DropDown menu within the viewport.
	 */
	alignmentByViewport?: boolean;

	/**
	 * Flag to suggest or not the best region to align menu element.
	 */
	autoBestAlign?: boolean;

	/**
	 * Default position of menu element. Values come from above.
	 *
	 * Align.TopCenter = 0;
	 * Align.TopRight = 1;
	 * Align.RightCenter = 2;
	 * Align.BottomRight = 3;
	 * Align.BottomCenter = 4;
	 * Align.BottomLeft = 5;
	 * Align.LeftCenter = 6;
	 * Align.TopLeft = 7;
	 *
	 * Defaults to BottomLeft
	 *
	 * You can also pass an array of strings, corresponding to the points
	 * of the targetNode and sourceNode, `[sourceNode, targetNode]`.
	 *
	 * Points can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right).
	 * For example: `['tl', 'bl']` corresponds to the bottom left alignment.
	 */
	alignmentPosition?: number | TPointOptions;

	/**
	 * Flag to indicate if clicking outside of the menu should automatically close it.
	 */
	closeOnClickOutside?: boolean;

	/**
	 * Props to add to the outer most container.
	 */
	containerProps?: IPortalBaseProps;

	/**
	 * Flag to indicate if menu is displaying a clay-icon on the left.
	 */
	hasLeftSymbols?: boolean;

	/**
	 * Flag to indicate if menu is displaying a clay-icon on the right.
	 */
	hasRightSymbols?: boolean;

	/**
	 * Adds utility class name `dropdown-menu-height-${height}`
	 */
	height?: 'auto';

	/**
	 * Element ref to call focus() on after menu is closed via Escape key
	 */
	focusRefOnEsc?: React.RefObject<HTMLElement>;

	/**
	 * Function for setting the offset of the menu from the trigger.
	 */
	offsetFn?: (points: TPointOptions) => [number, number];

	/**
	 * Callback function for when active state changes.
	 */
	onActiveChange?: (value: boolean) => void;

	/**
	 * Callback function for when active state changes.
	 * @deprecated since v3.52.0 - use `onActiveChange` instead.
	 */
	onSetActive?: (value: boolean) => void;

	/**
	 * The modifier class `dropdown-menu-width-${width}` makes the menu expand
	 * the full width of the page.
	 *
	 * - sm makes the menu 500px wide.
	 * - shrink makes the menu auto-adjust to text and max 240px wide.
	 * - full makes the menu 100% wide.
	 */
	width?: 'sm' | 'shrink' | 'full';
}

const useIsomorphicLayoutEffect =
	typeof window === 'undefined' ? useEffect : useLayoutEffect;

const ClayDropDownMenu = React.forwardRef<HTMLDivElement, IProps>(
	(
		{
			active,
			alignElementRef,
			alignmentByViewport = false,
			alignmentPosition = Align.BottomLeft,
			autoBestAlign = true,
			children,
			className,
			closeOnClickOutside = true,
			containerProps = {},
			hasLeftSymbols,
			hasRightSymbols,
			height,
			focusRefOnEsc,
			offsetFn = (points) =>
				OFFSET_MAP[points.join('') as keyof typeof OFFSET_MAP] as [
					number,
					number
				],
			onActiveChange,
			onSetActive,
			width,
			...otherProps
		}: IProps,
		// TS + refs don't always play nicely together, which is why it is casted
		// in so many places below.
		// See https://github.com/microsoft/TypeScript/issues/30748#issuecomment-480197036
		ref
	) => {
		const setActive = onActiveChange ?? onSetActive;

		const subPortalRef = useRef<HTMLDivElement | null>(null);

		useEffect(() => {
			if (closeOnClickOutside) {
				const handleClick = (event: MouseEvent) => {
					const nodeRefs = [alignElementRef, subPortalRef];
					const nodes: Array<Node> = (
						Array.isArray(nodeRefs) ? nodeRefs : [nodeRefs]
					)
						.filter((ref) => ref.current)
						.map((ref) => ref.current!);

					if (
						active &&
						event.target instanceof Node &&
						!nodes.find((element) =>
							element.contains(event.target as Node)
						)
					) {
						setActive!(false);
					}
				};

				window.addEventListener('mousedown', handleClick);

				return () => {
					window.removeEventListener('mousedown', handleClick);
				};
			}
		}, [active, closeOnClickOutside]);

		useEffect(() => {
			const handleEsc = (event: KeyboardEvent) => {
				if (event.key === Keys.Esc) {
					event.stopImmediatePropagation();

					if (focusRefOnEsc && focusRefOnEsc.current) {
						focusRefOnEsc.current.focus();
					}

					setActive!(false);
				}
			};

			if (active) {
				document.addEventListener('keyup', handleEsc, true);
			}

			return () => {
				document.removeEventListener('keyup', handleEsc, true);
			};
		}, [active]);

		const align = () => {
			if (alignElementRef && alignElementRef.current) {
				let points = alignmentPosition;

				if (typeof points === 'number') {
					points = getAlignPoints(
						points as keyof typeof ALIGN_INVERSE
					);
				}

				if ((ref as React.RefObject<HTMLElement>).current) {
					doAlign({
						offset: offsetFn(points),
						overflow: {
							adjustX: autoBestAlign,
							adjustY: autoBestAlign,
							alwaysByViewport: alignmentByViewport,
						},
						points,
						sourceElement: (ref as React.RefObject<HTMLElement>)
							.current!,
						targetElement: alignElementRef.current,
					});
				}
			}
		};

		useIsomorphicLayoutEffect(() => {
			if (active) {
				align();
			}
		}, [active, children]);

		useEffect(() => {
			if (alignElementRef && alignElementRef.current) {
				const unobserve = observeRect(alignElementRef.current, align);

				return unobserve;
			}
		}, []);

		return (
			<ClayPortal {...containerProps} subPortalRef={subPortalRef}>
				<div ref={subPortalRef}>
					<div
						{...otherProps}
						className={classNames('dropdown-menu', className, {
							'dropdown-menu-indicator-end': hasRightSymbols,
							'dropdown-menu-indicator-start': hasLeftSymbols,
							[`dropdown-menu-height-${height}`]: height,
							[`dropdown-menu-width-${width}`]: width,
							show: active,
						})}
						ref={ref}
						role="presentation"
					>
						{children}
					</div>
				</div>
			</ClayPortal>
		);
	}
);

ClayDropDownMenu.displayName = 'ClayDropDownMenu';

export default ClayDropDownMenu;
