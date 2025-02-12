/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useEffect, useLayoutEffect} from 'react';

import {doAlign} from './doAlign';
import {observeRect} from './observeRect';

type Props = {
	isOpen: boolean;
	ref: React.RefObject<HTMLElement>;
	alignmentByViewport?: boolean;
	alignmentPosition?: keyof typeof ALIGN_MAP;
	autoBestAlign?: boolean;
	getOffset?: (alignPoints: readonly [string, string]) => [number, number];
	triggerRef: React.RefObject<HTMLElement>;
};

export const ALIGN_MAP = {
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

/**
 * For backwards compatability, we are creating a util here so that `metal-position`
 * number values are used in the same manner and result in the same alignment direction.
 */
const getAlignPoints = (alignmentPosition: keyof typeof ALIGN_MAP) => ALIGN_MAP[alignmentPosition];

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

const useIsomorphicLayoutEffect =
	typeof window === 'undefined' ? useEffect : useLayoutEffect;

const defaultOffset = (alignPoints: readonly [string, string]) =>
	OFFSET_MAP[alignPoints.join('') as keyof typeof OFFSET_MAP] as [number, number];

export function useOverlayPosition(
	{
		alignmentByViewport,
		alignmentPosition = 'BottomLeft',
		autoBestAlign = true,
		getOffset = defaultOffset,
		isOpen,
		ref,
		triggerRef,
	}: Props,
	deps: Array<any> = [isOpen]
) {
	const alignElement = useCallback(() => {
		if (triggerRef.current && ref.current) {
			const alignPoints = getAlignPoints(alignmentPosition);
			const offset = getOffset(alignPoints);

			doAlign({
				offset,
				overflow: {
					adjustX: autoBestAlign,
					adjustY: autoBestAlign,
					alwaysByViewport: alignmentByViewport,
				},
				points: alignPoints,
				sourceElement: ref.current,
				targetElement: triggerRef.current,
			});
		}
	}, []);

	useIsomorphicLayoutEffect(() => {
		if (isOpen && triggerRef.current) {
			alignElement();

			return observeRect(triggerRef.current, alignElement);
		}
	}, deps);

	useIsomorphicLayoutEffect(() => {
		if (isOpen && ref.current) {
			alignElement();

			return observeRect(ref.current, alignElement);
		}
	}, deps);
}
