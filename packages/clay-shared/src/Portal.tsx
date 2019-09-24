/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {createPortal} from 'react-dom';
import React, {createContext, useContext, useEffect, useRef} from 'react';

const ClayPortalContext = createContext<React.RefObject<Element | null> | null>(
	null
);

ClayPortalContext.displayName = 'ClayPortalContext';

export const ClayPortal: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement> & {
		/**
		 * Ref of element to render portal into.
		 */
		containerRef?: React.RefObject<Element>;

		/**
		 * Ref of element to render nested portals into.
		 */
		subPortalRef?: React.RefObject<Element>;
	}
> = ({children, containerRef, subPortalRef}) => {
	const parentPortalRef = useContext(ClayPortalContext);
	const portalRef = useRef(
		typeof document !== 'undefined' ? document.createElement('div') : null
	);

	useEffect(() => {
		const closestParent =
			parentPortalRef && parentPortalRef.current
				? parentPortalRef.current
				: document.body;

		const elToMountTo =
			containerRef && containerRef.current
				? containerRef.current
				: closestParent;

		if (elToMountTo && portalRef.current) {
			elToMountTo.appendChild(portalRef.current);
		}
		return () => {
			if (elToMountTo && portalRef.current) {
				elToMountTo.removeChild(portalRef.current);
			}
		};
	}, [containerRef, parentPortalRef]);

	const content = (
		<ClayPortalContext.Provider
			value={subPortalRef ? subPortalRef : portalRef}
		>
			{children}
		</ClayPortalContext.Provider>
	);

	return portalRef.current
		? createPortal(content, portalRef.current)
		: content;
};
