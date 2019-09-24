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

const TooltipBase: React.FunctionComponent<{
	autoAlign?: boolean;
	children: React.ReactElement;
	delay?: number;
}> = ({autoAlign = true, children, delay = 600}) => {
	const [{align, message, show}, dispatch] = useReducer(
		reducer,
		initialState
	);

	const timeoutIdRef = useRef<number>();
	const targetRef = useRef<HTMLElement | null>(null);
	const tooltipRef = useRef<HTMLElement | null>(null);

	const handleHide = ({target}: any) => {
		const dataTitle = target && target.getAttribute('data-title');

		if (dataTitle) {
			targetRef.current = null;

			target.removeEventListener('click', handleHide);
			target.setAttribute('title', dataTitle);
			target.removeAttribute('data-title');

			dispatch({type: 'hide'});
			clearTimeout(timeoutIdRef.current);
		}
	};

	const handleShow = ({target}: any) => {
		const title = target && target.getAttribute('title');

		if (title) {
			targetRef.current = target;

			target.addEventListener('click', handleHide);
			target.setAttribute('data-title', title);
			target.removeAttribute('title');

			const customDelay = target.getAttribute('data-tooltip-delay');
			const newAlign = target.getAttribute('data-tooltip-align');

			timeoutIdRef.current = window.setTimeout(
				() => {
					dispatch({align: newAlign, message: title, type: 'show'});
				},
				customDelay ? Number(customDelay) : delay
			);
		}
	};

	useEffect(() => {
		if (
			targetRef.current &&
			(tooltipRef as React.RefObject<HTMLDivElement>).current
		) {
			const newAlignment =
				ALIGNMENTS[
					Align.align(
						(tooltipRef as React.RefObject<HTMLElement>).current!,
						targetRef.current,
						ALIGNMENTS_MAP[align || 'top'],
						autoAlign
					)
				];

			if (newAlignment !== align) {
				dispatch({align: newAlignment, type: 'align'});
			}
		}
	}, [align, autoAlign, show]);

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
