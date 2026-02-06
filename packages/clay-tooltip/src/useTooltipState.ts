/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useCallback, useRef, useState} from 'react';

type Props = {
	delay?: number;
};

export function useTooltipState({delay = 600}: Props) {
	const [isOpen, setOpen] = useState(false);

	const timeoutIdRef = useRef<any>();

	const open = useCallback((immediate: boolean, customDelay?: number) => {
		if (!immediate) {
			clearTimeout(timeoutIdRef.current);

			timeoutIdRef.current = setTimeout(
				() => {
					setOpen(true);
				},
				customDelay !== undefined ? customDelay : delay
			);
		}
		else {
			setOpen(true);
		}
	}, []);

	const close = useCallback(() => {
		clearTimeout(timeoutIdRef.current);

		setOpen(false);
	}, []);

	return {
		close,
		isOpen,
		open,
	};
}
