/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
	InternalDispatch,
	observeRect,
	useControlledState,
} from '@clayui/shared';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

type Bounds = {
	height: number;
	width: number;
	x: number;
	y: number;
};

const MoveTo = (x: number, y: number) => `M ${x} ${y}`;
const LineTo = (x: number, y: number) => `L ${x} ${y}`;
const EllipticalArcCurve = (toX: number, toY: number) =>
	`A 0,0 0 0 0 ${toX},${toY}`;

const createClipPath = (
	bounds: Bounds,
	containerBounds: Bounds,
	padding: number
) => {
	const parentBounds = {
		endX: containerBounds.width,
		endY: containerBounds.height,
		startX: 0,
		startY: 0,
	};

	const startX = bounds.x - padding;
	const endX = startX + bounds.width + padding * 2;
	const startY = bounds.y - padding;
	const endY = startY + bounds.height + padding * 2;

	return [
		MoveTo(parentBounds.startX, parentBounds.startY),
		LineTo(parentBounds.startX, parentBounds.endY),
		LineTo(parentBounds.endX, parentBounds.endY),
		LineTo(parentBounds.endX, parentBounds.startY),
		'z',
		MoveTo(startX, startY),
		LineTo(startX, endY),
		EllipticalArcCurve(startX, endY),
		LineTo(endX, endY),
		EllipticalArcCurve(endX, endY),
		LineTo(endX, startY),
		EllipticalArcCurve(endX, startY),
		LineTo(startX, startY),
		EllipticalArcCurve(startX, startY),
	].join(' ');
};

const initialBounds = {
	height: 0,
	width: 0,
	x: 0,
	y: 0,
};

const useIsomorphicLayoutEffect =
	typeof window === 'undefined' ? useEffect : useLayoutEffect;

type ContainerProps = {
	children: (bounds: Bounds) => React.ReactNode;
};

function SVG({children}: ContainerProps) {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const [containerBounds, setContainerBounds] =
		useState<Bounds>(initialBounds);

	useIsomorphicLayoutEffect(() => {
		if (containerRef.current) {
			const updater = (rect: DOMRect | undefined) => {
				if (!containerRef.current) {
					return;
				}

				const {height, width, x, y} =
					rect ?? containerRef.current!.getBoundingClientRect();

				setContainerBounds({height, width, x, y});
			};

			return observeRect(containerRef.current, updater);
		}
	}, [setContainerBounds]);

	return (
		<div
			ref={containerRef}
			style={{
				bottom: 0,
				left: 0,
				position: 'fixed',
				right: 0,
				top: 0,
				zIndex: 1040,
			}}
		>
			<svg
				height={containerBounds.height}
				width={containerBounds.width}
				xmlns="http://www.w3.org/2000/svg"
			>
				{children(containerBounds)}
			</svg>
		</div>
	);
}

type Props<T> = {
	/**
	 * Sets the current value of bounds to define the highlight area (controlled).
	 */
	bounds?: Bounds;

	/**
	 * Sets the element that will receive the highlight.
	 */
	children?: React.ReactNode | ((ref: React.RefObject<T>) => React.ReactNode);

	/**
	 * Callback is called when the overlay is clicked.
	 */
	onClick?: (event: React.MouseEvent<SVGRectElement>) => void;

	/**
	 * Set the highlight padding.
	 */
	padding?: number;

	/**
	 * Sets the current visibility of the overlay.
	 */
	visible?: boolean;

	/**
	 * Sets the default value of bounds (uncontrolled).
	 */
	defaultBounds?: Bounds;

	/**
	 * Callback is called when the bounds changes (controlled).
	 */
	onBoundsChange?: InternalDispatch<Bounds>;
};

export function OverlayMask<T>({
	defaultBounds = initialBounds,
	bounds,
	children,
	onClick,
	onBoundsChange,
	padding = 10,
	visible = false,
}: Props<T>) {
	const [internalBounds, setBounds] = useControlledState({
		defaultName: 'defaultBounds',
		defaultValue: defaultBounds,
		handleName: 'onBoundsChange',
		name: 'bounds',
		onChange: onBoundsChange,
		value: bounds,
	});

	const childrenRef = useRef<HTMLElement | null>(null);

	useIsomorphicLayoutEffect(() => {
		if (childrenRef.current) {
			const updater = () => {
				if (!childrenRef.current) {
					return;
				}

				const {height, width, x, y} =
					childrenRef.current.getBoundingClientRect();

				setBounds({height, width, x, y});
			};

			return observeRect(childrenRef.current, updater);
		}
	}, [setBounds]);

	return (
		<>
			{children &&
				typeof children !== 'function' &&
				React.cloneElement(children as React.ReactElement, {
					ref: (node: HTMLElement) => {
						childrenRef.current = node;

						// @ts-ignore
						const {ref} = children;

						if (typeof ref === 'function') {
							ref(node);
						} else if (ref !== null) {
							(ref as React.MutableRefObject<any>).current = node;
						}
					},
				})}

			{typeof children === 'function' && children(childrenRef)}

			{visible && (
				<SVG>
					{(containerBounds) => (
						<g>
							<defs>
								<clipPath id="overlayMask">
									<path
										clipRule="evenodd"
										d={createClipPath(
											internalBounds,
											containerBounds,
											padding
										)}
									/>
								</clipPath>
							</defs>

							<rect
								clipPath="url(#overlayMask)"
								fill="#393a4a"
								fillOpacity={0.8}
								height="100%"
								onClick={onClick}
								width="100%"
								x={0}
								y={0}
							>
								<animate
									attributeName="opacity"
									dur="0.3s"
									repeatCount={1}
									values="0;1"
								/>
							</rect>
						</g>
					)}
				</SVG>
			)}
		</>
	);
}
