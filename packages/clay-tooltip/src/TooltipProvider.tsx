/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayPortal} from '@clayui/shared';
import domAlign from 'dom-align';
import React from 'react';
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
}

const initialState: IState = {
	align: 'top',
	message: '',
	show: false,
};

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

function closestAncestor(node: HTMLElement, s: string) {
	const el = node;
	let ancestor: HTMLElement | null = node;

	if (!document.documentElement.contains(el)) {
		return null;
	}

	do {
		if (ancestor.matches(s)) {
			return ancestor;
		}

		ancestor = ancestor.parentElement;
	} while (ancestor !== null);

	return null;
}

const TooltipProvider: React.FunctionComponent<{
	autoAlign?: boolean;
	children: React.ReactElement;
	delay?: number;
}> = ({autoAlign = true, children, delay = 600}) => {
	const [{align, message, show}, dispatch] = React.useReducer(
		reducer,
		initialState
	);

	// Using `any` type since TS incorrectly infers setTimeout to be from NodeJS
	const timeoutIdRef = React.useRef<any>();
	const targetRef = React.useRef<HTMLElement | null>(null);
	const titleNodeRef = React.useRef<HTMLElement | null>(null);
	const tooltipRef = React.useRef<HTMLElement | null>(null);

	const handleHide = ({target}: any) => {
		if (!titleNodeRef.current) {
			return;
		}

		const dataTitle = titleNodeRef.current.getAttribute('data-title');

		if (dataTitle) {
			target.removeEventListener('click', handleHide);
			titleNodeRef.current.setAttribute('title', dataTitle);
			titleNodeRef.current.removeAttribute('data-title');

			titleNodeRef.current = null;
			targetRef.current = null;

			dispatch({type: 'hide'});
			clearTimeout(timeoutIdRef.current);
		}
	};

	const handleShow = ({target}: any) => {
		const hasTitle = target && target.hasAttribute('title');

		const titleNode = hasTitle
			? target
			: closestAncestor(target, '[title]');

		const title = titleNode && titleNode.getAttribute('title');

		if (title) {
			titleNodeRef.current = titleNode;
			targetRef.current = target;

			target.addEventListener('click', handleHide);
			titleNode.setAttribute('data-title', title);
			titleNode.removeAttribute('title');

			const customDelay = titleNode.getAttribute('data-tooltip-delay');
			const newAlign = titleNode.getAttribute('data-tooltip-align');

			timeoutIdRef.current = setTimeout(
				() => {
					dispatch({
						align: newAlign || align,
						message: title,
						type: 'show',
					});
				},
				customDelay ? Number(customDelay) : delay
			);
		}
	};

	React.useEffect(() => {
		if (
			titleNodeRef.current &&
			(tooltipRef as React.RefObject<HTMLDivElement>).current
		) {
			const points = ALIGNMENTS_MAP[align || 'top'] as [string, string];

			const newAlignmentString = domAlign(
				(tooltipRef as React.RefObject<HTMLElement>).current!,
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
		children.type !== React.Fragment,
		'<TooltipProvider />: React Fragment is not allowed as a child to TooltipProvider. Child must be a single HTML element.'
	);

	return (
		<>
			{show && (
				<ClayPortal>
					<ClayTooltip alignPosition={align} ref={tooltipRef} show>
						{message}
					</ClayTooltip>
				</ClayPortal>
			)}

			{React.cloneElement(children, {
				...children.props,
				onMouseOut: handleHide,
				onMouseOver: handleShow,
			})}
		</>
	);
};

export default TooltipProvider;
