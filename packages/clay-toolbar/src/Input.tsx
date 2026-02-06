/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayInput} from '@clayui/form';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.ComponentProps<typeof ClayInput> {}
export function Input({className, ...otherProps}: IProps) {
	return (
		<ClayInput.Group>
			<ClayInput.GroupItem>
				<ClayInput
					className={classNames(className, 'form-control')}
					type="text"
					{...otherProps}
				/>
			</ClayInput.GroupItem>
		</ClayInput.Group>
	);
}

Input.displayName = 'ClayToolbarInput';
