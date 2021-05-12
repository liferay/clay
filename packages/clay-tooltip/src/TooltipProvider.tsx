/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayPortal, Keys, delegate} from '@clayui/shared';
import domAlign from 'dom-align';
import React, {useCallback} from 'react';
import warning from 'warning';

import ClayTooltip from './Tooltip';

const ALIGNMENTS = [
	'top',
	'top-right',
	'right',
	'bottom-right',
	'bottom',
	'bottom-left',
	'left',
	'top-left',
] as const;

const ALIGNMENTS_MAP = {
	bottom: ['tc', 'bc'],
	'bottom-left': ['tl', 'bl'],
	'bottom-right': ['tr', 'br'],
	left: ['cr', 'cl'],
	right: ['cl', 'cr'],
	top: ['bc', 'tc'],
	'top-left': ['bl', 'tl'],
	'top-right': ['br', 'tr'],
} as const;

const ALIGNMENTS_INVERSE_MAP = {
	bctc: 'top',
	bltl: 'top-left',
	brtr: 'top-right',
	clcr: 'right',
	crcl: 'left',
	tcbc: 'bottom',
	tlbl: 'bottom-left',
	trbr: 'bottom-right',
} as const;

interface IState {
	align?: typeof ALIGNMENTS[number];
	message?: string;
	show?: boolean;
	setAsHTML?: boolean;
}

const initialState: IState = {
	align: 'top',
	message: '',
	setAsHTML: false,
	show: false,
};

const TRIGGER_HIDE_EVENTS = [
	'mouseout',
	'mouseup',
	'pointerup',
	'touchend',
] as const;

const TRIGGER_SHOW_EVENTS = [
	'mouseover',
	'mouseup',
	'pointerdown',
	'touchstart',
] as const;

interface IAction extends IState {
	type: 'align' | 'hide' | 'show';
}

const reducer = (state: IState, {type, ...payload}: IAction): IState => {
	switch (type) {
		case 'align':
			return {...state, ...payload};
		case 'show':
			return {...state, ...payload, show: true};
		case 'hide':
			return {
				...state,
				align: initialState.align,
				show: false,
			};
		default:
			throw new TypeError();
	}
};

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
	const el = node;
	let ancestor: HTMLElement | null = node;

	if (!document.documentElement.contains(el)) {
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

type TContentRenderer = (props: {
	targetNode?: HTMLElement | null;
	title: string;
}) => React.ReactElement | React.ReactNode;

interface IPropsBase {
	/**
	 * Flag to indicate if tooltip should automatically align based on the window
	 */
	autoAlign?: boolean;

	/**
	 * Custom function for rendering the contents of the tooltip
	 */
	contentRenderer?: TContentRenderer;

	/**
	 * Delay in miliseconds before showing tooltip
	 */
	delay?: number;
}

interface IPropsWithChildren extends IPropsBase {
	children: React.ReactElement;
	scope?: never;
}

interface IPropsWithScope extends IPropsBase {
	children?: never;

	/**
	 * CSS selector to scope provider to. All titles within this scope will be
	 * rendered in the tooltip. Titles outside of this scope will be styled
	 * as with the default browser.
	 */
	scope: string;
}

const TooltipProvider: React.FunctionComponent<
	IPropsWithChildren | IPropsWithScope
> = ({
	autoAlign = true,
	children,
	contentRenderer = (props) => props.title,
	delay = 600,
	scope,
}) => {
	const [{align, message = '', setAsHTML, show}, dispatch] = React.useReducer(
		reducer,
		initialState
	);

	// Using `any` type since TS incorrectly infers setTimeout to be from NodeJS
	const timeoutIdRef = React.useRef<any>();
	const targetRef = React.useRef<HTMLElement | null>(null);
	const titleNodeRef = React.useRef<HTMLElement | null>(null);
	const tooltipRef = React.useRef<HTMLElement | null>(null);

	const saveTitle = useCallback((element: HTMLElement) => {
		titleNodeRef.current = element;

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

	const handleHide = useCallback(() => {
		dispatch({type: 'hide'});

		clearTimeout(timeoutIdRef.current);

		restoreTitle();

		if (targetRef.current) {
			targetRef.current.removeEventListener('click', handleHide);

			targetRef.current = null;
		}
	}, []);

	const handleShow = useCallback(({target}: {target: HTMLElement}) => {
		targetRef.current = target;

		const hasTitle =
			target &&
			(target.hasAttribute('title') || target.hasAttribute('data-title'));

		const titleNode = hasTitle
			? target
			: closestAncestor(target, '[title], [data-title]');

		if (titleNode) {
			target.addEventListener('click', handleHide);

			const title =
				titleNode.getAttribute('title') ||
				titleNode.getAttribute('data-title') ||
				'';

			saveTitle(titleNode);

			const customDelay = titleNode.getAttribute('data-tooltip-delay');
			const newAlign = titleNode.getAttribute(
				'data-tooltip-align'
			) as typeof align;
			const setAsHTML = !!titleNode.getAttribute(
				'data-title-set-as-html'
			);

			timeoutIdRef.current = setTimeout(
				() => {
					dispatch({
						align: newAlign || align,
						message: title,
						setAsHTML,
						type: 'show',
					});
				},
				customDelay ? Number(customDelay) : delay
			);
		}
	}, []);

	React.useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (show && event.key === Keys.Esc) {
				event.stopImmediatePropagation();

				handleHide();
			}
		};

		document.addEventListener('keyup', handleEsc, true);

		return () => document.removeEventListener('keyup', handleEsc, true);
	}, [show]);

	React.useEffect(() => {
		if (scope) {
			const disposeShowEvents = TRIGGER_SHOW_EVENTS.map((eventName) => {
				return delegate(document.body, eventName, scope, handleShow);
			});
			const disposeHideEvents = TRIGGER_HIDE_EVENTS.map((eventName) => {
				return delegate(document.body, eventName, scope, handleHide);
			});

			return () => {
				disposeShowEvents.forEach(({dispose}) => dispose());
				disposeHideEvents.forEach(({dispose}) => dispose());
			};
		}
	}, []);

	React.useEffect(() => {
		if (
			titleNodeRef.current &&
			(tooltipRef as React.RefObject<HTMLDivElement>).current
		) {
			const points = ALIGNMENTS_MAP[align || 'top'] as [string, string];

			const newAlignmentString = domAlign(
				(tooltipRef as React.RefObject<HTMLDivElement>).current!,
				titleNodeRef.current,
				{
					overflow: {
						adjustX: autoAlign,
						adjustY: autoAlign,
					},
					points,
				}
			).points.join('') as keyof typeof ALIGNMENTS_INVERSE_MAP;

			const pointsString = points.join('');

			if (pointsString !== newAlignmentString) {
				dispatch({
					align: ALIGNMENTS_INVERSE_MAP[newAlignmentString],
					type: 'align',
				});
			}
		}
	}, [align, show]);

	warning(
		!children && !scope,
		'<TooltipProvider />: You must use at least one of the following props: `children` or `scope`.'
	);

	warning(
		children && scope,
		'<TooltipProvider />: If you want to use `scope`, use <TooltipProvider /> as a singleton and do not pass `children`.'
	);

	warning(
		children?.type !== React.Fragment,
		'<TooltipProvider />: React Fragment is not allowed as a child to TooltipProvider. Child must be a single HTML element that accepts `onMouseOver` and `onMouseOut`.'
	);

	const titleContent = contentRenderer({
		targetNode: targetRef.current,
		title: message,
	});

	return (
		<>
			{show && (
				<ClayPortal>
					<ClayTooltip alignPosition={align} ref={tooltipRef} show>
						{setAsHTML && typeof titleContent === 'string' ? (
							<span
								dangerouslySetInnerHTML={{
									__html: titleContent,
								}}
							/>
						) : (
							titleContent
						)}
					</ClayTooltip>
				</ClayPortal>
			)}

			{scope
				? children
				: children &&
				  React.cloneElement(children, {
						...children.props,
						onMouseOut: handleHide,
						onMouseOver: handleShow,
				  })}
		</>
	);
};

export default TooltipProvider;
