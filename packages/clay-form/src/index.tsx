/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import Input from './Input';
import MultiSelect from './MultiSelect';

const ClayForm: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> & {
	Input: typeof Input;
	MultiSelect: typeof MultiSelect;
} = ({children}) => {
	return <>{children}</>;
};

ClayForm.Input = Input;
ClayForm.MultiSelect = MultiSelect;

export default ClayForm;
