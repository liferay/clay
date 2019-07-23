/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Context from './Context';
import React, {useContext} from 'react';
import {ClayInput} from '@clayui/form';

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
