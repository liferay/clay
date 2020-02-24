/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {IRadioProps} from './Radio';
import {IToggleProps} from './Toggle';

interface IGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Takes either Radio or Toggle as a child.
	 */
	children: Array<
		React.ReactElement<IRadioProps> | React.ReactElement<IToggleProps>
	>;

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

const ClayRadioGroup: React.FunctionComponent<IGroupProps> = ({
	children,
	className,
	inline,
	name,
	onSelectedValueChange,
	selectedValue,
	...otherProps
}: IGroupProps) => {
	return (
		<div {...otherProps} className={classNames(className)}>
			{React.Children.map(
				children,
				(child: React.ReactElement<IToggleProps | IRadioProps>, i) => {
					return React.cloneElement(child, {
						...child.props,
						checked: selectedValue === child.props.value,
						inline,
						key: i,
						name,
						onChange: () =>
							onSelectedValueChange(child.props.value!),
						type: 'radio',
					});
				}
			)}
		</div>
	);
};

export default ClayRadioGroup;
