/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import {InternalDispatch, useControlledState} from '@clayui/shared';
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

export const GroupItem = React.forwardRef<HTMLDivElement, IGroupItemProps>(
	(
		{
			append,
			children,
			className,
			prepend,
			shrink,
			...otherProps
		}: IGroupItemProps,
		ref
	) => (
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

GroupItem.displayName = 'ClayInputGroupItem';

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

export const Group = React.forwardRef<HTMLDivElement, IGroupProps>(
	(
		{children, className, small, stacked, ...otherProps}: IGroupProps,
		ref
	) => (
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

Group.displayName = 'ClayInputGroup';

export const GroupText = React.forwardRef<
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

GroupText.displayName = 'ClayInputGroupText';

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

const GroupInsetItem = React.forwardRef<
	HTMLDivElement | HTMLSpanElement | HTMLLabelElement,
	IGroupInsetProps
>(
	(
		{
			after,
			before,
			children,
			className,
			tag: Tag = 'div',
			...otherProps
		}: IGroupInsetProps,
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

GroupInsetItem.displayName = 'ClayInputGroupInsetItem';

interface IInlineTextProps
	extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
	/**
	 * The initial value of the input (uncontrolled).
	 */
	defaultInputValue?: string;

	/**
	 * The id of the component
	 */
	id?: string;

	/**
	 * The current value of the input (controlled).
	 */
	inputValue?: string;

	/**
	 * Callback called when input value changes (controlled).
	 */
	onInputValueChange?: InternalDispatch<string>;

	/**
	 * Text that hints at the expected data type to be entered.
	 */
	placeholder?: string;

	/**
	 * A flag that sets the component as noneditable.
	 */
	readOnly?: boolean;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

const InlineText = React.forwardRef<HTMLDivElement, IInlineTextProps>(
	(
		{
			children,
			className,
			defaultValue,
			onValueChange,
			placeholder,
			spritemap,
			value: externalValue,
			...otherProps
		}: IInlineTextProps,
		ref: React.Ref<HTMLDivElement>
	) => {
		const inputRef = React.useRef<HTMLSpanElement>(null);

		const [value = '', setValue] = useControlledState({
			defaultName: 'defaultValue',
			defaultValue: defaultValue,
			handleName: 'onValueChange',
			name: 'value',
			onChange: onValueChange,
			value: externalValue,
		});

		const initialValue = value;

		return (
			<div
				className="form-control-fit-content inline-text-input"
				ref={ref}
			>
				<div className={classNames('form-control', className)}>
					<Input
						className="form-control-hidden"
						onFocus={(event) => {
							inputRef.current?.focus();
						}}
						type="text"
						value={value}
						{...otherProps}
					/>
					<span
						className="form-control-inset"
						// @ts-ignore
						contentEditable={
							otherProps.readonly ? false : 'plaintext-only'
						}
						onBlur={(event) => {
							if (value.trim() === '') {
								const input = event.target as HTMLElement;

								input.innerHTML = '';
							}
						}}
						onInput={(event) => {
							const input = event.target as HTMLElement;

							setValue(input.innerText);
						}}
						placeholder={placeholder}
						ref={inputRef}
						role="textbox"
						suppressContentEditableWarning={true}
					>
						{defaultValue}
					</span>
					<span className="form-control-indicator form-control-item">
						<ClayIcon spritemap={spritemap} symbol="pencil" />
					</span>
					{children}
				</div>
			</div>
		);
	}
);

InlineText.displayName = 'ClayInlineText';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Input component to render. Can either be a string like 'input' or 'textarea' or a component.
	 */
	component?: 'input' | 'textarea' | React.ForwardRefExoticComponent<any>;

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
	sizing?: 'lg' | 'regular' | 'sm';
}

interface IForwardRef<T, P = {}>
	extends React.ForwardRefExoticComponent<P & React.RefAttributes<T>> {
	Group: typeof Group;
	GroupInsetItem: typeof GroupInsetItem;
	GroupItem: typeof GroupItem;
	GroupText: typeof GroupText;
	InlineText: typeof InlineText;
}

function forwardRef<T, P = {}>(component: React.RefForwardingComponent<T, P>) {
	return React.forwardRef<T, P>(component) as IForwardRef<T, P>;
}

export const Input = forwardRef<HTMLInputElement, IProps>(
	(
		{
			className,
			component: Component = 'input',
			insetAfter,
			insetBefore,
			sizing = 'regular',
			type = 'text',
			...otherProps
		}: IProps,
		ref
	) => (
		<Component
			{...otherProps}
			className={classNames('form-control', className, {
				[`form-control-${sizing}`]: sizing && sizing !== 'regular',
				['input-group-inset']: insetAfter || insetBefore,
				['input-group-inset-after']: insetAfter,
				['input-group-inset-before']: insetBefore,
			})}
			ref={ref}
			type={type}
		/>
	)
);

Input.displayName = 'ClayInput';
Input.Group = Group;
Input.GroupInsetItem = GroupInsetItem;
Input.GroupItem = GroupItem;
Input.GroupText = GroupText;
Input.InlineText = InlineText;

export default Input;
