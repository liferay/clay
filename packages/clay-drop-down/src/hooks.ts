/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

/**
 * Hook for closing dropdown when user hits ESC key or clicks outside the menu.
 */
export function useDropdownCloseInteractions(
	nodeRefs:
		| React.RefObject<HTMLElement>
		| Array<React.RefObject<HTMLElement>>,
	setActive: (val: boolean) => void
) {
	React.useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const nodes: Array<Node> = (Array.isArray(nodeRefs)
				? nodeRefs
				: [nodeRefs]
			)
				.filter((ref) => ref.current)
				.map((ref) => ref.current!);

			if (
				event.target instanceof Node &&
				!nodes.find((element) => element.contains(event.target as Node))
			) {
				setActive(false);
			}
		};

		const handleEsc = (event: KeyboardEvent) =>
			event.key === 'Escape' && setActive(false);

		window.addEventListener('mousedown', handleClick);
		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleEsc);
		};
	}, []);
}
