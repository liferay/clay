/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayPortal} from '@clayui/shared';
import {Align} from 'metal-position';
import React, {useEffect, useReducer, useRef} from 'react';
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
	bottom: Align.Bottom,
	'bottom-left': Align.BottomLeft,
	'bottom-right': Align.BottomRight,
	left: Align.Left,
	right: Align.Right,
	top: Align.Top,
	'top-left': Align.TopLeft,
	'top-right': Align.TopRight,
};

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

const TooltipBase: React.FunctionComponent<{
	autoAlign?: boolean;
	children: React.ReactElement;
	delay?: number;
}> = ({autoAlign = true, children, delay = 600}) => {
	const [{align, message, show}, dispatch] = useReducer(
		reducer,
		initialState
	);

	// Using `any` type since TS incorrectly infers setTimeout to be from NodeJS
	const timeoutIdRef = useRef<any>();
	const targetRef = useRef<HTMLElement | null>(null);
	const titleNodeRef = useRef<HTMLElement | null>(null);
	const tooltipRef = useRef<HTMLElement | null>(null);

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
					dispatch({align: newAlign, message: title, type: 'show'});
				},
				customDelay ? Number(customDelay) : delay
			);
		}
	};

	useEffect(() => {
		if (
			titleNodeRef.current &&
			(tooltipRef as React.RefObject<HTMLDivElement>).current
		) {
			const newAlignment =
				ALIGNMENTS[
					Align.align(
						(tooltipRef as React.RefObject<HTMLElement>).current!,
						titleNodeRef.current,
						ALIGNMENTS_MAP[align || 'top'],
						autoAlign
					)
				];

			if (newAlignment !== align) {
				dispatch({align: newAlignment, type: 'align'});
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

export default TooltipBase;
