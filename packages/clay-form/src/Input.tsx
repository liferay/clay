/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IGroupItemProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if `input-group-append` class should
	 * be applied
	 */
	append?: boolean;

	/**
	 * Flag to indicate if `input-group-prepend` class should
	 * be applied
	 */
	prepend?: boolean;

	/**
	 * Flag to indicate if `input-group-item-shrink` class should
	 * be applied
	 */
	shrink?: boolean;
}

const ClayInputGroupItem = React.forwardRef<HTMLDivElement, IGroupItemProps>(
	({append, children, className, prepend, shrink, ...otherProps}, ref) => (
		<div
			{...otherProps}
			className={classNames('input-group-item', className, {
				['input-group-append']: append,
				['input-group-item-shrink']: shrink,
				['input-group-prepend']: prepend,
			})}
			ref={ref}
		>
			{children}
		</div>
	)
);

interface IGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate if `input-group-sm` class should
	 * be applied
	 */
	small?: boolean;

	/**
	 * Flag to indicate if `input-group-stacked-sm-down` class
	 * should be applied.
	 */
	stacked?: boolean;
}

const ClayInputGroup = React.forwardRef<HTMLDivElement, IGroupProps>(
	({children, className, small, stacked, ...otherProps}, ref) => (
		<div
			{...otherProps}
			className={classNames('input-group', className, {
				['input-group-sm']: small,
				['input-group-stacked-sm-down']: stacked,
			})}
			ref={ref}
		>
			{children}
		</div>
	)
);

const ClayInputGroupText = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({children, className, ...otherProps}, ref) => (
	<div
		{...otherProps}
		className={classNames('input-group-text', className)}
		ref={ref}
	>
		{children}
	</div>
));

interface IGroupInsetProps
	extends React.HTMLAttributes<
		HTMLDivElement | HTMLSpanElement | HTMLLabelElement
	> {
	/**
	 * Flag to indicate if `input-group-inset-item-after` class
	 * should be applied.
	 */
	after?: boolean;

	/**
	 * Flag to indicate if `input-group-inset-item-before` class
	 * should be applied.
	 */
	before?: boolean;

	/**
	 * Name of container element
	 */
	tag?: 'div' | 'span' | 'label';
}

const ClayInputGroupInsetItem = React.forwardRef<
	HTMLDivElement | HTMLSpanElement | HTMLLabelElement,
	IGroupInsetProps
>(
	(
		{after, before, children, className, tag: Tag = 'div', ...otherProps},
		ref
	) => (
		<Tag
			{...otherProps}
			className={classNames('input-group-inset-item', className, {
				['input-group-inset-item-after']: after,
				['input-group-inset-item-before']: before,
			})}
			ref={ref as any} // Hack to get around TS inaccurately referring the ref type
		>
			{children}
		</Tag>
	)
);

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Input component to render. Can either be a string like 'input' or a component.
	 */
	component?: 'input' | React.ForwardRefExoticComponent<any>;

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

type TClayInput = React.ForwardRefExoticComponent<
	IProps & React.RefAttributes<HTMLInputElement>
> & {
	Group: typeof ClayInputGroup;
	GroupInsetItem: typeof ClayInputGroupInsetItem;
	GroupItem: typeof ClayInputGroupItem;
	GroupText: typeof ClayInputGroupText;
};

const ClayInput = React.forwardRef<HTMLInputElement, IProps>(
	(
		{
			className,
			component: Component = 'input',
			insetAfter,
			insetBefore,
			sizing,
			...otherProps
		},
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
) as TClayInput;

ClayInput.Group = ClayInputGroup;
ClayInput.GroupInsetItem = ClayInputGroupInsetItem;
ClayInput.GroupItem = ClayInputGroupItem;
ClayInput.GroupText = ClayInputGroupText;

export default ClayInput;
