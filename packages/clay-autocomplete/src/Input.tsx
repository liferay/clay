/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayInput} from '@clayui/form';
import React from 'react';

import {LegacyContext} from './Context';

export interface IProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		React.ComponentProps<typeof ClayInput> {}

const ClayAutocompleteInput = React.forwardRef<HTMLInputElement, IProps>(
	(props, ref) => {
		const {loading} = React.useContext(LegacyContext);

		return <ClayInput {...props} insetAfter={loading} ref={ref} />;
	}
);

ClayAutocompleteInput.displayName = 'ClayAutocompleteInput';

export default ClayAutocompleteInput;
