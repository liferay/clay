/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
		} else {
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
