/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import {createPortal} from 'react-dom';

const Portal = ({children}: {children: React.ReactNode}) => {
	const portalRef = React.useRef(document.createElement('div'));
	const elToMountTo = document && document.body;

	React.useEffect(() => {
		elToMountTo.appendChild(portalRef.current);
		return () => {
			elToMountTo.removeChild(portalRef.current);
		};
	}, [elToMountTo]);

	return createPortal(children, portalRef.current);
};

export default Portal;
