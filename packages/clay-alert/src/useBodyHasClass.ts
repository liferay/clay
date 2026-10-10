/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {useEffect, useState} from 'react';

export function useBodyHasClass(className: string) {
	const [hasClass, setHasClass] = useState(() => bodyHasClass(className));

	useEffect(() => {
		setHasClass(bodyHasClass(className));

		const observer = new MutationObserver(() =>
			setHasClass(bodyHasClass(className))
		);

		observer.observe(document.body, {
			attributeFilter: ['class'],
			attributes: true,
		});

		return () => observer.disconnect();
	}, [className]);

	return hasClass;
}

function bodyHasClass(className: string) {
	return (
		typeof document !== 'undefined' &&
		document.body.classList.contains(className)
	);
}
