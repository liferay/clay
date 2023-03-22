/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Keys} from '@clayui/shared';
import React, {useContext} from 'react';

import {VerticalBarContext} from './context';

type Props = {
	/**
	 * Sets the CSS className for the component.
	 */
	className?: string;

	/**
	 * Reference to Panel
	 */
	nodeRef?: React.RefObject<HTMLDivElement>;
};

const MAIN_MOUSE_BUTTON = 0;

let keyDownCounter = 0;

export function Resizer({nodeRef, ...otherProps}: Props) {
	const {onPanelWidthChange, panelWidthMax, panelWidthMin, position} =
		useContext(VerticalBarContext);

	const positionLeft = position === 'left';

	const getStartWidth = () => {
		return nodeRef?.current?.offsetWidth || 320;
	};

	const decreasePanelWidth = (delta = 1, startWidth = getStartWidth()) => {
		const width = Math.round(startWidth - delta);

		if (width > panelWidthMin - 100 && width < panelWidthMin) {
			onPanelWidthChange(panelWidthMin);
		} else if (width > panelWidthMin) {
			onPanelWidthChange(width);
		}
	};

	const increasePanelWidth = (delta = 1, startWidth = getStartWidth()) => {
		const width = Math.round(startWidth + delta);

		if (width > panelWidthMax && width < panelWidthMax + 100) {
			onPanelWidthChange(panelWidthMax);
		} else if (width < panelWidthMax) {
			onPanelWidthChange(width);
		}
	};

	return (
		<div
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
						} else {
							increasePanelWidth(delta);
						}

						break;
					}
					case Keys.Right: {
						if (positionLeft) {
							increasePanelWidth(delta);
						} else {
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
				const startWidth = getStartWidth();
				const startXPos = event.pageX;

				function onResizerMove(event: any) {
					const delta = Math.abs(event.pageX - startXPos);

					if (
						(event.pageX >= startXPos && positionLeft) ||
						(event.pageX < startXPos && !positionLeft)
					) {
						increasePanelWidth(delta, startWidth);
					} else if (
						(event.pageX < startXPos && positionLeft) ||
						(event.pageX >= startXPos && !positionLeft)
					) {
						decreasePanelWidth(delta, startWidth);
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
