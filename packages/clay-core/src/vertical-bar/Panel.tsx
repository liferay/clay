/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useContext, useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';

import {ContentContext} from './Content';
import {Resizer} from './Resizer';
import {VerticalBarContext} from './context';

function useIsFirstRender(): boolean {
	const isFirst = useRef(true);

	if (isFirst.current) {
		isFirst.current = false;

		return true;
	}

	return isFirst.current;
}

type Props = {
	/**
	 * The panel content.
	 */
	children: React.ReactNode;

	/**
	 * Internal property.
	 * @ignore
	 */
	keyValue?: React.Key | null;

	/**
	 * Indicates whether the panel can be focused.
	 */
	tabIndex?: number;
};

export function Panel({children, keyValue = null, tabIndex}: Props) {
	const {
		activePanel,
		id,
		onActivePanel,
		panelNext,
		panelWidth,
		panelWidthMax,
		panelWidthMin,
		resize,
	} = useContext(VerticalBarContext);
	const {displayType} = useContext(ContentContext);

	const nodeRef = useRef<HTMLDivElement | null>(null);

	const previousActivePanelRef = useRef<React.Key | null>(null);

	const isFirst = useIsFirstRender();

	const isPanelOpen = () => {
		if (isFirst) {
			return activePanel !== null;
		} else if (previousActivePanelRef.current === activePanel) {
			return true;
		} else if (activePanel === null) {
			return false;
		} else {
			return previousActivePanelRef.current !== null;
		}
	};

	useEffect(() => {
		previousActivePanelRef.current = activePanel;
	}, [activePanel]);

	return (
		<CSSTransition
			aria-labelledby={`${id}-tab-${keyValue}`}
			className={classNames('sidebar', {
				'c-slideout-show': isPanelOpen(),
				'sidebar-dark-l2': displayType === 'dark',
				'sidebar-light': displayType === 'light',
			})}
			classNames={{
				enter: panelNext
					? undefined
					: 'c-slideout-transition c-slideout-transition-in',
				enterActive: 'c-slideout-show',
				enterDone: 'c-slideout-show',
				exit: panelNext
					? undefined
					: 'c-slideout-transition c-slideout-transition-out',
			}}
			id={`${id}-tabpanel-${keyValue}`}
			in={activePanel === keyValue}
			nodeRef={nodeRef}
			onExited={() => {
				onActivePanel(panelNext);
			}}
			role="tabpanel"
			tabIndex={tabIndex}
			timeout={panelNext ? 0 : {enter: 300, exit: 200}}
			unmountOnExit
		>
			<div
				ref={nodeRef}
				style={{
					width: panelWidth,
				}}
			>
				{children}

				{resize && (
					<Resizer
						aria-controls={`${id}-tabpanel-${keyValue}`}
						aria-orientation="vertical"
						aria-valuemax={panelWidthMax}
						aria-valuemin={panelWidthMin}
						aria-valuenow={panelWidth}
						className="c-horizontal-resizer"
						nodeRef={nodeRef}
					/>
				)}
			</div>
		</CSSTransition>
	);
}
