/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useEffect, useState} from 'react';

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
		collapseElementRef.current.setAttribute(
			'style',
			`height: ${collapseElementRef.current.children[0].clientHeight}px`
		);
	}
}

function useTransitionHeight(
	visible: Boolean,
	setVisible: any,
	contentRef: React.RefObject<any>
) {
	const [transitioning, setTransitioning] = useState<Boolean>(false);

	useEffect(() => {
		if (transitioning) {
			setCollapseHeight(contentRef);
			if (visible) {
				removeCollapseHeight(contentRef);
			}
		}
	}, [transitioning]);

	const handleTransitionEnd = (event: React.TransitionEvent) => {
		if (event.target === contentRef.current && transitioning && !visible) {
			setVisible(true);
			setTransitioning(false);
			removeCollapseHeight(contentRef);
		} else if (event.target === contentRef.current) {
			setVisible(false);
			setTransitioning(false);
		}
	};

	const willTriggerTransition = (event: React.MouseEvent | MouseEvent) => {
		event.preventDefault();
		if (visible && !transitioning) {
			setCollapseHeight(contentRef);
		}

		if (!transitioning) {
			setTransitioning(true);
		}
	};

	return [transitioning, handleTransitionEnd, willTriggerTransition] as [
		Boolean,
		(event: React.TransitionEvent) => void,
		(event: React.MouseEvent | MouseEvent) => void
	];
}

export default useTransitionHeight;
