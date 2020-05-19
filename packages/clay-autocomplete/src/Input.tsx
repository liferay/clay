/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import React, {useContext} from 'react';

import Context from './Context';

export interface IProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		React.ComponentProps<typeof ClayInput> {}

const ClayAutocompleteInput = React.forwardRef<HTMLInputElement, IProps>(
	(props, ref) => {
		const {loading} = useContext(Context);

		return <ClayInput {...props} insetAfter={loading} ref={ref} />;
	}
);

export default ClayAutocompleteInput;
