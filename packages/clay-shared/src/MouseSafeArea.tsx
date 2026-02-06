/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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

function getLeft({mouseX, x}: IPositions) {
	return mouseX > x ? undefined : `${x - Math.max(x - mouseX, 10)}px`;
}

function getRight({mouseX, ownerW, w, x}: IPositions) {
	return mouseX > x
		? `${ownerW - (x + w) - Math.max(mouseX - (x + w), 10)}px`
		: undefined;
}

function getWidth({mouseX, w, x}: IPositions) {
	return `${Math.max(mouseX > x ? mouseX - (x + w) : x - mouseX, 10)}px`;
}

function getClipPath({h, mouseX, mouseY, x, y}: IPositions) {
	return mouseX > x
		? `polygon(0% 0%, 0% 100%, 100% ${(100 * (mouseY - y)) / h}%)`
		: `polygon(100% 0%, 0% ${(100 * (mouseY - y)) / h}%, 100% 100%)`;
}
export function MouseSafeArea({parentRef}: Props) {
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
}
