/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Ref, useImperativeHandle, useRef} from 'react';

export function useForwardRef<T = HTMLElement>(outRef: Ref<T>) {
	const ref = useRef<T>(null);

	useImperativeHandle(outRef, () => ref.current!, []);

	return ref;
}
