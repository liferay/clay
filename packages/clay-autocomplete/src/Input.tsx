/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayForm, {InputProps} from '@clayui/form';
import Context from './Context';
import React, {useContext} from 'react';

export interface Props
	extends React.InputHTMLAttributes<HTMLInputElement>,
		InputProps {}

const Input = React.forwardRef<HTMLInputElement, Props>(
	({className, ...othersProps}, ref) => {
		const {loading} = useContext(Context);

		return (
			<ClayForm.Input
				{...othersProps}
				className={classNames(className, {
					'input-group-inset input-group-inset-after': loading,
				})}
				ref={ref}
			/>
		);
	}
);

export default Input;
