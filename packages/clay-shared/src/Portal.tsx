/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

const ClayPortal: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> = ({children}) => {
	const portalRef = useRef(
		typeof document !== 'undefined' && document.createElement('div')
	);
	const elToMountTo = typeof document !== 'undefined' && document.body;

	useEffect(() => {
		if (elToMountTo && portalRef.current) {
			elToMountTo.appendChild(portalRef.current);
		}
		return () => {
			if (elToMountTo && portalRef.current) {
				elToMountTo.removeChild(portalRef.current);
			}
		};
	}, [elToMountTo]);

	if (portalRef.current) {
		return createPortal(children, portalRef.current);
	}

	return <>{children}</>;
};

export default ClayPortal;
