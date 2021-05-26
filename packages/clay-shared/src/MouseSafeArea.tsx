/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {useMousePosition} from './useMousePosition';

type Props = {
	parentRef: React.RefObject<HTMLDivElement>;
};

export const MouseSafeArea = ({parentRef}: Props) => {
	const [mouseX, mouseY] = useMousePosition();

	const {height: h = 0, width: w = 0, x = 0, y = 0} =
		parentRef.current?.getBoundingClientRect() || {};

	const positions = {h, mouseX, mouseY, w, x, y};

	return (
		<div
			style={{
				clipPath: getClipPath(positions),
				height: h,
				left: getLeft(positions),
				position: 'absolute',
				right: getRight(positions),
				top: 0,
				width: getWidth(positions),
			}}
		/>
	);
};

interface IPositions {
	h: number;
	mouseX: number;
	mouseY: number;
	w: number;
	x: number;
	y: number;
}

const getLeft = ({mouseX, x}: IPositions) =>
	mouseX > x ? undefined : `${-Math.max(x - mouseX, 10)}px`;

const getRight = ({mouseX, w, x}: IPositions) =>
	mouseX > x ? `${-Math.max(mouseX - (x + w), 10)}px` : undefined;

const getWidth = ({mouseX, w, x}: IPositions) =>
	`${Math.max(mouseX > x ? mouseX - (x + w) : x - mouseX, 10)}px`;

const getClipPath = ({h, mouseX, mouseY, x, y}: IPositions) =>
	mouseX > x
		? `polygon(0% 0%, 0% 100%, 100% ${(100 * (mouseY - y)) / h}%)`
		: `polygon(100% 0%, 0% ${(100 * (mouseY - y)) / h}%, 100% 100%)`;
