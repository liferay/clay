/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useProvider} from '@clayui/provider';
import {PanelResizer, usePrevious} from '@clayui/shared';
import classNames from 'classnames';
import React, {useContext, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';

import {ContentContext} from './Content';
import {VerticalBarContext} from './context';

function useIsFirstRender(): boolean {
	const isFirstRef = useRef(true);

	if (isFirstRef.current) {
		isFirstRef.current = false;

		return true;
	}

	return isFirstRef.current;
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
		onPanelWidthChange,
		panelNext,
		panelWidth,
		panelWidthMax,
		panelWidthMin,
		position,
		resize,
		setPanelNext,
	} = useContext(VerticalBarContext);
	const {displayType} = useContext(ContentContext);

	const nodeRef = useRef<HTMLDivElement | null>(null);

	const {prefersReducedMotion} = useProvider();

	const isFirst = useIsFirstRender();

	const previousActivePanel = usePrevious(activePanel);
	const previousPanelNext = usePrevious(panelNext);

	const isPanelOpen = () => {
		if (isFirst) {
			return activePanel !== null;
		}

		if (previousActivePanel === activePanel) {
			return true;
		}

		return false;
	};

	const noTransition = !panelNext && !previousPanelNext;

	return (
		<CSSTransition
			aria-labelledby={`${id}-tab-${keyValue}`}
			className={classNames('sidebar', {
				'c-slideout-show': isPanelOpen(),
				'sidebar-dark-l2': displayType === 'dark',
				'sidebar-light': displayType === 'light',
			})}
			classNames={{
				enter:
					noTransition && !previousActivePanel
						? 'c-slideout-transition c-slideout-transition-in'
						: undefined,
				enterActive: 'c-slideout-show',
				enterDone: 'c-slideout-show',
				exit:
					noTransition && !activePanel
						? 'c-slideout-transition c-slideout-transition-out'
						: undefined,
			}}
			id={`${id}-tabpanel-${keyValue}`}
			in={activePanel === keyValue}
			nodeRef={nodeRef}
			onExited={() => {
				if (panelNext) {
					onActivePanel(panelNext);
					setPanelNext(null);
				}
			}}
			role="tabpanel"
			tabIndex={tabIndex}
			timeout={
				panelNext || prefersReducedMotion ? 0 : {enter: 300, exit: 200}
			}
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
					<PanelResizer
						aria-controls={`${id}-tabpanel-${keyValue}`}
						onPanelWidthChange={onPanelWidthChange}
						panelWidth={panelWidth}
						panelWidthMax={panelWidthMax}
						panelWidthMin={panelWidthMin}
						position={position}
					/>
				)}
			</div>
		</CSSTransition>
	);
}
