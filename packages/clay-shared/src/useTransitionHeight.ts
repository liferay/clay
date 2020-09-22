/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useEffect, useState} from 'react';

/**
 * Removes the height style that triggers a transition when collapse
 * @param collapseElementRef
 */
function removeCollapseHeight(collapseElementRef: React.RefObject<any>) {
	if (collapseElementRef && collapseElementRef.current) {
		collapseElementRef.current.style.removeProperty('height');
	}
}

/**
 * Adds a height style that triggers a transition when collapsed
 * @param collapseElementRef
 */
function setCollapseHeight(collapseElementRef: React.RefObject<any>) {
	if (collapseElementRef && collapseElementRef.current) {
		// Cloned into a new array since `.reduce` is not a method on an HTMLCollection
		const height = Array.prototype.slice
			.call(collapseElementRef.current.children)
			.reduce(
				(acc: number, child: HTMLElement) => acc + child.clientHeight,
				0
			);

		collapseElementRef.current.setAttribute('style', `height: ${height}px`);
	}
}

export function useTransitionHeight(
	visible: boolean,
	setVisible: React.Dispatch<React.SetStateAction<boolean>>,
	contentRef: React.RefObject<any>
) {
	const [transitioning, setTransitioning] = useState<boolean>(false);

	useEffect(() => {
		if (transitioning) {
			setCollapseHeight(contentRef);

			if (visible) {
				removeCollapseHeight(contentRef);
			}

			const {
				transitionDelay,
				transitionDuration,
			} = window.getComputedStyle(contentRef.current);

			const totalDuration =
				(parseFloat(transitionDelay) + parseFloat(transitionDuration)) *
				1000;

			setTimeout(() => {
				setVisible(!visible);
				setTransitioning(false);

				if (!visible) {
					removeCollapseHeight(contentRef);
				}
			}, totalDuration);
		}
	}, [transitioning]);

	const animate = useCallback(
		(event: React.SyntheticEvent) => {
			event.preventDefault();

			if (visible && !transitioning) {
				setCollapseHeight(contentRef);
			}

			setTransitioning(true);
		},
		[transitioning, visible]
	);

	return {animate, transitioning};
}
