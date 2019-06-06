/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Input component to render. Can either be a string like 'input' or a component.
	 */
	component?: 'input' | React.ForwardRefExoticComponent<any>;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(
	({className, component: Component = 'input', ...otherProps}, ref) => (
		<Component
			{...otherProps}
			className={classNames('form-control', className)}
			ref={ref}
		/>
	)
);

export default Input;
