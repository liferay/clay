/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {doAlign, useMousePosition} from '@clayui/shared';
import {alignPoint} from 'dom-align';
import React, {useEffect} from 'react';

const ALIGNMENTS = [
	'top',
	'top-right',
	'right',
	'bottom-right',
	'bottom',
	'bottom-left',
	'left',
	'top-left',
] as const;

const ALIGNMENTS_MAP = {
	bottom: ['tc', 'bc'],
	'bottom-left': ['tl', 'bl'],
	'bottom-right': ['tr', 'br'],
	left: ['cr', 'cl'],
	right: ['cl', 'cr'],
	top: ['bc', 'tc'],
	'top-left': ['bl', 'tl'],
	'top-right': ['br', 'tr'],
} as const;

const ALIGNMENTS_INVERSE_MAP = {
	bctc: 'top',
	bltl: 'top-left',
	brtr: 'top-right',
	clcr: 'right',
	crcl: 'left',
	tcbc: 'bottom',
	tlbl: 'bottom-left',
	trbr: 'bottom-right',
} as const;

const BOTTOM_OFFSET = [0, 7] as const;
const LEFT_OFFSET = [-7, 0] as const;
const RIGHT_OFFSET = [7, 0] as const;
const TOP_OFFSET = [0, -7] as const;

const OFFSET_MAP = {
	bctc: TOP_OFFSET,
	bltl: TOP_OFFSET,
	brtr: TOP_OFFSET,
	clcr: RIGHT_OFFSET,
	crcl: LEFT_OFFSET,
	tcbc: BOTTOM_OFFSET,
	tlbl: BOTTOM_OFFSET,
	trbr: BOTTOM_OFFSET,
};

const ALIGNMENTS_FORCE_MAP = {
	...ALIGNMENTS_INVERSE_MAP,
	bctc: 'top-left',
	tcbc: 'bottom-left',
} as const;

export type Align = typeof ALIGNMENTS[number];

type Props = {
	align: Align;
	autoAlign: boolean;
	floating: boolean;
	isOpen: boolean;
	onAlign: (align: Align) => void;
	sourceElement: React.MutableRefObject<HTMLElement | null>;
	targetElement: React.MutableRefObject<HTMLElement | null>;
	title: string;
};

export function useAlign({
	align,
	autoAlign,
	floating,
	isOpen,
	onAlign,
	sourceElement,
	targetElement,
	title,
}: Props) {
	const mousePosition = useMousePosition(20);

	useEffect(() => {
		if (sourceElement.current && isOpen && floating) {
			const points = ALIGNMENTS_MAP[align || 'top'] as [string, string];

			const [clientX, clientY] = mousePosition;

			alignPoint(
				sourceElement.current,
				{
					clientX,
					clientY,
				},
				{
					offset: OFFSET_MAP[
						points.join('') as keyof typeof OFFSET_MAP
					] as [number, number],
					points,
				}
			);
		}
	}, [isOpen, floating]);

	useEffect(() => {
		if (
			targetElement.current &&
			sourceElement.current &&
			isOpen &&
			!floating
		) {
			const points = ALIGNMENTS_MAP[align || 'top'] as [string, string];

			const alignment = doAlign({
				overflow: {
					adjustX: autoAlign,
					adjustY: autoAlign,
				},
				points,
				sourceElement: sourceElement.current,
				targetElement: targetElement.current,
			});

			const alignmentString = alignment.points.join(
				''
			) as keyof typeof ALIGNMENTS_INVERSE_MAP;

			const pointsString = points.join('');

			if (alignment.overflow.adjustX) {
				onAlign(ALIGNMENTS_FORCE_MAP[alignmentString]);
			} else if (pointsString !== alignmentString) {
				onAlign(ALIGNMENTS_INVERSE_MAP[alignmentString]);
			}
		}
	}, [align, title, isOpen]);
}
