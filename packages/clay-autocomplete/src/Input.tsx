/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
