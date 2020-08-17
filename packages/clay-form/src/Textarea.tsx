/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface ITextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	/**
	 * Textarea component to render. Can either be a string like 'textarea' or a component.
	 */
	component?: 'textarea' | React.ForwardRefExoticComponent<any>;

	/**
	 * Flag to indicate if `input-group-inset-after` class should be applied
	 */
	insetAfter?: boolean;

	/**
	 * Flag to indicate if `input-group-inset-before` class should be applied
	 */
	insetBefore?: boolean;

	/**
	 * Selects the height of the input.
	 */
	sizing?: 'lg' | 'sm';
}

const ClayTextarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
	(
		{
			className,
			component: Component = 'textarea',
			insetAfter,
			insetBefore,
			sizing,
			...otherProps
		}: ITextareaProps,
		ref
	) => (
		<Component
			{...otherProps}
			className={classNames('form-control', className, {
				[`form-control-${sizing}`]: sizing,
				['input-group-inset']: insetAfter || insetBefore,
				['input-group-inset-after']: insetAfter,
				['input-group-inset-before']: insetBefore,
			})}
			ref={ref}
		/>
	)
);

export default ClayTextarea;
