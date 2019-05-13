/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {SelectHTMLAttributes} from 'react';

export interface ISelectOption {
	label: string;
	selected?: boolean;
	value: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	/**
	 * Props to add to the outer most container.
	 */
	containerProps?: React.HTMLAttributes<HTMLDivElement>;

	/**
	 * Flag to indicate if the select is disabled or not.
	 */
	disabled?: boolean;

	/**
	 * Id attribute of the select.
	 */
	id?: string;

	/**
	 * Flag to display element `inline`.
	 */
	inline?: boolean;

	/**
	 * Label of the select.
	 */
	label: string;

	/**
	 * Flag to indicate if multiple options can be selected.
	 */
	multiple?: boolean;

	/**
	 * Name attribute of the select.
	 */
	name?: string;

	/**
	 * Options of the select.
	 */
	options: Array<ISelectOption>;
}

const ClaySelect: React.FunctionComponent<Props> = ({
	className,
	containerProps = {},
	disabled,
	id,
	inline,
	label,
	multiple,
	name,
	onChange,
	options,
	...otherProps
}) => {
	return (
		<div
			{...containerProps}
			className={classNames({
				[`${containerProps.className}`]: containerProps.className,
				'form-group': !inline,
				'form-group-item': inline,
			})}
		>
			{label && <label htmlFor={id}>{label}</label>}

			<select
				{...otherProps}
				aria-label={label}
				className={classNames('form-control', className)}
				disabled={disabled}
				id={id}
				multiple={multiple}
				name={name}
				onChange={onChange}
			>
				{options.map((option, index) => (
					<option
						key={index}
						selected={option.selected ? true : undefined}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default ClaySelect;
