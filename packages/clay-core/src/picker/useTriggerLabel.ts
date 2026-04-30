/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useEffect, useRef} from 'react';

export function useTriggerLabel(
	selectedKey?: React.Key,
	selectedItem?: {value: string}
): string | undefined {
	const cachedKeyRef = useRef<React.Key | undefined>(undefined);
	const cachedValueRef = useRef<string | undefined>(undefined);

	useEffect(() => {
		if (selectedKey !== undefined && selectedItem) {
			cachedKeyRef.current = selectedKey;
			cachedValueRef.current = selectedItem.value;
		}
	}, [selectedKey, selectedItem?.value]);

	if (selectedKey === undefined) {
		return undefined;
	}

	if (selectedItem?.value !== undefined) {
		return selectedItem.value;
	}

	if (cachedKeyRef.current === selectedKey) {
		return cachedValueRef.current;
	}

	return undefined;
}
