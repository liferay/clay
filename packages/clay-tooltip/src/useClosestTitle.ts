/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useRef} from 'react';

function matches(
	element: HTMLElement & {
		msMatchesSelector?: HTMLElement['matches'];
	},
	selectorString: string
) {
	if (element.matches) {
		return element.matches(selectorString);
	} else if (element.msMatchesSelector) {
		return element.msMatchesSelector(selectorString);
	} else if (element.webkitMatchesSelector) {
		return element.webkitMatchesSelector(selectorString);
	} else {
		return false;
	}
}

function closestAncestor(node: HTMLElement, s: string) {
	const element = node;
	let ancestor: HTMLElement | null = node;

	if (!document.documentElement.contains(element)) {
		return null;
	}

	do {
		if (matches(ancestor, s)) {
			return ancestor;
		}

		ancestor = ancestor.parentElement;
	} while (ancestor !== null);

	return null;
}

type Props = {
	onHide: () => void;
	onClick: () => void;
	tooltipRef: React.MutableRefObject<HTMLElement | null>;
};

export function useClosestTitle(props: Props) {
	const targetRef = useRef<HTMLElement | null>(null);
	const titleNodeRef = useRef<HTMLElement | null>(null);

	const saveTitle = useCallback((element: HTMLElement) => {
		const title = element.getAttribute('title');

		if (title) {
			element.setAttribute('data-restore-title', title);
			element.removeAttribute('title');
		} else if (element.tagName === 'svg') {
			const titleTag = element.querySelector('title');

			if (titleTag) {
				element.setAttribute('data-restore-title', titleTag.innerHTML);

				titleTag.remove();
			}
		}
	}, []);

	const restoreTitle = useCallback(() => {
		const element = titleNodeRef.current;

		if (element) {
			const title = element.getAttribute('data-restore-title');

			if (title) {
				if (element.tagName === 'svg') {
					const titleTag = document.createElement('title');

					titleTag.innerHTML = title;

					element.appendChild(titleTag);
				} else {
					element.setAttribute('title', title);
				}

				element.removeAttribute('data-restore-title');
			}

			titleNodeRef.current = null;
		}
	}, []);

	const onClick = useCallback((event?: any) => {
		props.onClick();
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		onHide(event);
	}, []);

	const onHide = useCallback((event?: any) => {
		if (
			event &&
			(props.tooltipRef.current?.contains(event.relatedTarget) ||
				targetRef.current?.contains(event.relatedTarget))
		) {
			return null;
		}

		props.onHide();

		restoreTitle();

		if (targetRef.current) {
			targetRef.current.removeEventListener('click', onClick);
			targetRef.current = null;
		}
	}, []);

	const getProps = useCallback(
		(
			event: React.MouseEvent<HTMLElement, MouseEvent>,
			hideBrowserTitle: boolean
		) => {
			if (targetRef.current) {
				props.onClick();

				if (onHide(event) === null) {
					return;
				}
			}

			const target = event.target as HTMLElement;

			const hasTitle =
				target &&
				(target.hasAttribute('[title]') ||
					target.hasAttribute('[data-title]'));

			const node = hasTitle
				? target
				: closestAncestor(target, '[title], [data-title]');

			if (node) {
				targetRef.current = target;

				target.addEventListener('click', onClick);

				const title =
					node.getAttribute('title') ||
					node.getAttribute('data-title') ||
					'';

				titleNodeRef.current = node;

				if (hideBrowserTitle) {
					saveTitle(node);
				}

				return {
					align: node.getAttribute('data-tooltip-align'),
					delay: node.getAttribute('data-tooltip-delay'),
					floating: Boolean(
						node.getAttribute('data-tooltip-floating')
					),
					setAsHTML: !!node.getAttribute('data-title-set-as-html'),
					title,
				};
			}
		},
		[]
	);

	return {getProps, onHide, target: targetRef, titleNode: titleNodeRef};
}
