/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useCallback, useEffect, useState} from 'react';

export function useObservedMaxWidth(ref: React.RefObject<HTMLElement>) {
	const [maxWidth, setMaxWidth] = useState<number>(window.innerWidth / 2);

	const handleResize = useCallback(() => {
		if (ref.current) {
			setMaxWidth(
				parseFloat(window.getComputedStyle(ref.current).maxWidth)
			);
		}
	}, [ref]);

	useEffect(() => {
		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	return maxWidth;
}
