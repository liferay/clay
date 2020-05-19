/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useEffect} from 'react';

const ESC_KEY_CODE = 27;

/**
 * Hook for closing dropdown when user hits ESC key or clicks outside the menu.
 */
export function useDropdownCloseInteractions(
	nodeRefs:
		| React.RefObject<HTMLElement>
		| Array<React.RefObject<HTMLElement>>,
	setActive: (val: boolean) => void
) {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const nodes: Array<Node> = (Array.isArray(nodeRefs)
				? nodeRefs
				: [nodeRefs]
			)
				.filter(ref => ref.current)
				.map(ref => ref.current!);

			if (
				event.target instanceof Node &&
				!nodes.find(element => element.contains(event.target as Node))
			) {
				setActive(false);
			}
		};

		const handleEsc = (event: KeyboardEvent) =>
			event.keyCode === ESC_KEY_CODE && setActive(false);

		window.addEventListener('mousedown', handleClick);
		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleEsc);
		};
	}, [nodeRefs, setActive]);
}
