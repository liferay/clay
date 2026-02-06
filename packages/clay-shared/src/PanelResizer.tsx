/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import {Keys} from './Keys';

export type Position = 'left' | 'right';

type Props = {

	/**
	 * Callback is called every time the panel width changes (Controlled).
	 */

	onPanelWidthChange: (width: number) => void;

	/**
	 * Property to set the panel width (controlled).
	 */
	panelWidth?: number;

	/**
	 * The maximum width for the panel.
	 */
	panelWidthMax: number;

	/**
	 * The minimum width for the panel.
	 */
	panelWidthMin: number;

	/**
	 * The side of the screen where the panel is located.
	 */
	position: Position;
};

const MAIN_MOUSE_BUTTON = 0;

let keyDownCounter = 0;

export function PanelResizer({
	onPanelWidthChange,
	panelWidth = 320,
	panelWidthMax,
	panelWidthMin,
	position,
	...otherProps
}: Props) {
	const positionLeft = position === 'left';

	const decreasePanelWidth = (delta = 1) => {
		const width = Math.round(panelWidth - delta);

		if (width > panelWidthMin - 100 && width < panelWidthMin) {
			onPanelWidthChange(panelWidthMin);
		}
		else if (width > panelWidthMin) {
			onPanelWidthChange(width);
		}
	};

	const increasePanelWidth = (delta = 1) => {
		const width = Math.round(panelWidth + delta);

		if (width > panelWidthMax && width < panelWidthMax + 100) {
			onPanelWidthChange(panelWidthMax);
		}
		else if (width < panelWidthMax) {
			onPanelWidthChange(width);
		}
	};

	return (
		<div
			aria-orientation="vertical"
			aria-valuemax={panelWidthMax}
			aria-valuemin={panelWidthMin}
			aria-valuenow={panelWidth}
			className="c-horizontal-resizer"
			{...otherProps}
			onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
				const delta = keyDownCounter > 7 ? 10 : 1;

				keyDownCounter++;

				switch (event.key) {
					case Keys.Down: {
						decreasePanelWidth(delta);

						break;
					}
					case Keys.Left: {
						if (positionLeft) {
							decreasePanelWidth(delta);
						}
						else {
							increasePanelWidth(delta);
						}

						break;
					}
					case Keys.Right: {
						if (positionLeft) {
							increasePanelWidth(delta);
						}
						else {
							decreasePanelWidth(delta);
						}

						break;
					}
					case Keys.Up: {
						increasePanelWidth(delta);

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
						increasePanelWidth(delta);
					}
					else if (
						(event.pageX < startXPos && positionLeft) ||
						(event.pageX >= startXPos && !positionLeft)
					) {
						decreasePanelWidth(delta);
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
