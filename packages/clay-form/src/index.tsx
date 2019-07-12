/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import Checkbox from './Checkbox';
import Input from './Input';
import MultiSelect from './MultiSelect';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

const ClayForm: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> & {
	Checkbox: typeof Checkbox;
	Input: typeof Input;
	MultiSelect: typeof MultiSelect;
	Radio: typeof Radio;
	RadioGroup: typeof RadioGroup;
} = ({children}) => {
	return <>{children}</>;
};

ClayForm.Checkbox = Checkbox;
ClayForm.Input = Input;
ClayForm.MultiSelect = MultiSelect;
ClayForm.Radio = Radio;
ClayForm.RadioGroup = RadioGroup;

export {ClayInputWithAutocomplete} from './InputWithAutocomplete';

export default ClayForm;
