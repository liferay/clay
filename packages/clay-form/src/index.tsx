/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import Input, {Props as InputProps} from './Input';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ClayForm: React.FunctionComponent<Props> & {
	Input: typeof Input;
} = ({children}) => {
	return <>{children}</>;
};

ClayForm.Input = Input;

export {InputProps};
export default ClayForm;
