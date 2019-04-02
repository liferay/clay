/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	inline?: boolean;
	label?: React.ReactText;
	value: React.ReactText;
}

type RadioType = React.FunctionComponent<RadioProps>;

const Radio: RadioType = ({
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

interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactElement<RadioProps>[];
	inline?: boolean;
	name?: string;
	onSelectedValueChange: (val: React.ReactText) => void;
	selectedValue?: React.ReactText;
}

const ClayRadioGroup: React.FunctionComponent<GroupProps> & {
	Radio: RadioType;
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
			{children.map((child, i) => {
				return React.cloneElement(child, {
					...child.props,
					checked: selectedValue === child.props.value,
					inline,
					key: i,
					name,
					onChange: () => onSelectedValueChange(child.props.value),
				});
			})}
		</div>
	);
};

ClayRadioGroup.Radio = Radio;

export default ClayRadioGroup;
