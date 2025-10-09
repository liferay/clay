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
	alignmentPosition?: number | AlignPoints;
	autoBestAlign?: boolean;
	getOffset?: (points: AlignPoints) => [number, number];
	triggerRef: React.RefObject<HTMLElement>;
};

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

export type AlignPoints = typeof ALIGN_MAP[keyof typeof ALIGN_MAP];

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

const useIsomorphicLayoutEffect =
	typeof window === 'undefined' ? useEffect : useLayoutEffect;

const defaultOffset = (points: AlignPoints) =>
	OFFSET_MAP[points.join('') as keyof typeof OFFSET_MAP] as [number, number];

export function useOverlayPosition(
	{
		alignmentByViewport,
		alignmentPosition = 5,
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
			let points = alignmentPosition;

			if (typeof points === 'number') {
				points = getAlignPoints(points as keyof typeof ALIGN_INVERSE);
			}

			doAlign({
				offset: getOffset(points),
				overflow: {
					adjustX: autoBestAlign,
					adjustY: autoBestAlign,
					alwaysByViewport: alignmentByViewport,
				},
				points,
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
