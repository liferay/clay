/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Props for the outer most container element.
	 */
	containerProps?: React.HTMLAttributes<HTMLDivElement>;

	/**
	 * Flag to indicate if radio elements should display inline.
	 */
	inline?: boolean;

	/**
	 * Text to describe for radio element.
	 */
	label?: React.ReactText;

	/**
	 * Value provided if element is selected.
	 */
	value: React.ReactText;
}

const Radio: React.FunctionComponent<IRadioProps> = ({
	checked,
	children,
	className,
	containerProps = {className: ''},
	inline,
	label,
	...otherProps
}) => {
	return (
		<div
			{...containerProps}
			className={classNames(
				'custom-control custom-radio',
				containerProps.className,
				{
					'custom-control-inline': inline,
				}
			)}
		>
			<label>
				<input
					{...otherProps}
					checked={checked}
					className={classNames('custom-control-input', className)}
					role="radio"
					type="radio"
				/>

				<span className="custom-control-label">
					{label && (
						<span className="custom-control-label-text">
							{label}
						</span>
					)}
				</span>

				{children}
			</label>
		</div>
	);
};

interface IGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactElement<IRadioProps>[];

	/**
	 * Flag to indicate if radio elements should display inline.
	 */
	inline?: boolean;

	/**
	 * Form element `name` that is applied to each radio element.
	 */
	name?: string;

	/**
	 * Callback function for whenever a radio element is selected.
	 */
	onSelectedValueChange: (val: React.ReactText) => void;

	/**
	 * The value that corresponds to the selected radio element. Leave
	 * undefined if no option is selected.
	 */
	selectedValue?: React.ReactText;
}

const ClayRadioGroup: React.FunctionComponent<IGroupProps> & {
	Radio: typeof Radio;
} = ({
	children,
	className,
	inline,
	name,
	onSelectedValueChange,
	selectedValue,
	...otherProps
}) => {
	return (
		<div {...otherProps} className={classNames(className)}>
			{React.Children.map(
				children,
				(child: React.ReactElement<IRadioProps>, i) => {
					return React.cloneElement(child, {
						...child.props,
						checked: selectedValue === child.props.value,
						inline,
						key: i,
						name,
						onChange: () =>
							onSelectedValueChange(child.props.value),
					});
				}
			)}
		</div>
	);
};

ClayRadioGroup.Radio = Radio;

export default ClayRadioGroup;
