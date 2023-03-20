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

let keyDownCounter = 0;

export function Resizer({nodeRef, ...otherProps}: Props) {
	const {
		onPanelWidthChange,
		panelWidth,
		panelWidthMax,
		panelWidthMin,
		position,
	} = useContext(VerticalBarContext);

	const positionLeft = position === 'left';

	const getStartWidth = () => {
		return nodeRef?.current?.offsetWidth || 320;
	};

	const decreasePanelWidth = (delta = 1, startWidth = getStartWidth()) => {
		if (panelWidth >= panelWidthMin) {
			const width =
				panelWidth - delta < panelWidthMin
					? panelWidthMin
					: startWidth - delta;

			onPanelWidthChange(Math.round(width));
		}
	};

	const increasePanelWidth = (delta = 1, startWidth = getStartWidth()) => {
		if (panelWidth <= panelWidthMax) {
			const width =
				panelWidth + delta > panelWidthMax
					? panelWidthMax
					: startWidth + delta;

			onPanelWidthChange(Math.round(width));
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

				if (event.button === 0) {
					document.addEventListener('pointermove', onResizerMove);

					document.addEventListener('pointerup', removeResizerEvents);
				}
			}}
			role="separator"
			tabIndex={0}
		/>
	);
}
