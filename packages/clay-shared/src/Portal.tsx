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

const createElement = (
	nodeName: string,
	attributes: Record<string, string>
) => {
	const element = document.createElement(nodeName);

	Object.keys(attributes).forEach((key) => {
		element.setAttribute(
			key === 'className' ? 'class' : key,
			attributes[key]
		);
	});

	return element;
};

interface IProps {
	children: React.ReactElement | Array<React.ReactElement>;

	/**
	 * Class to add to the root element
	 */
	className?: string;

	/**
	 * Ref of element to render portal into.
	 */
	containerRef?: React.RefObject<Element>;

	/**
	 * Id fof the root element
	 */
	id?: string;

	/**
	 * Ref of element to render nested portals into.
	 */
	subPortalRef?: React.RefObject<Element>;
}

export const ClayPortal: React.FunctionComponent<IProps> = ({
	children,
	containerRef,
	subPortalRef,
	...otherProps
}) => {
	const parentPortalRef = React.useContext(ClayPortalContext);

	const portalRef = React.useRef(
		typeof document !== 'undefined'
			? createElement('div', otherProps as Record<string, string>)
			: null
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
			if (portalRef.current) {
				if (typeof portalRef.current.remove === 'function') {
					portalRef.current.remove();
				} else if (elToMountTo) {
					elToMountTo.removeChild(portalRef.current);
				}
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
