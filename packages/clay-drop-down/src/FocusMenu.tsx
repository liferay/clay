/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useEffect} from 'react';

type FocusMenuProps<T> = {
	children: T;
	condition: boolean;
	onRender: () => void;
};

export function FocusMenu<T>({
	children,
	condition,
	onRender,
}: FocusMenuProps<T>) {
	useEffect(() => {
		if (condition) {
			onRender();
		}
	}, [condition]);

	return children;
}
