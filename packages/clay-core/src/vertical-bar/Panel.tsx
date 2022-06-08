/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {useContext, useEffect, useRef} from 'react';
import {CSSTransition} from 'react-transition-group';

import {ContentContext} from './Content';
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
	children: React.ReactNode;

	/**
	 * Internal property.
	 * @ignore
	 */
	keyValue?: React.Key;
};

export function Panel({children, keyValue}: Props) {
	const {activePanel} = useContext(VerticalBarContext);
	const {displayType} = useContext(ContentContext);

	const isFirst = useIsFirstRender();

	const previousActivePanelRef = useRef<React.Key | undefined>(undefined);

	useEffect(() => {
		previousActivePanelRef.current = activePanel;
	}, [activePanel]);

	return (
		<CSSTransition
			className={classNames('sidebar', {
				'c-slideout-show': activePanel === keyValue && isFirst,
				'sidebar-dark-l2': displayType === 'dark',
				'sidebar-light': displayType === 'light',
			})}
			classNames={{
				enter: 'c-slideout-transition c-slideout-transition-in',
				enterActive: 'c-slideout-show',
				enterDone: 'c-slideout-show',
				exit: 'c-slideout-transition c-slideout-transition-out',
			}}
			in={activePanel === keyValue}
			timeout={
				(activePanel !== undefined &&
					previousActivePanelRef.current === undefined) ||
				(activePanel === undefined &&
					previousActivePanelRef.current !== undefined)
					? {enter: 300, exit: 200}
					: 0
			}
			unmountOnExit
		>
			<div>{children}</div>
		</CSSTransition>
	);
}
