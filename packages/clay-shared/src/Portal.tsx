/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {createPortal} from 'react-dom';

const ClayPortalContext = React.createContext<React.RefObject<Element | null> | null>(
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
	const parentPortalRef = React.useContext(ClayPortalContext);
	const portalRef = React.useRef(
		typeof document !== 'undefined' ? document.createElement('div') : null
	);

	React.useEffect(() => {
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
