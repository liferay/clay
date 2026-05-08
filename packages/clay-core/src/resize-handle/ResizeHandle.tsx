/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Keys} from '@clayui/shared';
import classnames from 'classnames';
import React from 'react';

export type Position = 'left' | 'right';

type Props = {

	/**
	 * The maximum width allowed.
	 */
	maxWidth: number;

	/**
	 * The minimum width allowed.
	 */
	minWidth: number;

	/**
	 * Callback called every time the width changes (controlled).
	 */
	onWidthChange: (width: number) => void;

	/**
	 * The side of the screen where the resized element is located.
	 */
	position: Position;

	/**
	 * Property to set the current width (controlled).
	 */
	width?: number;
} & Omit<
	React.HTMLAttributes<HTMLDivElement>,
	'onKeyDown' | 'onKeyUp' | 'onPointerDown'
>;

const MAIN_MOUSE_BUTTON = 0;

let keyDownCounter = 0;

export function ResizeHandle({
	maxWidth,
	minWidth,
	onWidthChange,
	position,
	width = 320,
	...otherProps
}: Props) {
	const positionLeft = position === 'left';

	const decreaseWidth = (delta = 1) => {
		const nextWidth = Math.round(width - delta);

		if (nextWidth > minWidth - 100 && nextWidth < minWidth) {
			onWidthChange(minWidth);
		}
		else if (nextWidth > minWidth) {
			onWidthChange(nextWidth);
		}
	};

	const increaseWidth = (delta = 1) => {
		const nextWidth = Math.round(width + delta);

		if (nextWidth > maxWidth && nextWidth < maxWidth + 100) {
			onWidthChange(maxWidth);
		}
		else if (nextWidth < maxWidth) {
			onWidthChange(nextWidth);
		}
	};

	return (
		<div
			aria-orientation="vertical"
			aria-valuemax={maxWidth}
			aria-valuemin={minWidth}
			aria-valuenow={width}
			className={classnames('c-horizontal-resizer', {
				'c-horizontal-resizer-end':
					document.dir === 'rtl' ? positionLeft : !positionLeft,
			})}
			{...otherProps}
			onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
				const delta = keyDownCounter > 7 ? 10 : 1;

				keyDownCounter++;

				switch (event.key) {
					case Keys.Down: {
						decreaseWidth(delta);

						break;
					}
					case Keys.Left: {
						if (positionLeft) {
							decreaseWidth(delta);
						}
						else {
							increaseWidth(delta);
						}

						break;
					}
					case Keys.Right: {
						if (positionLeft) {
							increaseWidth(delta);
						}
						else {
							decreaseWidth(delta);
						}

						break;
					}
					case Keys.Up: {
						increaseWidth(delta);

						break;
					}
					default: {
						break;
					}
				}
			}}
			onKeyUp={() => {
				keyDownCounter = 0;
			}}
			onPointerDown={(event) => {
				const startXPos = event.pageX;

				function onResizerMove(event: any) {
					const delta = Math.abs(event.pageX - startXPos);

					if (
						(event.pageX >= startXPos && positionLeft) ||
						(event.pageX < startXPos && !positionLeft)
					) {
						increaseWidth(delta);
					}
					else if (
						(event.pageX < startXPos && positionLeft) ||
						(event.pageX >= startXPos && !positionLeft)
					) {
						decreaseWidth(delta);
					}
				}

				function removeResizerEvents() {
					document.removeEventListener('pointermove', onResizerMove);

					document.removeEventListener(
						'pointerup',
						removeResizerEvents
					);
				}

				if (event.button === MAIN_MOUSE_BUTTON) {
					document.addEventListener('pointermove', onResizerMove);

					document.addEventListener('pointerup', removeResizerEvents);
				}
			}}
			role="separator"
			tabIndex={0}
		/>
	);
}
