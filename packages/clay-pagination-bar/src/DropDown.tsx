/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayDropDownWithItems} from '@clayui/drop-down';
import classNames from 'classnames';
import React from 'react';

/**
 * @deprecated since v3.84.0 - use `Picker` component instead.
 */

/**
 * @deprecated since v3.84.0 - use `Picker` component instead.
 */
export function DropDown({
	className,
	messages = 'Items Per Page',
	trigger,
	...otherProps
}: React.ComponentProps<typeof ClayDropDownWithItems>) {
	return (
		<ClayDropDownWithItems
			className={classNames(className, 'pagination-items-per-page')}
			trigger={React.cloneElement(trigger, {
				'aria-label': messages,
			})}
			{...otherProps}
		/>
	);
}
