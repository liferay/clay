/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {removeCollapseHeight, setCollapseHeight} from './Helpers';
import {useEffect, useState} from 'react';

export function useTransition(
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

export default {useTransition};
