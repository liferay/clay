/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {ClayPortal} from './Portal';
import {useMousePosition} from './useMousePosition';

type Props = {
	parentRef: React.RefObject<HTMLDivElement>;
};

interface IPositions {
	h: number;
	mouseX: number;
	mouseY: number;
	ownerW: number;
	w: number;
	x: number;
	y: number;
}

const getLeft = ({mouseX, x}: IPositions) =>
	mouseX > x ? undefined : `${x - Math.max(x - mouseX, 10)}px`;

const getRight = ({mouseX, ownerW, w, x}: IPositions) =>
	mouseX > x
		? `${ownerW - (x + w) - Math.max(mouseX - (x + w), 10)}px`
		: undefined;

const getWidth = ({mouseX, w, x}: IPositions) =>
	`${Math.max(mouseX > x ? mouseX - (x + w) : x - mouseX, 10)}px`;

const getClipPath = ({h, mouseX, mouseY, x, y}: IPositions) =>
	mouseX > x
		? `polygon(0% 0%, 0% 100%, 100% ${(100 * (mouseY - y)) / h}%)`
		: `polygon(100% 0%, 0% ${(100 * (mouseY - y)) / h}%, 100% 100%)`;

export const MouseSafeArea = ({parentRef}: Props) => {
	const [mouseX, mouseY] = useMousePosition();

	const {
		height: h = 0,
		top = 0,
		width: w = 0,
		x = 0,
		y = 0,
	} = parentRef.current?.getBoundingClientRect() || {};

	const {offsetWidth: ownerW = 0} =
		parentRef.current?.ownerDocument.body || {};

	const positions = {h, mouseX, mouseY, ownerW, w, x, y};

	return (
		<ClayPortal>
			<div
				style={{
					clipPath: getClipPath(positions),
					height: h,
					left: getLeft(positions),
					position: 'absolute',
					right: getRight(positions),
					top,
					width: getWidth(positions),
					zIndex: 1010,
				}}
			/>
		</ClayPortal>
	);
};
